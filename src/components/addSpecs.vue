<style rel="stylesheet/scss" lang="scss" scoped>
  $baseFontSize: 192;
  .personInfo {
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
    left: 0;
    z-index: 1000;

    .dialogcontent {
      position: relative;
      height: 540px;
      background: #fff;
      width: 850px;
      display: flex;
      flex-direction: column;
      box-shadow: 0px 7px 59px 0px #cccccc;

      .iconshanchu {
        color: #D0CFCF;
        cursor: pointer;
        position: absolute;
        right: 16px;
        top: 10px;
      }

      .bannercontent {
        .dataGeneral {
          padding: 20px 20px 0 20px;

          .channnelTitle {
            padding-bottom: 16px;
          }

          .searchContent {
            flex-wrap: wrap;
            position: relative;

            .bacButton {
              margin-top: -6px;
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
          padding: 10px 0;
          max-height: 300px;
          overflow-y: auto;

          .borderButton {
            margin: 0 20px;
          }

          .noData {
            text-align: center;
            padding-top: 30px;
          }

          .table {
            font-size: 12px;
            border: 1px solid #f6f6f6;
            margin: 0px 26px;
            width: 800px;

            th {
              font-size: 12px;
              text-align: center;
              background: #f6f6f6;

              .iconfont {
                font-size: 16px;
                margin-left: 5px;
              }
            }

            tr {
              border-bottom: 1px solid #f6f6f6;

              td {
                text-align: center;
                padding: 6px 10px;
                position: relative;

                .line {
                  display: inline-block;
                  height: 8px;
                  width: 3px;
                  background: #eee;
                  margin: 0 10px;
                }

                .productImg {
                  max-width: 70px;
                  max-height: 70px;
                }

                .productBox {
                  display: flex;
                  flex-direction: column;
                  height: 60px;
                  justify-content: space-between;
                  padding-left: 6px;

                  .productText {
                    margin-bottom: 0px;
                    margin-top: 0;
                  }
                }
              }

              td:nth-of-type(1) {
                .iconfont {
                  line-height: 70px;
                  margin-right: 6px;
                }

                .selectIcon {
                  height: 20px;
                  width: 20px;
                  margin-right: 6px;
                  line-height: 70px;
                }

                min-width: 150px;
                max-width: 300px;
                text-align: left;
                padding-left: 10px
              }

              td:nth-of-type(2) {
                text-align: center;
              }

              td:nth-of-type(3) {
                .imgicon {
                  display: inline-block;
                  vertical-align: middle;
                  height: 20px;
                  width: 20px;
                  padding-right: 10px;
                }
              }

              td:nth-of-type(4) {
                padding-left: 16px;
              }

              .upimg {
                display: inline-block;
                vertical-align: middle;
                height: 20px;
                width: 20px;
              }

              .downimg {
                display: inline-block;
                vertical-align: middle;
                height: 20px;
                width: 20px;
              }
            }
          }
        }

        .block {
          position: fixed;
          bottom: 30px;
          right: 20px;
          margin-top: 10px;

          .sureBox {
            margin-top: 20px;
            line-height: 30px;
          }
        }

      }

      .button {
        text-align: center;
        padding: 40px 0;
        font-size: 12px;
        width: 100%;
      }
    }
  }
</style>
<template>
  <div class="personInfo dialogbac">
    <div class="dialogcontent">
      <i class="iconfont iconshanchu" @click="cancleButton"></i>
      <div class="bannercontent">
        <div class="dataGeneral backWhite">
          <div class="channnelTitle">
            <span class="colorblack font16 fontWeight marginright10">上架商品</span>
          </div>
          <div class="searchContent flex clear">
            <div class="searchBox">
              <span class="searchLable colorGrey font12">商品名称</span>
              <input type="text" class="serchInput font12 colorblack" v-model="name" placeholder="请输入商品名称"/>
            </div>
            <div class="bacButton cursor" @click="getGuigeList('chaxun')">筛选</div>
          </div>

        </div>
        <div class="dataGeneral bannerTable">
          <table v-if="noData" class="table">
            <tr>
              <th v-for="item in sortDatas" :key="item.name">
                {{item.name}}
              </th>
            </tr>
            <tr v-for="(item,index) in tableData" :key="item.id">
              <td>
                <div class="flex">
                  <i class='iconfont iconchecked color2087' @click="selectAdver(item)"
                     v-if='item.isSelect &&(!item.hasSelect)'></i>
                  <i class='iconfont iconxuanze1 color2087' @click="selectAdver(item)"
                     v-if='!item.isSelect &&(!item.hasSelect)'></i>
                  <el-checkbox label="" v-if='item.isSelect &&(item.hasSelect)' class='selectIcon' disabled
                               v-model="checked2"></el-checkbox>
                  <img class="productImg" :src="item.imgUrl">
                  <div class="productBox">
                    <p class="colorblack font12 productText">{{item.name}}</p>
                    <p class="colore6 font12 productText">￥{{item.price}}</p>
                  </div>
                </div>
              </td>
              <td>
                <span v-if="item.consPoints"> {{item.consPoints}}</span>
                <span v-if="!item.consPoints">0</span>
              </td>
              <td>
                {{item.salesVolume}}
              </td>
              <td>
                {{parseFloat(item.stock)}}
              </td>
              <td>{{timetrans(item.createDate)}}</td>
            </tr>
          </table>
          <div v-if="!noData" class="noData">
            <img class="nodataImg" src="../assets/images/nodatalist.png"/>
            <p>暂无数据~</p>
          </div>
        </div>
        <div class="block" v-if="noData">
          <!--<el-pagination-->
          <!--@size-change="handleSizeChange"-->
          <!--@current-change="handleCurrentChange"-->
          <!--:current-page="page"-->
          <!--:page-size="size"-->
          <!--layout="total,sizes, prev, pager, next,jumper"-->
          <!--:total="total">-->
          <!--</el-pagination>-->
          <div class="sureBox flex">
            <span class="selectText font12 colorGrey marginright10">已选{{selectNumber}}个商品</span>
            <div class="smallsureButton cursor" @click="getGoods()">确定</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Global from '@/common/global'
  import patternRules from '@/common/patternRules'
  import Service from '@/common/service'
  import Util from '@/common/util'
  import Filter from '@/common/filter'
  import Store from '@/vuex/index'

  export default {
    name: "creatSaleleads",
    props: {
      goodsdata: {
        type: Array
      },
      channelId: {
        type: Number
      }
    },
    data() {
      return {
        checked2: true,
        checkList: [],
        selectNumber: 0,
        sortDatas: [{orderType: '', name: '商品', showBlue: true, orderField: ''}, {
          orderType: '',
          name: '消耗积分',
          showBlue: false,
          orderField: ''
        }, {orderType: '', name: '已兑换', showBlue: false, orderField: ''}, {
          orderType: 'asc',
          name: '剩余库存',
          showBlue: false,
          orderField: ''
        }, {orderType: 'desc', name: '创建时间', showBlue: false, orderField: ''}],
        name: '',
        orderField: 'productPlanNo',
        orderType: 'asc',
        total: null,
        size: 500000,
        page: 1,
        statiusId: '',
        statiusOptions: [{name: '全部', id: ''}, {name: '已推荐', id: '0'}, {name: '未推荐', id: '1'}],
        tableData: [],
        noData: true,
        bindTime: '',
        userInfo: '',
        showCompany: false,
        searchValue: "",
        showSearchBox: false,
        searchOption: [],
        permissions: [],
        isAdd: "",
        isDelete: '',
        publishArr: [],
      };
    },
    created() {

      this.userInfo = JSON.parse(localStorage.getItem('user'));
      if (this.userInfo) {
        this.permissions = this.userInfo.permissions;
      }
      this.getGuigeList('')
    },
    watch: {},
    mounted() {
    },
    methods: {
      getGoods() {
        var goodsdata = this.goodsdata.concat(this.publishArr);
        this.$emit('selectGuige', goodsdata);
        this.$emit('clickbanner', 'sure')
      },
      selectAdver(item) {
        item.isSelect = !item.isSelect;
        if (item.isSelect) {//选中
          this.publishArr.push(item)
        } else {
          var index = this.publishArr.indexOf(item)
          this.publishArr.splice(index, 1);
        }
        this.selectNumber = this.publishArr.length;
        this.$forceUpdate()
      },
      selectItem(item) {
        this.$emit('selectGuige', item);
        this.$emit('clickbanner', 'cancle')
      },
      sortData(item) {
        for (let i in this.sortDatas) {
          this.sortDatas[i].showBlue = false;
        }
        item.showBlue = true;
        if (item.orderType == 'asc') {
          item.orderType = 'desc';
        } else if (item.orderType == 'desc') {
          item.orderType = 'asc';
        }
        this.orderType = item.orderType;
        this.orderField = item.orderField;
        this.getGuigeList('chaxun')
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
      judgeArr(arr, value) {
        var num = 0;
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] == value) {
          } else {
            num++;
          }
        }
        return num
      },

      getTimedate(timeStr) {
        return Filter.getTimedate(timeStr)
      },

      getGuigeList(str) {
        if (str == 'chaxun') {
          this.page = 1;
        }
        Store.commit("setIsLoading", true);
        Service.goods().getGoodsList({
          "goodsName": this.name,
          "page": this.page,
          "size": this.size,
          "status": 1,
        }).then(response => {
          Store.commit("setIsLoading", false);
          if (response.errorCode == 0) {
            this.total = response.data.total;
            if (response.data.records.length != 0) {
              this.noData = true;
              var tableData = response.data.records;
              if (this.goodsdata.length != 0) {
                for (var j = 0; j < tableData.length; j++) {
                  for (var i = 0; i < this.goodsdata.length; i++) {
                    tableData[j].isSelect = false;
                    tableData[j].hasSelect = false;
                    tableData[j].isVirtualReduce = 0;
                    tableData[j].maxReduceNums = '';
                    tableData[j].perReduceNums = '';
                    tableData[j].perReduceSeconds = '';
                    if (this.goodsdata[i] && tableData[j]) {
                      if (this.goodsdata[i].id == tableData[j].id) {
                        tableData[j].isSelect = true;
                        tableData[j].hasSelect = true;
                        tableData[j].isVirtualReduce = this.goodsdata[i].isVirtualReduce;
                        tableData[j].maxReduceNums = this.goodsdata[i].maxReduceNums;
                        tableData[j].perReduceNums = this.goodsdata[i].perReduceNums;
                        tableData[j].perReduceSeconds = this.goodsdata[i].perReduceSeconds;
                        break;
                      }
                    }
                  }
                }
              } else {
                for (var j = 0; j < tableData.length; j++) {
                  tableData[j].isSelect = false;
                  tableData[j].hasSelect = false;
                }
              }

              this.$nextTick(() => {
                this.tableData = tableData;
              })
            } else {
              this.noData = false;
            }
          } else {
            this.$message.error(response.message);
            if (response.errorCode == 5001) {
              this.$router.push({"path": '/'})
            }
          }
        }, err => {
        });
      },
      handleSizeChange(val) {
        this.size = val;
        this.getGuigeList('')
      },
      handleCurrentChange(val) {
        this.page = val;
        this.getGuigeList('')
      },
      deleteCompany() {
        this.companyInfo = '';
        this.showCompany = false;
        this.searchValue = '';
        this.bindTime = '';
      },

      blureInput() {
        this.showSearchBox = false;
      },
      getValue(item) {
        this.searchValue = item.name;
        this.companyInfo = item;
        this.showCompany = true;
      },
      sureButton() {
        if (!this.watchChange('companyName', 'submit')) {
          return;
        }
        if (!this.watchChange('contact', 'submit')) {
          return;
        }
        if (!this.watchChange('phone', 'submit')) {
          return;
        }
        Store.commit("setIsLoading", true);
        Service.client().addLeads({
          companyName: this.leadsInfo.companyName,
          contact: this.leadsInfo.contact,
          phone: this.leadsInfo.phone,
          email: null,
          remark: this.leadsInfo.remark,
          source: this.leadsInfo.source
        }).then(response => {
          Store.commit("setIsLoading", false);
          if (response.errorCode == 0) {
            Util.localStorageUtil.clear('leadsInfo');
            this.$emit('clickbanner', 'sure');
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        })
      },
      cancleButton() {
        Util.localStorageUtil.set('leadsInfo', this.leadsInfo);
        this.$emit('clickbanner', 'cancle')
      },
    },
  }
</script>

