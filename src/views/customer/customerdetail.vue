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
                    margin-bottom: 20px;
                    .searchContent{
                        .statusBac{
                            width: 976px;
                            height: 152px;
                            .orderDeatileTitle{
                                padding: 55px 30px 6px;
                            }
                            .orderDeatilesecTitle{
                                padding: 0px 30px;
                            }
                        }
                    }
                    .dataGenetalTitle{
                        border-bottom: 1px solid #f6f6f6;
                        padding-bottom: 20px;
                        .addRemark{
                            margin-top: -10px;
                        }
                    }
                    .flexRight{
                        margin-left: 200px;
                    }
                    .orderInfo{
                        margin-left: 40px;
                        .generalBox{
                            position: relative;
                            margin-right: 120px;
                            margin-top: 20px;
                            .warmText{
                                padding: 10px;
                                line-height: 20px;
                                position: absolute;
                                background-color: #ffffff;
                                box-shadow: 0px 2px 24px 0px rgba(199, 199, 199, 0.51);
                                border-radius: 4px;
                                left: -2px;
                                bottom: 90px;
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
                        .flexinfoLeft{
                            margin-right: 10px;
                            .headImg{
                                height: 40px;
                                width: 40px;
                                border-radius: 50%;
                            }

                        }
                        .flexinfoRight{
                            .infoBox{
                                padding-bottom: 4px;
                                .timeSpan{
                                    margin-right: 10px;
                                }
                                .iconnansheng{
                                    font-size: 14px;
                                }
                            }
                        }
                        .infoLeft{
                            min-width: 225px;
                            .infoBox{
                                margin-top: 27px;
                                .borderButton{
                                    border-radius: 12px;
                                    display: inline-block;
                                    height: 24px;
                                    width: 74px;
                                    line-height: 24px;
                                }
                                .number{
                                    margin-left: 60px;
                                    margin-top: 6px;
                                }
                                .inputText{
                                    border: 1px solid #f6f6f6;
                                }
                            }
                        }
                        .infoRight{
                            position: relative;
                            margin-left: 130px;
                            .infoBox{
                                margin-top: 27px;
                                .timeSpan{
                                    margin-right: 20px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .dialogone::after,.dialog::after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 0;
        vertical-align: middle;
    }
    .dialogone,.dialog{
        display: none;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        z-index: 1000;
        background: rgba(0,0,0,0.5);
        .messge{
            display: inline-block;
            width: 460px;
            padding-bottom: 15px;
            vertical-align: middle;
            background-color: #fff;
            border-radius: 4px;
            font-size: 18px;
            -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
            box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
            text-align: left;
            overflow: hidden;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            .messageHeader{
                text-align: center;
                position: relative;
                padding: 15px 15px 0px;
                color: #000;
                .messagetitle{
                }
            }
            .messageContent{
                position: relative;
                padding: 20px 30px;
                color: #606266;
                font-size: 14px;
                .messagemessage{
                    margin-bottom: 12px;
                    .inputBox{
                        border: 1px solid #e5e5e5;
                        height: 30px;
                        line-height: 30px;
                        text-indent: 10px;
                        width: 300px;
                    }
                }
            }
            .messagebtns{
                text-align: center;
                padding: 0 0 30px;
                .button{
                    border-radius: 20px;
                    display: inline-block;
                    white-space: nowrap;
                    cursor: pointer;
                    text-align: center;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    outline: 0;
                    margin: 0;
                    height: 40px;
                    width: 121px;
                    line-height: 40px;
                    font-size: 12px;
                }
                .bacButton{
                    margin-left: 20px;
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
                        <div class="flex">
                            <div class="orderInfo flex" style="margin-left: 0;">
                                <div class="flexinfoLeft">
                                    <img class="headImg" :src="custormerData.headimgurl">
                                </div>
                                <div class="flexinfoRight">
                                    <div class="infoBox">
                                        <span class="colorblack font14 timeSpan">{{custormerData.nickname}}</span>
                                    </div>
                                    <div class="infoBox">
                                        <i class="iconfont iconnvsheng colore6 font14 timeSpan" v-if="custormerData.sex == '2'"></i>
                                        <i class="iconfont iconnansheng color2087 font14 timeSpan" v-if="custormerData.sex == '1'"></i>
                                        <span class="colorGrey font12 timeSpan" v-if="custormerData.province">{{custormerData.province}}</span>
                                        <span class="colorGrey font12 timeSpan" v-if="custormerData.city">{{custormerData.city}}</span>
                                        <span class="colorGrey font12 ">手机号：</span>
                                        <span class="colorblack font12 timeSpan">{{custormerData.phone}}</span>
                                        <span class="colorGrey font12 ">成为客户时间：</span>
                                        <span class="colorblack font12">{{timetrans(custormerData.createDate)}}</span>
                                    </div>
                                </div>
                            </div>
                            <!--<div class="flexRight">-->
                                <!--<p class="infoBox">-->
                                    <!--<span class="colorGrey font14 timeSpan">好友</span>-->
                                <!--</p>-->
                                <!--<p class="infoBox colorblack font16 fontWeight">-->
                                   <!--67-->
                                <!--</p>-->
                            <!--</div>-->
                        </div>
                    </div>
                    <div class="dataGeneral backWhite padding20">
                        <div class="dataGenetalTitle">
                            <span class="colorblack font16 fontWeight marginright10">积分信息</span>
                            <span class="color2087 font12 fontWeight cursor" @click="goDetail()">查看明细</span>
                        </div>
                        <div class="orderInfo flex">
                            <div class="generalBox">
                                <ul class="warmText" v-if="showOne">
                                    <li>截至昨日24点整统计</li>
                                    <li>所有渠道已支付的订单</li>
                                    <li>包含申请退货退款的订单</li>
                                </ul>
                                <p>
                                    <span class="font12 colorblack">现有积分</span>
                                    <!--<i @mouseover="showOne = true" @mouseout="showOne = false" class="iconfont cursor iconwenhao color2087 font16" ></i>-->
                                </p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="totalPoints">{{totalPoints}}</p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="!totalPoints">0</p>
                            </div>
                            <div class="generalBox">
                                <ul class="warmText" v-if="showOne">
                                    <li>截至昨日24点整统计</li>
                                    <li>所有渠道已支付的订单</li>
                                    <li>包含申请退货退款的订单</li>
                                </ul>
                                <p>
                                    <span class="font12 colorblack">保护期内积分</span>
                                    <!--<i @mouseover="showOne = true" @mouseout="showOne = false" class="iconfont cursor iconwenhao color2087 font16" ></i>-->
                                </p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="freezePoints">{{freezePoints}}</p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="!freezePoints">0</p>
                            </div>
                            <div class="generalBox">
                                <ul class="warmText" v-if="showOne">
                                    <li>截至昨日24点整统计</li>
                                    <li>所有渠道已支付的订单</li>
                                    <li>包含申请退货退款的订单</li>
                                </ul>
                                <p>
                                    <span class="font12 colorblack">累计发放积分</span>
                                    <!--<i @mouseover="showOne = true" @mouseout="showOne = false" class="iconfont cursor iconwenhao color2087 font16" ></i>-->
                                </p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="accumPoints">{{accumPoints}}</p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="!accumPoints">0</p>
                            </div>
                            <div class="generalBox">
                                <ul class="warmText" v-if="showOne">
                                    <li>截至昨日24点整统计</li>
                                    <li>所有渠道已支付的订单</li>
                                    <li>包含申请退货退款的订单</li>
                                </ul>
                                <p>
                                    <span class="font12 colorblack">累计消耗积分</span>
                                    <!--<i @mouseover="showOne = true" @mouseout="showOne = false" class="iconfont cursor iconwenhao color2087 font16" ></i>-->
                                </p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="!totalPoints && accumPoints">{{parseFloat(accumPoints)}}</p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="totalPoints && accumPoints">{{parseFloat(accumPoints)-parseFloat(totalPoints)}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="dataGeneral backWhite padding20">
                        <div class="dataGenetalTitle">
                            <span class="colorblack font16 fontWeight marginright10">交易信息</span>
                        </div>
                        <div class="orderInfo flex">
                            <div class="generalBox">
                                <ul class="warmText" v-if="showOne">
                                    <li>截至昨日24点整统计</li>
                                    <li>所有渠道已支付的订单</li>
                                    <li>包含申请退货退款的订单</li>
                                </ul>
                                <p>
                                    <span class="font12 colorblack">累计兑换次数</span>
                                    <!--<i @mouseover="showOne = true" @mouseout="showOne = false" class="iconfont cursor iconwenhao color2087 font16" ></i>-->
                                </p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="custormerData.orderCount">{{custormerData.orderCount}}</p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="!custormerData.orderCount">0</p>
                            </div>
                            <!--<div class="generalBox">-->
                                <!--<ul class="warmText" v-if="showOne">-->
                                    <!--<li>截至昨日24点整统计</li>-->
                                    <!--<li>所有渠道已支付的订单</li>-->
                                    <!--<li>包含申请退货退款的订单</li>-->
                                <!--</ul>-->
                                <!--<p>-->
                                    <!--<span class="font12 colorblack">累计消费订单数</span>-->
                                    <!--&lt;!&ndash;<i @mouseover="showOne = true" @mouseout="showOne = false" class="iconfont cursor iconwenhao color2087 font16" ></i>&ndash;&gt;-->
                                <!--</p>-->
                                <!--<p class="genatalCount colorblack fontWeight font28">666</p>-->
                            <!--</div>-->
                            <div class="generalBox">
                                <ul class="warmText" v-if="showOne">
                                    <li>截至昨日24点整统计</li>
                                    <li>所有渠道已支付的订单</li>
                                    <li>包含申请退货退款的订单</li>
                                </ul>
                                <p>
                                    <span class="font12 colorblack">累计消费金额(元)</span>
                                    <!--<i @mouseover="showOne = true" @mouseout="showOne = false" class="iconfont cursor iconwenhao color2087 font16" ></i>-->
                                </p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="custormerData.orderAmount">{{custormerData.orderAmount}}</p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="!custormerData.orderAmount">0</p>
                            </div>
                            <div class="generalBox">
                                <ul class="warmText" v-if="showOne">
                                    <li>截至昨日24点整统计</li>
                                    <li>所有渠道已支付的订单</li>
                                    <li>包含申请退货退款的订单</li>
                                </ul>
                                <p>
                                    <span class="font12 colorblack">客单价(元)</span>
                                    <!--<i @mouseover="showOne = true" @mouseout="showOne = false" class="iconfont cursor iconwenhao color2087 font16" ></i>-->
                                </p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="!custormerData.orderAmount">0</p>
                                <p class="genatalCount colorblack fontWeight font28" v-if="custormerData.orderAmount">{{((custormerData.orderAmount)/(custormerData.orderCount)).toFixed(2)}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="dataGeneral backWhite padding20">
                        <div class="dataGenetalTitle">
                            <span class="colorblack font16 fontWeight marginright10">更多信息</span>
                        </div>
                        <div class="orderInfo flex">
                            <div class="infoLeft">
                                <div class="infoBox">
                                    <span class="colorGrey font12 marginright10">最近浏览日期</span>
                                    <span class="colorblack font12" v-if="custormerData.lastLoginTime">{{timetrans(custormerData.lastLoginTime)}}</span>
                                    <span class="colorblack font12" v-if="!custormerData.lastLoginTime"></span>
                                </div>
                                <div class="infoBox">
                                    <span class="colorGrey font12 marginright10">最近兑换日期</span>
                                    <span class="colorblack font12" v-if="custormerData.lastOrderDate">{{timetrans(custormerData.lastOrderDate)}}</span>
                                    <span class="colorblack font12" v-if="!custormerData.lastOrderDate"></span>
                                </div>
                            </div>
                            <div class="infoRight">
                                <div class="infoBox">
                                    <span class="colorGrey font12 timeSpan">最近收件地址</span>
                                    <span class="colorblack font12" v-if="lastOrderConsignee">{{lastOrderConsignee.province}}{{lastOrderConsignee.city}}{{lastOrderConsignee.district}}{{lastOrderConsignee.address}}</span>
                                    <!--<span class="copyAdress marginLeft10 font12 cursor color2087" @click="copyAdress('copyAdress')" :data-clipboard-text="shouhuo">复制</span>-->
                                </div>
                            </div>
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
                showOne: false,
                showInput: false,
                custormerData: '',
                userId: '',
                shouhuo: '',
                statusTitle: '',
                headimgurl: '',
                points: null,
                totalPoints: '',
                accumPoints: '',
                freezePoints: '',
                lastOrderConsignee: '',
            };
        },
        created(){
            this.userId = this.$route.query.id;
            this.getorderDetail();
        },
        watch:{
        },
        mounted(){
        },
        methods: {
            goDetail(){
                this.$router.push({name:'integraldetail',query:{userId:this.userId}})
            },
            getorderDetail(){
                Service.customer().getcustomerDetail({},
                    this.userId
                ).then(response => {
                    if(response.errorCode == 0){
                        this.points = response.data.points;
                        this.custormerData = response.data;
                        this.totalPoints = this.points.totalPoints;
                        this.accumPoints = this.points.accumPoints;
                        this.freezePoints = this.points.freezePoints;
                        this.lastOrderConsignee = this.points.lastOrderConsignee
                    }else{
                        this.$message.error(response.message)
                    }
                }, err => {
                });
            },
            copyAdress(classname){
                var clipboard = new this.Clipboard('.'+classname);
                clipboard.on('success', e => {
                    this.$message.success('复制成功');
                    // 释放内存
                    clipboard.destroy();
                    $(".dialog").css({'display':'none'})
                });
                clipboard.on('error', e => {
                    // 不支持复制
                    // 释放内存
                    clipboard.destroy()
                })
            },
            timetrans(time) {
                var getSeconds = '', getMinutes = '', getHours = '';
                var d = new Date(time);
                getHours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
                getMinutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();;
                getSeconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();;
                var newTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + getHours + ':' + getMinutes + ':' + getSeconds;
                return newTime
            },
        },

    }
</script>

