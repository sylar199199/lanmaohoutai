<style rel="stylesheet/scss" lang="scss" scoped>
  $baseFontSize: 192;
  .salecustomercontent {
    display: flex;
    min-height: calc(100vh - 50px);
    margin-top: 60px;

    .content {
      flex: 1;
      padding: 20px;

      .contanternews {
        .dataGeneral {
          margin-bottom: 20px;
          padding: 25px 20px 0;

          .dataGenetalTitle {
            border-bottom: 1px solid #f6f6f6;
            padding-bottom: 20px;

            .addRemark {
              margin-top: -10px;
            }
          }

          .statiusBox {
            margin-top: 10px;
            border: 1px solid #ececec;

            .statiusBoxLeft {
              max-width: 200px;
              margin: 20px;

              .statiusText {
                margin-top: 15px;
              }
            }

            .lineBox {
              border-right: 1px solid #ececec;
            }

            .statiusBoxRight {
              margin: 20px;

              .processBox {
                text-align: center;
                position: relative;
                width: 130px;

                .iconfont {
                  font-size: 20px;
                }

                .iconfont:after {
                  content: '';
                  position: absolute;
                  width: 80px;
                  height: 1px;
                  left: 90px;
                  top: 10px;
                  background: #ececec;
                }
              }

              .processBox:last-child {
                .iconfont:after {
                  content: '';
                  width: 0px;
                  height: 1px;
                  background: #fff;
                }
              }
            }

            .showjjifen {
              margin-left: 130px;
              margin-top: 12px;
            }
          }

          .orderInfo {
            .infoLeft {
              min-width: 225px;

              .infoBox {
                margin-bottom: 27px;
                display: flex;
                align-items: center;

                .borderButton {
                  border-radius: 12px;
                  display: inline-block;
                  height: 24px;
                  width: 70px;
                  line-height: 24px;
                }

                .editButton {
                  border-radius: 20px;
                  display: inline-block;
                  height: 34px;
                  width: 70px;
                  line-height: 18px;
                  word-wrap: break-word;
                  border: solid 1px #0d2c4b;
                  color: #0d2c4b;
                  text-align: center;
                }

                .number {
                  margin-left: 60px;
                  margin-top: 6px;
                }

                .inputText {
                  border: 1px solid #f6f6f6;
                  width: 190px;
                }
              }
            }

            .infoRight {
              position: relative;
              margin-left: 130px;

              .infoBox {
                margin-bottom: 27px;

                .timeSpan {
                  margin-right: 20px;
                }

              }

              .logisticsBox {
                position: relative;
                padding: 10px 0 6px;

                .logisticsIcon {
                  content: "";
                  display: block;
                  width: 0;
                  height: 101%;
                  border: 1px solid #ccc;
                  position: absolute;
                  top: 0;
                  left: -22px;
                }

                .logisticsIcon:before {
                  content: "";
                  display: block;
                  width: 8px;
                  height: 8px;
                  border-radius: 50%;
                  background: #ccc;
                  border: 2px solid #ccc;
                  position: absolute;
                  left: -5.5px;
                  top: 13px;
                }

                .logisticsInfo {
                  max-width: 140px;
                }
              }

              .twoIcon {
                position: absolute;
                top: 30px;
                left: 55px;
              }

              .threeIcon {
                height: 94px;
                left: 76px;
              }

              .twoIconone {
                position: absolute;
                top: 30px;
                left: 76px;
              }

              .foureIcon {
                left: 76px;
                height: 140px;
                top: 28px;
              }
            }

            .orderDetailTable {
              width: 100%;
              border: 1px solid #f6f6f6;
              /*margin-top: 20px;*/
              tr:nth-of-type(2) {
                border-bottom: 1px solid #f6f6f6;
              }

              tr {
                th {
                  font-size: 12px;
                  text-align: center;
                  background: #f6f6f6;
                  color: #929292;
                }

                th:nth-child(1) {
                  text-align: left;
                  padding-left: 15px;
                }

                th:nth-child(5) {
                  text-align: right;
                  padding-right: 15px;
                }

                td {
                  text-align: center;
                  padding: 8px 0;

                  .productImg {
                    width: 70px;
                    height: 70px;
                  }

                  .productBox {
                    height: 60px;
                    padding-left: 10px;

                    .productText {
                      margin-bottom: 0px;
                      margin-top: 0;
                    }
                  }

                }

                td:nth-of-type(1) {
                  min-width: 200px;
                  max-width: 200px;
                  text-align: left;
                  padding-left: 15px;
                }

                td:nth-of-type(3) {
                  text-align: right;
                  padding-right: 15px;
                }

                td:nth-of-type(5) {
                  text-align: right;
                  padding-right: 15px;
                }
              }
            }

            .orderDetailTableone {
                tr {
                  border-bottom: 1px solid #f6f6f6;

                  th {
                    color: #929292;
                  }

                  td {
                    text-align: center;
                    padding: 20px 0;
                  }

                  td:nth-of-type(1) {
                    min-width: 100px;
                    max-width: 100px;
                    text-align: left;
                    padding-left: 15px;
                  }

                  td:nth-of-type(2) {
                    min-width: 300px;
                    max-width: 300px;
                    text-align: center;
                    padding-left: 15px;
                  }
                }
              }
            .afsTable {
              width: 100%;
              tr {
                border-bottom: 1px solid #f6f6f6;

                th {
                  width: 100px;
                  color: #929292;
                  background: #F6F6F6;
                }

                td {
                  width: 100px;
                  text-align: center;
                  padding: 20px 0;
                }

                td:nth-of-type(1) {
                  text-align: center;
                }

                td:nth-of-type(2) {
                  text-align: center;
                }
              }
            }
          }
        }
      }
    }
  }

  .dialogone::after, .dialog::after, .editDialog::after, .dialogtwo::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 0;
    vertical-align: middle;
  }

  .dialogone, .dialog, .editDialog, .dialogtwo {
    display: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.5);

    .messge {
      display: inline-block;
      width: 460px;
      padding-bottom: 15px;
      vertical-align: middle;
      background-color: #fff;
      border-radius: 4px;
      font-size: 18px;
      -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
      text-align: left;
      overflow: hidden;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;

      .messageHeader {
        text-align: center;
        position: relative;
        padding: 15px 15px 0px;
        color: #000;

        .messagetitle {
        }
      }

      .messageContent {
        position: relative;
        padding: 20px 30px;
        color: #606266;
        font-size: 14px;

        .messagemessage {
          margin-bottom: 12px;

          .inputBox {
            border: 1px solid #e5e5e5;
            height: 30px;
            line-height: 30px;
            text-indent: 10px;
            width: 300px;
          }
        }
      }

      .messagebtns {
        text-align: center;
        padding: 0 0 30px;

        .button {
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

        .bacButton {
          margin-left: 20px;
        }
      }
    }
  }

  .spaceBetween {
    display: flex;
    justify-content: space-between;
  }

  .marginTop20 {
    margin-top: 20px;
  }

  .flex1 {
    flex: 1;
  }

  .tip {
    font-size: 12px;
    color: #999999;
  }

  .textCenter {
    text-align: center;
  }
