import { browser } from '$app/env';
import { HandleModal } from '$lib/modal';
import { defaultEvmStores, chainData } from 'svelte-web3';
import { isEmpty } from './utils';
import { ethers, BigNumber } from 'ethers';
import { writable } from 'svelte/store';
import { tick } from 'svelte';
export const txInfo = writable({
	isActiveTransaction: false,
	message: '',
	contract: 'acre',
	function: 'approve',
	acreBusdAllowance: 0,
	acresRemaining: 0,
	priceForOneAcre: 0,
	ownedAcreNfts: 0,
	plotBusdAllowance: 0,
	plotRemaining: 0,
	priceForOnePlot: 0,
	ownedPlotNfts: 0,
	yardBusdAllowance: 0,
	yardRemaining: 0,
	ownedYardNfts: 0,
	priceForOneYard: 0,
	busdBalance: 0,
	modalId: '',
	activateWalletModal: false
});
import { Globals } from './config';

export const updateTransactionInfo = (data) => {
	txInfo.set({ ...data });
};

/**
 * @desc This function is called to connect to  metamask wallet
 */
export const MetaMaskConnect = async () => {
	try {
		if (browser) {
			if (isEmpty(window.ethereum)) {
				throw new Error('Metamask wallet not installed');
			}
			console.log('hello', Globals);
			defaultEvmStores.setProvider();
			if (chainData.chainId != Globals.chainId) {
				try {
					await window.ethereum.request({
						method: 'wallet_switchEthereumChain',
						params: [{ chainId: Globals.chainIdHex }]
					});
				} catch (error) {
					if (error.code === 4902) {
						if (Globals.chainId == 56) {
							try {
								await window.ethereum.request({
									method: 'wallet_addEthereumChain',
									params: [
										{
											chainId: '0x38',
											chainName: 'Smart Chain - Mainnet',
											nativeCurrency: {
												name: 'Binance',
												symbol: 'BNB', // 2-6 characters long
												decimals: 18
											},
											blockExplorerUrls: ['https://bscscan.com'],
											rpcUrls: ['https://bsc-dataseed.binance.org/']
										}
									]
								});
							} catch (addError) {
								console.error(addError);
							}
						} else if (Globals.chainId == 97) {
							try {
								await window.ethereum.request({
									method: 'wallet_addEthereumChain',
									params: [
										{
											chainId: '0x61',
											chainName: 'Smart Chain - Testnet',
											nativeCurrency: {
												name: 'Binance',
												symbol: 'BNB', // 2-6 characters long
												decimals: 18
											},
											blockExplorerUrls: ['https://testnet.bscscan.com'],
											rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/']
										}
									]
								});
							} catch (addError) {
								console.error(addError);
							}
						}
					}
				}
			}

			await tick();
			if (isEmpty(localStorage.getItem('dappConnection'))) {
				updateTransactionInfo({ ...txInfo, activateWalletModal: false });
				await tick();
				HandleModal('WalletModal');
			}
			localStorage.setItem(
				'dappConnection',
				JSON.stringify({
					isConnected: true,
					type: 'metamask',
					address: defaultEvmStores.$selectedAccount
				})
			);
		} else {
			throw new Error('Only rendered on the browser');
		}
	} catch (error) {
		console.log(error.message);
	}
};

/**
 * @desc this function is used to connect to the external wallets like mobile phone wallet
 */
export const WalletConnect = async () => {
	try {
		if (browser) {
			let provider = new WalletConnectProvider.default({
				rpc: {
					// 1: 'https://cloudflare-eth.com/',
					56: 'https://bsc-dataseed.binance.org/',
					97: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
				},
				bridge: 'https://bridge.walletconnect.org'
			});
			await provider.enable();
			defaultEvmStores.setProvider(provider);
			if (isEmpty(localStorage.getItem('dappConnection'))) {
				updateTransactionInfo({ ...txInfo, activateWalletModal: false });
				await tick();
				HandleModal('WalletModal');
			}
			localStorage.setItem(
				'dappConnection',
				JSON.stringify({
					isConnected: true,
					type: 'walletconnect',
					address: defaultEvmStores.$selectedAccount
				})
			);

			// console.log($connected, $selectedAccount);
		} else {
			console.log('needs a browser to run');
		}
	} catch (error) {
		HandleModal('WalletModal');
	}
};

/**
 * @desc This function is disconnect user wallet
 */
export const disconnectWallet = async () => {
	try {
		localStorage.removeItem('dappConnection');
		localStorage.removeItem('walletconnect');
		defaultEvmStores.disconnect();
		updateTransactionInfo({ ...txInfo, activateWalletModal: false });
		await tick();
		HandleModal('WalletModal');
	} catch (error) {
		console.log(error.message, `disconnectWallet--Function`);
	}
};

/**
 * @desc This function is used to approve Payment token before minting
 * @param tokenContract contract instance of the payment token
 * @param spenderAddress address of the NFT contract that will be approved by the user to spend the amount
 * @param  amountInWei This is the amount in wei to be spent
 * @returns
 */
