<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let id;
</script>

<div>
	<div {id} class="chlz-modal">
		<div class="chlz-modal-content">
			<header class="chlz-modal-header">
				<span
					on:click={() => {
						dispatch('clicked');
					}}
					class="chlz-modal-close">&times;</span
				>
			</header>
			<slot />
		</div>
	</div>
</div>

<style>
	.chlz-modal {
		display: none; /* Hidden by default */
		position: fixed; /* Stay in place */
		z-index: 1; /* Sit on top */
		padding-top: 100px; /* Location of the box */
		left: 0;
		top: 0;
		width: 100%; /* Full width */
		height: 100%; /* Full height */
		overflow: auto; /* Enable scroll if needed */
		background-color: rgba(000, 000, 000, 0.8);
		z-index: 1000;
	}

	/* Modal Content */
	.chlz-modal-content {
		/* border: 2px solid #fff; */
		padding: 10px;
		margin: auto;
		width: 35%;
		min-height: 100px;
		border-radius: 11.951px;
		background-image: url(/modal/bg.png);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 30px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	}

	/* The Close Button */
	.chlz-modal-close {
		color: #fff;
		float: right;
		font-size: 28px;
		font-weight: bold;
	}

	.chlz-modal-close:hover,
	.chlz-modal-close:focus {
		color: #aaaaaa;
		text-decoration: none;
		cursor: pointer;
	}

	.chlz-modal-header {
		width: 100%;
		height: 1.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #0c0c0d;
		padding: 30px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		color: #fff;
	}

	@media only screen and (max-width: 768px) {
		.chlz-modal-content {
			width: 85%;
		}
	}
</style>
