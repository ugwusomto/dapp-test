<script>
import Error from '../notifications/error.svelte';
import { HandleModal } from '$lib/modal';
import Modal from './Modal.svelte';
import NFTModalUI from './NFTModalUI.svelte';
//my imports
import { onMount } from 'svelte';
import PlotAbi from '../../abi/plot.json';
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

let plotContract, paymentTokenContract, allowances, tx;

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
			spenderAddress: Globals.plotAddress,
			amountInWei: tokenToWei('1000000000', await paymentTokenContract.methods.decimals().call()),
			tx: { ...tx, name: 'plot' }
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
		if (parseFloat(amountToMint * tx.priceForOnePlot) > tx.busdBalance) {
			updateTransactionInfo({ ...tx, modalId: 'insufficient-fund' });
			return;
		}
		mintNFT({ nftContract: plotContract, amountToMint, tx: { ...tx, name: 'plot' } });
	} catch (error) {
		console.log(error.message);
	}
};

onMount(async () => {
	try {
		plotContract = new $web3.eth.Contract(PlotAbi, Globals.plotAddress);
		paymentTokenContract = new $web3.eth.Contract(BusdAbi, Globals.busdAddress);
		const plotData = await plotContract.methods._currentBatch().call();
		allowances = weiToToken(
			await paymentTokenContract.methods.allowance($selectedAccount, Globals.plotAddress).call()
		);
		const balance = weiToToken(
			await paymentTokenContract.methods.balanceOf($selectedAccount).call()
		);
		updateTransactionInfo({
			...tx,
			ownedPlotNfts: (await plotContract.methods.balanceOf($selectedAccount).call()).toString(),
			busdBalance: balance,
			plotBusdAllowance: parseInt(allowances),
			plotRemaining: parseInt(plotData.quantity.toString()),
			priceForOnePlot: parseInt(weiToToken(plotData.price.toString()))
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
	nftName="{'Plot'}"
	nftAbbrv="{'pATL'}"
	nftPriceForOne="{tx.priceForOnePlot}"
	remaining="{tx.plotRemaining}"
	allowance="{tx.plotBusdAllowance}" />
