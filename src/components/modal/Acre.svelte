<script>
import Error from '../notifications/error.svelte';
import { HandleModal } from '$lib/modal';
import Modal from './Modal.svelte';
import NFTModalUI from './NFTModalUI.svelte';
//my imports
import { onMount } from 'svelte';
import AcreAbi from '../../abi/acre.json';
import BusdAbi from '../../abi/busd.json';
import { Globals } from '../../lib/config';
import {
	approvePaymentToken,
	mintNFT,
	tokenToWei,
	weiToToken,
	txInfo,
	updateTransactionInfo,
	formatCurrency
} from '../../lib/connector';
import { isEmpty } from '../../lib/utils';
import { selectedAccount, web3, chainData } from 'svelte-web3';
let acreContract, paymentTokenContract, allowances, tx;
txInfo.subscribe((value) => {
	tx = value;
});
console.log(tx);
const approve = async () => {
	try {
		if (!$chainData.chainId) {
			console.log('dsds');
			updateTransactionInfo({ ...tx, modalId: 'wallet-not-connected' });
			return;
		}
		if ($chainData.chainId != Globals.chainId) {
			updateTransactionInfo({ ...tx, modalId: 'chain-info' });
			return;
		}
		approvePaymentToken({
			tokenContract: paymentTokenContract,
			spenderAddress: Globals.acresAddress,
			amountInWei: tokenToWei('1000000000', await paymentTokenContract.methods.decimals().call()),
			tx: { ...tx, name: 'acre' }
		});
	} catch (error) {
		console.log(error.message);
	}
};

const mint = ({ amountToMint }) => {
	try {
		if (!$chainData.chainId) {
			updateTransactionInfo({ ...tx, modalId: 'wallet-not-connected' });
			return;
		}
		if ($chainData.chainId != Globals.chainId) {
			updateTransactionInfo({ ...tx, modalId: 'chain-info' });
			return;
		}
		//check for busd balance
		if (parseFloat(amountToMint * tx.priceForOneAcre) > tx.busdBalance) {
			updateTransactionInfo({ ...tx, modalId: 'insufficient-fund' });
			return;
		}
		mintNFT({ nftContract: acreContract, amountToMint, tx: { ...tx, name: 'acre' } });
	} catch (error) {
		console.log(error.message);
	}
};
onMount(async () => {
	try {
		acreContract = new $web3.eth.Contract(AcreAbi, Globals.acresAddress);
		paymentTokenContract = new $web3.eth.Contract(BusdAbi, Globals.busdAddress);
		const acreData = await acreContract.methods._currentBatch().call();
		allowances = weiToToken(
			await paymentTokenContract.methods.allowance($selectedAccount, Globals.acresAddress).call()
		);
		const balance = weiToToken(
			await paymentTokenContract.methods.balanceOf($selectedAccount).call()
		);
		updateTransactionInfo({
			...tx,
			ownedAcreNfts: (await acreContract.methods.balanceOf($selectedAccount).call()).toString(),
			busdBalance: balance,
			acreBusdAllowance: parseInt(allowances),
			acresRemaining: parseInt(acreData.quantity.toString()),
			priceForOneAcre: parseInt(weiToToken(acreData.price.toString()))
		});
	} catch (error) {
		console.log(error.message);
	}
});
</script>

<NFTModalUI
	tx="{tx}"
	formatCurrency="{formatCurrency}"
	approve="{approve}"
	mint="{mint}"
	updateTransactionInfo="{updateTransactionInfo}"
	nftName="{'Acre'}"
	nftAbbrv="{'aATL'}"
	nftPriceForOne="{tx.priceForOneAcre}"
	remaining="{tx.acresRemaining}"
	allowance="{tx.acreBusdAllowance}" />
