<template>
    <div>
        <div class="header">联系客服</div>
        <div class="content">
            <div>
                <img class="image" src="http://5b0988e595225.cdn.sohucs.com/images/20181223/9f25ade606f14d71a6fb9f4b7885c6fc.jpeg" alt="图片">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        }
    }
</script>

<style scoped>
    .image{
        width: 300px;
        height: 300px;
    }
    .close-btn {
        width: 80%;
        height: 40px;
        border: 1px solid #ce6708;
        color: #ce6708;
        border-radius: 5px;
        margin: 10px auto 10px;
        line-height: 40px;
    }
    .content {
        padding: 10px;
        text-align: center;
    }
    .header {
        height: 40px;
        background-color: #ce6708;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 20px;
    }
</style>