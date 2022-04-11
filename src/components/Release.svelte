<section class="release-bg hero is-fullheight ">
	<div class='gradient1' />
	<div class="hero-body is-center " style="width:100%">
		<div class="flex" style="width:80%">
			<div class="mobile">
				<h1 class="text-public">Public Lands Release Strategy</h1>
				<div class="bullet-list">
					<span>100 acres per release</span>
					<span>800 of 2560 acres total for sale</span>
					<span>Quadrupling of cost per acre per release</span>
				</div>
			</div>
		</div>
	</div>
	<header class="movingHeader flex">
		<!-- svelte-ignore a11y-distracting-elements -->
		<marquee loop="" behavior="scroll" direction="left">
			<div class="flex gap-between">
				<div class="batch-container">
					<strong>First Batch</strong>
					<span>{'\u00a0'}</span>
					<span>STATUS: Sold Out</span>
				</div>
				<div class="batch-container">
					<span>Acre : $2,560</span>
					<span>Plot: $426</span>
					<span>Yard: Unavailable</span>
				</div>
				<div class="line" />

				<div class="batch-container">
					<strong>Second Batch</strong>
					<span>{'\u00a0'}</span>
					<span>STATUS: Sold Out</span>
				</div>
				<div class="batch-container">
					<span>Acre : $8,800</span>
					<span>Plot: $1,466</span>
					<span>Yard: Unavailable</span>
				</div>
				<div class="line" />

				<div class="batch-container">
					<strong>Third Batch</strong>
					<span>{'\u00a0'}</span>
					<span>STATUS: Available</span>
				</div>
				<div class="batch-container">
					<span>Acre : $35,200 x 24</span>
					<span>Plot: $5,867 x 216</span>
					<span>Yard: $652 x 2160</span>
				</div>
				<div class="line" />

				<div class="batch-container">
					<strong>Fourth Batch</strong>
					<span>{'\u00a0'}</span>
					<span>STATUS: Pending</span>
				</div>
				<div class="batch-container">
					<span>Acre : $140,800 x 20</span>
					<span>Plot: $23,467 x 228</span>
					<span>Yard: $2,607 x 2,268</span>
				</div>
				<div class="line" />

				<div class="batch-container">
					<strong>Fifth Batch</strong>
					<span>{'\u00a0'}</span>
					<span>STATUS: Pending</span>
				</div>
				<div class="batch-container">
					<span>Acre : $563,200 x 16</span>
					<span>Plot: $93,867 x 240</span>
					<span>Yard: $10,429 x 2,376</span>
				</div>
				<div class="line" />

				<div class="batch-container">
					<strong>Sixth Batch</strong>
					<span>{'\u00a0'}</span>
					<span>STATUS: Pending</span>
				</div>
				<div class="batch-container">
					<span>Acre : $2,252,800 x 12</span>
					<span>Plot: $375,467 x 256</span>
					<span>Yard: $41,719 x 2,484</span>
				</div>
				<div class="line" />

				<div class="batch-container">
					<strong>Seventh Batch</strong>
					<span>{'\u00a0'}</span>
					<span>STATUS: Pending</span>
				</div>
				<div class="batch-container">
					<span>Acre : $9,011,200 x 8</span>
					<span>Plot: $1,501,867 x 264</span>
					<span>Yard: $166,874 x 2,592</span>
				</div>
				<div class="line" />

				<div class="batch-container">
					<strong>Eight Batch</strong>
					<span>{'\u00a0'}</span>
					<span>STATUS: Pending</span>
				</div>
				<div class="batch-container">
					<span>Acre : $36,044,800 x 4</span>
					<span>Plot: $6,007,467 x 276</span>
					<span>Yard: $867,496 x 2,700</span>
				</div>
				<div class="line" />
			</div>
		</marquee>
	</header>
</section>

<style>
	.hero-body {
		margin-bottom: 80px;
	}
	.movingHeader {
		margin-bottom: 100px;
		z-index: -1;
		width: 100%;
		height: 153px;
		top: 0;
		left: -194px;
		z-index: 5;
		/* background: linear-gradient(112.92deg, rgba(255, 255, 255, 0.054) 0%, rgba(255, 252, 252, 0.026) 100%); */
		/* backdrop-filter: blur(113.333px); */
		justify-content: space-between;
		background-image: url(assets/banner/glass_new.svg);
		align-items: center;
		background-size: 100% 100%;
	}
	.movingHeader >marquee >div{
		margin-left: -100%;
	}
	@media (max-width: 768px) {
		.hero-body {
			margin-bottom: 0;
		}
		.movingHeader {
			margin-top: 43.44px;
			margin-bottom: 43.44px;
			background-image: url(assets/banner/glass_mobile.svg);
		}
	}
	.batch-container {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin: 5rem 1rem;
	}
	.line {
		height: 75px;
		border: solid thin #C4C4C4;
	}

	@media (max-width: 768px) {
		.batch-container {
			gap: 0.25rem;
		}
		.line {
			height: 30px;
		}
	}
	.batch-container strong {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 600;
		font-size: 18.1333px;
		line-height: 123.02%;
		/* or 22px */

		letter-spacing: -0.025em;
		text-transform: capitalize;

		color: #f7a733;
		width: 125.45px;
	}

	.batch-container span {
		font-family: Inter;
		font-size: 14px;
		font-style: normal;
		font-weight: 300;
		line-height: 23px;
		letter-spacing: 0.02em;
		text-align: left;
		color: white;
	}
	.gradient1 {
		position: absolute;
		width: 1065.23px;
		height: 677.31px;
		right: -50%;
		background: #2980D0;
		filter: blur(236.891px);
		transform: matrix(-0.71, 0.51, -0.97, -0.71, 0, 0);
	}
	.release-bg {
		height: auto;
		position: relative;
		background-size: cover;
		min-height: unset;
		margin-top: 80px;
	}
	@media only screen and (max-width: 768px) {
		.gradient1 {
			display: none;
		}
		.release-bg {
			margin-top: 0;
		}
		.batch-container span {
			font-weight: 400;
			font-size: 6.95224px;
			line-height: 183.52%;
			/* or 13px */

			letter-spacing: 0.02em;
		}
		.batch-container strong {
			font-weight: 600;
			font-size: 7.94542px;
			line-height: 123.02%;
			width: 40px;
		}
	}
	.text-public {
		font-family: 'Monument Extended';

		width: 670px;

		left: 135px;
		margin-top: 2rem;
		font-weight: 900;
		font-size: 48px;
		line-height: 105.5%;
		/* or 51px */

		letter-spacing: -0.03em;
		text-transform: uppercase;

		color: #ffffff;
	}
	.bullet-list {
		display: flex;
		flex-direction: column;
		list-style-type: circle;
		list-style: circle;
		margin-top: 5rem;
	}
	.bullet-list span {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 500;
		font-size: 23px;
		line-height: 181%;
		display: list-item; /* This has to be "list-item"                                               */
		list-style-type: disc; /* See https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type     */
		list-style-position: inside; /* See https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position */
		/* or 36px */

		letter-spacing: 0.01em;

		color: #ffffff;
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
		.bullet-list {
			width: 300px;
			height: 88px;
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
