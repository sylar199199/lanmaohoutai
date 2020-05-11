<style rel="stylesheet/scss" lang="scss"  scoped>
    $baseFontSize: 192;
    .salecustomercontent{
        display: flex;
        min-height:calc(100vh - 50px);
        margin-top:  60px;
        .content{
            flex:1;
            padding: 20px;
            .contanternews{
                .dataGeneral{
                    .searchContent{
                        margin-left: 20px;
                        .generalBox{
                            position: relative;
                            margin-right: 100px;
                            .warmText{
                                padding: 10px;
                                line-height: 20px;
                                position: absolute;
                                background-color: #ffffff;
                                box-shadow: 0px 2px 24px 0px rgba(199, 199, 199, 0.51);
                                border-radius: 4px;
                                left: -2px;
                                bottom: 90px;
                                z-index: 1000;
                                li{
                                    white-space:nowrap;
                                }
                                li:before{
                                    content: '';
                                    display: inline-block;
                                    height: 8px;
                                    width: 8px;
                                    background: #2087e6;
                                    border-radius: 50%;
                                    margin-right: 5px;
                                }
                            }
                            .iconfont{
                                margin-left: 2px;
                            }
                            .genatalCount{
                                margin: 20px 0 16px 0;
                            }
                        }
                        .generalBox:last-child{
                            margin-right: 20px;
                        }
                    }
                }
                .bannerTable{
                    background: #fff;
                    margin-top: 15px;
                    padding: 10px 0 100px;
                    .borderButton{
                        margin: 0 20px;
                    }
                    .noData{
                        text-align: center;
                        padding-top: 30px;
                    }
                    .table{
                        font-size: 12px;
                        border: 1px solid #f6f6f6;
                        margin: 10px  20px;
                        width: 937px;

                        tr{
                            border-bottom:1px solid #f6f6f6;
                            th{
                                font-size: 12px;
                                text-align: center;
                                background: #f6f6f6;
                                position: relative;
                                .iconshengjiangxu{
                                    font-size: 16px;
                                    margin-left: 5px;
                                }
                                .iconwenhao{
                                    font-size: 16px;
                                    margin-left: 5px;
                                }
                                .warmText{
                                    display: inline-block;
                                    width: 200px;
                                    padding: 10px;
                                    line-height: 20px;
                                    position: absolute;
                                    background-color: #ffffff;
                                    box-shadow: 0px 2px 24px 0px rgba(199, 199, 199, 0.51);
                                    border-radius: 4px;
                                    left: -2px;
                                    bottom: 45px;
                                    z-index: 10;
                                }
                            }
                            th:nth-child(3){
                                text-align: left;
                            }
                            td{
                                text-align: center;
                                padding: 20px;
                                .undercarriageReason{
                                    min-width: 120px;
                                    position: absolute;
                                    padding: 10px;
                                    line-height: 20px;
                                    background-color: #ffffff;
                                    box-shadow: 0px 2px 24px 0px rgba(199, 199, 199, 0.51);
                                    border-radius: 4px;
                                    left: -44px;
                                    top: -18px;
                                }
                                .line{
                                    display: inline-block;
                                    height: 8px;
                                    width: 3px;
                                    background: #eee;
                                    margin: 0 10px;
                                }
                                .productImg{
                                    width: 116px;
                                    height: 60px;
                                    max-width: 116px;
                                    max-height: 60px;
                                }
                                .productBox{
                                    display: flex;
                                    flex-direction: column;
                                    height: 60px;
                                    justify-content: space-between;
                                    padding-left: 10px;
                                    .productText{
                                        margin-bottom: 0px;
                                        margin-top: 0;
                                    }
                                }

                            }
                            td:nth-of-type(2){
                                min-width: 180px;
                                max-width: 300px;
                                text-align: center;
                            }
                            td:nth-of-type(3){
                                text-align: left;
                                .imgicon{
                                    display: inline-block;
                                    vertical-align: middle;
                                    height: 20px;
                                    width: 20px;
                                    padding-right: 10px;
                                }
                            }
                            td:nth-of-type(5){
                                position: relative;
                                .warmtext{
                                    position: absolute;
                                    color: #fff;
                                    font-size: 12px;
                                    top: 50px;
                                    background: #000;
                                    padding: 4px 6px;
                                    border-radius: 4px;
                                }
                                .imgicon{
                                    display: inline-block;
                                    vertical-align: middle;
                                    height: 20px;
                                    width: 20px;
                                    margin-right: 20px;
                                }
                            }
                            .upimg{
                                display: inline-block;
                                vertical-align: middle;
                                height: 20px;
                                width: 20px;
                            }
                            .downimg{
                                display: inline-block;
                                vertical-align: middle;
                                height: 20px;
                                width: 20px;
                            }
                        }
                    }
                }
                .block{
                    text-align: right;
                    margin-top: 35px;
                    margin-right: 20px;
                }
            }
        }
    }
