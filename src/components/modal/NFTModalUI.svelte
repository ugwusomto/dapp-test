<style>
#loading {
	display: inline-block;
	width: 40px;
	height: 40px;
	border: 3px solid rgba(255, 255, 255, 0.3);
	border-radius: 50%;
	border-top-color: #fff;
	animation: spin 1s ease-in-out infinite;
	-webkit-animation: spin 0.5s ease-in-out infinite;
}

.letter-oppa {
	color: #fff;
	background-color: #353535;
	display: block;
	width: 40%;
	margin: 2px auto;
	padding: 15px;
	border-radius: 6px;
}

.info-box {
	width: 90%;
	text-align: center;
	padding: 50px 10px;
}

.info-box .image img {
	width: 80px;
	display: inline-block;
	border-radius: 50%;
}

.info-box h4 {
	font-size: 30px;
	padding: 15px 5px;
	color: #fff;
}

.info-box p {
	font-size: 15px;
	padding: 15px 5px;
	color: #fff;
}

.info-box .action-button {
	margin: auto;
	display: inline-block;
	margin-top: 20px;
	width: 40%;
	text-align: center !important;
	color: #fff;
	padding: 10px;
	border-radius: 5px;
}

.indollar {
	font-size: 18px;
	font-weight: 300;
	color: #fff;
}

.dollar {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 600;
	font-size: 21.8325px;
	line-height: 44px;
	color: white;
}

.quantity-box {
	color: #fff;
	text-align: center;
	font-size: 12px;
	display: flex;
	align-items: center;
	grid-column-gap: .25rem;
}

.quantity-box .child {
	font-size: 12px;
	color: #707070;
}

.gif {
	width: 138.39px;
	height: 138.39px;
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
}
.letter h1 {
	text-align: center;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 600;
	font-size: 35.8531px;
	line-height: 48px;
	text-align: center;
	color: #ffffff;
}

.letter span {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 19.4204px;
	line-height: 150%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ffffff;
}

.buy-input-parent {
	/* width: 100%;
                border: 1px solid #fff; */
	padding: 0px;
}

.buy-input-parent * {
	font-weight: 500;
}

.buy-input-container {
	width: 100%;
	left: 30.68px;
	top: 56.32px;
	background: #252525;
	border-radius: 6.23334px;
	/* border: 1px solid #fff; */
}
.buy-input-box {
	height: 3.5rem;
	width: 100%;
	display: flex;
	padding: 0.75rem 1.5rem;
	border-bottom: 0.5px solid #3a3a3a;
	justify-content: space-between;
}
.buy-input-box input {
	border: none;
	border-radius: 4px;
	outline: none;
	height: 100%;
	width: 60%;
	background-color: #353535;
	color: #ffffff;
	padding: 10px;
	padding-left: 15px;
	font-size: 12px;
}
#indollar {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 600;
	font-size: 21.8325px;
	/* line-height: 44px; */
	/* identical to box height, or 200% */
	display: flex;
	align-items: center;

	color: #ffffff;
}

#dollar {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 600;
	font-size: 21.8325px;
	/* line-height: 44px; */
	/* identical to box height, or 200% */

	display: flex;
	align-items: center;
	text-align: center;

	color: #ffffff;
}
.mint-btn span{
	font-family: Inter;
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 36px;
}
.myInput{
	background-color: beige;
}
@media (min-width: 200px) and (max-width: 768px) {
	.indollar {
		font-size: 12px;
		font-weight: 300;
		color: #fff;
	}

	.dollar {
		font-size: 12px;
		font-weight: 500;
	}

	.quantity-box {
		font-size: 18px;
		display: flex;
		/* align-items: flex-end; */
		line-height: 100%;
		margin-bottom: 4px;
	}

	.quantity-box .child {
		line-height: 100%;
		font-size: 13px;
	}

	.letter-oppa {
		width: 80%;
	}

	.letter h1 {
		font-size: 20px;
		font-weight: 300;
	}
	.letter span {
		font-size: 16px;
		font-weight: 300;
	}
	h4 {
		font-size: 20px !important;
		font-weight: 300;
	}

	.buy-input-container {
		width: 100% !important;
	}

	.buy-input-box input {
	
	padding: 4px;
	padding-left: 6px;
	font-size: 9px;
}
.mint-btn span{
	font-size: 15px;
	line-height: 36px;
}
.buy-input-box {
	padding: 0.75rem 0.8rem;
}
}
</style>

