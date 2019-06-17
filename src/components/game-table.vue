<template>
    <div>
        <div v-if="type === 'bs'" class="row-center">
            <div @click="selectBtnDS = 'b'" :class="selectBtnDS === 'b' ? 'select-btn-active':'select-btn'">大</div>
            <v-icon name="angle-left" style="color: white" scale="2"/>
            <span class="sele-tip">选择大小和数量</span>
            <v-icon name="angle-right" style="color: white" scale="2"/>
            <div @click="selectBtnDS = 's'" :class="selectBtnDS === 's' ? 'select-btn-active':'select-btn'">小</div>
        </div>
        <div v-if="type === 'sd'" class="row-center">
            <div @click="selectBtnSD = 's'" :class="selectBtnSD === 's' ? 'select-btn-active':'select-btn'">单</div>
            <v-icon name="angle-left" style="color: white" scale="2"/>
            <span class="sele-tip">选择单双和数量</span>
            <v-icon name="angle-right" style="color: white" scale="2"/>
            <div @click="selectBtnSD = 'd'" :class="selectBtnSD === 'd' ? 'select-btn-active':'select-btn'">双</div>
        </div>
        <div v-if="type === 'dth'" class="row-center">
            <div @click="selectBtnDTH = 'd'" :class="selectBtnDTH === 'd' ? 'select-btn-active':'select-btn'">龙</div>
            <div @click="selectBtnDTH = 't'" :class="selectBtnDTH === 't' ? 'select-btn-active':'select-btn'">虎</div>
            <div @click="selectBtnDTH = 'h'" :class="selectBtnDTH === 'h' ? 'select-btn-active':'select-btn'">和</div>
        </div>
        <div class="row-center">
            <vue-numeric-input id="se-number"  v-model="selectNumber" :min="1" :max="100" :step="1" align="center"></vue-numeric-input>
        </div>

        <div class="row-center">
            <div class="submit-start">开始夺宝</div>
            <div class="submit-look">看一手</div>
        </div>

        <div class="history-wrap">
            <span style="color: white;font-size: 14px;margin: 5px;">
                {{history.length === 0 ? '新玩家' : '夺宝记录'}}
            </span>
            <ul id="history-ul">
                <li
                    :class="type === 'dth' ? 'dt-history-li' :'history-li'"
                    v-for="(item,index) in history"
                    :key="index"
                >
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import 'vue-awesome/icons/angle-left'
    import 'vue-awesome/icons/angle-right'
    import VueNumericInput from 'vue-numeric-input'
    export default {
        components: {
            VueNumericInput
        },
        data () {
            return {
                selectBtnDS: 'b',
                selectBtnSD: 's',
                selectBtnDTH: 'd',
                selectNumber: 1,
            }
        },
        props:{
            history:Array,
            type:String,
        }
    }
</script>

<style scoped>
    .submit-look {
        width: 100px;
        height: 50px;
        background-color: rgb(255, 95, 18);
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        margin: 5px;
    }
    .submit-start {
        width: 200px;
        height: 50px;
        background-color: rgb(255, 95, 18);
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        margin: 5px;
    }
    .dt-history-li {
        width: 50px;
        height: 30px;
        border-radius: 30px;
        background-color: white;
        color: #eca851;
        margin: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .history-li {
        width: 30px;
        height: 30px;
        border-radius: 30px;
        background-color: white;
        color: #eca851;
        margin: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #history-ul {
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .history-wrap {
        width: 100%;
        height: auto;
        border: 1px dashed white;
        margin-top: 10px;
    }
    .sele-tip {
        font-size: 13px;
        color: white;
        margin-left: 5px;
        margin-right: 5px;
    }
    .select-btn {
        width: 100px;
        height: 100px;
        border-radius: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        border:2px solid white;
        color: white;
        margin-left: 5px;
        margin-right: 5px;
    }
    .select-btn-active {
        width: 100px;
        height: 100px;
        border-radius: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        border:2px solid white;
        background-color: white;
        color: #eca851;
        margin-left: 5px;
        margin-right: 5px;
    }
    .row-center {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
</style>