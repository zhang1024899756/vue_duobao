<template>
    <div class="wraper">
        <div class="header">规则说明</div>
        <div class="content">
            <div class="content-title">大小局</div>
            <div class="discreption">平台将向您的微信打款0.1元，以微信提现产生的订单号的最后一位（大小）为开奖结果，该订单号由腾讯微信服务器产生，绝对公平公正且唯一。</div>
            <div class="table-wrap">
                <v-table
                        :width="300"
                        :columns="columns"
                        :table-data="table1Data"
                        :show-vertical-border="false"
                ></v-table>
            </div>
            <div class="content-title">单双局</div>
            <div class="discreption">平台将向您的微信打款0.1元，以微信提现产生的订单号的最后一位（单双）为开奖结果，该订单号由腾讯微信服务器产生，绝对公平公正且唯一。</div>
            <div class="table-wrap">
                <v-table
                        :width="300"
                        :columns="columns"
                        :table-data="table2Data"
                        :show-vertical-border="false"
                ></v-table>
            </div>
            <div class="content-title">龙虎局</div>
            <div class="discreption">平台将向您的微信打款0.1元，以微信提现产生的订单号的倒数第三位 A 以及为后一位 B 为开奖结果，该订单号由腾讯微信服务器产生，绝对公平公正且唯一。</div>
            <div class="table-wrap">
                <v-table
                        :width="300"
                        :columns="columns"
                        :table-data="table3Data"
                        :show-vertical-border="false"
                ></v-table>
            </div>
            <div @click="$emit('close')" class="close-btn">已了解规则</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {

        },
        data() {
            return {
                table1Data: [
                    {"number":"5|6|7|8|9","result":"大","peilv":"2.00倍"},
                    {"number":"0|1|2|3|4","result":"小","peilv":"2.00倍"},
                ],
                table2Data: [
                    {"number":"1|3|5|7|9","result":"单","peilv":"2.00倍"},
                    {"number":"0|2|4|6|8","result":"双","peilv":"2.00倍"},
                ],
                table3Data: [
                    {"number":"A>B","result":"龙","peilv":"2.00倍"},
                    {"number":"A<B","result":"虎","peilv":"2.00倍"},
                    {"number":"A=B","result":"和","peilv":"7.00倍"},
                ],
                columns: [
                    {field: 'number', title:'开奖结果', width: 120, titleAlign: 'center',columnAlign:'center',titleCellClassName:'table-title',isResize:true},
                    {field: 'result', title: '夺宝结果', width: 80, titleAlign: 'center',columnAlign:'center',titleCellClassName:'table-title',isResize:true},
                    {field: 'peilv', title: '赔率', titleAlign: 'center',columnAlign:'center',titleCellClassName:'table-title',isResize:true},
                ]
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
    .discreption {
        color: #001300;
        line-height: 30px;
        font-size: 14px;
        text-align: justify;
    }
    .content-title {
        text-align: center;
        font-size: 18px;
        color: #923c0f;
        line-height: 40px;
    }
    .table-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
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
    .wraper::-webkit-scrollbar {display:none}
    .wraper {
        height: 100%;
        overflow: scroll;
    }
</style>