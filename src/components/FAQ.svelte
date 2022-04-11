<script>
	import { slide } from 'svelte/transition';
	let visible = true;
	let expanded = false;
	let sections_total = [
		{
			id: 1,
			title: "Are the NFTs transferable?",
			content: `Yes, they are.

* Visit: https://bscscan.com/address/tokenAddress#writeContract

* Click on “Connect Wallet.”

* Navigate to Number 4 - “SafeTransferFrom”

*  Input details as follows: 
  (i) From - Your wallet address
  (ii) To - The receiving wallet address.
  (iii) Enter Token ID - The unique number assigned to the NFT to be transferred.

* Copy and paste the applicable token address into the required field.

Token Addresses:
Acre - 0x9F305DdBDf36b342E3BD119EA79AD7D796185ecc

Plot - 0x59A6E6CbE835d1b6333D8cFa8540BD86b7a7a6fA

Yard - 0x66021082F87ad4e57E9b681194DAB8a40382CC35`,
			active: false,
		},
		{
			id: 2,
			title: "Is it possible to divide an acre into plots and/or yards after purchase, in order to distribute the fractions to other wallets?",
			content: "Atlantus Tokenized Lands ($ATL) are not divisible after purchase as they are non-fungible.",
			active: false,
		},
		{
			id: 3,
			title: `Do we receive "Passive Income" by buying $ATL?`,
			content: `Landowners will receive quarterly rewards during our Tsunamis starting from July 26th 2022.
			
Other dates are 26th October, 26th January, and 26th April in perpetuity.
			`,
			active: false,
		},
		{
			id: 4,
			title: "Apart from purchase price, what distinctions are there in owning different $ATL NFTs?",
			content: `One difference is in rewards distribution, a yard owner receives one-ninth the rewards that a plot owner receives and a plot owner receives one-sixth the rewards an acre owner receives.
			
An investor who owns 6 plots gets about the same rewards an acre owner. An investor who owns 9 yards gets about the same rewards as a plot owner.
			
Each batch represents a Realm in the City of Atlantus Metaverse.`,
			active: false,
		},
		{
			id: 5,
			title: "What are the differences between getting an acre vs a plot (or multiple plots) other than the price of course?",
			content: "A plot owner receives one-sixth of the rewards an acre owner receives. A yard owner receives one-ninth of the rewards that a plot owner receives.\n\nAn investor who owns 6 plots gets about the same value an acre owner receives. An investor who owns 9 yards gets about the same value as one with a plot.",
			active: false,
		},
		{
			id: 6,
			title: "Would one be able to sell $ATL?",
			content: "Investors will be able to buy, sell, and trade in-system NFTs when we launch the $ATL dApp.",
			active: false,
		},
		{
			id: 7,
			title: `Do we receive the Oculus Headset from land purchases? How does this work?`,
			content: "Investors who bought at least 4 acres in Batch 1 will receive CoA-custom Oculus headsets. All batches after this will receive it per acre purchase.",
			active: false,
		},
		{
			id: 8,
			title: "How much can I expect to earn from my $ATL investment?",
			content: `A rewards calculator will be integrated into the upgraded version of the $CHLZ dApp.

It will enable investors plug in number variables to get quarterly reward estimates based on quantity of $ATL owned.`,
			active: false,
		}
	]
	let sections=sections_total.filter((each, i) => i <= 3);
	
	const expand = (section) => {
		sections = sections.map(s => {
			if (s.id === section.id) {
				s.active = !s.active
			}
			return s
		})
	}
	const showMore = (flag) => {
		if(!flag) {
			expanded = true;
			sections = sections_total;
		}
		else {
			expanded = false;
			sections = sections_total.filter((each, i) => i <= 3);
		}
	}
