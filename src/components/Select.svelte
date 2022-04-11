<style>
.caption-text {
	width: 769px;
	height: 268px;
	left: 336px;
	top: 2159px;
	font-family: 'Monument Extended';
	font-style: normal;
	font-weight: 900;
	font-size: 80px;
	line-height: 100%;
	/* or 80px */
	text-align: center;
	letter-spacing: -0.03em;
	text-transform: uppercase;
	color: #ffffff;
}
.bg-select {
	display: flex;
	justify-content: center;
}
.bg-select img {
	width: 45rem;
	max-height: 100%;
}
.star-image {
	right: 0;
	position: fixed;
	transform: rotate(26.22deg);
}

.bg-select {
	/* background-position: center; */
	/* background-image: url(); */
	/* background-repeat:no-repeat; */
}

.acre-card {
	backdrop-filter: blur(5px);
	border: 1px var(--gold) solid;
	border-radius: 15px;
	background: radial-gradient(
			90.16% 143.01% at 15.32% 21.04%,
			rgba(247, 167, 51, 0.2) 0%,
			rgba(247, 167, 51, 0.0447917) 77.08%,
			rgba(241, 143, 0, 0) 100%
		)
		/* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
	/* backdrop-filter: blur(80px); */
	border-radius: 15px;
}

.plot-card {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 287.77px;
	height: 441.18px;
	background: #000000;
	backdrop-filter: blur(5px);
	border-radius: 15px;
	border: 1px solid var(--gold);
}

.last-card {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 287.77px;
	height: 441.18px;
	background: black;
	backdrop-filter: blur(5px);
	border-radius: 15px;
	border: 1px solid var(--gold);
}

.card-info {
	margin-top: 33.23px;
	display: flex;
	flex-direction: column;
	width: -webkit-fill-available;
	margin-left: 28px;
}

.card-info >div:first-of-type {
	font-family: 'Monument Extended';
	font-style: normal;
	font-weight: 400;
	font-size: 12.2342px;
	line-height: 105.5%;
	text-transform: uppercase;
	color: #FFFFFF;
}
.card-info >div:nth-of-type(2) {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 9.61261px;
	line-height: 105.5%;
	text-transform: uppercase;
	color: #EDEDED;
	margin-top: 16px;
}
.card-info >div:last-of-type {
	font-family: 'Monument Extended';
	font-style: normal;
	font-weight: 400;
	font-size: 15.7297px;
	line-height: 105.5%;
	letter-spacing: -0.03em;
	text-transform: uppercase;
	color: #FFFFFF;
	margin-top: 8px;
}

.acre-img {
	background-image: url(/acre-1.png);
	height: 281px;
	width: 281px;
	max-width: 100%;
	background-repeat: no-repeat;
	background-position: center;
	background-size: 100% 100%;
}

.plot-img {
	background-image: url(/plot-1.png);
	height: 281px;
	width: 281px;
	max-width: 100%;
	background-repeat: no-repeat;
	background-position: center;
	background-size: 100% 100%;
}

.yard-img {
	background-image: url(/yard-1.png);
	height: 281px;
	width: 281px;
	max-width: 100%;
	background-repeat: no-repeat;
	background-position: center;
	background-size: 100% 100%;
}

.plot-img:hover {
	background-image: url(/plothover.gif);
	height: 281px;
	width: 281px;
	max-width: 100%;
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	cursor: pointer;
	object-fit: contain;
}

.acre-img:hover {
	background-image: url(/acrehover.gif);
	height: 281px;
	width: 281px;
	max-width: 100%;
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	cursor: pointer;
	object-fit: contain;
}

.yard-img:hover {
	background-image: url(/yardhover.gif);
	height: 281px;
	width: 281px;
	max-width: 100%;
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	cursor: pointer;
	object-fit: contain;
}
@media (max-width: 1024px) {
	.yard-img {
		background-image: url(/yardhover.gif);
	}
	.plot-img {
		background-image: url(/plothover.gif);
	}
	.acre-img {
		background-image: url(/acrehover.gif);
	}
}
.herobg {
	/* background-image: url(assets/banner/second.svg);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;*/
	height: auto;
	background-size: cover;
}

