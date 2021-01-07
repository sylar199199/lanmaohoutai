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
          padding: 0 20px 20px;

          .tableTitle {
            border-bottom: 1px solid #ececec;
            margin: 0 20px 10px 20px;
            padding-bottom: 10px;
          }

          .bacButton {
            margin-bottom: 15px;
          }

          .searchContent {
            flex-wrap: wrap;
            position: relative;
            margin-top: 20px;

            .searchBox {
              margin-right: 30px;
              margin-bottom: 20px;

              .radioBox {
                .iconfont {
                  font-size: 18px;
                  margin-right: 4px;
                  display: inline-block;
                  vertical-align: middle;
                }

                .typeText {
                  display: inline-block;
                  vertical-align: middle;
                }

              }

              .inputBox {
                width: 60px;
                height: 30px;
                line-height: 30px;
                border: 1px solid #e5e5e5;
                text-indent: 10px;
                margin: 0 6px;
              }

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
          /*margin-top: 15px;*/
          padding: 20px 0 100px;

          .previewBox {
            width: 330px;
            border: 1px solid #ececec;
            margin: 20px 0 20px 20px;

            .previewTitle {
              text-align: center;
              height: 40px;
              line-height: 40px;
              background: #ececec;
            }

            .scrollContent {
              width: 330px;
              height: 470px;
              margin: 16px;
              overflow-y: auto;
              flex-wrap: wrap;
              /*overflow-x: hidden;*/
            }

            .previewContent {
              .contentTitle {
                margin: 10px 16px;
              }

              .productContent {
                border: 1px solid #ececec;
                width: 140px;
                margin-right: 12px;
                margin-bottom: 10px;
                border-radius: 5px;

                .productLeft {
                  height: 140px;
                  width: 140px;
                  margin-right: 8px;

                  .productImg {
                    height: 140px;
                    width: 140px;
                    border-radius: 5px 5px 0 0;
                  }
                }

                .productRight {
                  .textLinethrough {
                    text-decoration: line-through;
                  }

                  .priceText {
                    color: #f24e43;
                    font-size: 20px;
                    font-weight: 600;
                  }

                  .gouqiicon {
                    height: 12px;
                    width: 8px;
                    display: inline-block;
                    vertical-align: middle;
                  }

                  .flexBetween {
                    margin: 6px;
                    line-height: 28px;

                    .borderSmallButton {
                      width: 55px;
                      margin-top: 14px;
                    }
                  }

                  .productName {
                    line-height: 16px;
                    margin: 16px 6px 8px;
                  }

                  .percent {
                    text-align: right;
                    border-radius: 10px;
                    width: 130px;
                    height: 15px;
                    line-height: 15px;
                    background: #efefef;
                    margin: 6px;

                    .percentNumber {
                      background: -webkit-linear-gradient(0deg, #f6e1b0, #f3bacc);
                      border-radius: 10px 0 0 10px;
                    }
                  }
                }
              }
            }
          }

          .borderButton {
            margin: 0 20px;
          }

          .noData {
            text-align: center;
            padding-top: 30px;
          }

          .tableBox {
            margin: 0 20px;
          }

          .tableScrollBox {
            height: 300px;
            overflow-y: scroll;
          }

          .table {
            font-size: 12px;
            border: 1px solid #f6f6f6;

            width: 562px;

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

              th:nth-child(1) {
                text-align: left;
                padding-left: 10px
              }
              th:nth-child(2) {
                text-align: left;
                padding-right: 5px
              }
              th:nth-child(3) {
                text-align: left;
                padding-right: 5px
              }

              th:nth-child(4) {
                text-align: center;
                padding-right: 5px
              }

              td {
                text-align: center;
                padding: 8px 0;

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
                  }
                }

              }

              td:nth-of-type(1) {
                width: 150px;
                text-align: left;
                padding-left: 10px
              }

              td:nth-of-type(3) {
                text-align: center;

                .imgicon {
                  display: inline-block;
                  vertical-align: middle;
                  height: 20px;
                  width: 20px;
                  padding-right: 10px;
                }
              }

              td:nth-of-type(4) {
                padding-right: 10px;
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

  .marginbottom {
    margin-bottom: 8px;
  }

  .width30 {
    width: 30px;
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
          <!--<div class="dataGeneral backWhite contentHead">-->
          <!--<div class="dataGenetalTitle">-->
          <!--<span class="colorblack font14 fontWeight marginright10">限时兑换 / 新建限时兑换</span>-->
          <!--</div>-->
          <!--</div>-->
          <div class="dataGeneral bannerTable">
            <div class="tableTitle colorblack font14">活动信息</div>
            <div class="flex contentFlex">
              <div class="previewBox">
                <div class="previewTitle">活动效果浏览</div>
                <div class="previewContent">
                  <div class="contentTitle font14 colorblack">限时兑换</div>
                  <div class="scrollContent flex">
                    <div class="productContent" v-for="item in goodsdata">
                      <div class="productLeft">
                        <img :src="item.imgUrl" class="productImg"/>
                      </div>
                      <div class="productRight">
                        <p class="productName font12 colorblack">{{item.name}}</p>
                        <div class="flexBetween">
                          <div></div>
                          <span class="colorGrey font12 fr" v-if="item.salesVolume">已抢{{item.salesVolume}}件</span>
                          <span class="colorGrey font12 fr" v-if="!item.salesVolume">已抢0件</span>
                        </div>
                        <div class="percent">
                          <div class="percentNumber font12 colorGrey"
                               :style="{'width':getPercent(item.salesVolume,item.stock)}">
                            {{getPercent(item.salesVolume,item.stock)}}
                          </div>
                        </div>
                        <div class="flexBetween">
                          <div>
                            <p class="colorblack font12">
                              <img class="gouqiicon" src="https://oss.ifxj.com/lanmao/health/gouqi.png">
                              <span class="colorBlack font12">{{item.points}}+</span>
                              <span class="'priceText">¥{{item.price}}</span>
                            </p>
                            <p class="colorblack font12"><span class="textLinethrough colorGrey font12">¥{{item.marketPrice}}</span>
                            </p>
                          </div>
                          <div class="borderSmallButton">马上抢</div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="tableBox">
                <div class="searchContent flex clear">
                  <div class="searchBox">
                    <span class="searchLable colorGrey font12">活动名称</span>
                    <input type="text" v-model="name" class="serchInput font12 colorblack" placeholder="请填写活动名称"/>
                  </div>
                  <div class="searchBox flex">
                    <span class="searchLable searchName colorGrey font12">新品设置 </span>
                    <div class="radioBox">
                      <i class="iconfont iconxuanzhong color2087 font20 cursor" v-if="newproduct==0"></i>
                      <i class="iconfont iconxuanze  font20 cursor" v-if="newproduct !=0" @click="newproduct = 0"></i>
                      <span class="typeText colorblack font12 ">不设置</span>
                      <i class="iconfont iconxuanzhong color2087 font20 cursor marginLeft10" v-if="newproduct==1"></i>
                      <i class="iconfont iconxuanze  font20 cursor marginLeft10" v-if="newproduct != 1"
                         @click="newproduct = 1"></i>
                      <span class="typeText colorblack font12 marginright10">设置预告时间
                                                <el-date-picker
                                                  class="font12"
                                                  v-model="pretime"
                                                  type="datetime"
                                                  placeholder="选择日期时间">
                                                </el-date-picker>
                                            </span>

                    </div>
                  </div>
                  <div class="searchBox flex">
                    <span class="searchLable searchName colorGrey font12">生效时间 </span>
                    <el-date-picker
                      @change="enddateChange"
                      v-model="insuranceDate"
                      type="datetimerange"
                      unlink-panels
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                    >
                    </el-date-picker>
                  </div>
                  <div class="searchBox flex">
                    <span class="searchLable searchName colorGrey font12">限购设置 </span>
                    <div class="radioBox marginLeft10">
                      <i class="iconfont iconxuanzhong color2087 font20 cursor cursor" v-if="shelvesType==1"></i>
                      <i class="iconfont iconxuanze  font20 cursor" v-if="shelvesType != 1"
                         @click="shelvesType = 1"></i>
                      <span class="typeText colorblack font12 marginright10">每人每种商品限购<input type="text" class="inputBox"
                                                                                            v-model="purchaseNumber"/>件</span>
                      <i class="iconfont iconxuanzhong color2087 font20 cursor marginLeft10" v-if="shelvesType==0"></i>
                      <i class="iconfont iconxuanze  font20 cursor marginLeft10" v-if="shelvesType !=0"
                         @click="shelvesType = 0"></i>
                      <span class="typeText colorblack font12">不限购</span>
                    </div>
                  </div>
                  <div class="searchBox flex">
                    <span class="searchLable  colorGrey font12">人群设置</span>
                    <div class="radioBox marginLeft10">
                      <div class="marginbottom">
                        <i class="iconfont iconxuanzhong color2087 font20 cursor " v-if="isuserRegDaysLimit == 1"></i>
                        <i class="iconfont iconxuanze  font20 cursor " v-if="isuserRegDaysLimit != 1"
                           @click="isuserRegDaysLimit = 1"></i>
                        <span class="typeText colorblack font12">不限购</span>
                      </div>
                      <div class="marginbottom">
                        <i class="iconfont iconxuanzhong color2087 font20 cursor cursor"
                           v-if="isuserRegDaysLimit == 2"></i>
                        <i class="iconfont iconxuanze  font20 cursor" v-if="isuserRegDaysLimit != 2"
                           @click="isuserRegDaysLimit = 2"></i>
                        <span class="typeText colorblack font12 marginright10">新用户微信授权<input type="text"
                                                                                             class="inputBox"
                                                                                             v-model="maxRegDays"/>天以内</span>
                      </div>
                      <div>
                        <i class="iconfont iconxuanzhong color2087 font20 cursor cursor"
                           v-if="isuserRegDaysLimit == 3"></i>
                        <i class="iconfont iconxuanze  font20 cursor" v-if="isuserRegDaysLimit != 3"
                           @click="isuserRegDaysLimit = 3"></i>
                        <span class="typeText colorblack font12 marginright10">老用户微信授权<input type="text"
                                                                                             class="inputBox"
                                                                                             v-model="minRegDays"/>天以上</span>
                      </div>

                    </div>
                  </div>


                </div>
                <div class="searchBox flex marginTop10">
                  <span class="searchLable  colorGrey font12">活动倒计时</span>
                  <div class="radioBox marginLeft10">
                    <div class="marginbottom">
                      <i class="iconfont iconxuanzhong color2087 font20 cursor" v-if="!isShowTime"></i>
                      <i class="iconfont iconxuanze  font20 cursor" v-if="isShowTime" @click="isShowTime = false"></i>
                      <span class="typeText colorblack font12 ">不显示</span>
                      <i class="iconfont iconxuanzhong color2087 font20 cursor marginLeft10" v-if="isShowTime"></i>
                      <i class="iconfont iconxuanze  font20 cursor marginLeft10" v-if="!isShowTime"
                         @click="isShowTime = true"></i>
                      <span class="typeText colorblack font12 ">显示</span>
                    </div>
                  </div>
                </div>
                <div class="flex" style="line-height: 40px;">
                  <div class="bacButton cursor" @click="getRecList()">添加活动商品</div>
                  <span class="colorblack font12 marginLeft10">共{{goodsdata.length}}个商品</span>
                </div>
                <div class="tableScrollBox">
                  <table v-if="noData" class="table">
                    <tr>
                      <th v-for="item in sortDatas" :key="item.name">
                        {{item.name}}
                      </th>
                    </tr>
                    <tr v-for="(item,index) in goodsdata" :key="item.id">
                      <td>
                        <div class="flex">
                          <img class="productImg" :src="item.imgUrl">
                          <div class="productBox">
                            <p class="colorblack font12 productText">{{item.name}}</p>
                            <p class="colore6 font12 productText">￥{{item.price}}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <i class="iconfont iconxuanzhong color2087 font20 cursor" v-if="item.isVirtualReduce"
                           @click="changeVirtual(index, 0, item.stock)"></i>
                        <i class="iconfont iconxuanze color2087 font20 cursor" v-if="!item.isVirtualReduce"
                           @click="changeVirtual(index, 1, item.stock)"></i>
                      </td>
                      <td>
                        <input v-if="item.isVirtualReduce" type="text" v-model="item.perReduceNums"
                               class="font12 colorblack width30" @change="changeValue('perReduceNums','',item, index)"
                               placeholder=""/>
                      </td>
                      <td>
                        <input v-if="item.isVirtualReduce" type="text" v-model="item.perReduceSeconds"
                               class="font12 colorblack width30" @change="changeValue('perReduceSeconds','',item, index)"
                               placeholder=""/>
                      </td>
                      <td>
                        <input v-if="item.isVirtualReduce" type="text" v-model="item.maxReduceNums"
                               class="font12 colorblack width30" @change="changeValue('maxReduceNums','',item, index)"
                               placeholder=""/>
                      </td>
                      <td>
                        <i class="cursor iconfont iconshangsheng fontIcongreen" v-if="index!=0"
                           @click='upSort(index,item)'></i>
                        <i class="iconfont iconshangsheng fontIcongrey" v-if="index==0"></i>
                        <i class='cursor iconfont fontIcongreen iconjiang' @click='downSort(index,item)'
                           v-if="index!=(goodsdata.length-1)"></i>
                        <i class='iconfont fontIcongrey iconjiang' v-if="index==(goodsdata.length-1)"></i>
                      </td>
                      <td>
                        {{item.stock}}
                      </td>
                      <td>
                        <span class="color2087 font12 cursor" @click="delectCommodity(item)">删除</span>
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
            <div class="bacButton" @click="addActiveProduct()" v-if="noData" style="margin: 10px auto">
              保存
            </div>
          </div>
        </div>
      </div>
      <AddSpecs v-if="showSpecs" @selectGuige='getgoodsdata' :goodsdata="goodsdata"
                @clickbanner="getbackData"></AddSpecs>
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
  import AddSpecs from '@/components/addSpecs'

  export default {
    name: "salecustomer",
    components: {
      Aside,
      KlTop,
      Commodities,
      AddSpecs
    },
    data() {
      return {
        isShowTime: false,
        newproduct: 0,
        perReduceNums: '',
        perReduceSeconds: '',
        maxReduceNums: '',
        pretime: '',
        previewTime: null,
        maxRegDays: '',
        minRegDays: '',
        isuserRegDaysLimit: 1,
        userRegDaysLimit: null,
        purchaseNumber: '',
        goodsid: '',
        showSpecs: false,
        shelvesType: 1,
        percent: '90%',
        activeIndex: '1',
        orderField: 'saleStartDate',
        orderType: 'desc',
        sortDatas: [
          {orderType: '', name: '商品', showBlue: false, orderField: ''},
          {orderType: '', name: '是否造势', showBlue: false, orderField: ''},
          {orderType: '', name: '每次扣减（个）', showBlue: false, orderField: ''},
          {orderType: '', name: '扣减间隔（秒）', showBlue: false, orderField: ''},
          {orderType: '', name: '扣减总数', showBlue: false, orderField: ''},
          {orderType: '', name: '排序', showBlue: false, orderField: ''},
          {orderType: '', name: '剩余库存', showBlue: false, orderField: ''},
          {orderType: '', name: '操作', showBlue: false, orderField: ''}
        ],
        endDate: "",
        name: "",
        startDate: "",
        status: '',
        type: '',
        total: 0,
        size: 10,
        page: 1,
        commodyId: '',
        shelfStatusId: '',
        channelId: '',
        channelsOption: [],
        shelfStatus: [{name: '全部', id: ''}, {name: '在售中', id: '0'}, {name: '待上架', id: '1'}, {name: '已上架', id: '2'}],
        commodyType: [{name: '全部', id: ''}, {name: '电子卡券', id: '1'}, {name: '实物商品', id: '2'}],
        insuranceDate: [],
        goodsdata: [],
        noData: false,
        showOne: false,
        showTwo: false,
        showThree: false,
        showFour: false,
        dissipate: [],
        timer: null,
        username: '',
        userInfo: '',
        permissions: [],
      };
    },
    created() {
      this.userInfo = JSON.parse(localStorage.getItem('user'));
      if (this.userInfo) {

      }

    },
    watch: {
      newproduct() {
        if (this.newproduct == 0) {
          this.pretime = '';
        }
      }
    },
    mounted() {
      if (this.$route.query) {
        this.goodsid = this.$route.query.id;
        if (this.goodsid) {
          this.getcommodityData();//获取商品列表
        }
      }
    },
    methods: {
      changeVirtual(goodsIndex, num, stock) {
        if(!stock){
          this.$message.error('库存为0不能造势')
          return
        }
        this.goodsdata[goodsIndex].isVirtualReduce = num
        this.$forceUpdate()
      },
      downSort(index, item) {//降序
        this.goodsdata[index] = this.goodsdata[index + 1];
        this.goodsdata[index + 1] = item;
        this.$forceUpdate()
        // this.sortRecData();
      },
      upSort(index, item) {//升序
        this.goodsdata[index] = this.goodsdata[index - 1];
        this.goodsdata[index - 1] = item;
        this.$forceUpdate()
        // this.sortRecData();
      },
      sortRecData() {
        var arrdata = [];
        for (var i = 0; i < this.goodsdata.length; i++) {
          var obj = {
            id: this.goodsdata[i].id,
            sort: parseInt(i) + 1
          };
          arrdata.push(obj)
        }
        Service.redeem().recsortredeem(arrdata).then(response => {
          if (response.errorCode == 0) {
            this.getcommodityData();
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      changeValue(name, type, item, index) {
        var on = true;
        if (name == 'perReduceNums') {
          if (item.maxReduceNums && parseInt(item.perReduceNums) > parseInt(item.maxReduceNums)) {
            this.$message.error('每次扣减不能大于最大于扣减');
            this.goodsdata[index].perReduceNums = ''
            on = false;
            return;
          } else if (parseInt(item.perReduceNums) >parseInt(item.stock) ) {
            this.$message.error(`每次扣减不能大于最大于库存${item.stock}件`);
            this.goodsdata[index].perReduceNums = ''
            this.$forceUpdate();
            on = false;
            return;
          }
        }
        if (name == 'maxReduceNums') {
          if (parseInt(item.maxReduceNums)  > parseInt(item.stock)) {
            this.goodsdata[index].maxReduceNums = ''
            this.$message.error(`扣减总数不能大于最大于库存${item.stock}件`);
            this.$forceUpdate();
            on = false;
            return;
          }
        }
        if (type == 'submit') {
          return on;
        }
      },
      getPercent(num, num1) {
        num = parseFloat(num);
        num1 = parseFloat(num1);
        var total = parseFloat(num + num1);
        if (isNaN(num) || isNaN(total)) {
          return "-";
        }
        return total <= 0 ? "0%" : (Math.round(num / total * 10000) / 100.00) + "%";
      },
      addActiveProduct() {
        this.name = this.name.replace(/^\s*|\s*$/g, "");
        if (!this.name) {
          this.$message.warning('请输入活动名称');
          return;
        }
        if (this.name.length < 2 || this.name.length > 30) {
          this.$message.warning('请输入短于2个字不超过30个字的活动名称');
          return;
        }

        var previewTime = '';
        if (this.newproduct == 0) {
          previewTime = null;
        } else if (this.newproduct == 1) {
          if (!this.pretime) {
            this.$message.warning('请选择预告时间，且预告时间小于生效时间');
            return;
          }

          previewTime = Date.parse(this.pretime);
        }
        if (!this.startDate || !this.endDate) {
          this.$message.warning('请选择生效时间');
          return;
        }
        var endDate = Date.parse(new Date(this.endDate.replace(/-/g, "/")));
        var startDate = Date.parse(new Date(this.startDate.replace(/-/g, "/")));
        if (this.newproduct == 1 && (previewTime >= startDate)) {
          this.$message.warning('预告时间需小于生效时间');
          return;
        }
        var purchaseLimit = '';
        if (this.shelvesType == 0) {
          purchaseLimit = 0
        }
        if (this.shelvesType == 1) {
          var reg = /^[1-9]\d*$/;
          if (!reg.test(this.purchaseNumber)) {
            this.$message.warning('请输入合理的限购数量');
            return;
          } else {
            purchaseLimit = this.purchaseNumber;
          }
        }
        var reg1 = /^[1-9]\d*$/;
        if (this.isuserRegDaysLimit == 1) {
          this.maxRegDays = 0;
          this.minRegDays = 0;
        }
        if (this.isuserRegDaysLimit == 2) {
          if (!reg1.test(this.maxRegDays)) {
            this.$message.warning('请输入合理的注册天数');
            return;
          }
          this.minRegDays = 0;
        }
        if (this.isuserRegDaysLimit == 3) {
          if (!reg1.test(this.minRegDays)) {
            this.$message.warning('请输入合理的注册天数');
            return;
          }
          this.maxRegDays = 0;
        }
        if (this.goodsdata.length == 0) {
          this.$message.warning('请添加活动商品');
          return;
        }
        for (let item of this.goodsdata) {
          if(item.isVirtualReduce && !item.perReduceNums){
            this.$message.error('请输入每次扣减')
            return;
          }

          if(item.isVirtualReduce && !item.perReduceSeconds){
            this.$message.error('请输入扣减间隔')
            return;
          }

          if(item.isVirtualReduce && !item.maxReduceNums){
            this.$message.error('请输入扣减总数')
            return;
          }

          if (parseInt(item.maxReduceNums) > parseInt(item.stock)) {
            this.$message.error('扣减总数不能大于库存')
            return;
          }
          if (parseInt(item.perReduceNums) > parseInt(item.maxReduceNums)) {
            debugger
            this.$message.error('每次扣减不能大于扣减总数')
            return;
          }
        }
        let goodsEdits = this.goodsdata.map(item => {
          return {
            goodsId: item.id,
            isVirtualReduce: item.isVirtualReduce,
            maxReduceNums: item.maxReduceNums,
            perReduceNums: item.perReduceNums,
            perReduceSeconds: item.perReduceSeconds,
          }
        })
        var goodsIds = [];
        for (var i = 0; i < this.goodsdata.length; i++) {
          goodsIds.push(this.goodsdata[i].id);
        }
        if (this.goodsid) {
          Service.redeem().editorredeemGoods({
            goodsEdits,
            isShowTime: this.isShowTime,
            previewTime: previewTime,
            "endTime": endDate,
            "goodsIds": goodsIds,
            "name": this.name,
            "purchaseLimit": purchaseLimit,
            "startTime": startDate,
            maxRegDays: this.maxRegDays,
            minRegDays: this.minRegDays
          }, this.goodsid).then(response => {
            if (response.errorCode == 0) {
              this.$message.success('添加成功')
              this.$router.push({name: 'limitactiveList'})
            } else {
              this.$message.error(response.message)
            }
          }, err => {
          });
        } else {
          Service.redeem().addredeemGoods({
            previewTime: previewTime,
            isShowTime: this.isShowTime,
            "endTime": endDate,
            "goodsIds": goodsIds,
            "name": this.name,
            "purchaseLimit": purchaseLimit,
            "startTime": startDate,
            maxRegDays: this.maxRegDays,
            minRegDays: this.minRegDays,
            goodsEdits,
          }).then(response => {
            if (response.errorCode == 0) {
              this.$message.success('添加成功');
              this.$router.push({name: 'limitactiveList'})
            } else {
              this.$message.error(response.message)
            }
          }, err => {
          });
        }

      },
      getRecList() {
        this.showSpecs = true;
      },
      getGuigeData() {

      },
      getgoodsdata(obj) {
        console.log('obj', obj)
        for (let i in obj) {
          if (obj[i].name.length > 15) {
            obj[i].name = obj[i].name.substring(0, 15) + '...'
          }
        }
        this.goodsdata = obj;
        if (this.goodsdata.length != 0) {
          this.noData = true;
        } else {
          this.noData = false;
        }
      },
      getbackData(str) {
        if (str == 'sure') {
          this.showSpecs = false;
        }
        if (str == 'cancle') {
          this.showSpecs = false;
        }
      },

      handleSelect(key, keyPath) {
        this.activeIndex = key;
      },
      delectCommodity(item) {
        this.$confirm('商品删除请谨慎操作，确定删除?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var index = this.goodsdata.indexOf(item)
          this.goodsdata.splice(index, 1);
        }).catch(() => {

        });
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
        getSeconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
        var newTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + getHours + ':' + getMinutes + ':' + getSeconds;
        return newTime
      },

      getcommodityData() {
        Service.redeem().redeemList({}, this.goodsid).then(response => {
          if (response.errorCode == 0) {
            if (response.data.goods.length == 0) {
              this.noData = false;
            } else {
              if (response.data.hasOwnProperty("previewTime")) {
                if (response.data.previewTime) {
                  this.newproduct = 1;
                  this.pretime = this.timetrans(response.data.previewTime);
                } else {
                  this.newproduct = 0;
                }
              } else {
                this.newproduct = 0;
              }
              this.noData = true;
              if (response.data.purchaseLimit == 0) {
                this.shelvesType = 0;
              } else {
                this.shelvesType = 1;
                this.purchaseNumber = response.data.purchaseLimit;
              }
              if (response.data.minRegDays == 0 && (response.data.maxRegDays == 0)) {
                this.isuserRegDaysLimit = 1;

              } else if (response.data.minRegDays == 0 && (response.data.maxRegDays != 0)) {
                this.isuserRegDaysLimit = 2;
                this.maxRegDays = response.data.maxRegDays;
              } else if (response.data.minRegDays != 0 && (response.data.maxRegDays == 0)) {
                this.isuserRegDaysLimit = 3;
                this.minRegDays = response.data.minRegDays;
              }
              this.name = response.data.name;
              this.isShowTime = response.data.isShowTime;
              this.startDate = this.timetrans(response.data.startTime);
              this.endDate = this.timetrans(response.data.endTime);
              this.insuranceDate.push(new Date(response.data.startTime));
              this.insuranceDate.push(new Date(response.data.endTime))
              var goodsData = response.data.goods;
              for (let i in goodsData) {
                if (goodsData[i].name.length > 15) {
                  goodsData[i].name = goodsData[i].name.substring(0, 15) + '...'
                }
              }
              this.$nextTick(() => {
                this.goodsdata = response.data.goods;
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

