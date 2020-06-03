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
                            .cancleBan{
                                margin-left: 10px;
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
                            td:nth-child(10){
                                max-width: 100px;
                            }
                            th:nth-child(11){
                                min-width: 100px;
                            }
                            th:nth-child(12){
                                min-width: 120px;
                            }
                            th:nth-child(13){
                                min-width: 80px;
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
                                <span class="searchLable colorGrey font12">发布者 </span>
                                <input type="text" v-model="userNickname" class="serchInput font12 colorblack" placeholder="微信昵称"/>
                            </div>
                            <div class="searchBox">
                                <span class="searchLable colorGrey font12">ID </span>
                                <input type="text" v-model="userId" class="serchInput font12 colorblack" placeholder="ID"/>
                            </div>
                            <div class="searchBox">
                                <span class="searchLable colorGrey font12">发布动态>= </span>
                                <input type="text" v-model="postCount" class="serchInput font12 colorblack" placeholder="发布动态数"/>
                            </div>
                             <div class="searchBox">
                                <span class="searchLable colorGrey font12">动态被转发>= </span>
                                <input type="text" v-model="shareCount" class="serchInput font12 colorblack" placeholder="动态被转发数"/>
                            </div>
                            <div class="searchBox">
                                <span class="searchLable colorGrey font12">粉丝>= </span>
                                <input type="text" v-model="fansCount" class="serchInput font12 colorblack" placeholder="粉丝数"/>
                            </div>
                            <div class="searchBox">
                                <span class="searchLable colorGrey font12">获赞>= </span>
                                <input type="text" v-model="likeCount" class="serchInput font12 colorblack" placeholder="获赞数"/>
                            </div>
                             <div class="searchBox">
                                <span class="searchLable colorGrey font12">关注>= </span>
                                <input type="text" v-model="followCount" class="serchInput font12 colorblack" placeholder="关注数"/>
                            </div>
                            
                            <div class="bacButton cursor" @click="getpublisher('search')">筛选 </div>
                        </div>

                    </div>
                    <div class="dataGeneral bannerTable">
                        <table  v-if="noData" class="table">
                            <tr>
                                <th v-for="item in sortDatas" :key="item.name">
                                    {{item.name}}
                                </th>
                            </tr>
                            <tr v-for="(item,index) in tableData" :key="item.name" :index="index">
                                <td>
                                    {{item.nickname}}
                                </td>
                                <td>
                                    {{item.id}}
                                 </td>
                               
                                <td>
                                    {{item.postCount}}
                                </td>

                                <td>
                                    {{item.fansCount}}
                                </td>
                               
                                <td>
                                   {{item.likeCount}}
                                </td>
                                <td>
                                  {{item.followCount}}
                                </td>
                                <td>
                                  {{item.shareCount}}
                                </td>
                                <td>
                                    <span v-if="(!item.banPostTime) || (item.banPostTime <= Date.parse(new Date()))">正常</span>
                                    <span v-if="(item.banPostTime > Date.parse(new Date()))">禁言</span>
                                </td>
                                <td>
                                     <span v-if="(item.banPostTime > Date.parse(new Date()))">{{timetrans(item.banPostTime)}}</span>
                                     <span v-if="(item.banPostTime > Date.parse(new Date()))" @click='cancleBan(item.id)' class="cancleBan  fontWeight curson font12 color2087" >取消禁言</span>
                                </td>
                                <td>
                                    <span class="color2087 font12 fontWeight cursor" @click="goDetail(item.id)">发布的动态</span>
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
                fansCount: '',
                followCount: "",
                likeCount: "",
                page: 1,
                postCount: "",
                shareCount: "",
                size: 10,
                userId: '',
                userNickname: "",
                sortDatas:[
                    {orderType:'',name: '发布者',showBlue: false,orderField: ''},
                    {orderType:'',name: 'ID',showBlue: false,orderField: ''},
                    {orderType:'',name: '发布动态',showBlue: false,orderField: ''},
                    {orderType:'',name: '粉丝',showBlue: false,orderField: ''},
                    {orderType:'',name: '获赞',showBlue: true,orderField: ''},
                    {orderType:'',name: '关注',showBlue: false,orderField: ''},
                    {orderType:'',name: '动态被转发',showBlue: false,orderField: ''},
                    {orderType:'',name: '状态',showBlue: false,orderField: ''},
                    {orderType:'',name: '禁言时间',showBlue: false,orderField: ''},
                    {orderType:'',name: '操作',showBlue: false,orderField: ''}
                ],
                total: 0,
                tableData: [],
                noData: true,
            };
        },
        created(){
        },
        computed:{

        },
        watch:{
        },
        mounted(){
            this.getpublisher('');//获取发布者列表
        },
        methods: {
            cancleBan(id){
                this.$confirm('该用户的禁言功能将会取消，请确认！', '取消禁言?', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                     Service.community().cancelebanPost({
                        },id).then(response => {
                            if(response.errorCode == 0){
                                this.$message.success('取消禁言成功');
                                this.getpublisher('');
                            }else{
                                this.$message.error(response.message)
                            }

                        }, err => {
                        });
                }).catch(() => {

                });
                
            },
            shipGoods(){
                if(!this.changeValue('expressName','submit')){
                    return;
                }
                if(!this.changeValue('expressNo','submit')){
                    return;
                }
                Service.order().orderShip({
                    expressName: this.express.expressName,
                    expressNo: this.express.expressNo,
                    orderId: this.orderId
                }).then(response => {
                    if(response.errorCode == 0){
                        this.$message.success('发货成功');
                        this.getcommodityData('')
                        $(".dialogone").css({'display':'none'})
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

            ship(id){
                this.orderId = id;
                $(".dialogone").css({'display':'block'})
            },
            closeDiologone() {
                this.orderId = '';
                $(".dialogone").css({"display":"none"})
            },
            showDes(item){
                if(item.statusDesc){
                    for(let i in this.tableData){
                        this.tableData[i].isshowDes = false;
                    }
                    item.isshowDes = true;
                }
                this.$forceUpdate();

            },
            hideDes(item){
                if(item.statusDesc){
                    for(let i in this.tableData){
                        this.tableData[i].isshowDes = false;
                    }
                }
                this.$forceUpdate();
            },
            goDetail(id){
                this.$router.push({name:'dynamicmanage',query:{id:id}})
            },
            handleSizeChange(val) {
                this.size = val;
                this.getpublisher('')
            },
            handleCurrentChange(val) {
                this.page = val;
                this.getpublisher('')
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
            daochu(){
                var endDate = '',startDate = '';
                if(this.endDate || this.startDate){
                    endDate = Date.parse(new Date(this.endDate.replace(/-/g, "/")));
                    startDate = Date.parse(new Date(this.startDate.replace(/-/g, "/")));
                    console.log(startDate,endDate)
                }else{
                    endDate = this.endDate;
                    startDate = this.startDate;
                }
                Service.customer().customerdaochu({
                    'minTotalPoints': this.minTotalPoints,
                    'minAccumPoints': this.minAccumPoints,
                    'id': this.id,
                    'inviteUserId': this.inviteUserId,
                    "endDate": endDate,
                    "nickname": this.nickname,
                    "page": this.page,
                    "phone": this.phone,
                    "size": this.size,
                    "startDate": startDate
                }).then(response => {
                    if(response.errorCode == 0){
                        var blob = this.Decode(response.data);
                        console.log(window.URL.createObjectURL(blob).indexOf(location.host))
                        if(window.URL.createObjectURL(blob).indexOf(location.host) < 0){//ie不支持
                            this.href =  window.navigator.msSaveOrOpenBlob(blob, '线索列表.xlsx');
                        }else{
                            this.download = '线索列表.xlsx';
                            this.href = URL.createObjectURL(blob);
                        }
                        window.open(this.href)
                    }else{
                        this.$message.error(response.message)
                    }
                }, err => {
                });
            },
            getpublisher(str){
                if(str == 'search'){
                    this.page = 1;
                }
                Service.community().getpublisher({
                    "fansCount": this.fansCount,
                    "followCount": this.followCount,
                    "likeCount": this.likeCount,
                    "page": this.page,
                    "postCount": this.postCount,
                    "shareCount": this.shareCount,
                    "size": this.size,
                    "userId": this.userId,
                    "userNickname": this.userNickname
                    }).then(response => {
                    if(response.errorCode == 0){
                        if(response.data.records.length == 0){
                            this.noData = false;
                        }else{
                            this.noData = true;
                            this.total = response.data.total;
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
        },

    }
</script>

