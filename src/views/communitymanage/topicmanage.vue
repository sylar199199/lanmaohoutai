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
                <span class="searchLable colorGrey font12">话题</span>
                <input type="text" v-model="name" class="serchInput font12 colorblack" placeholder="参与话题"/>
              </div>

              <div class="searchBox">
                <span class="searchLable colorGrey font12">发帖人数>= </span>
                <input type="text" v-model="minPostCount" class="serchInput font12 colorblack" placeholder="参与帖子"/>
              </div>
              <div class="bacButton cursor" @click="getcommodityData('search')">筛选</div>
            </div>

          </div>
          <div class="dataGeneral bannerTable">
            <div class="borderButton cursor" @click="openTopic('新增话题')">新增话题</div>
            <table v-if="noData" class="table">
              <tr>
                <th v-for="item in sortDatas" :key="item.name">
                  {{item.name}}
                </th>
              </tr>
              <tr v-for="item in tableData" :key="item.id">
                <td>
                  {{item.name}}
                </td>
                <td>
                  {{item.circleName}}
                </td>
                <td>
                  {{item.click}}
                </td>
                <td>
                  {{item.postCount}}
                </td>
                <td>
                  {{item.userCount}}
                </td>

                <td>
                  {{timetrans(item.createDate)}}
                </td>
                <td>
                  <span class="color2087 font12 fontWeight cursor" @click="openTopic('编辑话题',item)">修改</span>
                  <!--<span class="line"></span>
                  <span class="color2087 font12 fontWeight cursor" @click="godynamicmnage(item.id)">参与的帖子</span>-->
                  <!-- <span class="line"></span>
                  <span class="color2087 font12 fontWeight cursor" @click="deleteTopic(item.id)">删除</span> -->
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
      <div class="dialogone">
        <div class="messge">
          <div class="messageHeader">
            <div class="messagetitle">
              <span>{{topicTitle}}</span>
            </div>
          </div>
          <div class="messageContent">

            <div class="messagemessage">
              <span class="lableText colorblack font12">话题</span>
              <input type="text" @change="changeValue('topName','')" v-model="topName"
                     class="inputBox marginLeft10 colorblack font12" placeholder="话题"/>
            </div>
            <div class="messagemessage flex">
              <span class="lableText colorblack font12">展示图</span>
              <div class="flexCenter">
                <div class="applicaninfo marginLeft10" style="margin-left: 12px">
                  <i class="iconfont iconcuowu cursor deleteIcon" v-if="topicImg" @click="delectImg()"></i>
                  <img class="bannerImg" :src="topicImg" v-if="topicImg">
                  <el-upload
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
                    <div class="uploadtext" v-if="topicImg">
                    </div>
                    <div class="uploadtext" v-if="!topicImg">
                      <i class="iconfont iconiconjia color2087 uploadIcon"></i>
                      <span>上传图片</span>
                    </div>
                  </el-upload>
                </div>
                <span class="font12 colorGrey" style="margin-left:10px;">图片格式要求（672*464），大小不超过2M</span>
              </div>
            </div>
            <div class="messagemessage">
              <span class="lableText colorblack  font12">圈子</span>
              <el-select v-model="circleId" placeholder="" class="marginLeft10">
                <el-option
                  v-for="item in circleOption"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
            </div>
            <div class="messagemessage flex">
              <span class="lableText colorblack font12">简介</span>
              <el-input
                class="marginLeft10"
                type="textarea"
                :rows="3"
                placeholder="话题简介"
                @change="changeValue('introduction','')"
                v-model="introduction">
              </el-input>
            </div>
          </div>
          <div class="messagebtns">
            <div class="button borderButton copyButton" @click="closeDiologone()">
              取消
            </div>
            <div class="button bacButton" @click="addTopic()">
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

  export default {
    name: "salecustomer",
    components: {
      Aside,
      KlTop,
      Commodities
    },
    data() {
      return {
        topicTitle: '',
        minPostCount: null,
        name: '',
        total: 0,
        size: 10,
        page: 1,
        tableData: [],
        noData: true,
        sortDatas: [
          {orderType: '', name: '话题', showBlue: false, orderField: ''},
          {orderType: '', name: '圈子', showBlue: false, orderField: ''},
          {orderType: '', name: '阅读数', showBlue: false, orderField: ''},
          {orderType: '', name: '帖子数', showBlue: false, orderField: ''},
          {orderType: '', name: '发帖人数', showBlue: false, orderField: ''},
          {orderType: '', name: '创建时间', showBlue: false, orderField: ''},
          {orderType: '', name: '操作', showBlue: false, orderField: ''}
        ],
        topicId: '',
        topName: '',
        upFileAction: '',
        headers: null,
        topicImg: '', // 话题图片
        circleId: '', // 圈子
        circleOption: [], // 圈子数组
        introduction: '', // 话题简介
      };
    },
    created() {
      var tokenVal = Util.localStorageUtil.get('access_token');
      this.headers = {token: tokenVal};
    },
    computed: {},
    watch: {},
    mounted() {
      this.getcommodityData('');//获取话题列表
      this.getcircleData('');//获取圈子下拉选数据

      this.upFileAction = Global.requestUrl + "/lanmao/admin/upload/file";
    },
    methods: {
      //添加、编辑话题
      addTopic() {
        if (!this.changeValue('topName', 'submit')) {
          return;
        }
        if (!this.topicImg){
          this.$message.error('请添加展示图');
          return;
        }
        if (!this.circleId) {
          this.$message.error('请选择圈子');
          return;
        }

        if (!this.changeValue('introduction', 'submit')) {
          return;
        }

        if (this.topicId) {//编辑话题
          Service.toppic().editorTopic({
            circleId: this.circleId,
            introduction: this.introduction,
            name: this.topName,
            imgUrl: this.topicImg,
          }, this.topicId).then(response => {
            if (response.errorCode == 0) {
              console.log('this.topName',  this.topName)
              this.topName = '';
              this.topicId = '';
              this.topicImg = '';
              this.circleId = '';
              this.introduction = '';
              this.$message.success('编辑成功')
              this.getcommodityData('')
              $(".dialogone").css({"display": "none"})
            } else {
              this.$message.error(response.message)
            }
          }, err => {
          });
        } else {//新增话题
          Service.toppic().addTopic({
            circleId: this.circleId,
            introduction: this.introduction,
            name: this.topName,
            imgUrl: this.topicImg,
          }).then(response => {
            if (response.errorCode == 0) {
              this.topName = '';
              this.topicId = '';
              this.topicImg = '';
              this.circleId = '';
              this.introduction = '';
              this.$message.success('添加成功')
              this.getcommodityData('')
              $(".dialogone").css({"display": "none"})
            } else {
              this.$message.error(response.message)
            }
          }, err => {
          });
        }
      },
      //打开编辑话题
      openTopic(type, item) {
        if (item) {
          this.topicId = item.id;
          this.topName = item.name;
          this.circleId = item.circleId;
          this.topicImg = item.imgUrl;
          this.introduction = item.introduction;
        }
        this.topicTitle = type;
        $(".dialogone").css({"display": "block"})
      },
      // 跳转到帖子管理
      godynamicmnage(id) {
        this.$router.push({name: 'dynamicmanage', query: {topicId: id}})
      },
      // 删除话题
      deleteTopic(id) {
        this.$confirm('确定删除?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Service.toppic().deleteTopic({}, id).then(response => {
            if (response.errorCode == 0) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              this.getcommodityData('');
            } else {
              this.$message.error(response.message)
            }

          }, err => {
          });
        }).catch(() => {

        });
      },
      closeDiologone() {
        this.topicId = '';
        this.topName = '';
        $(".dialogone").css({"display": "none"})
      },

      changeValue(name, type) {
        var on = true;

        if (name == 'topName') {
          this.topName = this.topName.replace(/(^\s*)|(\s*$)/g, "");
          if (this.topName.length > 20 || this.topName.length == 0) {
            this.$message.error('请输入不超过20个字符的话题');
            on = false;
            return;
          }
        }
        if (name == 'introduction') {
          this.introduction = this.introduction.replace(/(^\s*)|(\s*$)/g, "");
          if (this.introduction.length > 100 || this.introduction.length == 0) {
            this.$message.error('请输入不超过100个字符的话题');
            on = false;
            return;
          }
        }

        if (type == 'submit') {
          return on;
        }
      },

      handleSizeChange(val) {
        this.size = val;
        this.getcommodityData('')
      },
      handleCurrentChange(val) {
        this.page = val;
        this.getcommodityData('')
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

      getcommodityData(str) {
        if (str == 'search') {
          this.page = 1;
        }
        Service.toppic().gettopicList({
          minPostCount: this.minPostCount,
          page: this.page,
          name: this.name,
          size: this.size,
        }).then(response => {
          if (response.errorCode == 0) {
            if (response.data.records.length == 0) {
              this.noData = false;
            } else {
              this.noData = true;
              this.total = response.data.total;
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
      getcircleData() {
        Service.round().getcircleList({}).then(response => {
          if (response.errorCode == 0) {
            if (response.data.length != 0) {
              this.circleOption = response.data.map(item => {
                return {
                  name: item.name,
                  id: item.id,
                }
              })
            }
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });

      },
      handleAvatarSuccess(res, file) {
        Store.commit("setIsLoading", false);
        if (res.data) {
          console.log('res.data', res.data)
          this.topicImg = res.data;
        } else {
          this.$message.error(res.message);
        }
      },
      errphoto(err, file, fileList) {
      },
      beforeAvatarUpload(file) {
      },
      insertImg(imgurl) {
        let _this = this
        let image = new Image()
        image.src = imgurl + '?v=' + Math.random()
        image.crossOrigin = 'Anonymous';//外网访问必须加否则会报错
        image.onload = function () {
          let base64 = _this.getBase64Image(image)
          _this.topicImg = topicImg;
        }
      },
      delectImg() {
        this.topicImg = '';
      },
      getBase64Image(img) {
        let canvas = document.createElement("canvas")
        canvas.width = img.width
        canvas.height = img.height
        let ctx = canvas.getContext("2d")
        ctx.drawImage(img, 0, 0, img.width, img.height)
        let dataURL = canvas.toDataURL("image/png")
        return dataURL
      },
      handleChange(file, fileList) {
        const isLt2M = file.size / 1024 / 1024 < 2;
        var index = file.name.indexOf('.');

        if (!isLt2M) {
          Store.commit("setIsLoading", false);
          this.$message.error('上传文件大小不能超过2M!');
          return
        }
      },
    },

  }
</script>

