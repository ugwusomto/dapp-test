
<style>
	.learn-more-btn {
		max-width: 134px;
		background: linear-gradient(180deg, #0053F3 0%, rgba(0, 0, 0, 0) 100%);
		mix-blend-mode: normal;
		border: 0.876921px solid #FFFFFF;
		box-sizing: border-box;
		border-radius: 7.89229px;

		font-family: 'PP Neue Machina';
		font-style: normal;
		font-weight: 800;
		font-size: 15.4338px;
		line-height: 153.5%;
		letter-spacing: -0.02em;
		color: #FFFFFF;
	}
	.learnmore-container {
		position: absolute;
		top: 50%;
		left: 79.36px;
		transform: translateY(-50%);
		display: flex;
		flex-direction: column;
		grid-row-gap: 32px;
	}
	.learnmore-container >div:first-of-type {
		max-width: 430.74px;
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 15.4338px;
		line-height: 153.5%;
		letter-spacing: 0.055em;
		color: #CBCBCB;
	}
	.main {
		display: flex; justify-content: center; margin-top: 113.79px; position: relative;
	}
	.earth {
		position: absolute;
		top: 50%;
		right: -167.45px;
		transform: translateY(-50%);
		width: 896.45px;
		height: 505px;
	}
	.logo {
		position: absolute;
		bottom: 69.61px;
		right: 38.49px;
	}
	@media (max-width: 768px) {
		.learn-more-btn {
			max-width: 44.36px;
		}
		.learnmore-container {
			left: 21px;
			grid-row-gap: 14px;
		}
		.learnmore-container >div:first-of-type {
			max-width: 142.42px;
			font-weight: 400;
			font-size: 5.1517px;
			line-height: 153.5%;
		}
		.learn-more-btn {
			font-weight: 800;
			font-size: 5.1517px;
			line-height: 153.5%;
			letter-spacing: -0.02em;
			border-radius: 3.22812px;
			border: 0.35868px solid #FFFFFF;
		}
		.boost {
			right: 16px !important;
			width: 125.65px;
			height: 120.51px;
		}
		.logo {
			right: 11.77px !important;
			bottom: 16px !important;
			width: 23.23px;
			height: 19.5px;
		}
		.main {
			margin-left: 24px;
			margin-right: 24px;
		}
		.earth {
			bottom: -14.17px;
			top: unset;
			right: -75.66px;
			transform: none;
			width: 284.33px;
			height: 160.17px;
		}
	}
</style>
<section class='main'>
	<div style='position: relative'>
		<img class='is-hidden-touch' src='ads/web.png' alt='' />
		<img class='is-hidden-desktop' src='ads/mobile.png' alt='' />
		<img class='earth' src='ads/earth.gif' alt='' />
		<div class='learnmore-container'>
			<img class='is-hidden-touch' src='ads/qurrent.png' alt='' />
			<img class='is-hidden-desktop' src='ads/qurrent_mobile.png' alt='' />
			<div>This powers our model for 21st century financial and digital asset management systems.</div>
			<!-- <button class='learn-more-btn' >Learn more</button> -->
		</div>
	</div>
</section>