</style>
<template>
    <div class="general">
        <KlTop></KlTop>
        <div class="salecustomercontent contaner">
            <Aside></Aside>
            <div class="content">
                <div class="contanternews">
                    <div class="dataGeneral backWhite padding20">
                        <div class="searchContent flex clear">
                            <div class="generalBox cursor" @click="goDetail()">
                                <ul class="warmText" v-if="showOne">
                                    <li>截至昨日24点整统计</li>
                                    <li>所有渠道已支付的订单</li>
                                    <li>包含申请退货退款的订单</li>
                                </ul>
                                <p>
                                    <span class="font12 colorblack">现有积分</span>
                                    <!--<i @mouseover="showOne = true" @mouseout="showOne = false" class="iconfont cursor iconwenhao color2087 font16" ></i>-->
                                </p>
                                <p class="genatalCount colorblack fontWeight font28">{{statsManage.totalPoints}}</p>
                            </div>
                            <div class="generalBox" >
                                <ul class="warmText" v-if="showOne">
                                    <li>截至昨日24点整统计</li>
                                    <li>所有渠道已支付的订单</li>
                                    <li>包含申请退货退款的订单</li>
                                </ul>
                                <p>
                                    <span class="font12 colorblack">保护期内积分</span>
                                    <!--<i @mouseover="showOne = true" @mouseout="showOne = false" class="iconfont cursor iconwenhao color2087 font16" ></i>-->
                                </p>
                                <p class="genatalCount colorblack fontWeight font28">{{statsManage.freezePoints}}</p>
                            </div>
                            <div class="generalBox cursor" @click="goDetail()">
                                <ul class="warmText" v-if="showOne">
                                    <li>截至昨日24点整统计</li>
                                    <li>所有渠道已支付的订单</li>
                                    <li>包含申请退货退款的订单</li>
                                </ul>
                                <p>
                                    <span class="font12 colorblack">累计发放积分</span>
                                    <!--<i @mouseover="showOne = true" @mouseout="showOne = false" class="iconfont cursor iconwenhao color2087 font16" ></i>-->
                                </p>
                                <p class="genatalCount colorblack fontWeight font28">{{statsManage.accumPoints}}</p>
                            </div>
                            <div class="generalBox cursor" @click="goDetail()">
                                <ul class="warmText" v-if="showOne">
                                    <li>截至昨日24点整统计</li>
                                    <li>所有渠道已支付的订单</li>
                                    <li>包含申请退货退款的订单</li>
                                </ul>
                                <p>
                                    <span class="font12 colorblack">累计消耗积分</span>
                                    <!--<i @mouseover="showOne = true" @mouseout="showOne = false" class="iconfont cursor iconwenhao color2087 font16" ></i>-->
                                </p>
                                <p class="genatalCount colorblack fontWeight font28">{{parseFloat(statsManage.accumPoints)-parseFloat(statsManage.totalPoints)}}</p>
                            </div>
                        </div>

                    </div>
                    <div class="dataGeneral bannerTable">
                        <table  v-if="noData" class="table">
                            <tr>
                                <th v-for="(item,index) in sortDatas">
                                    {{item.name}}
                                </th>
                            </tr>
                            <tr v-for="(item,index) in tableData">
                                <td>
                                   {{item.name}}
                                </td>
                                <td>
                                    <span v-if="item.activityType == 1">养生打卡</span>
                                    <span v-if="item.activityType == 2">推荐奖励</span>
                                    <span v-if="item.activityType == 3">积分消耗</span>
                                </td>
                                <td>
                                    {{item.awardPoints}}
                                </td>
                                <td> {{timetrans(item.createDate)}}</td>
                                <td >
                                    {{item.awardTotalPoints}}
                                </td>
                                <td >有效</td>
                                <td>
                                    <span class="color2087 font12 cursor fontWeight" @click="goDetail(item.id)">详细</span>
                                </td>
                            </tr>
                        </table>
                        <div v-if="!noData" class="noData">
                            <img class="nodataImg" src="../../assets/images/nodatalist.png"/>
                            <p>暂无数据~</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Aside from '@/components/aside'
    import  Filter from '@/common/filter'
    import Service from '@/common/service'
    import Store from '@/vuex/index'
    import KlTop from '@/components/klTop'
    import Global from '@/common/global'
    import Commodities from '@/components/commodities'
    export default {
        name: "salecustomer",
        components:{
            Aside,
            KlTop,
            Commodities
        },
        data() {
            return {
                statsManage: {},
                sortDatas:[
                    {orderType:'',name: '奖励条件',showBlue: false,orderField: ''},
                    {orderType:'',name: '积分活动',showBlue: false,orderField: ''},
                    {orderType:'',name: '单笔奖励积分',showBlue: false,orderField: ''},
                    {orderType:'desc',name: '规则更新时间',showBlue: false,orderField: ''},
                    {orderType:'desc',name: '已奖励总积分',showBlue: false,orderField: ''},
                    {orderType:'desc',name: '状态',showBlue: false,orderField: ''},
                    {orderType:'desc',name: '操作',showBlue: true,orderField: ''}
                ],
                commodyId: '',
                shelfStatusId: '',
                channelId: '',
                insuranceDate: '',
                tableData: [],
                noData: true,
                showOne: false,
                showTwo: false,
                showThree: false,
                showFour: false,
            };
        },
        created(){
            this.userInfo = JSON.parse(localStorage.getItem('user'));
        },
        watch:{
        },
        mounted(){
            this.pointsList('');
            this.getpointsstats();
        },
        methods: {
            goDetail(id){
                this.$router.push({name:'integraldetail',query:{id:id}})
            },
            timetrans(timestamp) {
                var getSeconds = '', getMinutes = '', getHours = '';
                var d = new Date(timestamp);
                getHours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
                getMinutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();;
                getSeconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();;
                var newTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + getHours + ':' + getMinutes + ':' + getSeconds;
                return newTime
            },
            getpointsstats(){
                Service.points().getpointsstats({
                }).then(response => {
                    if(response.errorCode == 0){
                       this.statsManage = response.data
                    }else{
                        this.$message.error(response.message)
                    }
                }, err => {
                });

            },
            pointsList(){
                Service.points().getpoints({
                }).then(response => {
                    if(response.errorCode == 0){
                        if(response.data.length == 0){
                            this.noData = false;
                        }else{
                            this.noData = true;
                            this.$nextTick(()=>{
                                this.tableData = response.data;
                            })
                        }
                    }else{
                        this.$message.error(response.message)
                    }
                }, err => {
                });

            },
        },

    }
</script>

