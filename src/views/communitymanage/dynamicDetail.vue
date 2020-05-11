<style rel="stylesheet/scss" lang="scss"  scoped>
    $baseFontSize: 192;
    .salecustomercontent{
        display: flex;
        min-height:calc(100vh - 50px);
        margin-top:  60px;
        .content{
            flex:1;
            padding: 20px;
            .contanternews{
                .dataGeneral{
                    margin-bottom: 20px;
                    .marginbottom{
                        margin-bottom: 10px;
                    }
                    .flexRight{
                        margin-left: 200px;
                    }
                    .orderInfo{
                        margin-left: 40px;
                        .imgBox{
                            background: #f6f6f6;
                            height: 200px;
                            width: 160px;
                            line-height: 150px;
                            margin: 5px 10px;
                            display: flex;
                             align-items: center;
                             justify-content: center;
                            .imgUrl{
                                max-width: 160px;
                                max-height: 200px;
                            }
                        }
                        
                       
                        .flexinfoLeft{
                            margin-right: 10px;
                            .headImg{
                                height: 40px;
                                width: 40px;
                                border-radius: 50%;
                            }

                        }
                        .flexinfoRight{
                            .infoBox{
                                padding-bottom: 4px;
                                .timeSpan{
                                    margin-right: 10px;
                                }
                                .iconnansheng{
                                    font-size: 14px;
                                }
                            }
                        }
                        .infoLeft{
                            min-width: 225px;
                            .infoBox{
                                margin-top: 27px;
                                .borderButton{
                                    border-radius: 12px;
                                    display: inline-block;
                                    height: 24px;
                                    width: 74px;
                                    line-height: 24px;
                                }
                                .number{
                                    margin-left: 60px;
                                    margin-top: 6px;
                                }
                                .inputText{
                                    border: 1px solid #f6f6f6;
                                }
                            }
                        }
                        .infoRight{
                            position: relative;
                            margin-left: 130px;
                            .infoBox{
                                margin-top: 27px;
                                .timeSpan{
                                    margin-right: 20px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .dialogone::after,.dialog::after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 0;
        vertical-align: middle;
    }
    .dialogone,.dialog{
        display: none;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        z-index: 1000;
        background: rgba(0,0,0,0.5);
        .messge{
            display: inline-block;
            width: 460px;
            padding-bottom: 15px;
            vertical-align: middle;
            background-color: #fff;
            border-radius: 4px;
            font-size: 18px;
            -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
            box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
            text-align: left;
            overflow: hidden;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            .messageHeader{
                text-align: center;
                position: relative;
                padding: 15px 15px 0px;
                color: #000;
                .messagetitle{
                }
            }
            .messageContent{
                position: relative;
                padding: 20px 30px;
                color: #606266;
                font-size: 14px;
                .messagemessage{
                    margin-bottom: 12px;
                    .inputBox{
                        border: 1px solid #e5e5e5;
                        height: 30px;
                        line-height: 30px;
                        text-indent: 10px;
                        width: 300px;
                    }
                }
            }
            .messagebtns{
                text-align: center;
                padding: 0 0 30px;
                .button{
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
                .bacButton{
                    margin-left: 20px;
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
                    <div class="dataGeneral backWhite padding20">
                        <div class="orderInfo flex alignCenter" style="margin-left: 0;">
                            <span class="colorblack font16  fontWeight marginright10">发布者：</span>
                            <div class="flexinfoLeft">
                                <img class="headImg" :src="custormerData.userHeadimgurl">
                            </div>
                            <div class="flexinfoRight">
                                <div class="infoBox">
                                    <span class="colorblack font14 timeSpan">{{custormerData.userNickname}}</span>
                                </div>
                                
                            </div>
                        </div>
                    
                    </div>
                    <div class="dataGeneral backWhite padding20">
                        <div class="colorblack font16 fontWeight marginright10 marginbottom">
                          发布的图片
                        </div>
                        <div class="orderInfo flex flexWrap marginbottom">
                            <div class="imgBox" v-for="item in custormerData.imgs" :key="item.id">
                                <img class='imgUrl' :src="item.imgUrl">
                            </div>
                        </div>
                        <div class="orderInfo flex alignCenter marginbottom" style="margin-left: 0;">
                            <span class="colorblack font16 fontWeight marginright10">发布的标题：</span>
                            <span class="colorblack font14 timeSpan">{{custormerData.title}}</span>
                        </div>
                          <div class="orderInfo flex alignCenter marginbottom" style="margin-left: 0;">
                            <span class="colorblack font16  fontWeight marginright10">发布的话题：</span>
                            <span class="colorblack font14 timeSpan">#{{custormerData.topicName}}</span>
                        </div>
                        <div class="orderInfo flex alignCenter marginbottom" style="margin-left: 0;">
                            <span class="colorblack font16  fontWeight marginright10">发布的内容：</span>
                            <span class="colorblack font14 timeSpan">{{custormerData.content}}</span>
                        </div>
                        <div class="orderInfo flex alignCenter marginbottom" style="margin-left: 0;">
                            <span class="colorblack font16  fontWeight marginright10">发布时间：</span>
                            <span class="colorblack font14 timeSpan">{{timetrans(custormerData.createDate)}}</span>
                        </div>
                    </div>
                     <div class="button bacButton" v-if="custormerData.reported" @click="returnreported()" style="margin: 10px auto;">
                        撤销举报
                    </div>
                     <div class="button bacButton" v-if="!custormerData.reported" @click="reportedcommnity()" style="margin: 10px auto;">
                        举报
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Aside from '@/components/aside'
    import  Filter from '@/common/filter'
    import Service from '@/common/service'
    import Store from '@/vuex/index'
    import KlTop from '@/components/klTop'
    import Global from '@/common/global'
    import Commodities from '@/components/commodities'
    export default {
        name: "salecustomer",
        components:{
            Aside,
            KlTop,
            Commodities
        },
        data() {
            return {
                showOne: false,
                showInput: false,
                custormerData: '',
                postId: '',
                shouhuo: '',
                statusTitle: '',
                headimgurl: '',
                totalPoints: '',
                accumPoints: '',
                freezePoints: '',
                lastOrderConsignee: '',
            };
        },
        created(){
            this.postId = this.$route.query.id;
            this.getcommunityDetail();
        },
        watch:{
        },
        mounted(){
        },
        methods: {
            goDetail(){
                this.$router.push({name:'integraldetail',query:{userId:this.userId}})
            },
            getcommunityDetail(){
                Service.community().getcommunityDetail({},
                    this.postId
                ).then(response => {
                    if(response.errorCode == 0){
                        this.custormerData = response.data;
                        
                    }else{
                        this.$message.error(response.message)
                    }
                }, err => {
                });
            },
        
            timetrans(time) {
                var getSeconds = '', getMinutes = '', getHours = '';
                var d = new Date(time);
                getHours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
                getMinutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();;
                getSeconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();;
                var newTime =  (d.getMonth() + 1) + '-' + d.getDate();
                return newTime
            },
             returnreported(){
                this.$confirm('撤回举报该动态?', '', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    Service.community().cancelreportcommunity({},this.postId
                    ).then(response => {
                        if(response.errorCode == 0){
                            this.$message.success('已撤回举报')
                            this.getcommunityDetail();
                        }else{
                            this.$message.error(response.message)
                        }
                    }, err => {
                    });
                }).catch(() => {

            });
        },
        reportedcommnity(){
            this.$confirm('举报该动态?', '', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    Service.community().reportcommunity({},this.postId
                    ).then(response => {
                        if(response.errorCode == 0){
                            this.$message.success('举报成功')
                            this.getcommunityDetail();
                        }else{
                            this.$message.error(response.message)
                        }
                    }, err => {
                    });
                }).catch(() => {

            });
        }
    },
       

}
</script>

