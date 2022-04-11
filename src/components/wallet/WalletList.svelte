<style>
.wallet-container {
	border-radius: 6.23608px;
	min-height: 50px;
	width: 100%;
	/* border: 1px solid #fff; */
	padding: 12.4722px 24.9443px;
	align-items: center;
	flex-wrap: wrap;
	flex-direction: column;
}

.wallet-container.section2 {
	/* background: #252525; */
	border-bottom: 0.1px solid #fff;
	border-radius: 0px;
}

.wallet-card {
	background: #252525;
	width: 100%;
	display: flex;
	margin: 5px;
	align-items: center;
	padding: 5px 10px;
	border-radius: 10px;
	text-align: left;
	color: #fff;
	justify-content: space-between;
}

.wallet-card .flex-column {
	/* border: 1px solid #fff; */
	width: 80%;
}

.wallet-card .wallet-name {
	display: flex;
	align-items: center;
}

.wallet-card .wallet-name .big {
	font-size: 30px;
	margin-right: 5px;
}
.wallet-card .wallet-name .small {
	font-size: 10px;
}

.wallet-container h3 {
	width: 100%;
	text-align: left;
	/* border: 2px solid #fff; */
	padding: 5px;
	padding-top: 15px;
	color: #fff;
}
.wallet-name {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 900;
	font-size: 17px;
	line-height: 21px;
	color: #ffffff;
}

.wallet-breif {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	text-align: center;
	color: #bebebe;
}

.wallet-logo img {
	width: 2rem;
	height: 2rem;
}

.light-paper {
	display: none;
	text-align: center;
	font-size: 14px;
	margin-bottom: 20px;
}

.light-paper a {
	color: #fff;
	padding-bottom: 10px;
	border-bottom: 0.1px solid #fff;
}

@media (min-width: 250px) and (max-width: 768px) {
	.gap-container {
		width: 98%;
		/* border: 1px solid #fff; */
	}

	.light-paper {
		display: block;
	}
	.wallet-container {
		/* border: 0.1px solid #fff; */
		padding: 2px;
	}

	.wallet-card {
		margin: 5px 0px;
	}
	.wallet-card .wallet-name .big {
		font-size: 30px;
		margin-right: 5px;
		font-weight: 300;
	}
	.wallet-card .wallet-name .small {
		font-size: 10px;
		font-weight: 300;
	}

	.wallet-container h3 {
		font-size: 16px;
	}
	.wallet-name {
		font-weight: 300;
		font-size: 16px;
	}
}
</style>

<script>
import { connected, selectedAccount, web3 } from 'svelte-web3';
import { txInfo, updateTransactionInfo, disconnectWallet, weiToToken } from '../../lib/connector';
import { onMount } from 'svelte';
import BusdAbi from '../../abi/busd.json';
import acreAbi from '../../abi/acre.json';
import PlotAbi from '../../abi/plot.json';
import YardAbi from '../../abi/yard.json';
import { Globals } from '../../lib/config';
import { isEmpty, truncateString } from '../../lib/utils.js';

let tx;
txInfo.subscribe((value) => {
	tx = value;
});

onMount(async () => {
	try {
		const paymentTokenContract = new $web3.eth.Contract(BusdAbi, Globals.busdAddress);
		const acreContract = new $web3.eth.Contract(acreAbi, Globals.acresAddress);
		const plotContract = new $web3.eth.Contract(PlotAbi, Globals.plotAddress);
		const yardContract = new $web3.eth.Contract(YardAbi, Globals.yardAddress);

		console.log(await paymentTokenContract.methods.balanceOf($selectedAccount).call());

		const balance = weiToToken(
			await paymentTokenContract.methods.balanceOf($selectedAccount).call()
		);
		updateTransactionInfo({
			...tx,
			busdBalance: balance,
			ownedAcreNfts: (await acreContract.methods.balanceOf($selectedAccount).call()).toString(),
			ownedPlotNfts: (await plotContract.methods.balanceOf($selectedAccount).call()).toString(),
			ownedYardNfts: (await yardContract.methods.balanceOf($selectedAccount).call()).toString()
		});
		console.log('mounted');
	} catch (error) {
		console.log(error.message);
	}
});
</script>

<div class="flex flex-column gap gap-container">
	{#if $connected}
		<div class="intro-wallet light-paper">
			<a href="{Globals.lightPaper}" target="_blank">LITE PAPER</a>
		</div>
		<div class="sep-line"></div>
		<div class="wallet-container flex section2">
			<div class="wallet-addr">
				<img
					src="/assets/download.png"
					width="25px"
					height="25px"
					alt=""
					style="border-radius:50%;margin-right:4px;" />
				<span class="wallet-address">{truncateString($selectedAccount, 15)}</span>
			</div>

			<div class="sep-line"></div>
			<div class="wallet-card">
				<div class="wallet-logo">
					<img src="/assets/busd.png" alt="" srcset="" />
				</div>
				<div class="flex flex-column">
					<div class="wallet-name">BUSD Balance</div>
					<div class="wallet-breif">{tx.busdBalance}</div>
				</div>
			</div>

			<h3>LAND NFT BALANCE</h3>
			<div class="wallet-card">
				<div class="wallet-logo">
					<img src="/assets/wallet/Acre.png" alt="" srcset="" />
				</div>
				<div class="flex flex-column">
					<div class="wallet-name">
						<span class="big">{tx.ownedAcreNfts}</span> <span class="small">aATL</span>
					</div>
				</div>
			</div>

			<div class="wallet-card">
				<div class="wallet-logo">
					<img src="/assets/wallet/Plot.png" alt="" srcset="" />
				</div>
				<div class="flex flex-column">
					<div class="wallet-name">
						<span class="big">{tx.ownedPlotNfts}</span> <span class="small">pATL</span>
					</div>
				</div>
			</div>
			<div class="wallet-card">
				<div class="wallet-logo">
					<img src="/assets/wallet/yard.png" alt="" srcset="" />
				</div>
				<div class="flex flex-column">
					<div class="wallet-name">
						<span class="big">{tx.ownedYardNfts}</span> <span class="small">yATL</span>
					</div>
				</div>
			</div>
		</div>
		<a
			style="display:flex;text-align:center;color:#fff;font-size:16px;justify-content:center;"
			href="#"
			on:click="{() => {
				disconnectWallet();
			}}">
			<img src="/assets/log-out.svg" width="20px" style="margin-right:3px;" alt="" />
			<span>Disconnect Wallet</span></a>
	{/if}
</div>
