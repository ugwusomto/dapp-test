<script>
    import WalletList from "../wallet/WalletList.svelte";
    import Modal from "../modal/Modal.svelte";
    import { HandleModal } from "$lib/modal";
    export let msg
    export let submsg
    export let  actionType
</script>

<div class="container">
    <div style="margin-top: 50%;" class="flex flex-column is-center">
        <div class="alert-container">
            <i class='bx bxs-x-circle bx-tada' ></i>
        </div>
        <div class="flex flex-column gap is-center">
            <div class="alert-message">{msg}</div>

        <div class="sub-alert-message">{submsg}</div>
        </div>
        {#if actionType == 'connect'}
            <!-- svelte-ignore missing-declaration -->
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="btn is-blue-btn" on:click="{()=>{HandleModal('wallets')}}">Connect Wallet</a>
        {/if}
        {#if actionType == 'mint'}
            <a class="btn is-blue-btn">Retry</a>
        {/if}
        {#if actionType == 'fund'}
             <a class="btn is-blue-btn">Go Back</a>
        {/if}

    </div>
</div>

<Modal id='wallets' on:clicked={()=>{HandleModal('wallets')}}>
    <WalletList></WalletList>
</Modal>

<style>
    .alert-container{
        background-color: white;
        clip-path: circle();
        width: 5rem;
        display: flex;
        justify-items: center;
        align-items: center;
        flex-direction: column;
    }
    .alert-container i{
        font-size: xx-large;
        color: #CE1111;
    }
    .alert-message{

        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 30.7225px;
        line-height: 41px;
        /* or 133% */
        text-align: center;
        color: #FFFFFF;
    }
    .sub-alert-message{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 15.157px;
        line-height: 23px;
        color: white;
    }
</style>