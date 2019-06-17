<template>
    <div class="wrap">
        <div class="game-title">
            <v-icon name="khanda" scale="3"/>
            <span style="margin-left: 10px;">微信夺宝</span>
        </div>
        <div>
            <Tabs
                :tabs="tabs"
                :currentTab="currentTab"
                :wrapper-class="'tabs'"
                :tab-class="'tabs__item'"
                :tab-active-class="'tabs__item_active'"
                :line-class="'tabs__active-line'"
                @onClick="handleClick"
            />
            <div class="content">
                <div v-if="currentTab === 'tab1'">
                    <GameTable type="bs" :history="history.bs"></GameTable>
                </div>
                <div v-if="currentTab === 'tab2'">
                    <GameTable type="sd" :history="history.sd"></GameTable>
                </div>
                <div v-if="currentTab === 'tab3'">
                    <GameTable type="dth" :history="history.dt"></GameTable>
                </div>
            </div>
        </div>
        <div class="btn-list">
            <div @click="lookRule" class="info-btn">查看规则</div>
            <div @click="payMessage" class="info-btn">资费信息</div>
            <div @click="showManger" class="info-btn">联系客服</div>
        </div>
        <div class="user-info">
            <UserInfo type="game"></UserInfo>
        </div>
    </div>
</template>

<script>
    import Tabs from 'vue-tabs-with-active-line';
    import UserInfo from '../components/user-info.vue'
    import GameTable from '../components/game-table.vue'
    import 'vue-awesome/icons/khanda'
    import RuleModel from '../components/rule-model.vue'
    import PayInfoModel from '../components/pay-info-model.vue'
    export default {
        name: "game",
        components: {
            UserInfo,
            Tabs,
            GameTable,
        },
        data () {
            return{
                tabs: [
                    { title: '大小局', value: 'tab1' },
                    { title: '单双局', value: 'tab2' },
                    { title: '龙虎局', value: 'tab3', }
                ],
                currentTab: 'tab1',
                history:{
                    bs:[4,7,1,9,4,0,3,2,7,8,3,6,4,2,1],
                    sd:[4,6,8,2,7,4,2,0,6,4,2,1,7,8],
                    dt:[262,642,752,842,593,169,158],
                }
            }
        },
        methods: {
            //切换tab
            handleClick(newTab) {
                this.currentTab = newTab;
            },
            //查看规则
            lookRule() {
                this.$modal.show(RuleModel,{
                    
                },{
                    width: '80%',
                    height: '100%',
                },{
                    draggable: true
                })
            },
            //自费信息
            payMessage() {
                this.$modal.show(PayInfoModel,{

                },{
                    width: '80%',
                    height: 'auto',
                },{
                    draggable: true
                })
            },
            //联系客服
            showManger() {
                
            },
        },
    }
</script>

<style scoped>
    .btn-list {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .info-btn {
        width: 90px;
        height: 40px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        border: 2px solid white;
        margin-left: 10px;
        margin-right: 10px;
    }
    .game-title {
        color: #ffffff;
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .content {
        margin-top: 10px;
        font-size: 20px;
        width: 95%;
        margin: 10px auto;
    }
    .user-info {
        width: 95%;
        background-color: rgb(255, 95, 18);
        position: absolute;
        bottom: 40px;
    }
    .wrap {
        height: 100vh;
        padding: 10px;
    //background-color: #eca851;
        background-image: linear-gradient(to top , #feba51,#ce6708 );
        position: relative;
    }
</style>