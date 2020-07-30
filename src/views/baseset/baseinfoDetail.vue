<style rel="stylesheet/scss" lang="scss"  scoped>
    $baseFontSize: 192;
    .salecustomercontent{
        display: flex;
        min-height:calc(100vh - 50px);
        margin-top:  60px;
        .content{
            flex:1;
            padding: 20px;
            .serchInput{
                width: 200px;
                height: 30px;
                line-height: 30px;
                border: 1px solid #e5e5e5;
                text-indent: 10px;
            }
            .contanternews{
                .baseInfo{
                    .searchBox{
                        margin-bottom: 20px;
                    }
                    margin-top: 20px;
                    .lableBox{
                        margin-bottom:24px;
                        .radioBox{
                            .iconxuanze{
                                color: #e5e5e5;
                            }
                            .colorblack{
                                margin-right: 30px;
                            }
                        }
                        .timeSelect{
                            margin-top: -4px;
                        }
                        .guigeTable{
                            width:92%;
                            border: solid 1px #f6f6f6;
                            tr{
                                border-bottom: 1px solid #f6f6f6;
                                th{
                                    padding: 20px 10px;
                                    background: #f6f6f6;
                                    color: #929292;
                                }
                                td{
                                    padding: 15px 10px;
                                    color: #000;
                                    line-height: 30px;
                                    .iconbianji{
                                        margin-left: 15px;
                                    }
                                    .editorInput{
                                        text-align: center;
                                    }
                                    .borderBox{
                                        width: 66px;
                                        border: 1px solid #e5e5e5;
                                        text-align: right;
                                        padding-right: 5px;
                                    }
                                }
                            }
                        }
                      
                        .inputBox{
                            text-indent: 10px;
                            width: 730px;
                            height: 30px;
                            border: solid 1px #e5e5e5;
                            line-height: 30px;
                        }
                        .yunfeibox{
                            width: 243px;
                        }
                        .imgUrlBox{
                            flex-wrap: wrap;
                            .imgFile{
                                width: 139px;
                                height: 107px;
                                background-color: #f9f9f9;
                                border-radius: 4px;
                                margin-bottom: 12px;
                                position: relative;
                                margin-right: 20px;
                                .deleteIcon{
                                    position: absolute;
                                    right: -1px;
                                    top: -1px;
                                }

                                .applicaninfoone{
                                    width: 116px;
                                    height: 80px;
                                    margin: 14px 10px;
                                    position: relative;
                                    .bannerImg{
                                        width: 116px;
                                        height: 60px;
                                        position: absolute;
                                    }
                                    .warmText{
                                        position: absolute;
                                        color: #fff;
                                        width: 116px;
                                        height: 18px;
                                        left: 0px;
                                        bottom:2px;
                                        text-align: center;
                                    }
                                    .imgBox{
                                        display: inline-block;
                                        width: 116px;
                                        height: 80px;
                                        .uploadtext{
                                            width: 116px;
                                            height: 80px;
                                            color: #979797;
                                            position: relative;
                                        }
                                    }
                                }
                                .websiteinput{
                                    width: 300px;
                                    height: 30px;
                                    line-height: 30px;
                                    text-indent: 10px;
                                    border: solid 1px #e5e5e5;
                                    margin-top: 40px;
                                }
                            }
                            .applicaninfo{
                                width: 140px;
                                height: 107px;
                                background-color: #f9f9f9;
                                border-radius: 4px;
                                text-align: center;
                                .imgBox{
                                    display: inline-block;
                                    width: 140px;
                                    height: 107px;
                                    .uploadtext{
                                        color: #979797;
                                        position: relative;
                                        margin-top: 50px;
                                        height: 55px;
                                        .uploadIcon{
                                            font-size: 20px;
                                            display: inline-block;
                                            vertical-align: middle;
                                            color: #2087e6;
                                            position: absolute;
                                            bottom: 60px;
                                            right: 60px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    .editorBox{
                        .noticecontent{
                            height: 300px;
                            width: 400px;
                            text-indent: 10px;
                            font-size: 14px;
                            line-height: 22px;
                        }
                        .preview{
                            margin-right: 20px;
                            width: 267px;
                            height: 500px;
                            background-color: #ffffff;
                            border: solid 1px #e5e5e5;
                            overflow-y: auto;
                            overflow-x: hidden;
                            .goodsBox{
                                .goodsImg{
                                    position: relative;
                                    .swiperImg{
                                        height: 267px;
                                        width: 267px;
                                    }
                                    .goodsInfo{
                                        position: absolute;
                                        bottom: 0;
                                        background: -webkit-linear-gradient(0deg, #f6e1b0, #f3bacc);
                                        width: 267px;
                                        height: 50px;
                                        z-index: 1000;
                                        .qianggouTop{
                                            margin: 10px;
                                            .colorRed{
                                                color: #f24e43;
                                                font-weight: 600;
                                            }
                                            .linethrough{
                                                text-decoration: line-through;
                                            }
                                        }
                                        .gouqiicon{
                                            height: 12px;
                                            width: 8px;
                                            display: inline-block;
                                        }
                                    }
                                }
                                .goodsInfobox{
                                    padding: 0px 15px;
                                    border-bottom: 10px solid #f4f4f4;
                                    .goodsName{
                                        padding: 10px 0;
                                        border-bottom: 1px solid #f4f4f4;
                                        .iconiconfontyoujiantou-copy{
                                            font-size: 14px;
                                        }
                                    }
                                }
                            }
                            .previewcontentBox{
                                padding: 10px 15px;
                                .previewcontenttitle{
                                    margin-bottom:10px;
                                }
                            }
                            .previewTitle{
                                display: inline-block;
                                text-align: center;
                                color: #fff;
                                width: 267px;
                                height: 40px;
                                line-height: 40px;
                                background-color: #000000
                            }
                            .previewcontent{
                                max-height: 433px;
                                p{
                                    line-height: 16px;
                                    margin: 0!important;
                                }
                            }
                        }
                    }
                    .commonProblem{
                        .problemBox{
                            position: relative;
                            .iconcuowu{
                                position: absolute;
                                right: 106px;
                                top: 26px;
                            }
                            .question{
                                margin-bottom: 10px;
                                .lableText{
                                    margin-right: 12px;
                                }
                                .indexLable{
                                    display: inline-block;
                                    width: 30px;
                                }
                                .questionInput{
                                    /*height: 30px;*/
                                    line-height: 30px;
                                    width: 735px;
                                    border: solid 1px #e5e5e5;
                                    min-height: 30px;
                                    text-indent: 10px;
                                }
                            }
                            .answer{
                                margin-bottom: 10px;
                                margin-left: 35px;
                                .lableText{
                                    margin-right: 14px;
                                }
                                .answerInput{
                                    text-indent: 10px;
                                    resize: none;
                                    line-height: 30px;
                                    width: 735px;
                                }
                            }
                        }
                        .addButton{
                            width: 120px;
                            line-height: 40px;
                            height: 40px;
                            border-radius: 10px;
                            border: solid 1px #2087e6;
                            text-align: center;
                            margin: 30px 60px;
                            color: #2087e6;
                            .iconfont{
                                font-size: 12px;
                            }
                        }
                    }
                }
                .nextButoon{
                    margin: 50px auto;
                    text-align: center;
                    justify-content: center;
                    .bacButton{
                        display: inline-block;
                    }
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
                  
                    <div class="selectChannel backWhite padding20 baseInfo">
                        <div class="searchBox">
                            <span class="searchLable colorGrey font12">名称</span>
                            <input type="text" v-model="title" class="serchInput font12 colorblack" placeholder="名称"/>
                        </div>
                        <div class="editorBox flex" v-if="contentType == 0">
                            <div class="preview">
                                <span class="previewTitle">预览页面</span>
                                <div class="previewcontentBox">
                                    <div class="previewcontent font12" v-html="description"></div>
                                </div>
                            </div>
                            <vue-ueditor-wrap v-model="description" :config="myConfig" @beforeInit="addCustomButtom" :key="1"></vue-ueditor-wrap>
                        </div>
                        <div class="editorBox" v-if="contentType == 1">
                            <textarea class="noticecontent" v-model="description" placeholder="请输入不超过200字的通知信息"  @change="changeValue()"></textarea>
                        </div>
                       
                      
                    </div>
                   
                    <div class="nextButoon" >
                        <span class="bacButton" @click="submitCommodity()">完成</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '../../../static/UEditor/ueditor.config.js'
    import '../../../static/UEditor/ueditor.all.js'
    import '../../../static/UEditor/lang/zh-cn/zh-cn.js'
    import Util from '@/common/util'
    import Aside from '@/components/aside'
    import GoumaiEditor from '@/components/goumaiEditor'
    import  Filter from '@/common/filter'
    import Service from '@/common/service'
    import Store from '@/vuex/index'
    import KlTop from '@/components/klTop'
    import Global from '@/common/global'
    export default {
        name: "salecustomer",
        components:{
            Aside,
            KlTop,
            GoumaiEditor
        },
        data() {
            return {
                contentType: '',
                productId: '',
                expireTimeOption:{
                    disabledDate(date) {
                        return date.getTime() < Date.now() - 8.64e7;
                    }
                },
                myConfig: {
                    autoHeightEnabled: false,
                    initialFrameHeight: 375,
                    initialFrameWidth: '640',
                    UEDITOR_HOME_URL: '../../../static/UEditor/',
                },
                description: '',
                title: '',
            };
        },
        beforeDestroy(){
           
        },
        created(){
            var  tokenVal = Util.localStorageUtil.get('access_token');
            this.headers = {token:tokenVal};
        },
        watch:{
            'description':function(){
                this.$nextTick(() => {
                    var img = $('.previewcontent ').find('img');
                    for (var i = 0; i < img.length; i++) {
                        // console.log($(img[i]).attr("style"))
                        if ($(img[i]).width() > window.screen.width) {
                            $(img[i]).css("cssText", "width:100% !important;box-sizing:border-box !important;word-wrap: break-word !important;")
                        } else {
                            $(img[i]).css({'max-width': '100%', 'height': 'auto'})
                        }
                    }
                })
            }
        },
        mounted(){
            if(this.$route.query){
                this.productId = this.$route.query.id;
                this.contentType = this.$route.query.contentType;
                if(!this.productId){
                   
                }else{
                  this.getDetail()
                }
            }
        },
        methods:{
            changeValue(){
                if(this.description.length > 200){
                    this.description = this.description.substring(0,200);
                    this.$message.error('请输入不超过200字的通知信息')
                    return false
                }else{
                     return true
                }
            },
           getDetail(){
                  Service.protocol().protocolDetail({
                    },this.productId).then(response => {
                        if(response.errorCode == 0){
                          this.description = response.data.content;
                          this.title =  response.data.name;
                        }else{
                            this.$message.error(response.message)
                        }

                    }, err => {
                    });
           },
            submitCommodity(){
               console.log(this.description)
               if(this.contentType == 1){
                   if(!this.changeValue()){
                       console.log(this.changeValue())
                        return;
                   }
               }
                if(this.productId){
                    Service.protocol().editorprotocol({
                        content: this.description,
                        name: this.title
                    },this.productId).then(response => {
                        if(response.errorCode == 0){
                            this.$message.success('操作成功');
                            this.$router.push({name: 'baseInfo'})
                        }else{
                            this.$message.error(response.message)
                        }
                    }, err => {
                    });
                }

            },
           
          
            // 添加自定义按钮
            addCustomButtom (editorId) {
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
            addCustomDialog (editorId) {
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
   
        },

    }
</script>