<script>
import { isEmpty } from '$lib/utils';
import { tick } from 'svelte';
import { HandleModal } from '$lib/modal';
export let tx,
	formatCurrency,
	approve,
	mint,
	updateTransactionInfo,
	nftName,
	nftAbbrv,
	nftPriceForOne,
	remaining,
	allowance;
let amountToMint;
</script>

{#if tx.modalId == 'buymodal'}
	<div class="flex flex-column is-center land buy-input-parent">
		<div class="gif" style="{`background-image: url('/${nftName}hover.gif')`}"></div>
		<div class="flex flex-column">
			<div class="letter">
				<h1 class="title" style="text-transform:capitalize">Buy {nftName}</h1>
			</div>
			<div class="letter">
				<span>1{'\u00a0'}<span style="text-transform:capitalize;"> {nftName} </span> = ${'\u00a0'}{nftPriceForOne}</span>
			</div>
		</div>

		<div class="buy-input-container">
			<div class="buy-input-box">
				<input
					class="indollar myInput"
					bind:value="{amountToMint}"
					type="text"
					disabled="{tx.isActiveTransaction}"
					placeholder={`# of ` + nftName + "s ?"} />
				<div class="quantity-box">
					<div>{remaining}</div>
					<div class="child">{tx.yardRemaining > 1 ? nftAbbrv + 's' : nftAbbrv}</div>
				</div>
			</div>

			<div class="buy-input-box gap-between no-line" style='display: flex'>
				<span class="indollar">Amount (in dollars)</span>
				<span class="dollar"
					>${!isNaN(amountToMint) ? formatCurrency(nftPriceForOne * amountToMint) : 0}</span>
			</div>
		</div>

		<div class="gap" style='display: flex; padding: 0.75rem 0;'>
			<!-- tx.isActiveTransaction -->

			<button
				on:click="{approve}"
				class="{`mint-btn ${allowance > '100000' ? 'disabled-btn' : 'primary-btn'}`}"
				disabled="{`${allowance > '100000' || tx.isActiveTransaction ? 'disabled' : ''}`}">
				<span>Approve</span>
			</button>

			<button
				class="{`mint-btn ${allowance > '100000' ? 'primary-btn' : 'disabled-btn'}`}"
				on:click="{() => {
					if (isEmpty(amountToMint)) {
						updateTransactionInfo({ ...tx, modalId: 'invalid-amount' });
						return;
					}
					if (isNaN(amountToMint)) {
						updateTransactionInfo({ ...tx, modalId: 'invalid-amount' });
						return;
					}
					updateTransactionInfo({ ...tx, modalId: 'confirm-mint' });
				}}"
				disabled="{tx.isActiveTransaction}">
				<span>Mint</span>
			</button>
		</div>
	</div>
{:else if tx.modalId == 'processing-mint'}
	<div class="info-box">
		<h4>Processing Transaction</h4>
		<div class="text-center">
			<div class="spinner-border text-light" style="width: 5rem; height: 5rem;" role="status">
				<span class="sr-only"></span>
			</div>
		</div>
	</div>
{:else if tx.modalId == 'mint-video'}
	<div class="info-box" style="padding:0px;">
		<img
			src="{`/assets/${nftName}-success.gif`}"
			style="border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;"
			width="100%"
			alt="" />
	</div>
{:else if tx.modalId == 'approve-fail'}
	<div class="info-box">
		<div class="image">
			<img src="/assets/fail.gif" alt="" />
		</div>
		<h4>Approval Unsuccessful</h4>
		<p>Approval request failed</p>
		<div class="">
			<a
				href="#"
				on:click="{(e) => {
					e.preventDefault();
					updateTransactionInfo({ ...tx, modalId: 'buymodal' });
				}}"
				class="primary-btn action-button">Retry</a>
		</div>
	</div>
{:else if tx.modalId == 'approve-success'}
	<div class="info-box">
		<div class="image">
			<img src="/assets/success.gif" alt="" />
		</div>
		<h4>Approval Successful</h4>
		<p>Your approval request was successfully</p>
		<div class="">
			<a
				href="#"
				on:click="{(e) => {
					e.preventDefault();
					updateTransactionInfo({ ...tx, modalId: 'buymodal' });
				}}"
				class="primary-btn action-button">Continue</a>
		</div>
	</div>
{:else if tx.modalId == 'invalid-amount'}
	<div class="info-box">
		<div class="image">
			<img src="/assets/fail.gif" alt="" />
		</div>
		<h4>Enter a valid amount</h4>
		<p>Enter Your amount to mint</p>
		<div class="">
			<a
				href="#"
				on:click="{(e) => {
					e.preventDefault();
					updateTransactionInfo({ ...tx, modalId: 'buymodal' });
				}}"
				class="primary-btn action-button">Continue</a>
		</div>
	</div>
{:else if tx.modalId == 'mint-success'}
	<div class="info-box">
		<div class="image">
			<img src="/assets/success.gif" alt="" />
		</div>
		<h4>Mint Successful</h4>
		<p>Your land NFT has been minted successfully</p>
		<div class="">
			<a
				href="#"
				on:click="{(e) => {
					e.preventDefault();

					HandleModal('buymodal');
				}}"
				class="primary-btn action-button">Continue</a>
		</div>
	</div>
{:else if tx.modalId == 'mint-fail'}
	<div class="info-box">
		<div class="image">
			<img src="/assets/fail.gif" alt="" />
		</div>
		<h4>Mint Unsuccessful</h4>
		<p>Your transaction was unsuccessful.</p>
		<div class="">
			<a
				href="#"
				on:click="{(e) => {
					e.preventDefault();

					updateTransactionInfo({ ...tx, modalId: 'buymodal' });
				}}"
				class="primary-btn action-button">Retry</a>
		</div>
	</div>
{:else if tx.modalId == 'insufficient-fund'}
	<div class="info-box">
		<div class="image">
			<img src="/assets/fail.gif" alt="" />
		</div>
		<h4>Insufficient Fund</h4>
		<p>Please fund your wallet and try again.</p>
		<div class="">
			<a
				href="#"
				on:click="{(e) => {
					e.preventDefault();

					HandleModal('buymodal');
				}}"
				class="primary-btn action-button">Close</a>
		</div>
	</div>
{:else if tx.modalId == 'wallet-not-connected'}
	<div class="info-box">
		<div class="image">
			<img src="/assets/fail.gif" alt="" />
		</div>
		<h4>Wallet Not Connected</h4>
		<p>Connect wallet to continue your transaction.</p>
		<div class="">
			<a
				href="#"
				on:click="{async (e) => {
					e.preventDefault();
					updateTransactionInfo({ ...tx, activateWalletModal: true });
					await tick();
					HandleModal('WalletModal');
				   }}"
				class="primary-btn action-button">Connect Wallet</a>
		</div>
	</div>
{:else if tx.modalId == 'chain-info'}
	<div class="info-box">
		<div class="image">
			<img src="/assets/fail.gif" alt="" />
		</div>
		<h4>Wrong Network</h4>
		<p>Connect to Binance Smart Chain and Reload the page.</p>
		<div class="">
			<a
				href="#"
				on:click="{(e) => {
					e.preventDefault();

					HandleModal('buymodal');
				}}"
				class="primary-btn action-button">Close</a>
		</div>
	</div>
{:else if tx.modalId == 'confirm-mint'}
	<div class="info-box">
		<h4>Confirm Transaction</h4>
		<p>Are you sure you want to continue with this transaction</p>
		<div class="letter-oppa">
			<span
				>{formatCurrency(amountToMint)} <span style="text-transform:capitalize">{nftName}</span> ~ ${formatCurrency(
					nftPriceForOne * amountToMint
				)}</span>
		</div>
		<div class="">
			<a
				href="#"
				on:click="{(e) => {
					e.preventDefault();

					updateTransactionInfo({ ...tx, modalId: 'buymodal' });
				}}"
				class="disabled-btn action-button">Cancel</a>
			<a
				href="#"
				on:click="{(e) => {
					e.preventDefault();
					mint({ amountToMint });
				}}"
				class="primary-btn action-button">Confirm</a>
		</div>
	</div>
{:else}
	<div class="info-box">
		<div class="text-center">
			<div class="spinner-border text-light" style="width: 5rem; height: 5rem;" role="status">
				<span class="sr-only"></span>
			</div>
		</div>
	</div>
{/if}
