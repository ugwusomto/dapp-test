<style>
@media only screen and (max-width: 768px) {
	.light-paper {
		display: none;
	}
}

@media only screen and (max-width: 768px) {
	.nav-burger {
		display: flex !important;
		justify-content: flex-end !important;
	}
}
.nav-burger i {
	font-weight: lighter;
	font-size: xx-large;
	color: white !important;
}

.laide-nav {
	top: 0;
	height: 2.5rem;
	width: 100%;
	background: rgba(22, 25, 31, 0.9);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2.75rem;
	padding-left: 1.75rem;
	padding-right: 1.75rem;
	position: fixed;
	z-index: 5000;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
.section-2 {
	/* border: 2px solid #fff; */
	width: 25%;
	display: flex;
	padding: 10px;
	align-items: center;
	justify-content: space-around;
}

.section-2 a,
.wallet-address {
	color: #fff;
	transition: all 1s;
}

.section-2 a:hover,
.wallet-address:hover {
	color: #d4ad56;
}

.btn-shell:hover {
	cursor: pointer;
}

.mobile-nav {
	position: fixed;
	top: 1.5%;
	width: 90%;
	height: 164px;
	background: #15151e;
	border-radius: 2px;
	z-index: 5;
	left: 5%;
	padding: 1rem 1rem 1rem 1rem;
	display: none;
}

.mobile-nav-close {
	position: absolute;
	top: 0;
	right: 0;
}
.mobile-nav-close i {
	font-size: xx-large;
	color: #c2c2c2;
	background-color: black;
	clip-path: circle();
}

@media (min-width: 250px) and (max-width: 768px) {
	.laide-nav {
		background-color: #16191f;
		z-index: 5000;
	}

	.section-2 {
		width: 60%;
		display: inline-block;
		text-align: right;
	}
}
</style>

<script>
import Modal from '../components/modal/Modal.svelte';
import { HandleModal } from '$lib/modal';
import WalletList from '../components/wallet/WalletList.svelte';
import ConnectList from '../components/wallet/ConnectList.svelte';
import { tick } from 'svelte';
import {
	WalletConnect,
	MetaMaskConnect,
	disconnectWallet,
	txInfo,
	updateTransactionInfo
} from '../lib/connector';

import { onMount } from 'svelte';
import { isEmpty, truncateString } from '../lib/utils.js';
import { connected, chainData, selectedAccount } from 'svelte-web3';
import { Globals } from '../lib/config';
const HandleNav = () => {
	const nav = document.getElementById('mobile-nav');
	console.log(nav);
	if (nav.classList.contains('nav-active')) {
		nav.classList.remove('nav-active');
		return;
	}
	nav.classList.add('nav-active');
};

let tx, activateWalletModal;

txInfo.subscribe((value) => {
	tx = value;
	activateWalletModal = value.activateWalletModal;
});

onMount(async () => {
	console.log(Globals)
	const dappConnection = !isEmpty(localStorage.getItem('dappConnection'))
		? JSON.parse(localStorage.getItem('dappConnection'))
		: {};
	if (dappConnection.isConnected) {
		if (dappConnection.type == 'metamask') {
			MetaMaskConnect(true);
		} else if (dappConnection.type == 'walletconnect') {
			WalletConnect(true);
		}
	}
	console.log(dappConnection);
});

const handleReset = () => {
	location.href = '';
	updateTransactionInfo({ ...tx, activateWalletModal: true });
	const timeount = setTimeout(() => {
		HandleModal('WalletModal');
		clearTimeout(timeount);
	}, 500);
};
</script>

<nav class="laide-nav">
	<div class="logo" style="cursor:pointer;">
		<img src="/assets/logo.png" alt="" on:click="{handleReset}" />
	</div>

	<div class="section-2">
		<div class="light-paper">
			<a href="{Globals.lightPaper}" target="_blank">LITE PAPER</a>
		</div>

		<div class="nav-link">
			{#if !$connected}
				<div
					class="btn-shell hide-mobile"
					on:click="{async () => {
						updateTransactionInfo({ ...tx, activateWalletModal: true });
						await tick();
						HandleModal('WalletModal');
					}}">
					Connect wallet
				</div>
			{:else}
				<div
					class="btn-shell2 hide-mobile"
					on:click="{async () => {
						updateTransactionInfo({ ...tx, activateWalletModal: true });
						await tick();
						HandleModal('WalletModal');
					}}">
					<img
						src="/assets/download.png"
						width="30px"
						height="30px"
						alt=""
						style="border-radius:50%;margin-right:4px;" />
					<span class="wallet-address">{truncateString($selectedAccount, 10)}</span>
				</div>
			{/if}
		</div>
	</div>

	<div
		on:click="{async () => {
			updateTransactionInfo({ ...tx, activateWalletModal: activateWalletModal ? false : true });
			await tick();
			HandleModal('WalletModal');
		}}"
		class="nav-burger show-mobile">
		<svg width="24" height="35" viewBox="0 0 24 35" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M3 17.1345H21"
				stroke="white"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"></path>
			<path
				d="M3 8.56738H21"
				stroke="white"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"></path>
			<path
				d="M3 25.7019H21"
				stroke="white"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"></path>
		</svg>
	</div>
</nav>

<div id="mobile-nav" class="mobile-nav">
	<div
		on:click="{() => {
			HandleModal('WalletModal');
		}}"
		class="mobile-nav-close">
		<i class="bx bxs-x-circle"></i>
	</div>
	<div class="mobile-nav-link flex flex-column is-center gap">
		{#if !$connected}
			<div
				on:click="{async () => {
					updateTransactionInfo({ ...tx, activateWalletModal: true });
					await tick();
					HandleModal('WalletModal');
				}}"
				class="button is-blue-btn">
				Connect
			</div>
		{:else}
			<div on:click="{disconnectWallet}" class="button is-blue-btn">Disconnect Wallet</div>
		{/if}
		<a href="http://" target="_blank" rel="noopener noreferrer">New link</a>
	</div>
</div>

<slot />

{#if activateWalletModal && $connected}
	<Modal
		id="WalletModal"
		on:clicked="{async () => {
			updateTransactionInfo({ ...tx, activateWalletModal: false });
			await tick();
			HandleModal('WalletModal');
		}}">
		<WalletList />
	</Modal>
{/if}

{#if activateWalletModal && !$connected}
	<Modal
		id="WalletModal"
		on:clicked="{async () => {
			updateTransactionInfo({ ...tx, activateWalletModal: false });
			await tick();
			HandleModal('WalletModal');
		}}">
		<ConnectList />
	</Modal>
{/if}
