
<!--<style rel="stylesheet/scss" lang="scss"  scoped>-->
    <!--.phone{-->
        <!--border: none;-->
        <!--border-bottom: 1px solid  rgba(255,255,255,0.7);-->
        <!--background: rgba(13,13,13,0.1);-->
        <!--color: #fff;-->
    <!--}-->
    <!--.logo{-->
        <!--height: 68px;-->
        <!--line-height: 68px;-->
        <!--img{-->
            <!--display: inline-block;-->
            <!--vertical-align: middle;-->
            <!--height: 35px;-->
            <!--width: 117px;-->
            <!--margin-top: -4px;-->
        <!--}-->
    <!--}-->
    <!--.rightIcon{-->
        <!--line-height: 68px;-->
        <!--.icongeren-copy{-->
            <!--font-size: 20px;-->
            <!--display: inline-block;-->
            <!--vertical-align: middle;-->
            <!--margin-top: -2px;-->
        <!--}-->
    <!--}-->
    <!--.bac{-->
        <!--background-size: cover;-->
        <!--width:100%;-->
        <!--.contaner{-->
            <!--position: relative;-->
            <!--.loginBox{-->
                <!--width: 930px;-->
                <!--padding-bottom: 70px;-->
                <!--background-color: #ffffff;-->
                <!--border-radius: 8px;-->
                <!--margin: 60px auto;-->
                <!--.loginTop{-->
                    <!--margin-bottom: 30px;-->
                    <!--text-align: center;-->
                    <!--font-weight: 600;-->
                    <!--padding-top: 70px;-->
                    <!--.xueanlogo{-->
                        <!--width: 170px;-->
                        <!--height: 47px;-->
                    <!--}-->
                <!--}-->
                <!--.inputBox{-->
                    <!--width: 330px;-->
                    <!--height: 40px;-->
                    <!--background-color: #f8f8f8;-->
                    <!--border-radius: 4px;-->
                    <!--position: relative;-->
                    <!--margin: 10px auto;-->
                    <!--.passBox{-->
                        <!--position: absolute;-->
                        <!--overflow: hidden;-->
                        <!--height: 78px;-->
                        <!--overflow-y: scroll;-->
                        <!--width: 100%;-->
                        <!--background: #fff;-->
                        <!--border-radius: 6px;-->
                        <!--border: 1px solid #e5e5e5;-->
                        <!--z-index: 100;-->
                        <!--color: #000;-->
                        <!--font-size: 14px;-->
                        <!--.passBoxList{-->
                            <!--padding: 10px;-->
                        <!--}-->
                        <!--.passBoxList:hover{-->
                            <!--background: #e5e5e5;-->
                        <!--}-->
                        <!--.passBoxListone{-->
                            <!--padding: 10px;-->
                        <!--}-->
                        <!--/*display: none;*/-->
                    <!--}-->
                    <!--input{-->
                        <!--height: 40px!important;-->
                        <!--line-height: 40px;-->
                        <!--width:100%;-->
                        <!--color: #000;-->
                        <!--font-size: 14px;-->
                        <!--background: #f8f8f8;-->
                        <!--border-radius: 4px;-->
                        <!--text-indent: 10px;-->
                    <!--}-->
                <!--}-->
                <!--.buttonBox{-->
                    <!--width: 330px;-->
                    <!--height: 40px;-->
                    <!--margin: 10px auto;-->
                    <!--.passLeft{-->
                        <!--color: #000;-->
                        <!--font-size: 12px;-->
                        <!--.iconfont{-->
                            <!--font-size: 14px;-->
                            <!--margin-right: 6px;-->
                        <!--}-->
                        <!--.iconxuanze1{-->
                            <!--color: #e5e5e5;-->
                        <!--}-->
                        <!--.iconchecked{-->
                            <!--color: #2087e6;-->
                        <!--}-->
                    <!--}-->
                    <!--.passRight{-->
                        <!--color: #000;-->
                        <!--font-size: 12px;-->
                    <!--}-->
                    <!--.login{-->
                        <!--display: inline-block;-->
                        <!--width:100%;-->
                        <!--height: 40px;-->
                        <!--background-color: #2087e6;-->
                        <!--border-radius: 20px;-->
                        <!--line-height: 40px;-->
                        <!--text-align: center;-->
                        <!--color: #fff;-->
                        <!--font-size: 16px;-->
                    <!--}-->
                    <!--.login:hover{-->
                        <!--background: rgba(32,135,230,0.8)-->
                    <!--}-->
                <!--}-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</style>-->
<!--<template>-->
    <!--<div class="login">-->
        <!--<div style="background: #fff;">-->
            <!--<div class="contaner clear">-->
                <!--<div class="logo fl">-->
                    <!--<img class="cursor" @click="goHome()" src="../assets/images/kunlun_logo.png">-->
                <!--</div>-->
                <!--<div class="fr rightIcon">-->
                    <!--<i class="iconfont icongeren-copy color2087"></i>-->
                    <!--<span class="font12 color2087 marginLeft10">登录</span>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->

        <!--<div class="bac">-->
            <!--<div class="contaner">-->
                <!--<div class="loginBox">-->
                    <!--<div class="loginTop">-->
                        <!--<img class="xueanlogo"  src="../assets/images/kunlun_logo.png">-->
                    <!--</div>-->
                    <!--<div class="inputBox">-->
                        <!--<input type="text" v-model="userName" placeholder="请输入账号名称">-->
                    <!--</div>-->
                    <!--<div class="inputBox">-->
                        <!--<input type="password" v-model="userPassword" @focus="showPassword()" @keyup="keyPassword()" @blur="closePassword()" placeholder="请输入登录密码">-->
                    <!--</div>-->
                    <!--<div class="buttonBox flexBetween">-->
                        <!--<div class="passLeft">-->
                            <!--<i class="iconfont  iconxuanze1 cursor" @click='selectPass = !selectPass' v-if="!selectPass" ></i>-->
                            <!--<i class="iconfont iconchecked cursor" @click='selectPass = !selectPass' v-if="selectPass"></i>-->
                            <!--<span>记住密码</span>-->
                        <!--</div>-->
                        <!--<div class="passRight cursor"  @click="goFindPassword()">忘记账号或密码？</div>-->
                    <!--</div>-->
                    <!--<div class="buttonBox">-->
                        <!--<span class="login cursor" id='submit_btn' @click='goLogin()'>登录</span>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
    <!--</div>-->
<!--</template>-->

<!--<script>-->
    <!--import patternRules from '../common/patternRules'-->
    <!--import Service from '../common/service'-->
    <!--import Util from '../common/util'-->
    <!--export default {-->
        <!--name: "login",-->
        <!--data() {-->
            <!--return {-->
                <!--passLen: 0,-->
                <!--userName: '',-->
                <!--userPassword: '',-->
                <!--selectPass: true,-->
                <!--showPass: false,-->
                <!--sha256: '',-->
            <!--};-->
        <!--},-->
        <!--watch:{-->
        <!--},-->
        <!--created(){-->
            <!--// this.sha256 = require("js-sha256").sha256;//这里用的是require方法-->
            <!--if(Util.localStorageUtil.get('userInfo')){-->
                <!--this.userName = Util.localStorageUtil.get('userInfo').name;-->
                <!--this.userPassword = Util.localStorageUtil.get('userInfo').password;-->
            <!--}-->
        <!--},-->
        <!--mounted(){-->
            <!--var that = this;-->
            <!--document.onkeydown = function (e) {-->
                <!--if (!e) e = window.event;-->
                <!--if ((e.keyCode || e.which) == 13) {-->
                    <!--var obtnLogin = document.getElementById("submit_btn");  //submit_btn为按钮ID-->
                    <!--obtnLogin.focus();-->
                    <!--that.goLogin()　　;//提交按钮触发的方法-->
                <!--}-->
            <!--}-->
        <!--},-->
        <!--methods:{-->
            <!--goFindPassword(){-->
                <!--this.$confirm('请联系后台管理员查询账号或重置密码?', '忘记账号或密码?', {-->
                    <!--confirmButtonText: '确定',-->
                    <!--cancelButtonText: '取消',-->
                    <!--type: 'warning'-->
                <!--}).then(() => {-->

                <!--}).catch(() => {-->

                <!--});-->
            <!--},-->
            <!--goLogin(){-->
                <!--var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,20}$|^(?![0-9_|\-]+$)(?![a-zA-Z]+$)[0-9A-Za-z_|\-]{4,20}$|^((?![_|\-]+$)(?![a-zA-Z]+$)[a-zA-Z_|\-]{4,20}$)|^[a-zA-Z]{4,20}$/;-->
                <!--if(this.userName.length<4 ||  this.userName.length>20){-->
                    <!--this.$message.error('请输入正确的登录名');-->
                    <!--return;-->
                <!--}-->
                <!--if(!reg.test(this.userName)){-->
                    <!--this.$message.error('请输入正确的登录名');-->
                    <!--return;-->
                <!--}-->
                <!--var reg1 = /^[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、0-9a-zA-Z]+$/;-->
                <!--if(!reg1.test(this.userPassword)){-->
                    <!--this.$message.error('请输入正确的密码');-->
                    <!--return-->
                <!--}-->
                <!--if(this.userPassword.length<8 || this.userPassword.length>20){-->
                    <!--this.$message.error('请输入正确的密码');-->
                    <!--return-->
                <!--}-->
                <!--if(this.selectPass){-->
                    <!--if((this.userName) && (this.userPassword)){-->
                        <!--var userInfo = {'name': this.userName,'password': this.userPassword};-->
                        <!--Util.localStorageUtil.set('userInfo',userInfo)-->
                    <!--}-->
                <!--}else{-->
                    <!--Util.localStorageUtil.clear('userInfo',userInfo)-->
                <!--}-->
                <!--// var userPassword = this.sha256(this.userPassword);-->
                <!--Service.login().loginSms({-->
                    <!--username: this.userName,-->
                    <!--password: this.userPassword-->
                <!--}).then(response => {-->
                    <!--console.log(response.errorCode)-->
                    <!--if(response.errorCode == 0){-->
                        <!--Util.localStorageUtil.set('access_token',response.data.token);-->
                        <!--localStorage.setItem('user',JSON.stringify(response.data));-->
                        <!--var obj = {-->
                            <!--index: 0,-->
                            <!--from: 'parent',-->
                            <!--childindex: '',-->
                            <!--thirdIndex: '',-->
                        <!--};-->
                        <!--localStorage.setItem('klparam',JSON.stringify(obj));-->
                        <!--this.$router.push({name: 'home'})-->
                    <!--}else{-->
                        <!--this.$message.error(response.message);-->
                    <!--}-->
                <!--}, err => {-->
                <!--});-->

            <!--},-->
            <!--showPassword(){-->
                <!--this.showPass = true;-->
            <!--},-->
            <!--keyPassword(event){-->
                <!--if(this.userPassword == ''){-->
                    <!--this.showPass = true;-->
                <!--}else{-->
                    <!--this.showPass = false;-->
                <!--}-->
            <!--},-->
            <!--closePassword(){-->
                <!--this.showPass = false;-->
            <!--},-->
            <!--goRegister(){-->
                <!--this.$router.push({'path':'/managementEnd/user/register',query:{callback:this.$route.query.callback}})-->
            <!--},-->
            <!--goHome(){-->
                <!--this.$router.push({'path':'/'})-->
            <!--},-->

        <!--}-->
    <!--}-->
<!--</script>-->


<style rel="stylesheet/scss" lang="scss"  scoped>
    .phone{
        border: none;
        border-bottom: 1px solid  #c0ccda;
        background: #fff;
        color: #232323;
    }
    .login{
        background: url(../assets/images/loginBac.jpg) no-repeat center center;
        height: 100vh;
        width: 100%;
        background-size: cover;
        position: relative;
        .loginInfo{
            position: absolute;
            background: #fff;
            .infoBox{
                display: flex;
                .loginLeft{
                    img{
                        width: 129px;
                        height: 129px;
                        display: inline-block;
                        vertical-align: middle;
                    }
                }
                .loginRight{
                    color: #232323;
                    .loginText{
                        font-size: 24px;
                    }
                    .codeBox{
                        position: relative;
                        .code{
                            width: 60%;
                            height: auto!important;
                        }
                        .codeText{
                            position: absolute;
                            font-size: 12px;
                        }
                    }
                    .phone{
                        border: none;
                    }
                    .code{
                        border: none;
                        border-bottom: 1px solid  #c0ccda;
                        background: #fff;
                    }
                }
            }
        }
    }
    @media screen and (min-width: 1600px) {
        .login{
            height: 100vh;
            width: 100%;
            .loginInfo{
                position: absolute;
                width: 892px;
                height: 478px;
                background: #fff;
                left: calc(0.5*(100% - 892px));
                top: calc(0.5*(100vh - 478px));
                .infoBox{
                    padding: 71px 102px;
                    height: 335px;
                    .loginLeft{
                        width: 261px;
                        border-right: 1px solid #c0ccda;
                        line-height: 335px;
                    }
                    .loginRight{
                        margin-left: 100px;
                        .loginText{
                            margin-bottom: 50px;
                        }
                        .codeBox{
                            .code{
                                width: 78%;
                            }
                            .codeText{
                                top:22px;
                                right: 0;
                                border-bottom: 1px solid  #c0ccda;
                                padding-bottom: 22px;
                                .codeSpan{
                                    background: #0d2c4b;
                                    padding: 8px 8px;
                                    color: #fff;
                                }
                                .active {
                                    color: #fff;
                                }
                            }
                        }
                        .phone{
                            padding: 22px 0;
                            width:100%;
                            color: #232323;
                        }
                        .code{
                            padding: 22px 0;
                            width:100%;
                            color: #232323;
                        }
                        .loginButton{
                            margin-top: 50px;
                            width: 312px;
                            height: 50px;
                            line-height: 50px;
                            text-align: center;
                            background: #0d2c4b;
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: 1599px) {
        .login{
            .loginInfo{
                position: absolute;
                width: 522px;
                height: 280px;
                background: #fff;
                left: calc(0.5*(100% - 522px));
                top: calc(0.5*(100vh - 280px));
                .infoBox{
                    padding: 25px 0;
                    .loginLeft{
                        width: 170px;
                        border-right: 1px solid #c0ccda;
                        line-height: 216px;
                        text-align: center;
                        img{
                            width: 103px;
                            height: 103px;
                            display: inline-block;
                            vertical-align: middle;
                        }
                    }
                    .loginRight{
                        margin: 0 auto;
                        width: 180px;
                        .loginText{
                            margin-bottom: 25px;
                        }
                        .codeBox{
                            .codeText{
                                top:16px;
                                right: -4px;
                                border-bottom: 1px solid  #c0ccda;
                                padding-bottom: 16px;
                                .codeSpan{
                                    background: #0d2c4b;
                                    padding: 8px 8px;
                                    color: #fff;
                                }
                            }
                        }
                        .phone{
                            padding: 16px 0;
                            width:100%;
                            color: #232323;
                        }
                        .code{
                            padding: 16px 0;
                            width:100%;
                            color: #232323;
                        }
                        .loginButton{
                            margin-top: 25px;
                            width: 100%;
                            height: 40px;
                            line-height: 40px;
                            text-align: center;
                            background: #0d2c4b;
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="login">
        <div class="loginInfo">
            <div class="infoBox">
                <div class="loginLeft">
                    <img src="https://ifxj.oss-cn-shenzhen.aliyuncs.com/lanmao/img/lanmaologo.png"/>
                </div>
                <div class="loginRight">
                    <h3 class="loginText">登录</h3>

                    <div class="codeBox">
                        <input class="code" type="tel" style='width: 100%;' v-model='phone'  maxlength="11" placeholder="请输入手机号">
                    </div>
                    <div class="codeBox">
                        <input class='code' v-model='code' type="tel" maxlength="6" placeholder="请输入验证码">

                        <div class="codeText">
                            <span class="codeSpan cursor active" v-if='isCode'>{{getCode}}</span>
                            <span class="codeSpan cursor" v-if='!isCode' @click="getCodes($event)" >{{getCode}}</span>
                        </div>
                    </div>
                    <div class="loginButton cursor" id='submit_btn' @click="submit">登录</div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import patternRules from '../common/patternRules'
    import Service from '../common/service'
    import Util from '../common/util'
    export default {
        name: "login",
        data() {
            return {
                phone: '',
                code: '',
                isCode: false,
                getCode: "获取验证码",
                time: 60,
            };
        },
        watch:{
            'phone':function(){
                if(this.phone.length == 11){
                    if(!((patternRules.mobile).test(this.phone))){
                        this.open3("手机号码有误，请重填");
                        return false;
                    }
                }
            },
            'code':function(){
            }
        },
        mounted(){
            var that = this;
            document.onkeydown = function (e) {
                if (!e) e = window.event;
                if ((e.keyCode || e.which) == 13) {
                    var obtnLogin = document.getElementById("submit_btn");  //submit_btn为按钮ID
                    obtnLogin.focus();
                    that.submit()　　;//提交按钮触发的方法
                }
            }
        },
        methods:{
            open3(message) {
                this.$message({
                    message: message,
                    type: 'warning'
                });
            },
            setCookie(name, value, day) {
                //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
                var expires = day * 1000;
                var date = new Date(+new Date() + expires);
                document.cookie = name + "=" + escape(value) + ";expires=" + date.toUTCString();
            },
            getCookie(name) {
                var arr;
                var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
                if (arr = document.cookie.match(reg)) {
                    return unescape(arr[2]);
                }
                else {
                    return null;
                }
            },
            //  获取验证码
            getCodes(el) {
                if (!((patternRules.mobile).test(this.phone))) {
                    this.open3('请输入正确手机号！');
                    return false
                } else {
                    let _that = this;
                    var c = document.cookie.indexOf("cookieTime=");

                    if (c != -1) {
                        this.time = this.getCookie('cookieTime');
                    } else {
                        this.time = '60'
                    }
                    if (this.time >= 0 && this.isCode) {
                        this.time = '60';
                        return false
                    } else {
                        //调用接口
                        Service.login().smsCode({
                            phone: this.phone
                        }).then(response => {
                            console.log(response)
                            if(response.errorCode != 0){
                                this.$message.error(response.message);
                                return;
                            }
                            clearInterval(t);       //停止计时器
                            el.target.innerHTML = _that.time + '秒后重试';
                            this.isCode = true;
                            var t = setInterval(function () {
                                if (_that.time > 0) {
                                    _that.time--;
                                    _that.setCookie('cookieTime', _that.time, _that.time);
                                    el.target.innerHTML = _that.time + '秒后重试'
                                }
                                if (_that.time === 0) {
                                    _that.time = 10;
                                    _that.isCode = false;
                                    clearInterval(t);       //停止计时器
                                    el.target.innerHTML = '重获验证码'
                                }
                            }, 1000)
                        }, err => {
                        });

                    }
                }
            },
            submit() {

                if (!(patternRules.mobile.test(this.phone))) {
                    this.open3("手机号码有误，请重填");
                    return false;
                }else if(this.phone.length == 0){
                    this.open3("请输入手机号");
                    return false;
                }else if(this.code.length != 6){
                    this. open3("请输入正确验证码");
                    return false;
                } else {
                    Service.login().loginSms({
                        phone: this.phone,
                        code: parseInt(this.code)
                    }).then(response => {
                        console.log(response)
                        if (response.hasOwnProperty('errorCode')) {
                            if (response.errorCode == 0) {
                                Util.localStorageUtil.set('access_token',response.data.token);
                                localStorage.setItem('user',JSON.stringify(response.data));
                                var obj = {
                                    index: 0,
                                    from: 'parent',
                                    childindex: '',
                                    thirdIndex: '',
                                };
                                localStorage.setItem('klparam',JSON.stringify(obj));
                                this.$router.push({name: 'home'})
                            } else {
                                this.open3(response.message)
                            }
                        }
                    }, err => {
                    })
                }
            }
        }
    }
</script>

