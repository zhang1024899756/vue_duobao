<template>
    <div class="wrap">
        <span class="span">余额</span>
        <div class="up-wrap">
            <ul class="up-ul">
                <li
                    @click="currentMuch = item"
                    :class="currentMuch === item ? 'select-up-li' :'up-li'"
                    v-for="(item,index) in upList"
                    :key="index"
                >{{item}} 元</li>
            </ul>
        </div>
        <div class="submit-btn">微信充值</div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                upList:[12,24,50,100,200,400,500,1000,2000,],
                currentMuch: 12,
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .submit-btn {
        height: 40px;
        background-color: #00a763;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        margin-top: 10px;
        margin-bottom: 10px;
        color: white;
    }
    .up-li {
        width: 30%;
        height: 40px;
        border: 1px solid #ff301f;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 5px;
        margin-bottom: 10px;
    }
    .select-up-li {
        width: 30%;
        height: 40px;
        background-color: #ff301f;
        color: white;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 5px;
        margin-bottom: 10px;
    }
    .up-ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .span {
        font-size: 14px;
        margin: 10px 10px 10px 0px;
        color: #00a763;
    }
    .up-wrap {
        margin-top: 10px;
        height: auto;
    }
    .wrap {
        height: 100vh;
        padding: 10px;
        padding-top: 30px;
        position: relative;
        color: #4f4f4f;
    }
</style>