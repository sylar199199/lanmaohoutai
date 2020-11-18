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
                min-width: 56px;
                line-height: 30px;
                margin-right: 6px;
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

              .line {
                display: inline-block;
                height: 8px;
                width: 3px;
                background: #eee;
                margin: 0 10px;
              }

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
                max-width: 60px;
              }

              td:nth-child(2) {
                max-width: 70px;
              }

              td:nth-child(3) {
                max-width: 70px;
              }

              td:nth-child(4) {
                max-width: 50px;
              }

              td:nth-child(5) {
                max-width: 64px;
                min-width: 64px;
              }

              th:nth-child(7) {
                min-width: 80px;
              }

              td:nth-child(10) {
                max-width: 100px;
              }

              th:nth-child(11) {
                min-width: 100px;
              }

              th:nth-child(12) {
                min-width: 120px;
              }

              th:nth-child(13) {
                min-width: 80px;
              }

              td {
                text-align: center;
                padding: 20px 16px;
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

  .dialogone::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 0;
    vertical-align: middle;
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

          .flexCenter {
            display: flex;
            align-items: center;
          }

          .lableText {
            min-width: 50px;
            text-align: right;
            display: inline-block;
          }

          .applicaninfo {
            width: 130px;
            height: 90px;
            background-color: #f9f9f9;
            border-radius: 4px;
            text-align: center;
            position: relative;

            .deleteIcon {
              position: absolute;
              right: -8px;
              top: -8px;
              color: #929292;
              z-index: 100;

            }

            .bannerImg {
              width: 130px;
              height: 90px;
              position: absolute;

            }

            .imgBox {
              display: inline-block;
              width: 130px;
              height: 90px;

              .uploadtext {
                color: #979797;
                position: relative;
                margin-top: 60px;
                height: 55px;

                .uploadIcon {
                  font-size: 20px;
                  display: inline-block;
                  vertical-align: middle;
                  /*color: #2087e6;*/
                  position: absolute;
                  bottom: 60px;
                  right: 55px;
                }
              }
            }
          }

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
                <span class="searchLable colorGrey font12">圈子</span>
                <input type="text" v-model="name" class="serchInput font12 colorblack" placeholder="圈子"/>
              </div>
              <div class="bacButton cursor" @click="getroundData('search')">筛选</div>
            </div>

          </div>
          <div class="dataGeneral bannerTable">
            <div class="borderButton cursor" @click="openRound('新增圈子')">新增圈子</div>
            <table v-if="noData" class="table">
              <tr>
                <th v-for="item in sortDatas" :key="item.name">
                  {{item.name}}
                </th>
              </tr>
              <tr v-for="(item,index) in tableData" :key="item.id">
                <td>
                  {{item.name}}
                </td>
                <td>
                  {{item.click}}
                </td>
                <td>
                  {{item.topicCount}}
                </td>
                <td>
                  <i class="cursor iconfont iconshangsheng fontIcongreen" v-if="index!=0"
                     @click='upSort(index,item)'></i>
                  <i class="iconfont iconshangsheng fontIcongrey" v-if="index==0"></i>
                  <i class='cursor iconfont fontIcongreen iconjiang' @click='downSort(index,item)'
                     v-if="index!=(tableData.length-1)"></i>
                  <i class='iconfont fontIcongrey iconjiang' v-if="index==(tableData.length-1)"></i>
                </td>
                <td>
                  {{timetrans(item.createDate)}}
                </td>
                <td>
                  <span class="color2087 font12 fontWeight cursor" @click="openRound('编辑圈子',item)">修改</span>
                  <span class="line"></span>
                  <span class="color2087 font12 fontWeight cursor" @click="deleteRound(item.id)">删除</span>
                  <span class="line"></span>
                  <span class="color2087 font12 fontWeight cursor" @click="jumpPoster(item)">关联海报</span>
                  <span class="line"></span>
                  <span class="color2087 font12 fontWeight cursor" @click="jumpTopic(item)">关联话题</span>
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
      <div class="dialogone">
        <div class="messge">
          <div class="messageHeader">
            <div class="messagetitle">
              <span>{{roundTitle}}</span>
            </div>
          </div>
          <div class="messageContent">

            <div class="messagemessage">
              <span class="lableText colorblack font12">圈子</span>
              <input type="text" @change="changeValue('roundName','')" v-model="roundName"
                     class="inputBox marginLeft10 colorblack font12" placeholder="圈子"/>
            </div>
          </div>
          <div class="messagebtns">
            <div class="button borderButton copyButton" @click="closeDiologone()">
              取消
            </div>
            <div class="button bacButton" @click="addRound()">
              确认
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Aside from '@/components/aside'
  import Service from '@/common/service'
  import KlTop from '@/components/klTop'
  import Commodities from '@/components/commodities'
  import Global from '@/common/global'
  import Store from '@/vuex/index'
  import Util from '@/common/util'
  import commodities from "../../components/commodities";

  export default {
    name: "salecustomer",
    components: {
      Aside,
      KlTop,
      Commodities
    },
    data() {
      return {
        roundTitle: '',
        name: '',
        tableData: [],
        noData: true,
        sortDatas: [
          {orderType: '', name: '圈子', showBlue: false, orderField: ''},
          {orderType: '', name: '点击次数', showBlue: false, orderField: ''},
          {orderType: '', name: '话题数', showBlue: false, orderField: ''},
          {orderType: '', name: '排序', showBlue: false, orderField: ''},
          {orderType: '', name: '创建时间', showBlue: false, orderField: ''},
          {orderType: '', name: '操作', showBlue: false, orderField: ''}
        ],
        roundId: '',
        roundName: '',
        upFileAction: '',
        headers: null,
        circleId: '', // 圈子
        circleOption: [], // 圈子数组
      };
    },
    created() {
      var tokenVal = Util.localStorageUtil.get('access_token');
      this.headers = {token: tokenVal};
    },
    computed: {},
    watch: {},
    mounted() {
      this.getroundData('');//获取圈子列表
      this.upFileAction = Global.requestUrl + "/lanmao/admin/upload/file";
    },
    methods: {
      //添加、编辑圈子
      addRound() {
        if (!this.changeValue('roundName', 'submit')) {
          return;
        }
        if (this.roundId) {//编辑圈子
          Service.round().editorRound({
            name: this.roundName,
          }, this.roundId).then(response => {
            if (response.errorCode == 0) {
              this.roundName = '';
              this.roundId = '';
              this.$message.success('编辑成功')
              this.getroundData('')
              $(".dialogone").css({"display": "none"})
            } else {
              this.$message.error(response.message)
            }
          }, err => {
          });
        } else {//新增圈子
          Service.round().addCircle({
            name: this.roundName,
          }).then(response => {
            if (response.errorCode == 0) {
              this.roundName = '';
              this.roundId = '';
              this.$message.success('添加成功')
              this.getroundData('')
              $(".dialogone").css({"display": "none"})
            } else {
              this.$message.error(response.message)
            }
          }, err => {
          });
        }
      },
      downSort(index, item) {//降序
        this.tableData[index] =  this.tableData.splice(index+1, 1,  this.tableData[index])[0];
        let newSortArr = this.tableData.map((item,i)=>{
          return{
            id: item.id,
            sort: i+1
          }
        })
        this.sortRecData(newSortArr);
      },
      upSort(index, item) {//升序
        this.tableData[index] = this.tableData.splice(index-1, 1, this.tableData[index])[0];
        let newSortArr = this.tableData.map((item,i)=>{
          return{
            id: item.id,
            sort: i-1
          }
        })
        this.sortRecData(newSortArr);
      },
      sortRecData(newSortArr) {
        Service.round().sortCircle(newSortArr).then(response => {
          if (response.errorCode == 0) {
            this.getroundData();
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      //打开编辑圈子
      openRound(type, item) {
        if (item) {
          this.roundId = item.id;
          this.roundName = item.name;
        }
        this.roundTitle = type;
        $(".dialogone").css({"display": "block"})
      },
      deleteRound(id){
        // 删除圈子
        this.$confirm('确定删除?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.round().deleteCircle({}, id).then(response => {
            if (response.errorCode == 0) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              this.getroundData('');
            } else {
              this.$message.error(response.message)
            }

          }, err => {
          });
        }).catch(() => {

        });
      },
      // 跳转到关联海报
      jumpPoster(item) {
        this.$router.push({name: 'relationposter', params: {roundId: item.id,roundName:item.name}})
      },
      jumpTopic(item) {
        this.$router.push({name: 'relationtopic', params: {roundId: item.id,roundName:item.name}})
      },
      closeDiologone() {
        this.roundId = '';
        this.roundName = '';
        $(".dialogone").css({"display": "none"})
      },

      changeValue(name, type) {
        var on = true;

        if (name == 'roundName') {
          this.roundName = this.roundName.replace(/(^\s*)|(\s*$)/g, "");
          if (this.roundName.length > 10 || this.roundName.length == 0) {
            this.$message.error('请输入不超过10个字符的圈子');
            on = false;
            return;
          }
        }

        if (type == 'submit') {
          return on;
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
      //获取圈子列表
      getroundData(str) {
        Service.round().getcircleList({
          "name": this.name,
        }).then(response => {
          if (response.errorCode == 0) {
            if (response.data.length == 0) {
              this.noData = false;
            } else {
              this.noData = true;
              this.$nextTick(() => {
                this.tableData = response.data;
                this.tableData = response.data.map((item,index)=>{
                   item.sort = index + 1
                  return item
                })
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

