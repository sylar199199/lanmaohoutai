<style rel="stylesheet/scss" lang="scss" scoped>
  $baseFontSize: 192;
  .salecustomercontent {
    display: flex;
    min-height: calc(100vh - 50px);
    margin-top: 60px;

    .content {
      flex: 1;
      padding: 20px;
      .bottonBox{
        width: 100%;
        padding: 0 400px;
        margin-top: 50px;
        margin-bottom: 15px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
      }
      .signImg{
        width: 25px;
        height: 25px;
        border-radius: 50%;
      }
      .contanternews {
        .dataGeneral {
          padding: 0 20px 20px;

          .tableTitle {
            border-bottom: 1px solid #ececec;
            margin: 0 20px 10px 20px;
            padding-bottom: 10px;
          }



          .searchContent {
            flex-wrap: wrap;
            position: relative;
            margin-top: 20px;

            .searchBox {
              width: 100%;
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
                width: 500px;
                height: 30px;
                line-height: 30px;
                border: 1px solid #e5e5e5;
                text-indent: 10px;
              }

              .searchName {
                display: inline-block;
                width: 86px;
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
        }

        .block {
          text-align: right;
          margin-top: 35px;
          margin-right: 20px;
        }
      }

      .editorBox {
        .preview {
          margin-right: 20px;
          width: 267px;
          height: 473px;
          background-color: #ffffff;
          border: solid 1px #e5e5e5;

          .previewTitle {
            display: inline-block;
            text-align: center;
            color: #fff;
            width: 267px;
            height: 40px;
            line-height: 40px;
            background-color: #000000
          }

          .previewcontent {
            padding: 0 15px;
            max-height: 433px;
            overflow-y: auto;

            p {
              line-height: 16px;
              margin: 0 !important;
            }
          }

          .previewcontentone {
            padding: 0 15px;
            max-height: 433px;
            overflow-y: auto;

            p {
              line-height: 16px;
              margin: 0 !important;
            }
          }
        }
      }
    }
  }
  .shurutishi {
    color: #999999;
    font-size: 12px;
    margin-left: 10px;
  }
  .margintop10 {
    margin-top: 10px;
  }

  .marginTop7 {
    margin-top: 7px;
  }

  .flexTop {
    display: flex;
    align-items: center;
  }

  .marginbottom {
    margin-bottom: 8px;
  }
  /deep/ .el-input__icon{
    line-height: 30px;
  }
  /deep/ .el-textarea{
    width: 500px;
  }
  /deep/ .el-input__inner {
    border-radius: 0;
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
            <div class="flex contentFlex">
              <div class="tableBox">
                <div class="searchContent flex clear">
                  <div class="searchBox flexTop">
                    <span class="searchLable searchName colorGrey font12">消息签名</span>
                    <img class="signImg" src="https://ifxj.oss-cn-shenzhen.aliyuncs.com/lanmao/img/lanmaologo.png" alt="">
                    <span class="colorGrey font12 marginLeft10" >{{sign}}</span>
                  </div>
                  <div class="searchBox">
                    <span class="searchLable searchName colorGrey font12">群发对象</span>
                    <span class="colorGrey font12">全部用户</span>
                  </div>
                  <div class="searchBox">
                    <span class="searchLable searchName colorGrey font12">通知标题</span>
                    <input  @change="changeValue" type="text" v-model="title" class="serchInput font12 colorblack" placeholder="请填写通知标题"/><span class="shurutishi">不超过12个字</span>
                  </div>
                  <div class="searchBox flex">
                    <span class="searchLable searchName colorGrey font12">通知简介</span>
                    <el-input
                      style="margin-left: 3px;"
                      type="textarea"
                      :rows="3"
                      :maxlength="120"
                      placeholder="话题简介"
                      v-model="introduction">
                    </el-input>
                    <span class="shurutishi">不超过120个字</span>
                  </div>
                  <div class="searchBox flex">
                    <span class="searchLable searchName colorGrey font12">通知详情 </span>
                    <div>
                      <div class="flexTop">
                        <i class="iconfont iconxuanzhong color2087 font20 cursor " v-if="notificationType == 1"></i>
                        <i class="iconfont iconxuanze  font20 cursor" v-if="notificationType != 1"
                           @click="notificationType = 1"></i>
                        <span class="typeText colorblack font12">话题活动</span>
                        <el-select v-model="topicId" placeholder="" class="marginLeft10">
                          <el-option
                            v-for="item in topicOption"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                          </el-option>
                        </el-select>
                      </div>
                      <div class="margintop10">
                        <i class="iconfont iconxuanzhong color2087 font20 cursor" v-if="notificationType == 2"></i>
                        <i class="iconfont iconxuanze  font20 cursor" v-if="notificationType != 2"
                           @click="notificationType = 2"></i>
                        <span class="typeText colorblack font12 ">图文信息</span>
                        <div class="editorBox flex margintop10" v-if="notificationType == 2">
                          <div class="preview">
                            <span class="previewTitle">预览页面</span>
                            <div class="previewcontentone font12" v-html="details"></div>
                          </div>
                          <vue-ueditor-wrap v-model="details" :config="myConfig" @beforeInit="addCustomButtom"
                                            :key="1"></vue-ueditor-wrap>
                        </div>
                      </div>
                      <div class="flexTop margintop10">
                        <i class="iconfont iconxuanzhong color2087 font20 cursor" v-if="notificationType == 3"></i>
                        <i class="iconfont iconxuanze  font20 cursor" v-if="notificationType != 3"
                           @click="notificationType = 3"></i>
                        <span class="typeText colorblack font12">链接地址</span>
                        <input type="text" class="margintop10 inputBox" style="width: 730px;" v-model="linkUrl"/>
                      </div>
                    </div>

                  </div>
                  <div class="searchBox flex">
                    <span class="searchLable searchName colorGrey font12">发送时间</span>
                    <div class="marginTop7">
                      <div class="flexTop">
                        <i class="iconfont iconxuanzhong color2087 font20 cursor " v-if="sendType == 1"></i>
                        <i class="iconfont iconxuanze  font20 cursor" v-if="sendType != 1"
                           @click="sendType = 1"></i>
                        <span class="typeText colorblack font12">立即发送</span>
                      </div>
                      <div class="flexTop margintop10">
                        <i class="iconfont iconxuanzhong color2087 font20 cursor " v-if="sendType == 2"></i>
                        <i class="iconfont iconxuanze  font20 cursor" v-if="sendType != 2"
                           @click="sendType = 2"></i>
                        <span class="typeText colorblack font12">定时发送</span>
                        <el-date-picker
                          class="marginLeft10"
                          v-model="publishTime"
                          type="datetime"
                        >
                        </el-date-picker>
                      </div>
                    </div>
                  </div>
                  <span class="searchLable  colorGrey font12"></span>
                </div>

              </div>

            </div>
          </div>
          <div class="bottonBox">
            <div class="bacButton" @click="addNotifity()">
              保存
            </div>
            <div class="bacButton" @click="backNotifity()">
              取消
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
  import Global from '@/common/global'

  export default {
    name: "salecustomer",
    components: {
      Aside,
      KlTop,
    },
    data() {
      return {
        goodsData: '', // 详情数据
        sign: '小懒猫', // 消息签名
        title: '', // 通知标题
        introduction: '', // 通知简介
        topicOption: [], // 关联话题数组
        topicId: '', // 关联话题id
        linkUrl: '', //链接地址
        publishTime: '', //发送时间
        notificationType: 1,
        details: '',
        userInfo: '',
        sendType: 1, // 发送类型
        notificationId: '',
        myConfig: {
          autoHeightEnabled: false,
          initialFrameHeight: 345,
          initialFrameWidth: '640',
          UEDITOR_HOME_URL: '../../../static/UEditor/',
          serverUrl: ''
        },
      };
    },
    created() {
      this.myConfig.serverUrl = Global.requestUrl+"/kl-store/ueditor/index";
      this.userInfo = JSON.parse(localStorage.getItem('user'));
      this.notificationId = this.$route.params.notificationId
      if (this.userInfo) {
      }
    },
    watch: {},
    mounted() {
      this.gettopicData();
      if(this.notificationId != 'add'){
        this.getDetails();
      }
    },
    methods: {
      addNotifity() {
        this.title = this.title.replace(/^\s*|\s*$/g,"");
        this.introduction = this.introduction.replace(/^\s*|\s*$/g,"");
        if(!this.title){
          this.$message.warning('请输入通知标题');
          return;
        }
        if(!this.introduction){
          this.$message.warning('请输入通知简介');
          return;
        }
        if(this.notificationType == 1 && !this.topicId){
          this.$message.warning('请选择关联话题');
          return;
        }if(this.notificationType == 2 && !this.details){
          this.$message.warning('请输入图文详情');
          return;
        }if(this.notificationType == 3 && !this.linkUrl){
          this.$message.warning('请输入链接地址');
          return;
        }
        if(this.sendType == 2 && !this.publishTime){
          this.$message.warning('请选择通知时间');
          return;
        }
        if(this.sendType == 1 ){
          this.publishTime = new Date()
        }
        let params = {
          title: this.title,
          introduction: this.introduction,
          type: this.notificationType,
          topicId: this.topicId,
          linkUrl: this.linkUrl,
          details: this.details,
          publishTime: Date.parse(new Date((this.timetrans(this.publishTime)).replace(/-/g, "/"))),
        }
        if(this.notificationType == 1){
          this.details = null;
          this.linkUrl = null;
        }
        if(this.notificationType == 2){
          this.topicId = null;
          this.linkUrl = null;
        }
        if(this.notificationType == 3){
          this.topicId = null;
          this.details = null;
        }
        if(this.$route.params.notificationId == 'add'){
          // 新增
          Service.notificationSe().addMesNotification(params).then(response=>{
            if(response.errorCode == 0){
              this.$message({
                type: 'success',
                message: '保存成功!'
              });
              this.backNotifity()
            }
          })
        }else {
          // 编辑
          Service.notificationSe().editMesNotification(params, this.notificationId).then(response=>{
            if(response.errorCode == 0){
              this.$message({
                type: 'success',
                message: '修改成功!'
              });
              this.backNotifity()
            }else {
              this.$message({
                type: 'success',
                message: response.message
              });
            }
          })
        }
      },
      backNotifity() {
        this.$router.push({
          name: 'messageNotification',
        })
      },
      // 获取通知详情
      getDetails(){
        Service.notificationSe().getNotificationDetails({}, this.notificationId).then(response=>{
          if(response.errorCode == 0){
            this.title = response.data.title
            this.introduction = response.data.introduction
            this.notificationType = response.data.type
            if( this.notificationType == 1){
              this.topicId = response.data.topicId
            }
            if( this.notificationType == 2){
              this.details = response.data.details
            }
            if( this.notificationType == 3){
              this.linkUrl = response.data.linkUrl
            }
            this.publishTime = response.data.publishTime
          }
        })
      },
      changeValue(){
        if(this.title.length > 12){
          this.title = this.title.substring(0,12);
          this.$message.error('请输入不超过12字的标题')
          return false
        }else{
          return true
        }
      },
      gettopicData() {
        Service.notificationSe().getNotificationTopic({}).then(response => {
          if (response.errorCode == 0) {
            if (response.data.length != 0) {
              this.topicOption = response.data.map(item => {
                return {
                  name: `#${item.name}#`,
                  id: item.id
                }
              })
            }
          }
        })
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
      // 添加自定义按钮
      addCustomButtom(editorId) {
        window.UE.registerUI('test-button', function (editor, uiName) {
          // 注册按钮执行时的 command 命令，使用命令默认就会带有回退操作
          editor.registerCommand(uiName, {
            execCommand: function () {
              editor.execCommand('inserthtml', `<span>这是一段由自定义按钮添加的文字</span>`);
            }
          });
          // 创建一个 button
          var btn = new window.UE.ui.Button({
            // 按钮的名字
            name: uiName,
            // 提示
            title: '鼠标悬停时的提示文字',
            // 需要添加的额外样式，可指定 icon 图标，图标路径参考常见问题 2
            cssRules: "background-image: url('/test-button.png') !important;background-size: cover;",
            // 点击时执行的命令
            onclick: function () {
              // 这里可以不用执行命令，做你自己的操作也可
              editor.execCommand(uiName);
            }
          });
          // 当点到编辑内容上时，按钮要做的状态反射
          editor.addListener('selectionchange', function () {
            var state = editor.queryCommandState(uiName);
            if (state === -1) {
              btn.setDisabled(true);
              btn.setChecked(false);
            } else {
              btn.setDisabled(false);
              btn.setChecked(state);
            }
          });
          // 因为你是添加 button，所以需要返回这个 button
          return btn;
        }, 0 /* 指定添加到工具栏上的哪个位置，默认时追加到最后 */, editorId /* 指定这个 UI 是哪个编辑器实例上的，默认是页面上所有的编辑器都会添加这个按钮 */);
      },
      // 添加自定义弹窗
      addCustomDialog(editorId) {
        window.UE.registerUI('test-dialog', function (editor, uiName) {
          // 创建 dialog
          var dialog = new window.UE.ui.Dialog({
            // 指定弹出层中页面的路径，这里只能支持页面，路径参考常见问题 2
            iframeUrl: '/customizeDialogPage.html',
            // 需要指定当前的编辑器实例
            editor: editor,
            // 指定 dialog 的名字
            name: uiName,
            // dialog 的标题
            title: '这是一个自定义的 Dialog 浮层',
            // 指定 dialog 的外围样式
            cssRules: 'width:600px;height:300px;',
            // 如果给出了 buttons 就代表 dialog 有确定和取消
            buttons: [
              {
                className: 'edui-okbutton',
                label: '确定',
                onclick: function () {
                  dialog.close(true);
                }
              },
              {
                className: 'edui-cancelbutton',
                label: '取消',
                onclick: function () {
                  dialog.close(false);
                }
              }
            ]
          });
          // 参考上面的自定义按钮
          var btn = new window.UE.ui.Button({
            name: 'dialog-button',
            title: '鼠标悬停时的提示文字',
            cssRules: `background-image: url('/test-dialog.png') !important;background-size: cover;`,
            onclick: function () {
              // 渲染dialog
              dialog.render();
              dialog.open();
            }
          });
          return btn;
        }, 0 /* 指定添加到工具栏上的那个位置，默认时追加到最后 */, editorId /* 指定这个UI是哪个编辑器实例上的，默认是页面上所有的编辑器都会添加这个按钮 */);
      },
      getcommodityData() {
      },
    },

  }
</script>

