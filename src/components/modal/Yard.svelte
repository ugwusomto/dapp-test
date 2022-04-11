<script>
import Error from '../notifications/error.svelte';
import { HandleModal } from '$lib/modal';
import Modal from './Modal.svelte';
import NFTModalUI from './NFTModalUI.svelte';
//my imports
import { onMount } from 'svelte';
import YardAbi from '../../abi/yard.json';
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
let yardContract, paymentTokenContract, allowances, tx;
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
			spenderAddress: Globals.yardAddress,
			amountInWei: tokenToWei('1000000000', await paymentTokenContract.methods.decimals().call()),
			tx: { ...tx, name: 'yard' }
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
		if (parseFloat(amountToMint * tx.priceForOneYard) > tx.busdBalance) {
			updateTransactionInfo({ ...tx, modalId: 'insufficient-fund' });
			return;
		}
		mintNFT({ nftContract: yardContract, amountToMint, tx: { ...tx, name: 'yard' } });
	} catch (error) {
		console.log(error.message);
	}
};
onMount(async () => {
	try {
		yardContract = new $web3.eth.Contract(YardAbi, Globals.yardAddress);
		paymentTokenContract = new $web3.eth.Contract(BusdAbi, Globals.busdAddress);
		const yardData = await yardContract.methods._currentBatch().call();
		allowances = weiToToken(
			await paymentTokenContract.methods.allowance($selectedAccount, Globals.yardAddress).call()
		);
		const balance = weiToToken(
			await paymentTokenContract.methods.balanceOf($selectedAccount).call()
		);
		updateTransactionInfo({
			...tx,
			ownedYardNfts: (await yardContract.methods.balanceOf($selectedAccount).call()).toString(),
			busdBalance: balance,
			yardBusdAllowance: parseInt(allowances),
			yardRemaining: parseInt(yardData.quantity.toString()),
			priceForOneYard: parseInt(weiToToken(yardData.price.toString()))
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
	nftName="{'Yard'}"
	nftAbbrv="{'yATL'}"
	nftPriceForOne="{tx.priceForOneYard}"
	remaining="{tx.yardRemaining}"
	allowance="{tx.yardBusdAllowance}" />
