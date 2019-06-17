<template>
    <div class="wraper">
        <div class="user-info">账户余额：5000</div>
        <div v-if="type === 'index'" class="user-info">用户：创造之</div>
        <router-link to="/" v-if="type === 'game'" class="user-info">余额充值 -></router-link>
    </div>
</template>

<script>
    export default {
        name: "user-info",
        props: {
            type: String,
        },
    }
</script>

<style scoped>
    .wraper {
        height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .user-info {
        width: 45%;
        height: 100%;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }
</style>