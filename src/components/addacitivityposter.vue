<style rel="stylesheet/scss" lang="scss"  scoped>
    $baseFontSize: 192;
    .personInfo{
        position: fixed;
        top:0;
        height: 100vh;
        width: 100%;
        left: 0;
        z-index: 1000;
        .dialogcontent{
            position: relative;
            height: 496px;
            background: #fff;
            width: 640px;
            display: flex;
            flex-direction: column;
            box-shadow: 0px 7px 59px 0px #cccccc;
            .iconshanchu{
                color: #D0CFCF;
                cursor: pointer;
                position: absolute;
                right: 16px;
                top: 10px;
            }
            .bannercontent{
                margin: 40px;
                 .alignCenter{
                        align-items: center;
                }
                .margintop30{
                    margin-top: 40px;
                }
                .searchBox{
                    margin-bottom: 18px;
                   .serchInput{
                         width: 300px;
                        height: 30px;
                        line-height: 30px;
                        border: 1px solid #e5e5e5;
                        text-indent: 10px; 
                   }
                   .font20 {
                        font-size: 20px;
                    }
                    .margintop10{
                        margin-top: 10px;
                    }
                  
                    .marginright20{
                        margin-right: 20px;
                    }
                    .marginleft20{
                        margin-left: 20px;
                    }
                     .applicaninfo{
                            width: 130px;
                            height: 130px;
                            background-color: #f9f9f9;
                            border-radius: 4px;
                            text-align: center;
                            position: relative;
                            .deleteIcon{
                                position: absolute;
                                right: -8px;
                                top: -8px;
                                color: #929292;
                                z-index: 100;

                            }
                            .bannerImg{
                                 width: 130px;
                                 height: 130px;
                                 position: absolute;
                                 
                            }
                            .imgBox{
                                display: inline-block;
                                width: 130px;
                                height: 130px;
                                .uploadtext{
                                    color: #979797;
                                    position: relative;
                                    margin-top: 60px;
                                    height: 55px;
                                    .uploadIcon{
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
                }
             
            }
            .button{
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
               <div class="searchBox">
                    <span class="searchLable colorGrey font14">活动名称： </span>
                    <input type="text" v-model="name" class="serchInput font14 colorblack" placeholder="活动名称"/>
               </div>
               <div class="searchBox">
                    <span class="searchLable colorGrey font14">活动时间： </span>
                    <el-date-picker
                                @change="enddateChange"
                                v-model="insuranceDate"
                                type="datetimerange"
                                unlink-panels
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                :default-time="['00:00:00','23:59:59']">
                    </el-date-picker>
               </div>
               <div class="searchBox flex">
                    <span class="searchLable colorGrey font14">活动海报： </span>
                    <div class="applicaninfo">
                         <i class="iconfont iconcuowu cursor deleteIcon"  v-if="imgBase64" @click="delectImg()"></i>
                         <img class="bannerImg" :src="imgBase64" v-if="imgBase64" crossorigin="anonymous">
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
                                <div  class="uploadtext" v-if="imgBase64">
                                </div>
                                <div  class="uploadtext" v-if="!imgBase64">
                                    <i class="iconfont iconiconjia color2087 uploadIcon"></i>
                                    <span>上传图片</span>
                                </div>
                        </el-upload>
                     </div>
                        <span  class="font12 colorGrey" style="margin-left: 10px;margin-top:110px;">图片格式要求（682*290），大小不超过2M</span>

               </div>
                  <div class="searchBox flex">
                    <span class="searchLable colorGrey font14">添加链接： </span>
                     <div class="radioBox marginLeft10" >
                         <p class="aligncenter flex" style="height: 30px;">  
                            <i class="iconfont iconxuanzhong color2087 marginright10 font20 cursor cursor" v-if="linkType == 1"></i>
                            <i class="iconfont iconxuanze marginright10 font20 cursor" v-if="linkType == 0" @click="linkType = 1"></i>
                            <span class="colorblack font12 marginright20">生成二维码</span>
                              <input type="text" v-if="linkType == 1" v-model="linkUrl" @change="changeLinkUrl()" class="serchInput font14 colorblack" placeholder="请输入链接"/>
                        </p>
                        <p class="margintop10 aligncenter flex">
                            <i class="iconfont iconxuanzhong marginright10 color2087 font20 cursor" v-if=" linkType == 0"></i>
                            <i class="iconfont iconxuanze  marginright10 font20 cursor" v-if="linkType == 1"  @click="linkType = 0"></i>
                            <span class="colorblack font12">无二维码</span>
                        </p>
                    </div>
                   
               </div>
                <div class="searchBox flexCenter margintop30">
                    <div class="borderButton marginright20" @click="cancleButton()">取消</div>
                     <div class="bacButton marginleft20" @click="savePoster()">保存</div>
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
        props:{
           
            posterId:{
                type: Number 
            }
        },
        data() {
            return {
                linkType: 1,
                name: '',
                upFileAction: '',
                headers: null,
                startDate: '',
                endDate: '',
                insuranceDate: [],
                linkUrl:'',
                imgBase64: ''
            };
        },
        created(){
            var  tokenVal = Util.localStorageUtil.get('access_token');
            this.headers = {token: tokenVal};
            if(this.posterId){
                this.getPoserInfo()
            }
        },
        watch:{

        },
        mounted(){
            // this.upFileAction = Global.requestUrl+"/lanmao/admin/upload/file";
        },
        methods: {
             insertImg (imgurl) {
                let _this = this
                let image = new Image()
                image.src = imgurl + '?v=' + Math.random()
                   image.crossOrigin = 'Anonymous';//外网访问必须加否则会报错
                    image.onload = function(){
                    let base64 = _this.getBase64Image(image)
                    _this.imgBase64  = base64;
                }
            },
            getBase64Image (img) {
                let canvas = document.createElement("canvas")
                canvas.width = img.width
                canvas.height = img.height
                let ctx = canvas.getContext("2d")
                ctx.drawImage(img, 0, 0, img.width, img.height)
                let dataURL = canvas.toDataURL("image/png")
                return dataURL
            },
      
            savePoster(){
                if(this.name.length < 2 || this.name.length >20){
                    this.$message.error('请输入不少于2个字或者不大于20个字的活动名称');
                    return
                }
                if(!this.startDate || !this.endDate){   
                    this.$message.error('请选择活动开始时间');
                    return
                }
                var endDate = '',startDate = '';
                if(this.endDate || this.startDate){
                    endDate = Date.parse(new Date(this.endDate.replace(/-/g, "/")));
                    startDate = Date.parse(new Date(this.startDate.replace(/-/g, "/")));
                }
                if(!this.imgBase64){
                     this.$message.error('请上传活动海报');
                    return
                }
                if(this.linkType == 1){
                    if(!this.changeLinkUrl('submit')){
                        return
                    }
                }else {
                    this.linkUrl = '';
                }
                if(this.imgBase64.indexOf('http') >= 0){
                    var Base64 = '';
                    var imgUrl = this.imgBase64;
                }else{
                    var Base64 = this.imgBase64.split(',')[1];
                }
                Store.commit("setIsLoading", true);
                if(!this.posterId){
                    Service.poster().addactivitypost({
                        name: this.name,
                        endTime: endDate,
                        startTime: startDate,
                        imgBase64: Base64,
                        linkUrl: this.linkUrl,
                        sort: ''
                    }).then(response => {
                        Store.commit("setIsLoading", false);
                        if (response.errorCode == 0) {
                            this.$emit('closeDialog', 'sure');
                        } else {
                            this.$message.error(response.message)
                        }
                    }, err => {
                    })
                }else{
                    Service.poster().editoractivitypost({
                        name: this.name,
                        imgUrl: imgUrl,
                        endTime: endDate,
                        startTime: startDate,
                        imgBase64: Base64,
                        linkUrl: this.linkUrl,
                        sort: this.sort
                    },this.posterId).then(response => {
                        Store.commit("setIsLoading", false);
                        if (response.errorCode == 0) {
                            this.name = '';
                            this.linkType = 1;
                            this.linkUrl = '';
                            this.imgBase64 = '';
                            this.endDate = '';
                            this.startDate = '';
                            this.$emit('closeDialog', 'sure');
                        } else {
                            this.$message.error(response.message)
                        }
                    }, err => {
                    })
                }
            },
           changeLinkUrl(type){
               var on = true;
               var reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
                if(!reg.test(this.linkUrl) &&(this.linkUrl != '')){
                    this.$message.error('请输入正确的链接地址');
                    on = false;
                }
                if(type == 'submit'){
                    return on;
                }

           },
            delectImg(){
                this.imgBase64 = '';
            },
             beforeAvatarUpload(file) {
                
            },
            errphoto(err, file, fileList){
            },
            handleAvatarSuccess(res, file) {
                Store.commit("setIsLoading", false);
                if(res.data){
                    console.log(res.data)
                    // this.postPoster(res.data)
                }else{
                    this.$message.error(res.message);
                }
            },
            handleChange(file, fileList) {
               const isLt2M = file.size / 1024 / 1024 < 2;
                var index = file.name.indexOf('.');
               
                if (!isLt2M) {
                    Store.commit("setIsLoading", false);
                    this.$message.error('上传文件大小不能超过2M!');
                    return
                }
                let reader = new FileReader()
                reader.onload = () => {
                    // var base64Str = reader.result.split(',')[1];
                        this.imgBase64 = reader.result

                }
                reader.readAsDataURL(file.raw)
         },
            enddateChange(val){
                    if(val){
                        this.startDate = this.timetrans(val[0]);
                        this.endDate = this.timetrans(val[1])
                    }else{
                        this.startDate = '';
                        this.endDate = '';
                    }
                },
            timetrans(timestamp) {
                var getSeconds = '', getMinutes = '', getHours = '';
                var d = new Date(timestamp);
                getHours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
                getMinutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();;
                getSeconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();;
                var newTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + getHours + ':' + getMinutes + ':' + getSeconds;
                return newTime
            },
            getPoserInfo(){
                Store.commit("setIsLoading", true);
                Service.poster().getactivitypostinfo({
                },this.posterId).then(response => {
                    Store.commit("setIsLoading", false);
                    if(response.errorCode == 0){
                        this.sort = response.data.sort;
                        this.name = response.data.name;
                        this.linkUrl =  response.data.linkUrl;
                        if(this.linkUrl){
                            this.linkType = 1;
                        }else{
                            this.linkType = 0;
                        }
                        this.imgBase64 = response.data.imgUrl
                        // this.insertImg(response.data.imgUrl)
                        this.startDate = this.timetrans(response.data.startTime);
                        this.endDate = this.timetrans(response.data.endTime);
                        this.insuranceDate.push(new Date(response.data.startTime));
                        this.insuranceDate.push(new Date(response.data.endTime))
                      
                    }else{
                        this.$message.error(response.message);
                        if(response.errorCode == 5001){
                            this.$router.push({"path":'/'})
                        }
                    }
                }, err => {
                });
            },
           
          
         
         
            cancleButton(){
                this.$emit('closeDialog', 'cancle')
            },
        },
    }
</script>