export const approvePaymentToken = ({ tokenContract, spenderAddress, amountInWei, tx }) => {
	if (txInfo.isActiveTransaction) {
		console.log(txInfo.message);
		return;
	}

	if (isEmpty(tokenContract)) {
		updateTransactionInfo({ ...tx, modalId: 'wallet-not-connected' });
		return;
	}

	if (isEmpty(defaultEvmStores.$selectedAccount)) {
		updateTransactionInfo({ ...tx, modalId: 'wallet-not-connected' });
		return;
	}

	if (isEmpty(spenderAddress)) {
		updateTransactionInfo({ ...tx, modalId: 'wallet-not-connected' });
		return;
	}

	if (isEmpty(amountInWei)) {
		console.log('Enter a valid amount', `approvePaymentToken--Function`);
		return;
	}

	txInfo.set({
		...tx,
		isActiveTransaction: true,
		message: `You have an active transaction : Approving ${tx.name.toUpperCase()} contract to spend BUSD of Address : ${
			defaultEvmStores.$selectedAccount
		}`,
		contract: tx.name,
		function: 'approve'
	});
	console.log('minting');
	updateTransactionInfo({ ...tx, modalId: 'processing-mint' });

	tokenContract.methods
		.approve(spenderAddress, amountInWei)
		.send({ from: defaultEvmStores.$selectedAccount })
		.on('transactionHash', (hash) => {
			console.log(hash, 'transaction hash');
		})
		.on('confirmation', (result) => {
			console.log(result, 'confirmation');
		})
		.on('receipt', (result) => {
			txInfo.set({
				...tx,
				isActiveTransaction: false,
				message: `Approval Successfull`,
				contract: tx.name,
				function: 'approve',
				[`${tx.name}busdBalance`]: 1000000000
			});
			updateTransactionInfo({ ...tx, modalId: 'approve-success' });
		})
		.on('error', (result) => {
			txInfo.set({
				...tx,
				isActiveTransaction: false,
				message: `Approval Failed`,
				contract: tx.name,
				function: 'approve'
			});
			updateTransactionInfo({ ...tx, modalId: 'approve-fail' });
			console.log(result, 'error');
		});
};

/**66
 * @desc This function is used to mint nft to a particular address
 * @param nftContract contract instance of the NFT
 * @param  amountInWei This is the amount of NFT to Mint
 * @returns
 */
export const mintNFT = ({ nftContract, amountToMint, tx }) => {
	if (txInfo.isActiveTransaction) {
		console.log(txInfo.message);
		return;
	}
	if (isEmpty(nftContract)) {
		updateTransactionInfo({ ...tx, modalId: 'wallet-not-connected' });
		return;
	}

	if (isEmpty(defaultEvmStores.$selectedAccount)) {
		updateTransactionInfo({ ...tx, modalId: 'wallet-not-connected' });
		return;
	}

	if (isNaN(amountToMint) || isEmpty(amountToMint)) {
		updateTransactionInfo({ ...tx, modalId: 'invalid-amount' });
		return;
	}

	let newTx = {
		...tx,
		isActiveTransaction: true,
		message: `You have an active transaction : Minting ${tx.name.toUpperCase()} NFT to  Address : ${
			defaultEvmStores.$selectedAccount
		}`,
		contract: tx.name,
		function: 'mint'
	};
	updateTransactionInfo({ ...newTx, modalId: 'processing-mint' });

	nftContract.methods
		.mint(amountToMint)
		.send({ from: defaultEvmStores.$selectedAccount })
		.on('transactionHash', (hash) => {
			console.log(hash, 'transaction hash');
		})
		.on('confirmation', (result) => {
			console.log(result, 'confirmation');
		})
		.on('receipt', (result) => {
			newTx = {
				...tx,
				isActiveTransaction: false,
				message: `Minting successfull`,
				contract: tx.name,
				function: 'mint'
			};
			updateTransactionInfo({ ...newTx, modalId: 'mint-video' });
			const timeout = setTimeout(() => {
				updateTransactionInfo({ ...tx, modalId: 'mint-success' });
				clearTimeout(timeout);
			}, 8000);

			// HandleModal('buymodal');
		})
		.on('error', (result) => {
			newTx = {
				...tx,
				isActiveTransaction: false,
				message: `Minting Failed`,
				contract: tx.name,
				function: 'mint'
			};
			updateTransactionInfo({ ...newTx, modalId: 'mint-fail' });
		});
};

/**
 * @des converts weito token value
 * @returns
 */
export const weiToToken = (bigNumber, decimal = 18) => {
	bigNumber = typeof bigNumber === 'string' ? BigNumber.from(bigNumber) : bigNumber;
	return ethers.utils.formatUnits(bigNumber.toString(), decimal);
};

export const tokenToWei = (number, decimal) => {
	return ethers.utils.parseUnits(number.toString(), decimal);
};

export const formatCurrency = (number) => {
	return parseFloat(number)
		.toFixed(2)
		.replace(/\d(?=(\d{3})+\.)/g, '$&,');
};
