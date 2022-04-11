<style>
.powered {
	display: flex;
	align-items: center;
}
.powered > div {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	letter-spacing: -0.01em;
	color: #ffffff;
	margin-top: -4px;
	padding-right: 10px;
}
.powered > img {
		height: 16px;
	}
.terms {
	display: flex;
	grid-column-gap: 16px;
	font-weight: 500;
	font-size: 16px;
	line-height: 164%;
	letter-spacing: -0.01em;
	color: white;
}
.power {
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding-left: 107px;
	padding-right: 107px;
}
@media (max-width: 768px) {
	.powered >div {
		margin-top: -2px;
	}
	.socials > img {
		width: 15.6px;
		height: 15.6px !important;
	}
	.power {
		padding-left: 8px;
		padding-right: 8px;
	}
	.powered > div {
		font-weight: 400;
		font-size: 8px;
		padding-right: 4px;
		line-height: 6px;
	}
	.powered > img {
		height: 5px;
	}
	.terms {
		font-weight: 500;
		font-size: 7px;
		line-height: 164%;
		letter-spacing: -0.01em;
		grid-column-gap: 8px;
	}
}
.socials {
	display: flex;
	grid-column-gap: 18.36px;
	align-items: center;
}
.content {
	position: relative;
}
.content img {
	position: absolute;
	top: 0px;
	right: 0px;
}
.footer-bg {
	background-size: cover;
	height: auto;
	position: relative;
	min-height: unset;
}
.footer2-bg {
	background-image: url(assets/banner/glass.svg);
}
.footer-container {
	padding: 1rem 1rem;
}
.footer-inner {
	background-image: url('./ads/stripe.png');
	background: rgb(53, 26, 97);
	background: linear-gradient(29deg, rgb(53, 26, 97) 0%, rgb(0, 2, 131) 50%, rgb(0, 99, 84) 100%);
	box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
		rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
	border-radius: 20px;
	max-height: 100%;
	max-width: 100%;
	height: 25rem;
	background-position: center;
	background-size: cover;
	padding: 3rem;
}

.intro-ads {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 700;
	font-size: 45.1765px;
	line-height: 48px;
	width: 494.82px;

	color: #e6e6e6;
}
.sub-intro {
	width: 433.41px;
	height: 48.71px;

	font-family: 'Inter';
	font-style: normal;
	font-weight: 300;
	font-size: 12px;
	line-height: 153.5%;
	/* or 24px */
	letter-spacing: 0.055em;
	color: #b6b6b6;
	padding-bottom: 13px;
	padding-top: 13px;
}

.footer-ctl {
	width: 135px;
	height: 44.12px;
	background: linear-gradient(180deg, #0053f3 0%, rgba(0, 0, 0, 0) 100%);
	mix-blend-mode: normal;
	border: 0.882353px solid #ffffff;
	box-sizing: border-box;
	border-radius: 7.94118px;
	color: white;
	font-weight: bold;
}

.footer-glass {
	/* position: absolute; */

	height: 30rem;
	width: 1173.46px;
	top: 81.36px;
	z-index: 1;
	background-image: url(assets/banner/glass.svg);
	border-top-left-radius: 40px;
	border-top-right-radius: 40px;
	padding: 0.75rem;
	/* Note: backdrop-filter has minimal browser support */

	/* border-radius: 40px 0px 0px 40px; */
	/* transform: matrix(-0.01, 1, -1, -0.01, 0, 0); */
}

.power img {
}

@media only screen and (max-width: 768px) {
	.movingHeader {
		height: 6rem;
	}

	.footer-inner {
		background-image: url(/ads/mobile.png);
		padding: 0 0 0 0;
	}
	.intro-ads {
		font-size: 34px;
		width: 294.82px;
	}
	.sub-intro {
		width: 233.41px;
	}
	.footer-ctl {
		margin-top: 3rem;
	}
	.power img {
		height: 1rem;
	}
}
</style>

<div class="footer-bg hero is-fullheight">
	<div class="footer-container flex flex-column is-center">
		<div class="flex is-center power">
			<div class="socials">
				<a href="https://t.me/JoinTheCityofAtlantus" target="_blank">
					<img src="assets/socials/1.png" alt="" />
				</a>
				<img src="assets/socials/2.png" alt="" />
			</div>
			<div class="powered">
				<div>powered by</div>
				<img src="/ads/Qrrent_logo.png" alt="" srcset="" />
			</div>
			<div class="terms">
				<a href="https://pgs.chlz.mobi/tos" target="_blank">
					<span>Terms of Use</span>
				</a>
				<span>/</span>
				<a href="https://pgs.chlz.mobi/privacy" target="_blank">
					<span>Privacy Policy</span>
				</a>
			</div>
		</div>
	</div>
</div>
