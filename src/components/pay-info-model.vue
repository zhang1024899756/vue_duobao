<template>
    <div>
        <div class="header">资费信息</div>
        <div class="content">
            <div class="discreption">
                sdffffffffffffffffaergaerherheth
            </div>
            <div class="tlist-table">
                <div>下注费</div>
                <div>1.00元</div>
            </div>
            <div class="liner"/>
            <div class="tlist-table">
                <div>通知费</div>
                <div>1.00元</div>
            </div>
            <div @click="$emit('close')" class="close-btn">已了解规则</div>
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
    .close-btn {
        width: 80%;
        height: 40px;
        border: 1px solid #ce6708;
        color: #ce6708;
        border-radius: 5px;
        margin: 10px auto 10px;
        line-height: 40px;
    }
    .liner {
        height: 1px;
        background-color: #ce6708;
    }
    .discreption {
        color: #001300;
        line-height: 30px;
        font-size: 14px;
        text-align: justify;
    }
    .tlist-table {
        height: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        color: #4a4a4a;
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