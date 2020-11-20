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

          .selectBox {
            margin: 10px 22px 15px;
          }

          .iconfont {
            font-size: 18px;
          }

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
              .imgUrl {
                height: 35px;
                width: 40px;
                margin-right: 6px;
              }

              .line {
                display: inline-block;
                height: 8px;
                width: 3px;
                background: #eee;
                margin: 0 10px;
              }

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
                max-width: 60px;
              }

              td:nth-child(2) {
                max-width: 120px;
                text-align: center;
              }

              td:nth-child(3) {
                width: 50px;
              }

              td:nth-child(4) {
                width: 50px;
              }

              td:nth-child(5) {
                width: 50px;
              }

              th:nth-child(7) {
                min-width: 40px;
              }

              td:nth-child(9) {
                max-width: 55px;
                min-width: 55px;
              }

              td:nth-child(10) {
                max-width: 40px;
                min-width: 40px;
              }

              td:nth-child(11) {
                width: 65px;
              }

              td:nth-child(12) {
                width: 200px;
              }

              td {
                text-align: center;
                padding: 20px 4px;
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

  .color9999 {
    color: #999999;
  }

  .bigImg {
    width: 160px;
    height: 200px;
    margin: 0 auto;

    img {
      max-width: 160px;
      max-height: 200px;
    }
  }
</style>
<template>
  <div class="general">
    <KlTop></KlTop>
    <div class="salecustomercontent contaner">
      <Aside></Aside>
      <el-dialog :title="showtitle" :visible.sync="centerDialogVisible" width="30%" center>
        <div class='bigImg'>
          <img :src="bigImg">
        </div>
        <span slot="footer" class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">取 消</el-button>
                    <el-button type="primary"
                               @click="centerDialogVisible = false;showtitle='';bigImg = ''">确 定</el-button>
                </span>
      </el-dialog>
      <div class="content">
        <div class="contanternews">
          <div class="dataGeneral backWhite">
            <div class="searchContent flex clear">
              <div class="searchBox">
                <span class="searchLable colorGrey font12">发布者 </span>
                <input type="text" v-model="userNickname" class="serchInput font12 colorblack" placeholder="微信昵称"/>
              </div>
              <div class="searchBox">
                <span class="searchLable colorGrey font12">发布者ID </span>
                <input type="text" v-model="userId" class="serchInput font12 colorblack" placeholder="ID"/>
              </div>
              <div class="searchBox flex">
                <span class="searchLable searchName colorGrey font12">话题</span>
                <el-select v-model="topicId" placeholder="">
                  <el-option
                    v-for="item in topicOption"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </div>
              <div class="searchBox flex">
                <span class="searchLable searchName colorGrey font12">状态</span>
                <el-select v-model="reported" placeholder="">
                  <el-option
                    v-for="item in reportedoption"
                    :key="item.type"
                    :label="item.name"
                    :value="item.type">
                  </el-option>
                </el-select>
              </div>

              <div class="searchBox">
                <span class="searchLable colorGrey font12">获赞>= </span>
                <input type="text" v-model="likeCount" class="serchInput font12 colorblack" placeholder="获赞数"/>
              </div>
              <div class="searchBox">
                <span class="searchLable colorGrey font12">评论>= </span>
                <input type="text" v-model="commentCount" class="serchInput font12 colorblack" placeholder="评论数"/>
              </div>
              <div class="searchBox">
                <span class="searchLable colorGrey font12">转发>= </span>
                <input type="text" v-model="shareCount" class="serchInput font12 colorblack" placeholder="转发数"/>
              </div>
              <div class="searchBox">
                <span class="searchLable colorGrey font12">审核状态 </span>
                <el-select v-model="auditStatus" placeholder="">
                  <el-option
                    v-for="item in auditStatusoption"
                    :key="item.status"
                    :label="item.name"
                    :value="item.status">
                  </el-option>
                </el-select>
              </div>
              <div class="bacButton cursor" @click="getcommunityList('search')">筛选</div>
            </div>

          </div>
          <div class="dataGeneral bannerTable">
            <div class="selectBox flex alignCenter">
              <i @click="changeallSelect"
                 :class="allSelect?'iconfont cursor iconxuanzeyixuanze':'iconfont cursor iconxuanzeweixuanze'"></i>
              <span class="font14 marginLeft10 marginright10">当页全选</span>
              <div class=' curson bacButton marginLeft10' @click="jubao()">举报</div>
              <div class='jubao curson bacButton marginLeft10' @click="deleteAll()">删除</div>
            </div>
            <table v-if="noData" class="table">
              <tr>
                <th v-for="item in sortDatas" :key='item.name'>
                  {{item.name}}
                </th>
              </tr>
              <tr v-for="(item,index) in tableData" :key='item.id' :index="index">
                <td class="cursor" @click="getId(item)"><i
                  :class="item.select?'iconfont iconxuanzeyixuanze':'iconfont iconxuanzeweixuanze'"></i></td>
                <td>
                  <div class="flex">
                    <img @click='openBig(item)' :src="item.imgUrl" class="imgUrl">
                    <span style="word-break: break-all">{{Util.beautySub(item.content, 10)}}</span>
                  </div>
                </td>
                <td>
                  {{item.topicName}}
                </td>
                <td>
                  {{item.userId}}
                </td>
                <td>
                  {{item.userNickname}}
                </td>

                <td>
                  <span v-if="!item.likeCount">0</span>
                  <span v-else>{{item.likeCount}}</span>
                </td>
                <td>
                  <span v-if="!item.commentCount">0</span>
                  <span v-else>{{item.commentCount}}</span>
                </td>
                <td>
                  <span v-if="!item.shareCount">0</span>
                  <span v-else>{{item.shareCount}}</span>
                </td>
                <td>
                  {{timetrans(item.createDate)}}
                </td>
                <td>
                  <span v-if="item.reported">被举报</span>
                  <span v-if="!item.reported">正常</span>
                </td>
                <td>
                  <span>{{item.auditStatus | capitalize}}</span>
                </td>
                <td>
                  <span class="color2087 font12 fontWeight cursor" @click="goDetail(item.id)">详情</span>
                  <span class="line">|</span>
                  <span class="color2087 font12 fontWeight cursor" v-if="!item.auditStatus"
                        @click="auditClick(item.id)">审核</span>
                  <span class="color9999 font12 fontWeight cursor" v-if="item.auditStatus">审核</span>
                  <span class="line">|</span>
                  <span class="color2087 font12 fontWeight cursor" v-if="!item.top" @click="topCommunity(item.id)">在话题中置顶</span>
                  <span class="color2087 font12 fontWeight cursor" v-if="item.top" @click="canceltopCommunity(item.id)">取消在话题中置顶</span>
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
        Util,
        centerDialogVisible: false,
        bigImg: "",
        showtitle: '',
        allSelect: false,
        id: '',
        auditStatus: null, // 审核状态
        auditStatusoption: [
          {
            status: null,
            name: '全部'
          },
          {
            status: 0,
            name: '未审核'
          },
          {
            status: 1,
            name: '审核通过'
          },
          {
            status: 2,
            name: '审核不通过'
          },
        ], // 审核状态数组
        sortDatas: [
          {orderType: '', name: '', showBlue: false, orderField: ''},
          {orderType: '', name: '帖子', showBlue: false, orderField: ''},
          {orderType: '', name: '参与话题', showBlue: false, orderField: ''},
          {orderType: '', name: '发布者ID', showBlue: false, orderField: ''},
          {orderType: '', name: '发布者', showBlue: false, orderField: ''},
          {orderType: '', name: '获赞', showBlue: true, orderField: ''},
          {orderType: '', name: '评论', showBlue: false, orderField: ''},
          {orderType: '', name: '转发', showBlue: false, orderField: ''},
          {orderType: '', name: '发布时间', showBlue: false, orderField: ''},
          {orderType: '', name: '状态', showBlue: false, orderField: ''},
          {orderType: '', name: '审核状态', showBlue: false, orderField: ''},
          {orderType: '', name: '操作', showBlue: false, orderField: ''}
        ],
        reportedoption: [{type: '', name: '全部'}, {type: false, name: '正常'}, {type: true, name: '被举报'}],
        topicOption: [],
        commentCount: '',
        likeCount: '',
        page: 1,
        reported: '',
        shareCount: '',
        size: 20,
        title: "",
        topicId: '',
        userId: '',
        userNickname: "",
        total: 0,
        channelId: '1',
        insuranceDate: '',
        tableData: [],
        noData: true,
        statusTitle: "",
        selectId: [],
      };
    },
    filters: {
      capitalize: function (value) {
        if (value == 0) {
          return "未审核"
        }
        if (value == 1) {
          return "审核通过"
        }
        if (value == 2) {
          return "审核不通过"
        }
      }
    },
    created() {
      if (this.$route.query.topicId) {
        this.topicId = this.$route.query.topicId
      }
      if (this.$route.query.id) {
        this.userId = this.$route.query.id;
      }
      this.gettopicData()
    },
    computed: {},
    watch: {},
    mounted() {
      this.getcommunityList('');//获取列表
    },
    methods: {
      openBig(item) {
        this.showtitle = '帖子：' + item.title;
        this.bigImg = item.imgUrl;
        this.centerDialogVisible = true;
      },
      getId(item) {
        item.select = !item.select;
        if (item.select) {
          this.selectId.push(item.id);
        } else {
          var index = this.selectId.indexOf(item.id)
          this.selectId.splice(index, 1);
        }
        this.$forceUpdate()

      },
      auditClick(id) {
        this.$confirm('审核', '', {
          confirmButtonText: '通过',
          cancelButtonText: '不通过',
          type: 'warning'
        }).then(() => {
          Service.community().auditApprove({}, id
          ).then(response => {
            if (response.errorCode == 0) {
              this.$message.success('审核已通过')
              this.getcommunityList();
            } else {
              this.$message.error(response.message)
            }
          }, err => {
          });
        }).catch(() => {
          Service.community().auditRefuse({}, id
          ).then(response => {
            if (response.errorCode == 0) {
              this.$message.success('审核不通过')
              this.getcommunityList();
            } else {
              this.$message.error(response.message)
            }
          }, err => {
          });
        });
      },
      deleteAll() {
        if (this.selectId.length != 0) {
          this.$confirm('所选帖子将被删除，请谨慎操作！', '删除帖子?', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            Service.community().deletecommunity(
              this.selectId).then(response => {
              if (response.errorCode == 0) {
                this.$message.success('已删除')
                this.selectId = [];
                this.getcommunityList();
              } else {
                this.$message.error(response.message)
              }
            }, err => {
            });
          }).catch(() => {

          });
        } else {
          this.$message.error('请勾选需要删除的帖子')
        }

      },
      jubao() {
        if (this.selectId.length != 0) {
          this.$confirm('所选帖子存在违规行为，举报后将对所有用户不可见，发布者将被禁言3日', '举报帖子?', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            Service.community().reportbatchcommunity(
              this.selectId
            ).then(response => {
              if (response.errorCode == 0) {
                this.$message.success('已举报')
                this.selectId = [];
                this.getcommunityList();
              } else {
                this.$message.error(response.message)
              }
            }, err => {
            });
          }).catch(() => {

          });
        } else {
          this.$message.error('请勾选需要举报的帖子')
        }

      },
      topCommunity(id) {
        this.$confirm('在话题中置该顶帖子?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.community().topcommunity({}, id
          ).then(response => {
            if (response.errorCode == 0) {
              this.$message.success('已置顶')
              this.getcommunityList();
            } else {
              this.$message.error(response.message)
            }
          }, err => {
          });
        }).catch(() => {

        });
      },
      canceltopCommunity(id) {
        this.$confirm('在话题中取消置顶该帖子?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.community().canceltopcommunity({}, id
          ).then(response => {
            if (response.errorCode == 0) {
              this.$message.success('已取消置顶')
              this.getcommunityList();
            } else {
              this.$message.error(response.message)
            }
          }, err => {
          });
        }).catch(() => {

        });
      },
      gettopicData() {
        Service.community().gettopicList({}).then(response => {
          if (response.errorCode == 0) {
            var data = [];
            data = response.data;
            var obj = {
              id: '',
              name: '全部'
            }
            data.unshift(obj)
            this.topicOption = data
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
      goDetail(id) {
        let routeData = this.$router.resolve({
          name: "dynamicDetail",
          query: {id: id}
        });
        window.open(routeData.href, '_blank');
        // this.$router.push({name:'dynamicDetail',query:{id:id}})
      },
      handleSizeChange(val) {
        this.size = val;
        this.getcommunityList('')
      },
      handleCurrentChange(val) {
        this.page = val;
        this.getcommunityList('')
      },
      enddateChange(val) {
        if (val) {
          this.startDate = this.timetrans(val[0]).toString();
          this.endDate = this.timetrans(val[1]).toString()
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
      changeallSelect() {
        this.allSelect = !this.allSelect;
        if (this.allSelect) {
          this.selectId = [];
          for (var i = 0; i < this.tableData.length; i++) {
            this.tableData[i].select = true;
            this.selectId.push(this.tableData[i].id)
          }
        } else {
          this.selectId = [];
          for (var i = 0; i < this.tableData.length; i++) {
            this.tableData[i].select = false;
          }
        }
      },

      getcommunityList(str) {
        if (str == 'search') {
          this.page = 1;
        }
        var endDate = '', startDate = '';
        if (this.endDate || this.startDate) {
          endDate = Date.parse(new Date(this.endDate.replace(/-/g, "/")));
          startDate = Date.parse(new Date(this.startDate.replace(/-/g, "/")));
        } else {
          endDate = this.endDate;
          startDate = this.startDate;
        }
        Service.community().getcommunityList({
          commentCount: this.commentCount,
          likeCount: this.likeCount,
          reported: this.reported,
          shareCount: this.shareCount,
          topicId: this.topicId,
          /*title: this.title,*/
          page: this.page,
          userId: this.userId,
          size: this.size,
          userNickname: this.userNickname,
          auditStatus: this.auditStatus
        }).then(response => {
          if (response.errorCode == 0) {
            if (response.data.records.length == 0) {
              this.noData = false;
            } else {
              this.noData = true;
              this.total = response.data.total;
              for (let i in response.data.records) {
                response.data.records[i].isshowDes = false;
                response.data.records[i].select = false;
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
    }
  }
</script>

