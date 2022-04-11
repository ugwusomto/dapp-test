<style>
.partner-bg {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 76px;
}
.title {
	font-family: 'Monument Extended';
	font-style: normal;
	font-weight: 900;
	font-size: 56px;
	line-height: 105.5%;
	/* or 59px */

	text-align: center;
	letter-spacing: -0.03em;
	text-transform: uppercase;
	color: #FFFFFF;
}
@media (max-width: 768px) {
	.content_dtPartners {
		grid-column-gap: 32px !important;
	}
	.content_dtPartners >img{
		width: 40px;
	}
	
	.partner-bg {
	}
	.title {
		font-family: 'Inter';
		font-weight: bolder;
		font-size: 32px;
		width: 300px;
		line-height: 105.5%;
		letter-spacing: 0.07em;
		text-transform: uppercase;
	}
	.content_mbPartners {
		margin-top: 40px;
		max-width: 300px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		grid-column-gap: 18px!important;
		grid-row-gap: 15px!important;
	}
	.halfsize {
		-moz-transform:scale(1);
		-webkit-transform:scale(1);
		transform:scale(1);
	}
}
.content_dtPartners {
	margin-top: 60px;
	max-width: 800px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	grid-column-gap: 58px;
	grid-row-gap: 32px;
}
.content {
	display: flex;
	align-items: center;
	grid-column-gap: 71px;
}
.content img {
	height: 48px;
	width: auto;
	object-fit: cover;
}
.content >img:last-of-type {
	height: 32px;
}
.content >img:nth-of-type(3) {
	height: 64px;
}
@media (max-width: 768px) {
	.content {
		grid-column-gap: 28.91px;
	}
	.content img {
		height: 30px;
	}
	.content >img:nth-of-type(3) {
		height: 40px;
	}
	.content >img:last-of-type {
		height: 18px;
	}
}
</style>
<div class="partner-bg hero">
	<div class="title">FEATURED TOKENS</div>
	<div class="content">
		<img src="assets/partners/3.png" alt="" />
		<img src="assets/partners/9.png" alt="" />
		<img src="assets/partners/1.png" alt="" />
		<img src="assets/partners/8.png" alt="" />
	</div>
</div>
