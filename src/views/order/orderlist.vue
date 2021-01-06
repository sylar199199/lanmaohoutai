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
          padding: 20px 20px 0 20px;

          .searchContent {
            flex-wrap: wrap;
            position: relative;

            .bacButton {
              position: absolute;
              right: 0px;
              bottom: 15px;
            }

            .bacButtonone {
              right: 0px;
              bottom: 66px;
            }

            .searchBox {
              margin-right: 30px;
              margin-bottom: 20px;

              .searchLable {
                margin-right: 6px;
              }

              .serchInput {
                width: 200px;
                height: 30px;
                line-height: 30px;
                border: 1px solid #e5e5e5;
                text-indent: 10px;
              }

              .searchName {
                display: inline-block;
                width: 56px;
                line-height: 30px;
                margin-right: 0;
              }
            }
          }
        }

        .bannerTable {
          background: #fff;
          margin-top: 15px;
          padding: 10px 0 100px;

          .noData {
            width: 100%;
            text-align: center;
            margin-top: 54px;
            color: #929292;
            font-size: 12px;

            .nodataImg {
              height: 78px;
              width: 78px;
              margin-bottom: 16px;
            }

            .linkText {
              display: block;
              color: #929292;

              .goHome {
                color: #45b8c8;
              }
            }
          }

          .borderButton {
            margin: 0 20px;
          }

          .table {
            font-size: 12px;
            border: 1px solid #f6f6f6;
            margin: 10px 20px;
            width: 937px;

            tr {
              border-bottom: 1px solid #f6f6f6;

              th {
                font-size: 12px;
                text-align: center;
                background: #f6f6f6;

                .iconshengjiangxu {
                  font-size: 16px;
                  margin-left: 5px;
                }
              }

              th:nth-child(3) {
                text-align: left;
              }

              td {
                text-align: center;
                padding: 10px;

                .undercarriageReason {
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

                .line {
                  display: inline-block;
                  height: 8px;
                  width: 3px;
                  background: #eee;
                  margin: 0 10px;
                }

                .productImg {
                  width: 70px;
                  height: 70px;
                  max-width: 116px;
                  max-height: 60px;
                }

                .productBox {
                  display: flex;
                  flex-direction: column;
                  height: 60px;
                  justify-content: space-between;
                  padding-left: 10px;

                  .productText {
                    margin-bottom: 0px;
                    margin-top: 0;
                    line-height: 16px;
                  }
                }

              }

              td:nth-of-type(2) {
                min-width: 180px;
                max-width: 320px;
                text-align: left;
              }

              td:nth-of-type(3) {
                text-align: left;

                .imgicon {
                  display: inline-block;
                  vertical-align: middle;
                  height: 20px;
                  width: 20px;
                  padding-right: 10px;
                }
              }

              td:nth-of-type(5) {
                width: 50px;
                position: relative;

                .warmtext {
                  position: absolute;
                  color: #fff;
                  font-size: 12px;
                  top: 50px;
                  background: #000;
                  padding: 4px 6px;
                  border-radius: 4px;
                }

                .imgicon {
                  display: inline-block;
                  vertical-align: middle;
                  height: 20px;
                  width: 20px;
                  margin-right: 20px;
                }
              }

              td:nth-of-type(6) {
                min-width: 90px;
                max-width: 90px;
                text-align: center;
              }

              td:nth-of-type(7) {
                min-width: 70px;
                max-width: 70px;
                text-align: center;
              }

              td:last-child {
                padding: 10px;
                width: 150px;
              }

            }
          }
        }

        .block {
          text-align: right;
          margin-top: 35px;
          margin-right: 20px;
        }

      }
    }
  }

  .fileBox {
    .applicaninfo {
      width: 120px;
      height: 40px;
      background-color: #f9f9f9;
      border-radius: 4px;
      text-align: center;
      position: relative;

      .imgBox {
        display: inline-block;
        width: 120px;
        height: 68px;

        .uploadtext {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 120px;
          height: 40px;
          color: #fff;
          text-align: center;
          background-color: #0d2c4b;
          border-radius: 20px;
        }
      }
    }

  }

  .dialogone::after, expressDialogone::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 0;
    vertical-align: middle;
  }

  .expressDialogone {
    display: none;
    position: fixed;
    top: 0px;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.5);

    .messge {
      display: inline-block;
      width: 560px;
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
      margin-top: 30px;
      min-height: 600px;
      max-height: 800px;


      .messageHeader {
        text-align: left;
        position: relative;
        padding: 15px 15px 0px;
        color: #000;

        .cancelmessage {
          position: absolute;
          right: 16px;
          top: 10px;
        }
      }

      .messageContent {
        position: relative;
        width: 380px;
        margin: 0 auto;
        color: #606266;
        font-size: 14px;

        .goodsContent {
          display: flex;
          padding-bottom: 30px;
          border-bottom: #999999 1px solid;
          width: 100%;

          .goodsLeft {
            width: 100px;
            height: 100px;

            img {
              width: 100%;
              height: 100%;
            }
          }

          .goodsRight {
            display: flex;
            flex-direction: column;
            margin-left: 20px;

            .goodsName {
              flex: 1;
            }

            .goodsSpec {
              color: #999999;
              font-size: 12px;
              flex: 1;
            }
          }
        }

        .expressOrder {
          margin: 30px 0;
          margin-bottom: 50px;

          .orderDiv {
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }

  }

  .dialogone {
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

    .color2087:hover {
      color: rgba(13, 13, 13, 0.8);
    }
  }

  .marginTop10 {
    margin-top: 10px;
  }
</style>
<template>
  <div class="general">
    <KlTop></KlTop>
    <div class="salecustomercontent contaner">
      <Aside></Aside>
      <div class="content">
        <div class="contanternews">
          <div class="dataGeneral backWhite">
            <div class="searchContent flex clear">
              <div class="searchBox">
                <span class="searchLable colorGrey font12">订单编号 </span>
                <input type="text" v-model="orderNo" class="serchInput font12 colorblack" placeholder="订单编号"/>
              </div>
              <div class="searchBox flex">
                <span class="searchLable searchName colorGrey font12">订单状态</span>
                <el-select v-model="statusText" placeholder="">
                  <el-option
                    v-for="item in statusOption"
                    :key="item.id"
                    :label="item.name"
                    :value="item.name">
                  </el-option>
                </el-select>
              </div>
              <div class="searchBox">
                <span class="searchLable colorGrey font12">商品名称 </span>
                <input type="text" v-model="goodsName" class="serchInput font12 colorblack" placeholder="商品名称"/>
              </div>
              <div class="searchBox flex">
                <span class="searchLable searchName colorGrey font12">下单时间</span>
                <el-date-picker
                  @change="enddateChange"
                  v-model="insuranceDate"
                  type="daterange"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :default-time="['00:00:00','23:59:59']">
                </el-date-picker>
              </div>
              <div class="searchBox searchBoxone flex">
                <span class="searchLable searchName colorGrey font12">快递信息</span>
                <el-select v-model="consigneeType" placeholder="">
                  <el-option
                    v-for="item in userOption"
                    :key="item.value"
                    :label="item.name"
                    :value="item.value">
                  </el-option>
                </el-select>
                <input type="text" v-model="userValue" class="serchInput font12 colorblack  marginLeft10"
                       placeholder="快递信息"/>
              </div>
              <div class="searchBox">
                <span class="searchLable colorGrey font12">用户昵称 </span>
                <input type="text" v-model="userName" class="serchInput font12 colorblack" placeholder="用户昵称"/>
              </div>
              <div class="searchBox">
                <span class="searchLable colorGrey font12">用户id </span>
                <input type="text" v-model="userId" class="serchInput font12 colorblack" placeholder="用户id"/>
              </div>


              <div class="searchBox flex">
                <div class="bacButton cursor" @click="getcommodityData('search')">筛选</div>
                <div class="bacButtonone bacButton cursor" :download="download" :href="href" @click="daochu()">导出</div>
                <div class="fileBox">
                  <div class="applicaninfo">
                    <el-upload
                      ref="upload"
                      class="upload-demo imgBox"
                      name="file"
                      :action="upFileAction"
                      :headers="headers"
                      :on-change="handleChange"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload"
                      :on-error="errphoto"
                      :show-file-list="false"
                      accept="">
                      <div class="uploadtext">
                        <p>批量发货</p>
                      </div>
                    </el-upload>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="dataGeneral bannerTable">
            <table v-if="noData" class="table">
              <tr>
                <th v-for="item in sortDatas">
                  {{item.name}}
                </th>
              </tr>
              <tr v-for="(item,index) in tableData">
                <td>
                  {{item.orderNo}}
                </td>
                <td>
                  <div class="flex">
                    <img class="productImg" :src="item.goodsImgUrl">
                    <div class="productBox">
                      <p class="colorGrey font12 productText">{{item.goodsName}}</p>
                      <p class="colorblack font12 productText"><span class="colore6">￥{{item.goodsPrice}}</span></p>
                      <!-- <p class="colorblack font12 productText"><span class="colore6">￥{{item.goodsPrice}}</span></p> -->
                    </div>
                  </div>
                </td>

                <td>
                  {{item.userName}}/
                  {{item.consignee.name}}
                </td>

                <td>
                  {{item.amount}}
                </td>
                <td>
                  {{item.points}}
                </td>
                <td>
                  {{timetrans(item.createDate)}}
                </td>
                <td v-if="item.afs">
                  {{afsresetTitle(item.status,item.afs)}}
                </td>
                <td v-if="!item.afs">
                  <span v-if="item.status == 1">待支付</span>
                  <span v-if="item.status == 2">待发货</span>
                  <span v-if="item.status == 3">待收货</span>
                  <span v-if="item.status == 5">交易关闭</span>
                  <span v-if="item.status == 4">交易成功</span>
                </td>
                <td>
                  <span class="color2087 font12 fontWeight cursor" v-if="item.status == 2" @click="ship(item)">发货</span>
                  <span class="line" v-if="item.status == 2"></span>
                  <!-- <span class="color2087 font12 fontWeight cursor" @click="goExpress(item.id)">物流</span>
                   <span class="line"></span>-->
                  <span class="color2087 font12 fontWeight cursor" @click="goDetail(item.id)">详情</span>

                </td>
              </tr>
            </table>
            <div v-if="!noData" class="noData">
              <img class="nodataImg" src="../../assets/images/nodatalist.png"/>
              <p>暂无数据~</p>
            </div>
            <div class="block" v-if="noData">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="page"
                :page-size="size"
                :page-sizes="[5,10]"
                layout="total,sizes,prev, pager, next,jumper"
                :total="total">
              </el-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dialogone">
      <div class="messge">
        <div class="messageHeader">
          <div class="messagetitle">
            <span>请录入发货物流信息</span>
          </div>
        </div>
        <div class="messageContent">
          <div class="colorblack font12" style="margin:10px;">
            <span>编号： {{shiporderNo}}</span>
            <span style="margin-left:16px;">收货人 {{consigneename}}</span>
          </div>
          <div class="messagemessage adressBox messagemessageone">
            <span class="lableText colorblack font12">物流公司</span>
            <input type="text" @change="changeValue('expressName','')" v-model="express.expressName"
                   class="inputBox marginLeft10 colorblack font12" placeholder="物流公司"/>

          </div>
          <div class="messagemessage">
            <span class="lableText colorblack font12">物流单号</span>
            <input type="text" @change="changeValue('expressNo','')" v-model="express.expressNo"
                   class="inputBox marginLeft10 colorblack font12" placeholder="物流单号"/>
          </div>
        </div>
        <div class="messagebtns">
          <div class="button borderButton copyButton" @click="closeDiologone()">
            取消
          </div>
          <div class="button bacButton" @click="shipGoods()">
            确认
          </div>
        </div>
      </div>
    </div>
    <div class="expressDialogone">
      <div class="messge">

        <div class="messageHeader">
          <div class="messagetitle">
            <span>物流信息</span>
          </div>
          <div class="cancelmessage" @click="cancelExpress">x</div>
        </div>
        <div class="messageContent">
          <div class="goodsContent">
            <div class="goodsLeft">
              <img
                src="https://fanyi-cdn.cdn.bcebos.com/static/translation/widget/translate/output/img/short-banner1_edeef70.png"
                alt="">
            </div>
            <div class="goodsRight">
              <div class="goodsName colorblack fontWeight">商品名称</div>
              <div class="goodsSpec">规格</div>
            </div>
          </div>
          <div class="expressOrder">
            <div class="flex orderDiv">
              <span class="colorGrey font12 marginright10">运单号 <span
                class="colorGrey font12">123121321321231</span></span>
              <span class="copyfahuo marginLeft10 font12 cursor color2087" @click="copyAdress('copyfahuo')"
                    :data-clipboard-text="123"> 复制</span>
            </div>
            <span class="colorGrey fontWeight font12 marginright10 marginTop10">物流公司 <span
              class="colorGrey font12">圆通快递</span></span>
          </div>
          <div class="marginTop10">
            <el-timeline>
              <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :icon="activity.icon"
                :type="activity.type"
                :color="activity.color"
                :size="activity.size"
                :timestamp="activity.timestamp">
                <span :class="index == 0 ?'colorblack fontWeight' :'colorGrey'" class="font12">
                  {{activity.content}}
                </span>
              </el-timeline-item>
            </el-timeline>
          </div>
        </div>
      </div>
    </div>
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
  import Util from '@/common/util'

  export default {
    name: "salecustomer",
    components: {
      Aside,
      KlTop,
      Commodities
    },
    data() {
      return {
        upFileAction: '',
        headers: {},
        shiporderNo: '',
        consigneename: '',
        userId: '',
        download: '',
        href: '',
        expressNo: '',
        express: {
          expressName: "",
          expressNo: ''
        },
        statusText: '',
        statusOption: [
          {name: '全部', id: ''}, {name: '待支付', id: '1'}, {name: '待发货', id: '2'}, {name: '待收货', id: '3'}, {
            name: '交易成功',
            id: '4'
          }, {name: '交易关闭', id: '5'}, {name: '退款中', id: '6'}, {name: '退货中', id: '7'}
        ],
        status: '',
        userValue: '',
        userName: '',
        userOption: [{name: '运单号', value: 0}, {name: '收货人姓名', value: 1}, {name: '收货人手机号', value: 2}],
        consigneeOption: [{name: '姓名', value: 0}, {name: '手机号', value: 1}],
        sortDatas: [
          {orderType: '', name: '订单编号', showBlue: false, orderField: ''},
          {orderType: '', name: '商品', showBlue: false, orderField: ''},
          {orderType: '', name: '买家/收货人', showBlue: true, orderField: ''},
          {orderType: '', name: '实收金额', showBlue: true, orderField: ''},
          {orderType: '', name: '积分消耗', showBlue: false, orderField: ''},
          {orderType: '', name: '下单时间', showBlue: false, orderField: ''},
          {orderType: '', name: '订单状态', showBlue: false, orderField: ''},
          {orderType: '', name: '操作', showBlue: false, orderField: ''}
        ],
        endDate: "",
        consigneeType: 0,
        consigneeName: "",
        consigneePhone: '',
        startDate: "",
        goodsName: '',
        orderNo: '',
        afsStatus: '',
        total: 0,
        size: 10,
        page: 1,
        channelId: '1',
        channelsOption: [{name: '昆仑保险App', id: '1'}],
        insuranceDate: '',
        tableData: [],
        noData: true,
        statusTitle: "",
        shipId: '',
        activities: [
          {
            content: '您的订单已打印',
            timestamp: '2018-04-03 20:46',
            color: '#0d2c4b'
          }, {
            content: '订单进入仓库',
            timestamp: '2018-04-03 20:46',
          }, {
            content: '提交了订单',
            timestamp: '2018-04-03 20:46'
          }]
      };
    },
    created() {
      this.upFileAction = Global.requestUrl + "/lanmao/admin/order/ship/batch";
      var tokenVal = Util.localStorageUtil.get('access_token');
      this.headers = {token: tokenVal};
    },
    computed: {},
    watch: {
      'consigneeType': function () {
        if (this.consigneeType == 0) {
          this.expressNo = this.userValue;
          this.consigneeName = ''
          this.consigneePhone = '';
        }
        if (this.consigneeType == 1) {
          this.expressNo = '';
          this.consigneeName = this.userValue;
          this.consigneePhone = '';
        }
        if (this.consigneeType == 2) {
          this.expressNo = '';
          this.consigneeName = '';
          this.consigneePhone = this.userValue;
        }
      },
      'status': function () {

      },
    },
    mounted() {
      if (this.$route.query.status) {
        this.status = (this.$route.query.status).toString();
        if(this.$route.query.status == 2){
          this.statusText = '待发货'
        }
        if(this.$route.query.status == 6){
          this.statusText = '退货中'
        }
        if(this.$route.query.status == 7){
          this.statusText = '退款中'
        }
      }
      this.getcommodityData('');//获取订单列表
    },
    methods: {
      beforeAvatarUpload(file) {
        Store.commit("setIsLoading", true);
        var index = file.name.indexOf('.');
        const isExcel = file.name.substring(index + 1) === 'xlsx';
        const isExcel1 = file.name.substring(index + 1) === 'xls';
        if (!isExcel && !isExcel1) {
          this.$message.error('请上传正确的excel文件!');
        }
        return (isExcel || isExcel1);
      },
      handleChange(file, fileList) {
      },
      errphoto(err, file, fileList) {

      },
      handleAvatarSuccess(res, file) {
        Store.commit("setIsLoading", false);
        this.getcommodityData('');//获取订单列表
        if (res.data) {
          this.$message.success('批量发货成功');
        } else {
          this.$message.success(res.message);
        }
      },
      isOther(x, arr) {
        for (var i = 0; i < arr.length; i++) {
          if (x === arr[i].id) {
            return true;
          }
        }

        return false;
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
          // 不支持复制
          console.log('该浏览器不支持自动复制');
          // 释放内存
          clipboard.destroy()
        })
      },
      cancelExpress() {
        $(".expressDialogone").css({'display': 'none'})
      },
      ship(item) {
        this.shiporderNo = item.orderNo;
        this.consigneename = item.consignee.name;
        this.shipId = item.id;
        $(".dialogone").css({'display': 'block'})
      },
      shipGoods() {
        if (!this.changeValue('expressName', 'submit')) {
          return;
        }
        if (!this.changeValue('expressNo', 'submit')) {
          return;
        }
        Service.order().orderShip({
          expressName: this.express.expressName,
          expressNo: this.express.expressNo,
          orderId: this.shipId
        }).then(response => {
          if (response.errorCode == 0) {
            this.$message.success('发货成功');
            this.getcommodityData('')
            this.shiporderNo = '';
            this.consigneename = '';
            this.shipId = '';
            $(".dialogone").css({'display': 'none'})
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      changeValue(name, type) {
        var on = true;
        this.express[name] = this.express[name].replace(/(^\s*)|(\s*$)/g, "");
        if (name == 'expressName') {
          if (this.express[name].length > 50 || this.express[name].length == 0) {
            this.$message.error('请输入正确的物流公司');
            on = false;
            return;
          }
        }
        if (name == 'expressNo') {
          var reg = /^[a-zA-Z0-9]+$/;
          this.express[name] = this.express[name].replace(/(^\s*)|(\s*$)/g, "");
          if (this.express[name].length > 50 || this.express[name].length == 0) {
            this.$message.error('请输入正确的物流单号');
            on = false;
            return;
          }
          if (!(reg.test(this.express[name]))) {
            this.$message.error('请输入正确的物流单号');
            on = false;
            return;
          }
        }
        if (type == 'submit') {
          return on;
        }
      },
      resetTitle(title) {
        switch (title) {
          case '待支付':
            this.status = '1';
            this.afsStatus = '';
            break;
          case '待发货':
            this.status = '2';
            this.afsStatus = '';
            break;
          case '待收货':
            this.status = '3';
            this.afsStatus = '';
            break;
          case '待激活':
            this.status = '4';
            this.afsStatus = '';
            break;
          case '已激活':
            this.status = '5';
            this.afsStatus = '';
            break;
          case '交易关闭':
            this.status = '6';
            this.afsStatus = '';
            break;
          case '交易成功':
            this.status = '7';
            this.afsStatus = '';
            break;
          case '退货中':
            this.status = '';
            this.afsStatus = '1';
            break;
          case '拒绝退货':
            this.status = '';
            this.afsStatus = '2';
            break;
          case '同意退货':
            this.status = '';
            this.afsStatus = '3';
            break;
          case '退款中':
            this.status = '';
            this.afsStatus = '4';
            break;
          case '拒绝退款':
            this.status = '';
            this.afsStatus = '5';
            break;
          case '已退款':
            this.status = '';
            this.afsStatus = '6';
            break;
          default:
            this.status = '';
            this.afsStatus = '';
            break
        }
      },
      closeDiologone() {
        this.shiporderNo = '';
        this.consigneename = '';
        this.shipId = '';
        $(".dialogone").css({"display": "none"})
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
      goDetail(id) {
        this.$router.push({name: 'orderDetail', query: {id: id}})
      },
      goExpress() {
        $(".expressDialogone").css({'display': 'block'})
      },
      handleSizeChange(val) {
        this.size = val;
        this.getcommodityData('')
      },
      handleCurrentChange(val) {
        this.page = val;
        this.getcommodityData('')
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
      Decode(arr) {
        var bstr = atob(arr), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      },
      daochu() {
        if (this.statusText) {
          this.resetTitle(this.statusText);
        }
        if (this.consigneeType == 0) {
          this.expressNo = this.userValue;
          this.consigneeName = ''
          this.consigneePhone = '';
        }
        if (this.consigneeType == 1) {
          this.expressNo = '';
          this.consigneeName = this.userValue;
          this.consigneePhone = '';
        }
        if (this.consigneeType == 2) {
          this.expressNo = '';
          this.consigneeName = '';
          this.consigneePhone = this.userValue;
        }
        // if(str == 'search'){
        //     this.page = 1;
        // }
        var endDate = '', startDate = '';
        console.log(this.endDate)
        if (this.endDate || this.startDate) {
          endDate = Date.parse(new Date(this.endDate.replace(/-/g, "/")));
          startDate = Date.parse(new Date(this.startDate.replace(/-/g, "/")));
        } else {
          endDate = this.endDate;
          startDate = this.startDate;
        }
        if (!this.userId) {
          this.userId = null
        }

        Service.order().orderDaochu({
          userId: this.userId,
          userName: this.userName,
          "consigneeName": this.consigneeName,
          consigneePhone: this.consigneePhone,
          "page": this.page,
          "size": this.size,
          "startDate": startDate,
          "endDate": endDate,
          expressNo: this.expressNo,
          goodsName: this.goodsName,
          "status": this.status,
          "orderNo": this.orderNo,
        }).then(response => {
          if (response.errorCode == 0) {
            var blob = this.Decode(response.data);
            console.log(window.URL.createObjectURL(blob).indexOf(location.host))
            if (window.URL.createObjectURL(blob).indexOf(location.host) < 0) {//ie不支持
              this.href = window.navigator.msSaveOrOpenBlob(blob, '线索列表.xlsx');
            } else {
              this.download = '线索列表.xlsx';
              this.href = URL.createObjectURL(blob);
            }
            window.open(this.href)
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      afsresetTitle(status, afs) {
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
      getcommodityData(str) {
        if (this.statusText) {
          this.resetTitle(this.statusText);
        }
        if (this.consigneeType == 0) {
          this.expressNo = this.userValue;
          this.consigneeName = ''
          this.consigneePhone = '';
        }
        if (this.consigneeType == 1) {
          this.expressNo = '';
          this.consigneeName = this.userValue;
          this.consigneePhone = '';
        }
        if (this.consigneeType == 2) {
          this.expressNo = '';
          this.consigneeName = '';
          this.consigneePhone = this.userValue;
        }
        if (str == 'search') {
          this.page = 1;
        }
        if (!this.userId) {
          this.userId = null
        }
        var endDate = '', startDate = '';
        if (this.endDate || this.startDate) {
          endDate = Date.parse(new Date(this.endDate.replace(/-/g, "/")));
          startDate = Date.parse(new Date(this.startDate.replace(/-/g, "/")));
        } else {
          endDate = this.endDate;
          startDate = this.startDate;
        }
        Service.order().orderList({
          userId: this.userId,
          userName: this.userName,
          "consigneeName": this.consigneeName,
          consigneePhone: this.consigneePhone,
          "page": this.page,
          "size": this.size,
          "startDate": startDate,
          "endDate": endDate,
          expressNo: this.expressNo,
          goodsName: this.goodsName,
          "status": this.status,
          "afsStatus": this.afsStatus,
          "orderNo": this.orderNo,
        }).then(response => {
          if (response.errorCode == 0) {
            if (response.data.records.length == 0) {
              this.noData = false;
            } else {
              this.noData = true;
              this.total = response.data.total;
              for (let i in response.data.records) {
                response.data.records[i].isshowDes = false;
              }
              this.$nextTick(() => {
                this.tableData = response.data.records;
              })
            }
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });

      },
    },

  }
</script>