</style>
<template>
  <div class="general">
    <KlTop></KlTop>
    <div class="salecustomercontent contaner">
      <Aside></Aside>
      <div class="content">
        <div class="contanternews">
          <div class="dataGeneral backWhite" style="padding-bottom: 25px;">
            <div class="infoBox">
              <span class="colorGrey font12 ">订单编号</span>
              <span class="colorblack font12 marginright10">{{orderDetail.orderNo}}</span>
              <span class="colorGrey font12 timeSpan " v-if="orderDetail.payNo">支付流水号</span>
              <span class="colorblack font12 marginright10" v-if="orderDetail.payNo">{{orderDetail.payNo}}</span>
              <span class="colorGrey font12 timeSpan ">下单时间</span>
              <span class="colorblack font12 marginright10">{{timetrans(orderDetail.createDate)}}</span>
              <span class="colorblack font12 timeSpan">微信小程序/微信支付</span>
            </div>
            <div class="statiusBox flex">
              <div class="statiusBoxLeft">
                <div v-if="orderDetail.status == 1">
                  <p class=" colorblack font14">买家未付款</p>
                  <p class="colorGrey statiusText font12">如买家未在规定时间内付款，订单将按照设置自动关闭。</p>
                </div>
                <div v-if="orderDetail.status == 2">
                  <p class=" colorblack font14">买家已付款，等待发货</p>
                  <p class="colorGrey statiusText font12">请在48小时内完成发货。</p>
                </div>
                <div v-if="orderDetail.status == 3">
                  <p class=" colorblack font14">商家已发货，等待交易完成</p>
                  <p class="colorGrey statiusText font12">商品已发货，交易将在7天后自动完成</p>
                </div>
                <div v-if="orderDetail.status == 4">
                  <p class=" colorblack font14">订单交易完成</p>
                  <!--<p class="colorGrey statiusText font12">如买家未在规定时间内付款，订单将按照设置自动关闭。</p>-->
                </div>
                <div v-if="orderDetail.status == 5">
                  <p class=" colorblack font14">订单已关闭</p>
                  <!--<p class="colorGrey statiusText font12">如买家未在规定时间内付款，订单将按照设置自动关闭。</p>-->
                </div>
              </div>
              <div class="lineBox"></div>
              <div class="statiusBoxRight">
                <div class="flex">
                  <div class="processBox">
                    <i class="iconfont color2087 iconxuanzhong"></i>
                    <p class="processText colorblack">买家下单</p>
                    <p class="processTime colorblack">{{timetrans(orderDetail.createDate)}}</p>
                  </div>
                  <div class="processBox">
                    <i
                      :class="orderDetail.status == 1 || orderDetail.status == 5 ?'iconfont  iconxuanze':'iconfont color2087 iconxuanzhong'"></i>
                    <p
                      :class="orderDetail.status == 1 || orderDetail.status == 5 ?'processText':'processText colorblack'">
                      买家付款</p>
                    <p
                      :class="orderDetail.status == 1 || orderDetail.status == 5 ?'processText':'processTime colorblack'"
                      v-if="orderDetail.payTime">{{timetrans(orderDetail.payTime)}}</p>
                  </div>
                  <div class="processBox">
                    <i
                      :class="(orderDetail.status == 3 || orderDetail.status == 4) ?'iconfont color2087 iconxuanzhong':'iconfont  iconxuanze'"></i>
                    <p
                      :class="(orderDetail.status == 3 || orderDetail.status == 4) ?'processText colorblack':'processText '">
                      商家发货</p>
                    <p
                      :class="(orderDetail.status == 3 || orderDetail.status == 4) ?'processText colorblack':'processTime'"
                      v-if="orderDetail.express">{{timetrans(orderDetail.express.createDate)}}</p>
                  </div>
                  <div class="processBox">
                    <i
                      :class="(orderDetail.status == 4) ?'iconfont color2087 iconxuanzhong':'iconfont  iconxuanze'"></i>
                    <p :class="(orderDetail.status == 4) ?'processText colorblack':'processText '">交易完成</p>
                    <p :class="(orderDetail.status == 4) ?'processText colorblack':'processTime'"
                       v-if="orderDetail.completeDate">{{timetrans(orderDetail.completeDate)}}</p>
                  </div>
                </div>
                <div class="processBox showjjifen">
                  <i
                    :class="orderDetail.status == 1 || orderDetail.status == 5 ?'iconfont  iconxuanze':'iconfont color2087 iconxuanzhong'"></i>
                  <p
                    :class="orderDetail.status == 1 || orderDetail.status == 5 ?'processText':'processText colorblack'">
                    扣减积分</p>
                  <p :class="orderDetail.status == 1 || orderDetail.status == 5 ?'processText':'processTime colorblack'"
                     v-if="orderDetail.payTime">{{timetrans(orderDetail.payTime)}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="dataGeneral backWhite" v-if="orderDetail.afsList && orderDetail.afsList.length">
            <div class="infoBox">
              <span class="colorblack font16 fontWeight marginright10">售后信息</span>
            </div>
            <div class="orderInfo spaceBetween">
              <div class="infoLeft flex1 marginTop20">
                <div class="infoBox">
                  <span class="colorGrey font12 marginright10">售后状态</span>
                  <span class="colorblack font12">{{afsTitle}}</span>
                  <span v-if="orderDetail.afsList[afsIndex].status == 1 && orderDetail.status == 2"
                        @click="agreeReturn(orderDetail.status)"
                        class="cursor colorfff borderButton marginright10 marginLeft10">立即退款</span>
                  <span v-if="orderDetail.afsList[afsIndex].status == 1 && orderDetail.status == 2"
                        @click="refuseReturn()"
                        class="cursor colorfff borderButton marginLeft10 marginright10">拒绝退款</span>


                  <span v-if="orderDetail.afsList[afsIndex].status == 1 && orderDetail.status != 2"
                        @click="agreeReturn(orderDetail.status)"
                        class="cursor colorfff borderButton marginright10">同意退货</span>
                  <span v-if="orderDetail.afsList[afsIndex].status == 1 && orderDetail.status != 2"
                        @click="refuseReturn()" class="cursor colorfff borderButton marginLeft10">拒绝退货</span>

                  <span class="cursor borderButton colorfff marginLeft10" v-if="orderDetail.afsList[afsIndex].status == 4"
                        @click="editMoney()">立即退款</span>
                  <!--<span v-if="orderDetail.afs.status == 4"
                        class="cursor colorfff  editButton marginright10 marginLeft10"
                        @click="editMoney()">
                    <div>同意退款</div>
                    <div>修改金额</div>
                  </span>-->
                  <span class="cursor borderButton colorfff marginLeft10" v-if="orderDetail.afsList[afsIndex].status == 4"
                        @click="refuseMoney()">拒绝退款</span>


                  <span class="cursor borderButton colorfff" v-if="statusTitle == '已退款' "
                        @click="openDetail()">退款详情</span>
                </div>
                <div class="infoBox" v-if="orderDetail.afsList[afsIndex].returnMethod && orderDetail.status != 2">
                  <span class="colorGrey font12 marginright10">退货方式</span>
                  <span class="colorblack font12" v-if="orderDetail.afsList[afsIndex].returnMethod ==1">自行寄回</span>
                  <span class="colorblack font12" v-if="orderDetail.afsList[afsIndex].returnMethod ==2">拒收</span>
                </div>
                <div class="infoBox">
                  <span class="colorGrey font12 marginright10">申请原因</span>
                  <span class="colorblack font12">{{orderDetail.afsList[afsIndex] && orderDetail.afsList[afsIndex].reason}}</span>
                </div>
                <div class="infoBox">
                  <span class="colorGrey font12 marginright10">申请时间</span>
                  <span class="colorblack font12">{{timetrans(orderDetail.afsList[afsIndex].createDate)}}</span>
                </div>
                <div class="infoBox">
                  <span class="colorGrey font12 marginright10">退款金额</span>
                  <span class="colorblack font12">{{orderDetail.amount}}</span>
                </div>
              </div>
              <div class="infoLeft flex1 marginTop20 textCenter">
                <div class="infoBox">
                  <span class="colorGrey font12 marginright10">申请人联系方式</span>
                  <span class="colorblack font12">{{orderDetail.consignee.phone}}</span>
                </div>
                <div class="infoBox" v-if="returnName">
                  <span class="colorGrey font12 marginright10">寄回收件人</span>
                  <span class="colorblack font12">{{returnName}}</span>
                </div>
                <div class="infoBox" v-if="returnPhone">
                  <span class="colorGrey font12 marginright10">寄回收件人联系方式</span>
                  <span class="colorblack font12">{{returnPhone}}</span>
                </div>
                <div class="infoBox" v-if="returnAddressName">
                  <span class="colorGrey font12 marginright10">寄回收件人地址</span>
                  <span class="colorblack font12">{{returnAddressName}}</span>
                </div>
              </div>
              <div class="infoLeft flex1 marginTop20 textCenter" v-if="returnexpressName">
                <div class="infoBox" v-if="returnexpressName">
                  <span class="colorGrey font12 marginright10">买家退货物流</span>
                  <span class="colorblack font12">{{returnexpressName}}</span>
                </div>
                <div class="infoBox" v-if="returnexpressNo">
                  <span class="colorGrey font12 marginright10">买家退货物流单号</span>
                  <span class="colorblack font12">{{returnexpressNo}}</span>
                </div>
              </div>
            </div>
            <div class="orderInfo" v-if="orderDetail.afsLogList && orderDetail.afsLogList.length">
              <table class="afsTable">
                <tr>
                  <th>申请时间</th>
                  <th>操作</th>
                  <th>操作时间</th>
                </tr>
                <tr v-for="(item,index) in orderDetail.afsLogList" :key="item.id">
                  <td>{{timetrans(item.createDate)}}</td>
                  <td>{{item.content}}</td>
                  <td>{{timetrans(item.updateDate)}}</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="dataGeneral backWhite" v-if="orderDetail.status == 2">
            <div class="infoBox">
              <span class="colorblack font16 fontWeight marginright10">录入物流信息</span>
            </div>
            <div class="orderInfo flexCenter">
              <div class="infoLeft">
                <div class="infoBox">
                  <span class="colorGrey font12 marginright10" style="display: inline-block;width: 50px;">快递公司</span>
                  <input class="colorblack  font12 inputText" v-model="expressName"/>
                </div>
                <div class="infoBox">
                  <span style="display: inline-block;width: 50px;" class="colorGrey font12 marginright10">运单号</span>
                  <input class="colorblack  font12 inputText" v-model="expressNo"/>
                </div>
                <div class="infoBox">
                  <div class="smallButon" style="margin: 0 auto;" @click="ship()">发货</div>
                </div>
              </div>
            </div>
          </div>
          <div class="dataGeneral backWhite padding20" v-if="orderDetail.express">
            <div class="orderInfo flex">
              <div class="infoLeft">
                <div class="infoBox">
                  <span class="colorGrey font12 marginright10">快递公司</span>
                  <span class="colorblack font12">{{orderDetail.express.expressName}}</span>
                </div>
                <div class="infoBox">
                  <span class="colorGrey font12 marginright10">运单号</span>
                  <span class="colorblack font12">{{orderDetail.express.expressNo}}</span>
                </div>
                <div class="infoBox">
                  <span class="colorGrey font12 marginright10">发货时间</span>
                  <span class="colorblack font12">{{timetrans(orderDetail.payTime)}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="dataGeneral backWhite" v-if="orderDetail.remark">
            <div class="">
              <span class="colorblack font16 fontWeight marginright10">订单备注</span>
            </div>
            <div class="infoBox padding20">
              <span class="colorGrey font12 marginright10">买家备注</span>
              <span class="colorblack font12">{{orderDetail.remark}}</span>
            </div>
          </div>
          <div class="dataGeneral backWhite">
            <!--<div class="">-->
            <!--<span class="colorblack font16 fontWeight marginright10">订单信息</span>-->
            <!--</div>-->
            <div class="orderInfo flex">
              <div class="infoLeft">
                <div class="infoBox">
                  <span class="colorblack font16 marginright10 fontWeight">买家信息</span>
                </div>
                <div class="infoBox">
                  <span class="colorGrey font12 marginright10">买家</span>
                  <span class="colorblack font12">{{orderDetail.userName}}</span>
                </div>
              </div>
              <div class="infoRight">
                <div class="infoBox">
                  <span class="colorblack font16 fontWeight">收货人信息</span>
                  <span class="copyAdress marginLeft10 font12 cursor color2087" @click="copyAdress('copyAdress')"
                        :data-clipboard-text="shouhuo">复制</span>
                </div>
                <div class="infoBox">
                  <span class="colorGrey font12 timeSpan">收货人</span>
                  <span class="colorblack font12">{{orderDetail.consignee.name}}</span>
                </div>
                <div class="infoBox">
                  <span class="colorGrey font12 timeSpan">手机</span>
                  <span class="colorblack font12">{{orderDetail.consignee.phone}}</span>
                </div>
                <div class="infoBox">
                  <span class="colorGrey font12 timeSpan">收货地址</span>
                  <span class="colorblack font12">{{orderDetail.consignee.province}}{{orderDetail.consignee.city}}{{orderDetail.consignee.district}}{{orderDetail.consignee.address}}</span>
                </div>
              </div>
            </div>
          </div>


          <div class="dataGeneral backWhite padding20">
            <!--<div class="dataGenetalTitle">-->
            <!--<span class="colorblack font16 fontWeight marginright10">商品信息</span>-->
            <!--</div>-->
            <div class="orderInfo">
              <table class="orderDetailTable">
                <tr>
                  <th>商品</th>
                  <th>单价(元)/数量</th>
                  <th>合计(元)</th>
                  <th>消耗积分</th>
                  <th>发货状态</th>
                </tr>
                <tr>
                  <td>
                    <div class="flex">
                      <img class="productImg" :src="orderDetail.goodsImgUrl">
                      <div class="productBox">
                        <p class="colorblack font12 productText">{{orderDetail.goodsName}}</p>
                        <p class="colorGrey font12 productText">{{orderDetail.specName}}</p>
                      </div>
                    </div>
                  </td>
                  <td>{{orderDetail.goodsPrice}}/{{orderDetail.quantity}}</td>
                  <td>{{orderDetail.amount}}</td>
                  <td>{{orderDetail.points}}</td>
                  <td>
                    <span v-if="orderDetail.status == 1">待付款</span>
                    <span v-if="orderDetail.status == 2">待发货</span>
                    <span v-if="orderDetail.status == 3">待收货</span>
                    <span v-if="orderDetail.status == 4">交易完成</span>
                    <span v-if="orderDetail.status == 5">交易关闭</span>
                  </td>
                </tr>
                <tr>
                  <td>
                  </td>
                  <td></td>
                  <td>
                  </td>
                  <td></td>
                  <td>商品总价：{{orderDetail.amount}}</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>运费：0</td>
                </tr>
                <tr>
                  <td>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td class="colore6">订单金额：{{orderDetail.amount}}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="editDialog">
      <div class="messge">
        <div class="messageHeader">
          <div class="messagetitle">
            <span>修改退款金额</span>
          </div>
        </div>
        <div class="messageContent">
          <div class="messagemessage">
            <span class="lableText colorblack font12">修改退款金额</span>
            <input type="text" @change="changeValue('editMoney')" v-model="editAmount"
                   class="inputBox marginLeft10 colorblack font12" style="width: 150px" placeholder="输入金额"/>
            <span class="tip">需要小于等于用户申的金额</span>
          </div>
          <div class="messagemessage">
            <span class="lableText colorblack font12">修改原因</span>
            <input type="text" @change="changeValue('editReason')" v-model="refuseMessage"
                   class="inputBox marginLeft10 colorblack font12" placeholder="修改原因不超过50字"/>
          </div>
        </div>
        <div class="messagebtns">
          <div class="button borderButton copyButton" @click="closeeditDiologone()">
            取消
          </div>
          <div class="button bacButton" @click="editReturnMessage()">
            确认
          </div>
        </div>
      </div>
    </div>
    <div class="dialogone">
      <div class="messge">
        <div class="messageHeader">
          <div class="messagetitle">
            <span>拒绝原因</span>
          </div>
        </div>
        <div class="messageContent">
          <div class="messagemessage">
            <span class="lableText colorblack font12">拒绝原因</span>
            <input type="text" @change="changeValue('refuseMessage')" v-model="refuseMessage"
                   class="inputBox marginLeft10 colorblack font12" placeholder="拒绝原因不超过50字"/>
          </div>
        </div>
        <div class="messagebtns">
          <div class="button borderButton copyButton" @click="closeDiologone()">
            取消
          </div>
          <div class="button bacButton" @click="refuseReturnMessage()">
            确认
          </div>
        </div>
      </div>
    </div>
    <div class="dialogtwo">
      <div class="messge">
        <div class="messageHeader">
          <div class="messagetitle">
            <span>拒绝原因</span>
          </div>
        </div>
        <div class="messageContent">
          <div class="messagemessage">
            <span class="lableText colorblack font12">拒绝原因</span>
            <input type="text" @change="changeValue()" v-model="refuseMessage"
                   class="inputBox marginLeft10 colorblack font12" placeholder="拒绝原因不超过50字"/>
          </div>
        </div>
        <div class="messagebtns">
          <div class="button borderButton copyButton" @click="closeDiologtwo()">
            取消
          </div>
          <div class="button bacButton" @click="refuserefundMessage()">
            确认
          </div>
        </div>
      </div>
    </div>
    <div class="dialog">
      <div class="messge">
        <div class="messageHeader">
          <div class="messagetitle">
            <span>新建备注</span>
          </div>
        </div>
        <div class="messageContent">
          <div class="messagemessage">
            <span class="lableText colorblack font12">备注</span>
            <input type="text" @change="changeremarkValue()" v-model="remarkMessage"
                   class="inputBox marginLeft10 colorblack font12" placeholder="输入与客户的沟通信息"/>
          </div>
        </div>
        <div class="messagebtns">
          <div class="button borderButton copyButton" @click="closeDiolog()">
            取消
          </div>
          <div class="button bacButton" @click="addremarkMessage()">
            确认
          </div>
        </div>
      </div>
    </div>
    <Returnadress v-if="isshowadress" @getadressid='clickagreeReturn' @clickbanner="getbackData"></Returnadress>
  </div>
</template>

<script>
  import Aside from '@/components/aside'
  import Filter from '@/common/filter'
  import Service from '@/common/service'
  import Store from '@/vuex/index'
  import KlTop from '@/components/klTop'
  import Global from '@/common/global'
  import Commodities from '@/components/commodities'
  import Returnadress from '@/components/returnadress'

  export default {
    name: "salecustomer",
    components: {
      Aside,
      KlTop,
      Commodities,
      Returnadress
    },
    data() {
      return {
        afsTitle: '',
        expressName: '',
        returnexpressName: '',
        returnexpressNo: '',
        refundAmount: '',
        expressOption: [],
        expressNo: '',
        remarkMessage: "",
        remarkList: '',
        refuseMessage: '',
        afsList: [],
        returnAddressName: '',
        editAmount: '',
        returnPhone: '',
        returnName: '',
        orderDetail: {
          consignee: {},
        },
        orderId: '',
        shouhuo: '',
        statusTitle: '',
        imageUrl: '',
        isshowadress: false,
        afsId: '',
        afsIndex: '',
      };
    },
    created() {
      this.orderId = this.$route.query.id;
    },
    watch: {},
    mounted() {
      this.getorderDetail();
      // this.getremarkList();
    },
    methods: {
      ship() {
        this.expressName = this.expressName.replace(/(^\s*)|(\s*$)/g, "");
        if (this.expressName.length > 50 || this.expressName.length == 0) {
          this.$message.error('请输入正确的物流公司');
          return;
        }
        var reg = /^[a-zA-Z0-9]+$/;
        this.expressNo = this.expressNo.replace(/(^\s*)|(\s*$)/g, "");
        if (this.expressNo.length > 50 || this.expressNo.length == 0) {
          this.$message.error('请输入正确的物流单号');
          return;
        }
        if (!(reg.test(this.expressNo))) {
          this.$message.error('请输入正确的物流单号');
          return;
        }
        Service.order().orderShip({
            expressName: this.expressName,
            expressNo: this.expressNo,
            orderId: this.orderId
          },
        ).then(response => {
          if (response.errorCode == 0) {
            this.getorderDetail();
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      getbackData(str) {
        if (str == 'sure') {
          this.getorderDetail()
        }
        this.isshowadress = false;
      },
      clickagreeReturn(str) {
        var addressId = str.id;
        this.returnAddressName = str.name
        this.returnPhone = str.contactName
        this.returnName = str.contactTel
        Service.order().agreeAfs({
            message: '',
            addressId: addressId,
            afsId: this.afsId,
            refundAmount: this.refundAmount
          },
        ).then(response => {
          if (response.errorCode == 0) {
            this.getorderDetail();
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      openRemark() {
        $(".dialog").css({'display': 'block'});
      },
      refuseReturn() {
        $(".dialogone").css({"display": 'block'});
      },
      // 拒绝退款
      refuseMoney() {
        $(".dialogtwo").css({"display": 'block'});
      },
      // 拒绝退货
      refuseReturnMessage() {
        if (!this.changeValue('refuseMessage', 'submit')) {
          return;
        }
        Service.order().refuseafs({
            message: this.refuseMessage,
            afsId: this.afsId,
            refundAmount: this.refundAmount
          },
        ).then(response => {
          if (response.errorCode == 0) {
            $(".dialogone").css({"display": 'none'});
            this.$message.success(response.message)
            this.getorderDetail();
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      // 同意退货
      showconfirm(str) {
        this.$confirm(str, '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.order().agreeAfs({
              message: '',
              afsId: this.afsId,
              refundAmount: this.refundAmount
            },
          ).then(response => {
            if (response.errorCode == 0) {
              this.getorderDetail();
            } else {
              this.$message.error(response.message)
            }
          }, err => {
          });
        }).catch(() => {

        });
      },
      //立即退款
      returnMoney() {
        this.$confirm('同意退款，系统将订单款项原路退还给付款账号，请确认是否退款?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.order().agreerefund({
              message: '',
              afsId: this.afsId,
              refundAmount: this.refundAmount
            },
          ).then(response => {
            if (response.errorCode == 0) {
              this.getorderDetail();
            } else {
              this.$message.error(response.message)
            }
          }, err => {
          });
        }).catch(() => {

        });
      },
      // 拒绝退款
      refuserefundMessage() {
        if (!this.changeValue('refuseMessage', 'submit')) {
          return;
        }
        Service.order().refuserefund({
            message: this.refuseMessage,
            afsId: this.afsId,
            refundAmount: this.refundAmount
          },
        ).then(response => {
          if (response.errorCode == 0) {
            $(".dialogtwo").css({"display": 'none'});
            this.$message.success(response.message)
            this.getorderDetail();
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      changeremarkValue(type) {
        var on = true;
        if (this.remarkMessage.length != 0) {
          this.remarkMessage = this.remarkMessage.replace(/\s+/g, "");
          if (this.remarkMessage.length > 50 || this.remarkMessage.length < 2) {
            this.$message.error('请输入不少于2个字符或者多于100个字符的备注信息');
          }
        } else {
          this.$message.error('请输入注信息');
          on = false;
          return;
        }
        if (type == 'submit') {
          return on;
        }
      },
      changeValue(name, type) {
        var on = true;
        if (name == 'refuseMessage') {
          if (this.refuseMessage.length != 0) {
            this.refuseMessage = this.refuseMessage.replace(/\s+/g, "");
            if (this.refuseMessage.length > 50 || this.refuseMessage.length < 2) {
              this.$message.error('请输入不少于2个字符或者多于50个字符的拒绝原因');
            }
          } else {
            this.$message.error('请输入拒绝原因');
            on = false;
            return;
          }
        }
        if (name == 'editReason') {
          if (this.refuseMessage.length != 0) {
            this.refuseMessage = this.refuseMessage.replace(/\s+/g, "");
            if (this.refuseMessage.length > 50 || this.refuseMessage.length < 2) {
              this.$message.error('请输入不少于2个字符或者多于50个字符的修改原因');
            }
          } else {
            this.$message.error('请输入修改原因');
            on = false;
            return;
          }
        }
        if (name == 'editMoney') {
          var reg = /((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/;
          if (!reg.test(this.editAmount)) {
            this.$message.error('请输入正确合理的退款金额');
            on = false;
            return
          }
          if (this.editAmount.length != 0) {
            if (this.editAmount > this.refundAmount) {
              this.$message.error('修改金额不能大于退款总金额');
              on = false;
              return;
            }
          } else {
            this.$message.error('请输入修改金额');
            on = false;
            return;
          }
        }
        if (type == 'submit') {
          return on;
        }
      },

      editMoney() {
        this.editAmount = this.refundAmount
        $(".editDialog").css({'display': 'block'});
      },
      // 同意退货
      agreeReturn(status) {
        var str = '';
        if (status == 2) {
          str = '同意退款，系统将订单款项原路退还给付款账号，请确认是否退款?'
          this.showconfirm(str);
        } else if (status != 2) {
          str = '请确认是否同意客户的退货申请?';
          this.isshowadress = true;
        }
      },


      editReturnMessage() {
        if (!this.changeValue('editMoney', 'submit')) {
          return;
        }
        if (this.editAmount != this.refundAmount && !this.changeValue('editReason', 'submit')) {
          return;
        }
        this.refundAmount = this.editAmount
        Service.order().agreerefund({
            message: this.refuseMessage,
            afsId: this.afsId,
            refundAmount: this.refundAmount,
          },
        ).then(response => {
          if (response.errorCode == 0) {
            $(".editDialog").css({"display": 'none'});
            this.$message.success(response.message)
            this.getorderDetail();
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      refuseReturn() {
        $(".dialogone").css({"display": 'block'});
      },
      openrefuse() {
        var str = "<div style='text-align: center;'>" + this.orderDetail.afs.message + "</div>"
        this.$alert(str, '拒绝原因', {
          dangerouslyUseHTMLString: true
        });
      },
      openDetail() {
        var str = "<div style='text-align: left;margin-left: 30px;'>退款/返现总额：" + this.orderDetail.goodsPrice + "</div>" +
          "<div style='text-align: left;margin-left: 30px;'>订单编号：" + this.orderDetail.orderNo + "</div>" +
          "<div v-if='this.orderDetail.refundNo' style='text-align: left;margin-left: 30px;'>退款流水号：" + this.orderDetail.afs.refundNo + "</div>" +
          "<div  style='text-align: left;margin-left: 30px;'>申请时间：" + this.timetrans(this.orderDetail.afs.createDate) + "</div>" +
          "<div style='text-align: left;margin-left: 30px;'>退款方式  原路退</div>";
        this.$alert(str, '退款详情', {
          dangerouslyUseHTMLString: true
        });
      },
      getremarkList() {
        Service.order().getremarkList({},
          this.orderId
        ).then(response => {
          if (response.errorCode == 0) {
            this.remarkList = response.data;
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      getorderDetail() {
        Service.order().getOrderdetail({},
          this.orderId
        ).then(response => {
          if (response.errorCode == 0) {
            this.orderDetail = response.data;
            this.afsList = response.data.afsList;
            this.orderStatus = response.data.status;
            if (this.orderDetail.consignee) {
              this.shouhuo = this.orderDetail.consignee.province + this.orderDetail.consignee.city + this.orderDetail.consignee.district + this.orderDetail.consignee.address + ',' + this.orderDetail.consignee.name + ',' + this.orderDetail.consignee.phone;
            }
            let returnAddress = response.data.returnAddress
            if (returnAddress) {
              this.returnName = returnAddress.contactName
              this.returnPhone = returnAddress.contactTel
              this.returnAddressName = returnAddress.addressDesc
            }

            if (this.afsList) {
              this.afsIndex = this.afsList.length - 1
              this.refundAmount = this.afsList[this.afsIndex].refundAmount;
              this.returnexpressNo = this.afsList[this.afsIndex].expressNo;
              this.returnexpressName = this.afsList[this.afsIndex].expressName;
              this.afsId = this.afsList[this.afsIndex].id;
              this.$nextTick(() => {
                this.afsTitle = this.resetTitle(response.data.status, this.afsList[this.afsIndex])
              })

            }
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      copyAdress(classname) {
        var clipboard = new this.Clipboard('.' + classname);
        console.log(clipboard);
        clipboard.on('success', e => {
          this.$message.success('复制成功');
          // 释放内存
          clipboard.destroy();
          $(".dialog").css({'display': 'none'})
        });
        clipboard.on('error', e => {
          // 释放内存
          clipboard.destroy()
        })
      },
      afsresetTitle(status) {
        switch (status) {
          case 1:
            if (this.orderStatus == 2) {
              this.statusTitle = '退款中';
            } else {
              this.statusTitle = '退货中';
            }
            this.imageUrl = require('../../assets/images/tuihuozhong.png');
            break;
          case 2:
            this.statusTitle = '拒绝退货';
            this.imageUrl = require('../../assets/images/jujuetuihuo.png');
            break;
          case 3:
            this.statusTitle = '同意退货';
            this.imageUrl = require('../../assets/images/tongyituihuo.png');
            break;
          case 4:
            this.statusTitle = '退款中';
            this.imageUrl = require('../../assets/images/tuihuozhong.png');
            break;
          case 5:
            this.statusTitle = '拒绝退款';
            this.imageUrl = require('../../assets/images/jujuetuihuo.png');
            break;
          case 6:
            this.statusTitle = '已退款';
            this.imageUrl = require('../../assets/images/tuiguanchenggong.png');//没有
            break;
          default:
            this.statusTitle = '其他';
            break
        }
      },

      resetTitle(status, afs) {
        var title = '';
        switch (status) {
          case 1:
            title = '待支付';
            break;
          case 2:
            if (afs) {
              if (afs.status == 1) {
                title = '待发货，退款审核';
              } else if (afs.status == 2) {
                title = '未发货，拒绝退款';
              }else if (afs.status == 4) {
                title = '未发货，退款中';
              }else if (afs.status == 5) {
                title = '未发货，拒绝退款';
              } else if (afs.status == 6) {
                title = '未发货，退款成功';
              }
            } else {
              title = '待发货';
            }
            break;
          case 3:
            if (afs) {
              if (afs.status == 1) {
                title = '已发货，退货退款审核'
              } else if (afs.status == 2) {
                title = '已发货，拒绝退货'
              } else if (afs.status == 3) {
                title = '已发货，同意退货'
              } else if (afs.status == 4) {
                title = '已发货，退款中'
              } else if (afs.status == 5) {
                title = '已发货，拒绝退款'
              } else if (afs.status == 6) {
                title = '已发货，退款成功'
              }
            } else {
              title = '待收货';
            }
            break;
          case 4:
            title = '交易完成';
            break;
          case 5:
            title = '交易关闭';
            break;
          default:
            break;
        }
        console.log(123, title)
        return title
      },
      addremarkMessage() {
        if (!this.changeremarkValue('submit')) {
          return;
        }
        Service.order().addremark({
          content: this.remarkMessage
        }, this.orderId).then(response => {
          if (response.errorCode == 0) {
            $(".dialog").css({"display": 'none'});
            this.$message.success(response.message)
            this.getremarkList();
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      closeDiologone() {
        $(".dialogone").css({"display": "none"})
      },
      closeDiologtwo() {
        $(".dialogtwo").css({"display": "none"})
      },
      closeDiolog() {
        $(".dialog").css({"display": "none"})
      },
      closeeditDiologone() {
        $(".editDialog").css({"display": "none"})
      },
      showDes(item) {
        if (item.statusDesc) {
          for (let i in this.tableData) {
            this.tableData[i].isshowDes = false;
          }
          item.isshowDes = true;
        }
        this.$forceUpdate();

      },
      hideDes(item) {
        if (item.statusDesc) {
          for (let i in this.tableData) {
            this.tableData[i].isshowDes = false;
          }
        }
        this.$forceUpdate();
      },
      undercarriage(id) {
        $(".dialogone").css({'display': 'block'})
      },
      addCommodity() {
        this.$router.push({name: 'editorcommondity'})
      },
      goDetail(id) {
        this.$router.push({name: 'editorcommondity', query: {id: id}})
      },

      enddateChange(val) {
        if (val) {
          this.startDate = this.timetrans(val[0]);
          this.endDate = this.timetrans(val[1])
        } else {
          this.startDate = '';
          this.endDate = '';
        }
      },
      timetrans(timestamp) {
        var getSeconds = '', getMinutes = '', getHours = '';
        var d = new Date(timestamp);
        getHours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
        getMinutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
        ;
        getSeconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
        ;
        var newTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + getHours + ':' + getMinutes + ':' + getSeconds;
        return newTime
      },
    },

  }
</script>

