<style>
.intro-wallet {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 600;
	font-size: 30.7225px;
	line-height: 41px;
	/* or 133% */
	text-align: center;
	color: #ffffff;
}

.wallet-container {
	display: flex;
	border-radius: 6.23608px;
	min-height: 50px;
	width: 90%;
	/* border: 1px solid #fff; */
	padding: 10px;
	align-items: center;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
	background: #252525;
	cursor: pointer;
	margin: auto;
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
	width: 2.5rem;
	height: 2.5rem;
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
	.intro-wallet {
		font-weight: 300;
		font-size: 20px;
		line-height: 41px;
		/* border: 1px solid #fff; */
	}
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

	.wallet-name {
		font-weight: 300;
		font-size: 16px;
	}
}
</style>

<script>
	import { WalletConnect, MetaMaskConnect } from '../../lib/connector';
	import { Globals } from '../../lib/config';
</script>

<div class="flex flex-column gap gap-container">
	<div class="intro-wallet light-paper">
		<a href={Globals.lightPaper} target="_blank">LITE PAPER</a>
	</div>
	<div class="intro-wallet">Connect your wallet</div>
	<div class="wallet-container flex" on:click={MetaMaskConnect}>
		<div class="wallet-logo">
			<img src="/wallets/meta.png" alt="" srcset="" />
		</div>
		<div class="flex flex-column">
			<div class="wallet-name">Meta mask</div>
			<div class="wallet-breif">Use browser extension</div>
		</div>
	</div>

	<div class="wallet-container flex" on:click="{WalletConnect}">
		<div class="wallet-logo">
			<img src="/wallets/walletconnect.png" alt="" srcset="" />
		</div>
		<div class="flex flex-column">
			<div class="wallet-name">Wallet Connect</div>
			<div class="wallet-breif">Connect external wallets</div>
		</div>
	</div>
</div>
