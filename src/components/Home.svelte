<style>
.gradient1 {
	position: absolute;
	width: 273.77px;
	height: 223.04px;
	background: #ffbe00;
	filter: blur(150px);
	transform: rotate(-41.39deg);
}
.home-banner {
	position: relative;
	background-size: cover;
	min-height: 300px;
	padding-top: 150px;
	padding-bottom: 30px;
	background-position: bottom;
	margin-top: 1.5rem;
}
.home-banner2 {
	background-image: url(assets/banner/bg2.jpg);
	height: 792px;
	background-size: cover;
}
.columns-80 {
	width: 80%;
}
.left-text {
	font-family: 'Inter';
	/* font-style: normal; */
	font-weight: 600;
	font-size: 26.288px;
	line-height: 150%;
	/* or 36px */
	letter-spacing: 0.01em;
	max-width: 524px;
	color: #ffffff;
}
@media (max-width: 768px) {
	.left-text {
		font-size: 16px;
		line-height: 137.5%;
		letter-spacing: 0.01em;
	}
}

.sub-title {
	margin-top: 2rem;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 156%;
	letter-spacing: 0.01em;
	max-width: 480px;
	color: #cfcfcf;
	/* height: 50px;
            width: 500px; */
	/* padding: 5rem; */
}

.spiral {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.spiral img {
	/* width: 520.62px;
		height: 451px; */
}

.hero-inner {
	display: flex;
	flex-direction: row;
}
#dkLogo {
	display: flex;
	justify-content: center;
}
@media only screen and (max-width: 768px) {
	#dkLogo {
		margin-top: 72px !important;
	}
	.home-banner {
		padding-top: 100px;
	}
	.hero-body {
		justify-content: left;
		margin-left: 16px;
	}
	.hero-inner {
		width: 100%;
	}

	.is-four-quarters {
		padding: 0 !important;
	}
	.hero-mobile {
		flex-direction: column;
		font-family: 'Inter';
		font-style: normal;
	}
	.hero-mobile .left-text {
		font-weight: 900;
		font-size: 18px;
	}
	.hero-mobile .sub-title {
		font-weight: lighter;
		font-size: 12px;
	}
	.left-text {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 900;
		font-size: 16px;
		line-height: 137.5%;
		letter-spacing: 0.01em;
		color: #ffffff;
		width: 80%
	}

	.sub-title {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 600;
		font-size: 12px;
		line-height: 156%;
		letter-spacing: 0.01em;
		color: #ffffff;
		max-width: 280px;
	}

	.spiral img {
		width: 19rem;
		height: 19rem;
	}
}
</style>

<script>
import { onMount } from 'svelte';

onMount(() => {
	const jq = window.$;
	jq(document).ready(function () {
		jq('.home-banner2').ripples('show');
	});
});
</script>

<section class="hero is-fullheight home-banner">
	<div class="gradient1"></div>
	<div class="hero-body is-center" style="align:center; position: relative">
		<div class="hero-inner  columns-80 hero-mobile">
			<div class="column is-four-quarters">
				<div>
					<div class="flex flex-column ">
						<h3 class="left-text">
							$CHLZ is an advanced DeFi protocol that converts NFTs into self-staking, reward-generating assets.
						</h3>
						<span class="sub-title">
							$CHLZ technology delivers quarterly rewards to $ATL Land NFT investors while we develop the core-infrastructure dApp for the City of Atlantus project - Atlantus Tokenized Lands.
						</span>
					</div>
				</div>
			</div>
			<div style="margin:0;" id="dkLogo">
				<img src="assets/banner/chlz.gif" style="width:777.06px" alt="Chlz" />
			</div>
		</div>
	</div>
</section>
