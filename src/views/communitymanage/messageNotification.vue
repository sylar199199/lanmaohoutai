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
            .imgUrl{
              height: 35px;
              width: 40px;
              margin-right: 6px;
            }
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
          <div class="dataGeneral bannerTable">
            <div class="borderButton cursor" @click="addNotification('add')">新建通知群发</div>
            <table v-if="noData" class="table">
              <tr>
                <th v-for="item in sortDatas" :key="item.name">
                  {{item.name}}
                </th>
              </tr>
              <tr v-for="(item, index) in tableData" :key="item.id">
                <td>
                  {{item.title}}
                </td>
                <td>
                  {{timetrans(item.publishTime)}}
                </td>
                <td>
                  {{item.sendStatus|capitalize}}
                </td>
                <td>
                  {{item.sendNums}}
                </td>
                <td v-if="!item.sendStatus">
                  <span class="color2087 font12 fontWeight cursor" @click="addNotification(item)">修改</span>
                  <span class="line"></span>
                  <span class="color2087 font12 fontWeight cursor" @click="deleteNotification(item)">删除</span>
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
                :page-sizes="[5,10,20]"
                layout="total,sizes,prev, pager, next,jumper"
                :total="total">
              </el-pagination>
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

  export default {
    name: "messageNotification",
    components: {
      Aside,
      KlTop,
      Commodities
    },
    filters: {
      capitalize: function (value) {
        if (value == 0 ) {
          return "未发送"
        }
        if (value == 1) {
          return "已完成"
        }
      }
    },
    data() {
      return {
        tableData: [],
        noData: true,
        sortDatas: [
          {orderType: '', name: '通知标题', showBlue: false, orderField: ''},
          {orderType: '', name: '发送时间', showBlue: false, orderField: ''},
          {orderType: '', name: '发送状态', showBlue: false, orderField: ''},
          {orderType: '', name: '发送人数', showBlue: false, orderField: ''},
          {orderType: '', name: '查看人数', showBlue: false, orderField: ''},
          {orderType: '', name: '操作', showBlue: false, orderField: ''}
        ],
        headers: null,
        page: 1,
        size: 10,
        total: 0,
      };
    },
    created() {
      var tokenVal = Util.localStorageUtil.get('access_token');
      this.headers = {token: tokenVal};
    },
    mounted() {
      this.getMessageNotification(); // 获取消息通知
    },
    methods: {
       // 新建/编辑消息群发
      addNotification(notification){
        if(notification == 'add'){
          // 新增
          this.$router.push({
            name: 'addMessageNotification',
            params:{
              notificationId: notification,
            }
          })
        } else {
          //编辑
          if(notification.sendStatus == 1){
            // 发送状态
            this.$message({
              type: 'warning',
              message: '通知已发送不可修改!'
            });
            return
          }else {
            //
            this.$router.push({
              name: 'addMessageNotification',
              params:{
                notificationId: notification.id
              }
            })
          }
        }

      },
      // 获取列表
      getMessageNotification() {
        Service.notificationSe().getNotification({
        },this.page,this.size).then(response => {
          if (response.errorCode == 0) {
            if (response.data.records.length == 0) {
              this.noData = false;
            }else {
              this.noData = true;
              this.total = response.data.total;
              this.$nextTick(()=>{
                this.tableData = response.data.records;
              })
            }
          }
        })
      },
      // 删除消息通知
      deleteNotification(id) {
        this.$confirm('消息通知删除请谨慎操作，确定删除?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.notificationSe().deleteNotificationSe({}, id).then(response => {
            if (response.errorCode == 0) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              this.getMessageNotification();//获取消息列表
            } else {
              this.$message.error(response.message)
            }

          }, err => {
          });
        }).catch(() => {

        });
      },
      handleSizeChange(val) {
        this.size = val;
        this.getMessageNotification()
      },
      handleCurrentChange(val) {
        this.page = val;
        this.getMessageNotification()
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

