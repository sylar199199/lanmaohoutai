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
                     .flexCenter{
                        align-items: center;
                        width:410px;
                    }
                     .applicaninfo{
                            width: 130px;
                            height: 130px;
                            background-color: #f9f9f9;
                            border-radius: 4px;
                            text-align: center;
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

                      
                    .searchContent{
                        flex-wrap: wrap;
                        position: relative;
                        margin-top: 20px;
                        .bacButton{
                            position: absolute;
                            right: 46px;
                            bottom: 15px;
                        }
                        .searchBox{
                            margin-right:30px;
                            margin-bottom: 20px;
                            .searchLable{
                                margin-right: 6px;
                            }
                            .serchInput{
                                width: 200px;
                                height: 30px;
                                line-height: 30px;
                                border: 1px solid #e5e5e5;
                                text-indent: 10px;
                            }
                            .searchName{
                                display: inline-block;
                                width:56px;
                                line-height: 30px;
                                margin-right: 0;
                            }
                        }
                    }
                }
                .bannerTable{
                    background: #fff;
                    /*margin-top: 15px;*/
                    padding: 10px 0 100px;
                    .borderButton{
                        margin: 0 20px;
                    }
                    .noData{
                        text-align: center;
                        padding-top: 30px;
                    }
                    .table{
                        font-size: 12px;
                        border: 1px solid #f6f6f6;
                        margin: 10px  20px;
                        width: 937px;
                        .imgUrl{
                            max-width: 58px;
                            max-height: 40px;
                        }
                        tr{
                            border-bottom:1px solid #f6f6f6;
                            th{
                                font-size: 12px;
                                text-align: center;
                                background: #f6f6f6;
                                .iconshengjiangxu{
                                    font-size: 16px;
                                    margin-left: 5px;
                                }
                            }
                            th:nth-child(1){
                                text-align: left;
                                padding-left: 16px
                            }
                            th:nth-child(2){
                                text-align: center;
                            }
                            td:nth-child(2){
                                text-align: center;
                            }
                            td{
                                text-align: center;
                                padding: 20px 6px;
                                .line{
                                    display: inline-block;
                                    height: 8px;
                                    width: 3px;
                                    background: #eee;
                                    margin: 0 10px;
                                }

                            }
                            td:nth-of-type(1){
                                text-align: left;
                                padding-left: 16px
                            }
                            td:nth-of-type(3){
                                text-align: center;
                            }
                        }
                    }
                }
                .block{
                    text-align: right;
                    margin-top: 35px;
                    margin-right: 20px;
                }
            }
        }
    }
    .bigImg{
        width: 258px;
        margin: 0 auto;
        .margintop10{
            margin-top:10px;
        }
        .img1{
            height: 195px;
            width: 258px;
        }
        .img2{
            height: 238px;
            width: 258px;
        }
    }
</style>
<template>
    <div class="general">
        <KlTop></KlTop>
        <div class="salecustomercontent contaner">
            <Aside></Aside>
            <el-dialog
                :title="title"
                :visible.sync="centerDialogVisible"
                width="30%"
                center>
                <div class='bigImg'>
                    <div class="colorblack ">展示图：</div>
                    <img class="img1 margintop10" :src="bigImg1">
                </div>
                <div class='bigImg'>
                    <div class="colorblack ">模板图：</div>
                    <img class="img2 margintop10" :src="bigImg2">
                </div>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
                </span>
                </el-dialog>
            <div class="content">
                <div class="contanternews">
                    <div class="dataGeneral backWhite padding20">
                        
                        <div class="borderButton" @click="showDialog = true;posterId = '';">新建活动海报</div>
                       
                    </div>
                    <div class="dataGeneral bannerTable">
                        <table  v-if="noData" class="table">
                            <tr>
                             
                                <th :key="item.name" v-for="item in sortDatas">
                                    {{item.name}}
                                </th>
                            </tr>
                            <tr v-for="(item,index) in tableData" :key="item.id">
                                <td>
                                    {{item.name}}
                                </td>
                                <td>
                                   <img  @click="showBig(item)" class="imgUrl curson" :src="item.imgUrl">
                                </td>
                                 <td >
                                   {{item.saveCount}}
                                </td>
                               <td>
                                     {{timetrans(item.startTime)}} 至 {{timetrans(item.endTime)}} 
                                </td>
                                 <td>
                                   <span v-if="(item.startTime <= Date.parse(new Date()) && item.endTime > Date.parse(new Date()))">进行中</span>
                                    <span v-if="(item.startTime > Date.parse(new Date()))">未开始</span>
                                    <span  v-if="(item.endTime <= Date.parse(new Date()))">已结束</span>
                                </td>
                                <td>
                                    <i class="cursor iconfont iconshangsheng fontIcongreen" v-if="index!=0" @click='upSort(index,item)'></i>
                                    <i class="iconfont iconshangsheng fontIcongrey"  v-if="index==0"></i>
                                    <i class='cursor iconfont fontIcongreen iconjiang' @click='downSort(index,item)' v-if="index!=(tableData.length-1)"></i>
                                    <i class='iconfont fontIcongrey iconjiang' v-if="index==(tableData.length-1)"></i>
                                </td>
                                <td>
                                    <span class="color2087 font12 fontWeight cursor"  @click="editorPoster(item.id)">编辑</span>
                                    <span class="line"></span>
                                    <span class="color2087 font12  fontWeight" @click="delectCommodity(item.id)">删除</span>
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
            <Addacitivityposter v-if="showDialog" @closeDialog="getbackData" :posterId="posterId"></Addacitivityposter>
        </div>
    </div>
</template>