@media only screen and (max-width: 768px) {
	.caption-text {
		width: 327.51px;
		height: 114.14px;

		font-family: 'Monument Extended';
		font-style: normal;
		font-weight: 900;
		font-size: 32px;
		line-height: 100%;
		/* or 32px */

		text-align: center;
		letter-spacing: -0.03em;
		text-transform: uppercase;

		color: #ffffff;
	}

	.bg-select {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
}
.hero-body {
	position: relative;
}
.gradient1 {
	position: absolute;
	left: -324.93px;
	bottom: -50%;
	width: 447.21px;
	height: 512.42px;
	background: #cf7d06;
	filter: blur(150px);
	transform: matrix(0.7, 0.52, 0.98, -0.7, 0, 0);
}
.nfts {
	padding-top: 0;
	padding-bottom: 0;
}
.nfts >div {
	width:100%; justify-content: center; grid-column-gap: 30px;
}
@media only screen and (max-width: 1024px) {
	.nfts >div {
		flex-direction: column;
		grid-row-gap: 15.22px;
	}
	.plot-card, .last-card {
		width: 233.88px;
		height: 358.55px;
	}
	.acre-img, .plot-img, .yard-img {
		width: 218.5px;
		height: 218.5px;
	}
}
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/svelte-splide';
import { Swiper, SwiperSlide } from 'swiper/svelte';
import { tick } from 'svelte';
import '@splidejs/svelte-splide/css';
import { txInfo, updateTransactionInfo } from '$lib/connector';
let tx;
txInfo.subscribe((value) => {
	tx = value;
});
import 'swiper/css';

import 'swiper/css/pagination';
// import Land from "./modal/Land.svelte";
import { HandleModal } from '$lib/modal';
import Yard from './modal/Yard.svelte';
import Plot from './modal/Plot.svelte';
import Acre from './modal/Acre.svelte';
import Modal from './modal/Modal.svelte';
import { EffectCards } from 'swiper';

// Import Swiper styles
let landState = 0;

import { Pagination } from 'swiper';
import { onMount } from 'svelte';
import { loop } from 'svelte/internal';
const deviceType = () => {
	const ua = navigator.userAgent;
	if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
		return 'tablet';
	} else if (
		/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
			ua
		)
	) {
		return 'mobile';
	}
	return 'desktop';
};
let device,
	showModal = false;

onMount(() => {
	device = deviceType();
	bulmaCarousel.attach('#carousel-demo', {
		slidesToScroll: 1,
		slidesToShow: 1
	});
});
</script>

<section class="herobg hero " style="padding-top:0px">
	<div class="hero-body">
		<!-- <img src="/assets/banner/102.png" alt="" class="star-image"> -->
		<div class="gradient1"></div>
		<div class="container">
			<div class="bg-select">
				<img src="/assets/banner/select.png" style="width:600px" alt="" srcset="" />
			</div>

			<div class="flex  is-center nfts">
				<div class="flex is-center">
					<div class="last-card">
						<div
							class="acre-img"
							on:click="{async () => {
								showModal = true;
								await tick();
								updateTransactionInfo({ ...tx, modalId: 'buymodal' });
								HandleModal('buymodal'), (landState = 1);
							}}">
						</div>
						<div class="card-info">
							<div>1 ACRE</div>
							<div>CURRENT PRICE</div>
							<div>$35,200</div>
						</div>
					</div>

					<div class="plot-card">
						<div
							on:click="{async () => {
								showModal = true;
								await tick();
								updateTransactionInfo({ ...tx, modalId: 'buymodal' });
								HandleModal('buymodal'), (landState = 2);
							}}"
							class="plot-img">
						</div>
						<div class="card-info">
							<div>1 PLOT</div>
							<div>CURRENT PRICE</div>
							<div>$5,867</div>
						</div>
					</div>

					<div class="last-card">
						<div
							on:click="{async () => {
								showModal = true;
								await tick();
								updateTransactionInfo({ ...tx, modalId: 'buymodal' });
								HandleModal('buymodal'), (landState = 3);
							}}"
							class="yard-img">
						</div>
						<div class="card-info">
							<div>1 YARD</div>
							<div>CURRENT PRICE</div>
							<div>$652</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

{#if showModal}
	<Modal
		id="buymodal"
		on:clicked="{async () => {
			showModal = false;
			await tick();
			HandleModal('buymodal');
		}}">
		{#if landState == 1}
			<Acre />
		{/if}

		{#if landState == 2}
			<Plot />
		{/if}

		{#if landState == 3}
			<Yard />
		{/if}
	</Modal>
{/if}
