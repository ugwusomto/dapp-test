<style>
.show-mobile {
	position: relative;
}
.gradient1 {
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%) matrix(-0.1, 0.99, 0.99, 0.1, 0, 0) !important;
	width: 489.5px;
	height: 398.78px;
	background: #f7a733;
	filter: blur(240px);
}
.gradient2 {
	position: absolute;
	left: -161px;
	top: 50%;
	transform: translateY(-50%) rotate(-41.39deg) !important;
	width: 286.43px;
	height: 243.48px;
	background: #ffbe00;
	filter: blur(250px);
}
.gradient3 {
	position: absolute;
	width: 232.74px;
	height: 197.84px;
	right: -51.58px;
	bottom: 0;
	background: #ffbe00;
	filter: blur(200px);
	transform: rotate(-41.39deg);
}
.hero-body {
	position: relative;
}
.shell-bullets {
	display: flex;

	vertical-align: top;
	margin-right: 20px;
}

.how-bg {
	height: 792px;
	background-size: cover;
}
@media only screen and (max-width: 768px) {
	.slide-contents {
		flex-direction: column;
		align-items: center;
		grid-row-gap: 13.75px;
	}
	.gradient1,
	.gradient2,
	.gradient3 {
		display: none;
	}
}
.slide-contents div {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 500;
	font-size: 56px;
	line-height: 160%;

	/* or 90px */
	letter-spacing: 0.01em;
	color: #ffffff;
}
.slide-contents span {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 160%;
	letter-spacing: 0.01em;
	color: #ffffff;
	width: 277px;
	height: 79px;
}
@media only screen and (max-width: 768px) {
	.slide-contents span {
		font-size: 12px;
		line-height: 138%;
		text-align: center;
		letter-spacing: 0.01em;
		color: #cfcfcf;
		max-width: 180px;
		height: 59px;
	}
}

.bullets-mobile {
	font-weight: 500 !important;
	font-size: 26px !important;
	line-height: 160% !important;
	letter-spacing: -0.01em !important;
}
.shell-img {
	display: flex;
	justify-content: left;
}
.shell-img img {
	margin-left: 7rem;
}

.lift {
	left: 9.14%;
	z-index: 8;
	position: absolute;
	bottom: 0;
}

.guide {
	width: 459px;
	margin-left: 1.5rem;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 500;
	font-size: 26px;
	line-height: 160%;
	/* or 42px */
	letter-spacing: 0.01em;
	color: #ffffff;
}

.align-clean {
	align-items: center;
	margin-top: 5rem;
}

@media (min-width: 250px) and (max-width: 768px) {
	.how {
		width: 247.61px;
		height: 55.11px;
		font-weight: 900;
		font-size: 32px;
		line-height: 100%;
		/* or 32px */
		letter-spacing: -0.03em;
		text-transform: uppercase;
		color: #ffffff;
		text-align: left;
		left: 0;
	}

	.guide {
		width: 174px;
		height: 38.64px;
		font-family: 'Inter';
		font-style: normal;
		font-weight: 850;
		font-size: 14px;
		line-height: 160%;
		/* or 19px */
		margin-top: 2rem;
		text-align: center;
		letter-spacing: 0.01em;
	}

	.left-ray {
		background-color: black;
	}

	.mb-no-margin {
		margin-top: 0 !important;
		width: 10rem;
	}

	.anchor-img {
		height: 10rem;
	}
	.is-half {
		text-align: center;
	}
	.is-half img {
		width: 15rem;
	}

	.slide-contents span {
		font-size: 14px;
	}
}
@media (min-width: 768px) {
	.howpng {
		margin-left: 100px;
	}
}
</style>

<section class="how-bg hero is-fullheight">
	<div class="hero-body">
		<div class="gradient1"></div>
		<div class="gradient2"></div>
		<div class="gradient3"></div>
		<div class="flex flex-column hide-mobile" style="width:95%; position: relative">
			<div class="columns">
				<div class="column">
					<div></div>
				</div>
				<div class="column is-half">
					<img class='howpng' src="how.png" alt="" style="width:60%;" />
				</div>
			</div>
			<div class="columns">
				<div class="column">
					<div class="shell-img">
						<img src="gf2.gif" alt="" style="width:509px" />
					</div>
				</div>
				<div class="flex flex-column" style="width:40%;">
					<div
						class="flex slide-contents"
						style="width:100%"
						data-aos="fade-up"
						data-aos-offset="200"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-mirror="true"
						data-aos-once="true">
						<div class="shell-bullets">
							<img src="shell_new.png" alt="" style="height: 30px;" />
						</div>
						<span>Click on connect wallet button and select wallet</span>
					</div>

					<div
						class="flex slide-contents"
						style="width:100%"
						data-aos="fade-right"
						data-aos-offset="200"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-mirror="true"
						data-aos-once="true">
						<div class="shell-bullets">
							<img src="shell_new.png" alt="" style="height: 30px;" />
						</div>
						<span>Select the Atlantus Tokenized Land you want</span>
					</div>

					<div
						class="flex  slide-contents"
						style="width:100%"
						data-aos="fade-up"
						data-aos-offset="200"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-mirror="true"
						data-aos-once="true">
						<div class="shell-bullets">
							<img src="shell_new.png" alt="" style="height: 30px;" />
						</div>
						<span>Enter the amount of Land NFT you want to purchase</span>
					</div>

					<div
						class="flex slide-contents"
						style="width:100%"
						data-aos="fade-up"
						data-aos-offset="200"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-mirror="true"
						data-aos-once="true">
						<div class="shell-bullets">
							<img src="shell_new.png" alt="" style="height: 30px;" />
						</div>
						<span>Approve the contract and mint your land NFT</span>
					</div>
				</div>
			</div>
		</div>

		<div class="show-mobile">
			<div class="columns">
				<div class="column is-half">
					<img src="how.png" style="width:250px" alt="" />
				</div>
				<div class="column">
					<div class="flex flex-column gap-between">
						<div class="flex  slide-contents" style="width:100%">
							<img src="shell_new.png" alt="" style="height: 30px;" />
							<span>Click on connect wallet button and select wallet</span>
						</div>
						<div class="flex  slide-contents" style="width:100%">
							<img src="shell_new.png" alt="" style="height: 30px;" />
							<span>Select Land NFT</span>
						</div>
						<div class="flex slide-contents" style="width:100%">
							<img src="shell_new.png" alt="" style="height: 30px;" />
							<span>Enter amount of NFT</span>
						</div>
						<div class="flex slide-contents" style="width:100%">
							<img src="shell_new.png" alt="" style="height: 30px;" />
							<span>Approve and mint land NFT</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