<script>
    import Util from '@/common/util'
    import Aside from '@/components/aside'
    import  Filter from '@/common/filter'
    import Service from '@/common/service'
    import Store from '@/vuex/index'
    import KlTop from '@/components/klTop'
    import Global from '@/common/global'
    import Addacitivityposter from '@/components/addacitivityposter'
    import Commodities from '@/components/commodities'
    export default {
        name: "salecustomer",
        components:{
            Aside,
            KlTop,
            Commodities,
            Addacitivityposter
        },
        data() {
            return {
                posterId: '',
                showDialog: false,
                title: null,
                bigImg1: null,
                bigImg2: null,
                centerDialogVisible: false,
                upFileAction: '',
                headers: null,
                orderField: 'saleStartDate',
                orderType: 'desc',
                sortDatas:[
                    {orderType:'',name: '活动名称',showBlue: false,orderField: ''},
                    {orderType:'',name: '活动海报',showBlue: false,orderField: ''},
                     {orderType:'',name: '保存次数',showBlue: true,orderField: ''},
                    {orderType:'',name: '有效时间',showBlue: false,orderField: ''},
                    {orderType:'',name: '状态',showBlue: true,orderField: ''},
                    {orderType:'',name: '排序',showBlue: false,orderField: ''},
                    {orderType:'',name: '操作',showBlue: false,orderField: ''}
                ],
                endDate: "",
                name: "",
                startDate: "",
                status: '',
                type: '',
                total: 0,
                size: 100,
                page: 1,
                commodyId: '',
                shelfStatusId: '',
                channelId: '',
                channelsOption: [],
                shelfStatus:[{name:'全部',id:''},{name:'在售中',id:'0'},{name:'待上架',id:'1'},{name:'已上架',id:'2'}],
                commodyType: [{name:'全部',id:''},{name:'电子卡券',id:'1'},{name:'实物商品',id:'2'}],
                insuranceDate: '',
                tableData: [],
                noData: true,
                showOne: false,
                showTwo: false,
                showThree: false,
                showFour: false,
                dissipate: [],
                timer: null,
                username: '',
                userInfo: '',
                permissions: [],

            };
        },
        created(){
              var  tokenVal = Util.localStorageUtil.get('access_token');
            this.headers = {token: tokenVal};
            this.userInfo = JSON.parse(localStorage.getItem('user'));
            if(this.userInfo){
            }

        },
        watch:{
        },
        mounted(){
             this.upFileAction = Global.requestUrl+"/lanmao/admin/upload/file";
            this.getactiveityposter('');//获取海报列表
        },
        methods: {
            editorPoster(id){
                this.posterId = id;
                this.showDialog = true;
            },
            getbackData(str){
                if(str == 'sure'){
                    this.showDialog = false;
                    this.posterId = ''
                     this.getactiveityposter('');//获取海报列表
                }
                if(str == 'cancle'){
                     this.posterId = ''
                    this.showDialog = false;
                }
            },
            showBig(item){
                this.title = item.name;
                this.bigImg1 = item.imgUrl;
                 this.bigImg2 = item.tempImgUrl;
                this.centerDialogVisible = true;
            },
            beforeAvatarUpload(file) {
                Store.commit("setIsLoading", true);
                const isLt2M = file.size / 1024 / 1024 < 2;
                var index = file.name.indexOf('.');
                if (!isLt2M) {
                    Store.commit("setIsLoading", false);
                    this.$message.error('上传文件大小不能超过2M!');
                }
                return isLt2M;
            },
            errphoto(err, file, fileList){
            },
            handleAvatarSuccess(res, file) {
                Store.commit("setIsLoading", false);
                if(res.data){
                    this.postPoster(res.data)
                }else{
                    this.$message.error(res.message);
                }
            },
            postPoster(url){
                 Service.poster().addpost({
                     imgUrl: url,
                     sort: ''
                 }).then(response => {
                    if(response.errorCode == 0){
                        this.$message.success('上传成功')
                        this.getactiveityposter();
                    }else{
                        this.$message.error(response.message)
                    }
                }, err => {
                });
            },
            handleChange(file, fileList) {
            },
            downSort(index,item){//降序
                this.tableData[index] = this.tableData[index+1];
                this.tableData[index+1] = item;
                this.sortRecData();
            },
            upSort(index,item){//升序
                this.tableData[index] = this.tableData[index-1];
                this.tableData[index-1] = item;
                this.sortRecData();
            },
            sortRecData(){
                var arrdata = [];
                for(var i = 0;i < this.tableData.length;i++){
                    var obj = {
                        id: this.tableData[i].id,
                        sort:  parseInt(i)+1
                    };
                    arrdata.push(obj)
                }
                Service.poster().sortactivitypost(arrdata).then(response => {
                    if(response.errorCode == 0){
                        this.getactiveityposter();
                    }else{
                        this.$message.error(response.message)
                    }
                }, err => {
                });
            },
            delectCommodity(id){
                this.$confirm( '删除活动海报请谨慎操作，确定删除?', '', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    Service.poster().deleteactivitypost({
                    },id).then(response => {
                        if(response.errorCode == 0){
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                            this.getactiveityposter('');//获取海报列表
                        }else{
                            this.$message.error(response.message)
                        }

                    }, err => {
                    });
                }).catch(() => {

                });
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
            getactiveityposter(){
                Service.poster().getactivetyposterList({
                }).then(response => {
                    if(response.errorCode == 0){
                        if(response.data.length == 0){
                            this.noData = false;
                        }else{
                            this.noData = true;
                            this.$nextTick(()=>{
                                this.tableData = response.data;
                            })
                        }
                    }else{
                        this.$message.error(response.message)
                    }
                }, err => {
                });

            },
        },

    }
</script>

