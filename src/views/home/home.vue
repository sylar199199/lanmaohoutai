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
                    .dataGenetalTitle{
                        border-bottom: 1px solid #f6f6f6;
                        padding-bottom: 20px;
                    }
                    .leijibox{
                        padding-top: 20px;
                    }
                    .dataGenetalContent{
                        padding-top: 20px;
                        .generalBox{
                            position: relative;
                            /*margin-right: 120px;*/
                            .warmText{
                                padding: 10px;
                                line-height: 20px;
                                position: absolute;
                                background-color: #a39f9f;
                                box-shadow: 0px 2px 24px 0px rgba(199, 199, 199, 0.51);
                                border-radius: 4px;
                                left: -2px;
                                bottom: 110px;
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
                    }
                }
                .waitThing{
                    margin-top: 20px;
                    .waitThingLeft{
                        width: 100%;
                        .dataGenetalTitle{
                            border-bottom: 0;
                        }
                        .waitBox{
                            width: 146px;
                            height: 180px;
                            border-radius: 4px;
                            border: solid 1px #f6f6f6;
                            text-align: center;
                            margin-right:20px;
                            .waitTitle{
                                width: 146px;
                                height: 48px;
                                color: #fff;
                                line-height: 48px;
                            }
                            .countNumber{
                                    margin-top: 40px;
                            }
                        }
                        .waitBox:last-child{
                            margin-right: 0;
                        }
                    }
                    .waitThingRight{
                        /*width: 476px;*/
                        position: relative;
                        /*padding-right: 60px;*/
                        .dataGenetalTitle{
                            border-bottom: 0;
                        }
                        #rankbox{
                            height: 300px;
                            width: 436px;
                        }
                    }
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
                        <div class="dataGenetalTitle">
                            <span class="colorblack font16 fontWeight marginright10">概括数据</span>
                            <span class="colorGrey font12">更新时间{{nowTime}}</span>
                        </div>
                        <div class="dataGenetalContent flexAround" >
                             <div class="generalBox">
                                <p>
                                    <span class="font12 colorblack">(今日)访客数</span>
                                </p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="getoverviewCount.todayVisitors">{{getoverviewCount.todayVisitors}}</p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="!getoverviewCount.todayVisitors">0</p>
                                <p class="colorGrey font12" v-if="getoverviewCount.yesterdayVisitors">昨日 {{getoverviewCount.yesterdayVisitors}}</p>
                                <p class="colorGrey font12" v-if="!getoverviewCount.yesterdayVisitors">昨日 0</p>
                            </div>

                            <div class="generalBox">
                                <ul class="warmText" v-if="showOne">
                                    <li>截至昨日24点整统计</li>
                                    <li>所有渠道已支付的订单</li>
                                    <li>包含申请退货退款的订单</li>
                                </ul>
                                <p>
                                    <span class="font12 colorblack">累计客户数</span>
                                    <!--<i @mouseover="showOne = true" @mouseout="showOne = false" class="iconfont cursor iconwenhao color2087 font16" ></i>-->
                                </p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="getoverviewCount.customerCount">{{getoverviewCount.customerCount}}</p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="!getoverviewCount.customerCount">0</p>
                                 <!-- <p class="colorGrey font12" v-if="getoverviewCount.yesterdayCustomer">昨日 {{getoverviewCount.yesterdayCustomer}}</p>
                                <p class="colorGrey font12" v-if="!getoverviewCount.yesterdayCustomer">昨日 0</p> -->
                            </div>
                            <div class="generalBox">
                                <ul class="warmText" v-if="showOne">
                                    <li>截至昨日24点整统计</li>
                                    <li>所有渠道已支付的订单</li>
                                    <li>包含申请退货退款的订单</li>
                                </ul>
                                <p>
                                    <span class="font12 colorblack">(今日)支付订单数</span>
                                    <!--<i @mouseover="showOne = true" @mouseout="showOne = false" class="iconfont cursor iconwenhao color2087 font16" ></i>-->
                                </p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="getoverviewCount.todayOrders">{{getoverviewCount.todayOrders}}</p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="!getoverviewCount.todayOrders">0</p>
                                <p class="colorGrey font12" v-if="getoverviewCount.yesterdayOrders">昨日 {{getoverviewCount.yesterdayOrders}}</p>
                                <p class="colorGrey font12" v-if="!getoverviewCount.yesterdayOrders">昨日 0</p>
                            </div>
                            <div class="generalBox">
                                <ul class="warmText" v-if="showTwo">
                                    <li>截至昨日24点整统计</li>
                                    <li>所有渠道已支付的订单</li>
                                    <li>包含申请退货退款的订单</li>
                                </ul>
                                <p>
                                    <span class="font12 colorblack">(今日)支付金额(元)</span>
                                    <!--<i @mouseover="showTwo = true" @mouseout="showTwo = false" class="iconfont iconwenhao cursor color2087 font16"></i>-->
                                </p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="getoverviewCount.todayOrderAmount">{{getoverviewCount.todayOrderAmount}}</p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="!getoverviewCount.todayOrderAmount">0</p>

                                <p class="colorGrey font12" v-if="getoverviewCount.yesterdayOrderAmount">昨日 {{getoverviewCount.yesterdayOrderAmount}}</p>

                                <p class="colorGrey font12" v-if="!getoverviewCount.yesterdayOrderAmount">昨日 0</p>
                            </div>

                            <div class="generalBox cursor" @click="goDetail()">
                                <ul class="warmText" v-if="showThree">
                                    <li>截至昨日24点整统计</li>
                                    <li>所有渠道支付过订单的客户</li>
                                </ul>
                                <p>
                                    <span class="font12 colorblack">累计发放积分</span>
                                    <!--<i @mouseover="showThree = true" @mouseout="showThree = false" class="iconfont iconwenhao cursor color2087 font16"></i>-->
                                </p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="getoverviewCount.accumDistPoints">{{tranNumber(getoverviewCount.accumDistPoints,1)}}</p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="!getoverviewCount.accumDistPoints">0</p>
                                <p class="colorGrey font12" v-if="getoverviewCount.yesterdayDistPoints">昨日 {{getoverviewCount.yesterdayDistPoints}}</p>
                                <p class="colorGrey font12" v-if="!getoverviewCount.yesterdayDistPoints">昨日 0</p>
                            </div>
                            <div class="generalBox">
                                <ul class="warmText" v-if="showFour">
                                    <li>截止昨日24点整统计</li>
                                    <li>所有渠道注册手机号的用户</li>
                                </ul>
                                <p>
                                    <span class="font12 colorblack">累计消耗积分</span>
                                    <!--<i  @mouseover="showFour = true" @mouseout="showFour = false"  class="iconfont iconwenhao cursor  color2087 font16"></i>-->
                                </p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="getoverviewCount.accumConsPoints">{{tranNumber(getoverviewCount.accumConsPoints,1)}}</p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="!getoverviewCount.accumConsPoints">0</p>
                                <p class="colorGrey font12" v-if="getoverviewCount.yesterdayConsPoints">昨日 {{getoverviewCount.yesterdayConsPoints}}</p>
                                <p class="colorGrey font12" v-if="!getoverviewCount.yesterdayConsPoints">昨日 0</p>
                            </div>
                        </div>
                         <div class="dataGenetalContent flexAround" >
                             <div class="generalBox">
                                <p>
                                    <span class="font12 colorblack">今日播放次数</span>
                                </p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="getoverviewCount.todayPlayCount">{{getoverviewCount.todayPlayCount}}</p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="!getoverviewCount.todayPlayCount">0</p>
                            </div>
                            <div class="generalBox">
                                <p>
                                    <span class="font12 colorblack">累计播放次数</span>
                                </p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="getoverviewCount.accumPlayCount">{{getoverviewCount.accumPlayCount}}</p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="!getoverviewCount.accumPlayCount">0</p>

                            </div>
                            <div class="generalBox">
                                <p>
                                    <span class="font12 colorblack">累计7日勋章</span>
                                </p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="getoverviewCount.accumMedal7DayCount">{{getoverviewCount.accumMedal7DayCount}}</p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="!getoverviewCount.accumMedal7DayCount">0</p>

                            </div>
                            <div class="generalBox">
                                <p>
                                    <span class="font12 colorblack">累计15日勋章</span>
                                </p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="getoverviewCount.accumMedal15DayCount">{{tranNumber(getoverviewCount.accumMedal15DayCount)}}</p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="!getoverviewCount.accumMedal15DayCount">0</p>
                            </div>

                            <div class="generalBox cursor" @click="goDetail()">
                                <p>
                                    <span class="font12 colorblack">累计30日勋章</span>
                                </p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="getoverviewCount.accumMedal30DayCount">{{tranNumber(getoverviewCount.accumMedal30DayCount,1)}}</p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="!getoverviewCount.accumMedal30DayCount">0</p>
                            </div>
                            <div class="generalBox">
                                <p>
                                    <span class="font12 colorblack">累计60日勋章</span>
                                </p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="getoverviewCount.accumMedal60DayCount">{{tranNumber(getoverviewCount.accumMedal60DayCount,1)}}</p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="!getoverviewCount.accumMedal60DayCount">0</p>
                            </div>
                        </div>
                    </div>
                    <div class="dataGeneral backWhite  waitThing flex padding20">
                        <div class="waitThingLeft backWhite">
                            <div class="dataGenetalTitle">
                                <span class="colorblack font16 fontWeight">全部事项</span>
                            </div>
                            <div class="flex" >
                                <div class="waitBox cursor" @click="goList(2)">
                                    <div class="waitTitle backf7 font12">待发货订单</div>
                                    <p class="countNumber fontWeight colorblack font28" v-if="getoverviewCount.unshippedOrderCount">{{getoverviewCount.unshippedOrderCount}}</p>
                                    <p class="countNumber fontWeight colorblack font28" v-if="!getoverviewCount.unshippedOrderCount">0</p>
                                </div>
                                <div class="waitBox cursor">
                                    <div class="waitTitle back89 font12" @click="goList(6)">待退款订单</div>
                                    <p class="countNumber fontWeight colorblack font28">00</p>
                                </div>
                                <div class="waitBox cursor">
                                    <div class="waitTitle backfb font12" @click="goList(7)">待退货退款订单</div>
                                    <p class="countNumber fontWeight colorblack font28">00</p>
                                </div>
                            </div>
                        </div>

                    </div>
                      <div class="dataGeneral backWhite waitThing  padding20">
                        <div class="dataGenetalTitle">
                            <span class="colorblack font16 fontWeight marginright10">社区数据</span>
                            <span class="colorGrey font12">更新时间{{nowTime}}</span>
                        </div>
                        <div class="dataGenetalContent flexAround" >
                            <div class="generalBox">
                                <p>
                                    <span class="font12 colorblack">今日动态</span>
                                </p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="communityCount.todayPost">{{communityCount.todayPost}}</p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="!communityCount.todayPost">0</p>
                                <p class="colorGrey font12" v-if="communityCount.yesterdayPost">昨日 {{communityCount.yesterdayPost}}</p>
                                <p class="colorGrey font12" v-if="!communityCount.yesterdayPost">昨日 0</p>
                                <div class="leijibox">
                                    <p>
                                        <span class="font12 colorblack">累计动态</span>
                                    </p>
                                    <p class="genatalCount colorblack fontWeight font28" v-if="communityCount.accumPost">{{communityCount.accumPost}}</p>
                                    <p class="genatalCount colorblack fontWeight font28" v-if="!communityCount.accumPost">0</p>
                                </div>
                            </div>
                            <div class="generalBox">
                                <p>
                                    <span class="font12 colorblack">今日点赞</span>
                                </p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="communityCount.todayLike">{{communityCount.todayLike}}</p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="!communityCount.todayLike">0</p>
                                 <p class="colorGrey font12" v-if="communityCount.yesterdayLike">昨日 {{communityCount.yesterdayLike}}</p>
                                <p class="colorGrey font12" v-if="!communityCount.yesterdayLike">昨日 0</p>
                                <div class="leijibox">
                                    <p>
                                        <span class="font12 colorblack">累计点赞</span>
                                    </p>
                                    <p class="genatalCount colorblack fontWeight font28" v-if="communityCount.accumLike">{{communityCount.accumLike}}</p>
                                    <p class="genatalCount colorblack fontWeight font28" v-if="!communityCount.accumLike">0</p>

                                </div>
                            </div>
                            <div class="generalBox">
                                <p>
                                    <span class="font12 colorblack">今日转发</span>
                                </p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="communityCount.todayShare">{{communityCount.todayShare}}</p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="!communityCount.todayShare">0</p>
                                <p class="colorGrey font12" v-if="communityCount.yesterdayShare">昨日 {{communityCount.yesterdayShare}}</p>
                                <p class="colorGrey font12" v-if="!communityCount.yesterdayShare">昨日 0</p>
                                <div class="leijibox">
                                    <p>
                                        <span class="font12 colorblack">累计转发</span>
                                    </p>
                                    <p class="genatalCount colorblack fontWeight font28" v-if="communityCount.accumShare">{{communityCount.accumShare}}</p>
                                    <p class="genatalCount colorblack fontWeight font28" v-if="!communityCount.accumShare">0</p>
                                </div>
                            </div>
                            <div class="generalBox">
                                <p>
                                    <span class="font12 colorblack">今日关注</span>
                                </p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="communityCount.todayFollow">{{communityCount.todayFollow}}</p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="!communityCount.todayFollow">0</p>

                                <p class="colorGrey font12" v-if="communityCount.yesterdayFollow">昨日 {{communityCount.yesterdayFollow}}</p>

                                <p class="colorGrey font12" v-if="!communityCount.yesterdayFollow">昨日 0</p>
                                <div class="leijibox">
                                <p>
                                    <span class="font12 colorblack">累计关注</span>
                                </p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="communityCount.accumFollow">{{communityCount.accumFollow}}</p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="!communityCount.accumFollow">0</p>
                            </div>
                            </div>

                            <div class="generalBox cursor" @click="goDetail()">
                                <p>
                                    <span class="font12 colorblack">今日评论</span>
                                </p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="communityCount.todayComment">{{communityCount.todayComment}}</p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="!communityCount.todayComment">0</p>
                                <p class="colorGrey font12" v-if="communityCount.yesterdayComment">昨日 {{communityCount.yesterdayComment}}</p>
                                <p class="colorGrey font12" v-if="!communityCount.yesterdayComment">昨日 0</p>
                                <div class="leijibox cursor" @click="goDetail()">
                                    <p>
                                        <span class="font12 colorblack">累计评论</span>
                                    </p>
                                    <p class="genatalCount colorblack fontWeight font28" v-if="communityCount.accumComment">{{communityCount.accumComment}}</p>
                                    <p class="genatalCount colorblack fontWeight font28" v-if="!communityCount.accumComment">0</p>
                                </div>
                            </div>
                            <div class="generalBox">
                                <p>
                                    <span class="font12 colorblack">上月支付金额(元)</span>
                                </p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="getoverviewCount.preMonthOrderAmount">{{getoverviewCount.preMonthOrderAmount}}</p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="!getoverviewCount.preMonthOrderAmount">0</p>
                                <p class="colorGrey font12" v-if="getoverviewCount.accumOrderAmount">累计 {{getoverviewCount.accumOrderAmount}}</p>
                                <p class="colorGrey font12" v-if="!getoverviewCount.accumOrderAmount">累计 0</p>
                            </div>

                        </div>
                        <div class="dataGenetalContent flexAround" >



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
    export default {
        name: "salecustomer",
        components:{
            Aside,
            KlTop,
        },
        data() {
            return {
                showOne: false,
                showTwo: false,
                showThree: false,
                showFour: false,
                xData: [],
                yData: [],
                getoverviewCount: {},
                todoCount: null,
                nowTime: null,
                communityCount: {}
            };
        },
        created(){
            this.nowTime = this.timetrans(new Date())
        },
        watch:{
        },
        mounted(){
            this.getcommunity();
            this.getoverview();
            // this.gettodo();
        },
        methods:{
             tranNumber(num, point) {
                let numStr = num.toString()
                // 十万以内直接返回
                if (numStr.length < 6) {
                    return numStr;
                }
                //大于8位数是亿
                else if (numStr.length > 8) {
                    let decimal = numStr.substring(numStr.length - 8, numStr.length - 8 + point);
                    return parseFloat(parseInt(num / 100000000) + '.' + decimal) + '亿';
                }
                //大于6位数是十万 (以10W分割 10W以下全部显示)
                else if (numStr.length > 5) {
                    let decimal = numStr.substring(numStr.length - 4, numStr.length - 4 + point)
                    return parseFloat(parseInt(num / 10000) + '.' + decimal) + 'w';
                }
            },
            timetrans(timestamp) {
                var getSeconds = '', getMinutes = '', getHours = '';
                var d = timestamp;
                getHours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
                getMinutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();;
                getSeconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();;
                var newTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + getHours + ':' + getMinutes + ':' + getSeconds;
                return newTime
            },
            getcommunity(){
                Service.home().getcommunity({
                }).then(response => {
                    if(response.errorCode == 0){
                       this.communityCount = response.data
                    }else{
                        this.$message.error(response.message)
                    }

                }, err => {
                });
            },
            getoverview(){
                Service.home().getoverview({
                }).then(response => {
                    if(response.errorCode == 0){
                        this.getoverviewCount = response.data;
                    }else{
                        this.$message.error(response.message)
                    }

                }, err => {
                });
            },
            gettodo(){
                Service.home().gettodo({
                }).then(response => {
                    if(response.errorCode == 0)
                    {
                        this.todoCount = response.data;
                    }else{
                        this.$message.error(response.message)
                    }

                }, err => {
                });
            },
            goDetail(){
                this.$router.push({'name': 'integraldetail'});
            },
            goList(status){
                this.$router.push({'name': 'orderlist',query:{status}});
            },
            getRank(){
                var myChart = this.echarts.init(document.getElementById('rankbox'));
// 绘制图表
                var option = {
                    color: ['#4087e6'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '15%',
                        bottom: '3%',
                        top: 30,
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : this.xData,
                            axisTick: {
                                alignWithLabel: true
                            },
                            name: '商品名称',
                            nameTextStyle:{
                                fontSize: 12,
                                color: '#979797'
                            },
                            axisLabel: {
                                rotate:30,
                                textStyle: {
                                    color: '#000',
                                    fontSize: 12,
                                    fontWeight: 500
                                }
                            }

            }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            show: true,
                            name: '累计销量(个)',
                            nameTextStyle:{
                                fontSize: 12,
                                color: '#979797'
                            }
                        }
                    ],
                    series : [
                        {
                            name:'累计销量',
                            type:'bar',
                            barWidth: '20%',
                            data: this.yData
                        }
                    ]
                };
                myChart.setOption(option)
            },
        },

    }
</script>