</script>
<section class="faq-bg hero is-fullheight ">
	<div class='gradient1' />
	<div class='gradient2' />
	<div class="hero-body is-center " style="width:100%">
		<div class="wrapper">
			<div class="mobile">
				<h1 class="text-public">FAQ</h1>
				<div class="bullet-list">
					{#each sections as section}
						<div class='faq-main' on:click={() => expand(section) }>
							{section.title}
							{#if section.active}
							<div class='faq-body' transition:slide>
								{section.content}
							</div>
							{/if}
						</div>
					{/each}
				</div>
				<button class='show-more-btn' on:click={() => showMore(expanded)}>
					{#if expanded} show less
					{:else} show more
					{/if}
				</button>
			</div>
		</div>
	</div>
</section>

<style>
	.wrapper {
		display: flex;
		width: 75%;
	}
	@media only screen and (max-width: 768px) {
		.wrapper {
			padding-left: 0;
			padding-right: 0;
			width: 100%;
		}
	}
	.hero-body {
		position: relative;
	}
	.show-more-btn {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 158%;
		/* or 25px */

		letter-spacing: 0.01em;

		color: #FFFFFF;
		text-transform: uppercase;
		background: none;
		outline: none;
		border: none;
		margin-top: 41px;
	}
	.gradient1 {
		position: absolute;
		width: 498.28px;
		height: 777.91px;
		left: -450.08px;
		bottom: -30%;
		background: #2980D0;
		filter: blur(150.036px);
		transform: matrix(-0.52, 0.73, -1.1, -0.35, 0, 0);
	}
	.gradient2 {
		position: absolute;
		width: 585.31px;
		height: 1511.17px;
		right: -50%;
		top: 50%;
		background: #F7A733;
		opacity: 0.7;
		filter: blur(150.036px);
		transform: translateY(-50%) matrix(0.66, 0.58, 1.03, -0.61, 0, 0);
	}
	.faq-body {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 165%;
 	    white-space: break-spaces;
		letter-spacing: 0.02em;
	}
	.faq-main {
		padding-top: 32px;
		padding-bottom: 32px;
		font-family: 'Inter';
		font-style: normal;
		font-weight: 600;
		font-size: 24px;
		line-height: 181%;
		letter-spacing: -0.01em;
		color: #FFFFFF;
	}
	@media only screen and (max-width: 768px) {
		.gradient1, .gradient2 {
			display: none;
		}
		.show-more-btn {
			padding-left: 23px;
			font-weight: 600;
			font-size: 17px;
			line-height: 158%;
			/* identical to box height, or 27px */

			letter-spacing: 0.01em;
		}
		.gradient1 {
			display:none;
		}
		.faq-body {
			font-weight: 400;
			font-size: 12px;
			line-height: 181%;
			letter-spacing: 0.01em;
		}
		.faq-main {
			font-weight: 600;
			font-size: 17px;
			line-height: 154%;
			letter-spacing: -0.01em;
			padding-top: 30px;
			padding-bottom: 30px;
			padding-left: 23px;
			padding-right: 23px;
		}
	}
	.faq-bg {
		position: relative;
		height: auto;
		background-size: cover;
		min-height: unset;
	}
	.text-public {
		font-family: 'Monument Extended';
		margin-top: 2rem;
		font-style: normal;
		font-weight: bolder;
		font-size: 55px;
		line-height: 105.5%;
		/* or 51px */
		letter-spacing: 0.07em;
		text-transform: uppercase;
		color: #ffffff;
	}
	@media only screen and (max-width: 768px) {
		.text-public {
			padding-left: 23px;
		}
	}
	.bullet-list {
		display: flex;
		flex-direction: column;
		border-top: 1px solid #fff9f978;
		border-bottom: 1px solid #fff9f978;
		margin-top: 74px;
	}
	.bullet-list >div:not(:last-of-type) {
		border-bottom: 0.15px solid #fff9f978;
		box-sizing: border-box;
	}
	.bigstar {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.bigstar img {
		width: 25rem;
		clip-path: circle();
	}

	.shift-left {
		margin-left: 5rem;
	}

	@media only screen and (max-width: 768px) {
		.mobile {
		}
		.text-public {
			width: 100%;
			height: 42px;
			font-style: normal;
			font-weight: 900;
			font-size: 29px;
			line-height: 105.5%;
			text-align: left !important;
			left: 0px;
		}
		@media (min-width: 768px) {
			.bullet-list {
				width: 300px;
			}
		}
		.bullet-list span {
			font-weight: 300;
			font-size: 14px;
			line-height: 181%;
			/* or 22px */
			text-align: left;

			letter-spacing: 0.01em;
		}

		.mb-bigstar {
			display: flex;
			justify-content: right !important;
		}

		.mb-bigstar img {
			width: 249.86px;
			height: 249.86px;
		}

		.banner {
			width: 100%;
		}
	}
</style>
