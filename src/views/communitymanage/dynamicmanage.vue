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
                    padding: 20px 20px 0 20px;
                    .searchContent{
                        flex-wrap: wrap;
                        position: relative;
                        .bacButton{
                            position: absolute;
                            right: 0px;
                            bottom: 15px;
                        }
                        .bacButtonone{
                            right: 0px;
                            bottom: 66px;
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
                                min-width: 56px;
                                line-height: 30px;
                                margin-right: 6px;
                            }
                        }
                    }
                }
                .bannerTable{
                    background: #fff;
                    margin-top: 15px;
                    padding: 10px 0 100px;
                    .noData{
                        width: 100%;
                        text-align: center;
                        margin-top: 54px;
                        color: #929292;
                        font-size: 12px;
                        .nodataImg{
                            height: 78px;
                            width: 78px;
                            margin-bottom: 16px;
                        }
                        .linkText{
                            display: block;
                            color: #929292;
                            .goHome{
                                color: #45b8c8;
                            }
                        }
                    }
                    .borderButton{
                        margin: 0 20px;
                    }
                    .table{
                        font-size: 12px;
                        border: 1px solid #f6f6f6;
                        margin: 10px  20px;
                        width: 937px;
                        tr{
                             .line{
                                    display: inline-block;
                                    height: 8px;
                                    width: 3px;
                                    background: #eee;
                                    margin: 0 10px;
                                }
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
                                max-width: 60px;
                            }
                            td:nth-child(2){
                                max-width: 70px;
                            }
                            td:nth-child(3){
                                max-width: 70px;
                            }
                            td:nth-child(4){
                                max-width: 50px;
                            }
                            td:nth-child(5){
                                max-width: 64px;
                                min-width: 64px;
                            }
                            th:nth-child(7){
                                min-width: 80px;
                            }
                             td:nth-child(9){
                                max-width: 62px;
                                min-width: 62px;
                            }
                            td:nth-child(10){
                                max-width: 110px;
                                min-width: 110px;
                            }
                          
                            td{
                                text-align: center;
                                padding: 20px 16px;
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
                                <span class="searchLable colorGrey font12">标题 </span>
                                <input type="text" v-model="title" class="serchInput font12 colorblack" placeholder="标题"/>
                            </div>
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
                            <div class="bacButton cursor" @click="getcommunityList('search')">筛选 </div>
                        </div>

                    </div>
                    <div class="dataGeneral bannerTable">
                        <table  v-if="noData" class="table">
                            <tr>
                                <th v-for="item in sortDatas" :key='item.name'>
                                    {{item.name}}
                                </th>
                            </tr>
                            <tr v-for="(item,index) in tableData" :key='item.id' :index="index">
                                <td>
                                    {{item.title}}
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
                                   {{item.likeCount}}
                                </td>
                                <td>
                                  {{item.commentCount}}
                                </td>
                                <td>
                                    {{item.shareCount}}
                                </td>
                                <td>
                                    {{timetrans(item.createDate)}}
                                </td>
                                <td>
                                    <span v-if="item.reported">被举报</span>
                                    <span v-if="!item.reported">正常</span>
                                </td>
                                <td>
                                    <span class="color2087 font12 fontWeight cursor" @click="goDetail(item.id)">详情</span>
                                    <span class="line">|</span>
                                    <span class="color2087 font12 fontWeight cursor" v-if="!item.top" @click="topCommunity(item.id)">动态置顶</span>
                                     <span class="color2087 font12 fontWeight cursor" v-if="item.top" @click="canceltopCommunity(item.id)">取消置顶</span>
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
        </div>
    </div>
</template>

<script>
    import Aside from '@/components/aside'
    import Service from '@/common/service'
    import KlTop from '@/components/klTop'
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
                id: '',
                sortDatas:[
                    {orderType:'',name: '动态标题',showBlue: false,orderField: ''},
                    {orderType:'',name: '参与话题',showBlue: false,orderField: ''},
                    {orderType:'',name: '发布者ID',showBlue: false,orderField: ''},
                    {orderType:'',name: '发布者',showBlue: false,orderField: ''},
                    {orderType:'',name: '获赞',showBlue: true,orderField: ''},
                    {orderType:'',name: '评论',showBlue: false,orderField: ''},
                    {orderType:'',name: '转发',showBlue: false,orderField: ''},
                    {orderType:'',name: '发布时间',showBlue: false,orderField: ''},
                    {orderType:'',name: '状态',showBlue: false,orderField: ''},
                    {orderType:'',name: '操作',showBlue: false,orderField: ''}
                ],
                reportedoption:[{type: '',name:'全部'},{type: false,name:'正常'},{type: true,name:'被举报'}],
                topicOption: [],
                commentCount: '',
                likeCount: '',
                page: 1,
                reported: '',
                shareCount: '',
                size: 10,
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
            };
        },
        created(){
            if(this.$route.query.topicId){
                 this.topicId = this.$route.query.topicId
            }
            if( this.$route.query.id){
                this.userId = this.$route.query.id;
            }
            this.gettopicData()
        },
        computed:{

        },
        watch:{
        },
        mounted(){
            this.getcommunityList('');//获取订单列表
        },
        methods: {
            topCommunity(id){
                    this.$confirm('置顶该动态?', '', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    Service.community().topcommunity({},id
                    ).then(response => {
                        if(response.errorCode == 0){
                            this.$message.success('已置顶')
                            this.getcommunityList();
                        }else{
                            this.$message.error(response.message)
                        }
                    }, err => {
                    });
                }).catch(() => {

            });
            },
            canceltopCommunity(id){
                this.$confirm('取消置顶?', '', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    Service.community().canceltopcommunity({},id
                    ).then(response => {
                        if(response.errorCode == 0){
                            this.$message.success('已取消置顶')
                            this.getcommunityList();
                        }else{
                            this.$message.error(response.message)
                        }
                    }, err => {
                    });
                }).catch(() => {

            });
            },
            gettopicData(){
                Service.community().gettopicList({
                }).then(response => {
                    if(response.errorCode == 0){
                      var data = [];
                      data = response.data;
                      var obj = {
                          id: '',
                          name: '全部'
                      }
                      data.unshift(obj)
                      this.topicOption = data
                    }else{
                        this.$message.error(response.message)
                    }

                }, err => {
                });
            },
            changeValue(name,type){
                var on = true;
                this.express[name] =  this.express[name].replace(/(^\s*)|(\s*$)/g, "");
                if(name == 'expressName'){
                    if(this.express[name].length>50 ||  this.express[name].length == 0){
                        this.$message.error('请输入正确的物流公司');
                        on = false;
                        return;
                    }
                }
                if(name == 'expressNo'){
                    var reg = /^[a-zA-Z0-9]+$/;
                    this.express[name] = this.express[name].replace(/(^\s*)|(\s*$)/g,"");
                    if(this.express[name].length>50 || this.express[name].length == 0){
                        this.$message.error('请输入正确的物流单号');
                        on = false;
                        return;
                    }
                    if(!(reg.test(this.express[name]))){
                        this.$message.error('请输入正确的物流单号');
                        on = false;
                        return;
                    }
                }
                if(type=='submit'){
                    return on;
                }
            },
            goDetail(id){
                 let routeData = this.$router.resolve({
                name: "dynamicDetail",
                query: {id:id}
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
            enddateChange(val){
                if(val){
                    this.startDate = this.timetrans(val[0]).toString();
                    this.endDate = this.timetrans(val[1]).toString()
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
            Decode(arr) {
                var bstr = atob(arr), n = bstr.length, u8arr = new Uint8Array(n);
                while (n--) {
                    u8arr[n] = bstr.charCodeAt(n);
                }
                return new Blob([u8arr],{type : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
            },
            
            getcommunityList(str){
                if(str == 'search'){
                    this.page = 1;
                }
                var endDate = '',startDate = '';
                if(this.endDate || this.startDate){
                    endDate = Date.parse(new Date(this.endDate.replace(/-/g, "/")));
                    startDate = Date.parse(new Date(this.startDate.replace(/-/g, "/")));
                }else{
                    endDate = this.endDate;
                    startDate = this.startDate;
                }
                Service.community().getcommunityList({
                    commentCount: this.commentCount,
                    likeCount: this.likeCount,
                    reported: this.reported,
                    shareCount: this.shareCount,
                    topicId: this.topicId,
                    title: this.title,
                    page: this.page,
                    userId: this.userId,
                    size: this.size,
                    userNickname: this.userNickname
                }).then(response => {
                    if(response.errorCode == 0){
                        if(response.data.records.length == 0){
                            this.noData = false;
                        }else{
                            this.noData = true;
                            this.total = response.data.total;
                            for(let i in  response.data.records){
                                response.data.records[i].isshowDes = false;
                            }
                            this.$nextTick(()=>{
                                this.tableData = response.data.records;
                            })
                        }
                    }else{
                        this.$message.error(response.message)
                    }
                }, err => {
                });

            },
        }
    }
</script>

