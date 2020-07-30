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
                    padding: 0px 20px 10px 20px;
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
                                text-align: left;
                            }
                            td:nth-child(2){
                                text-align: left;
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
</style>
<template>
    <div class="general">
        <KlTop></KlTop>
        <div class="salecustomercontent contaner">
            <Aside></Aside>
            <div class="content">
                <div class="contanternews">
                    <div class="dataGeneral backWhite">
                        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                            <el-menu-item index="1">全部</el-menu-item>
                            <el-menu-item index="2">未开始</el-menu-item>
                            <el-menu-item index="3">进行中</el-menu-item>
                            <el-menu-item index="4">已结束</el-menu-item>
                            <el-menu-item index="5">已失效</el-menu-item>
                        </el-menu>

                        <!--<div class="searchContent flex clear">-->
                        <!--<div class="searchBox">-->
                        <!--<span class="searchLable colorGrey font12">商品名称 </span>-->
                        <!--<input type="text" v-model="name" class="serchInput font12 colorblack" placeholder="商品名称"/>-->
                        <!--</div>-->
                        <!--<div class="bacButton cursor" @click="getcommodityData('search')">筛选</div>-->
                        <!--</div>-->
                    </div>
                    <div class="dataGeneral bannerTable">
                        <div class="borderButton cursor"  @click="addCommodity()">新建赠险活动</div>
                        <table  v-if="noData" class="table">
                            <tr>
                                <th v-if="activeIndex !=1" v-for="item in sortDatasone">
                                    {{item.name}}
                                </th>
                                <th v-if="activeIndex ==1" v-for="item in sortDatas">
                                    {{item.name}}
                                </th>
                            </tr>
                            <tr v-for="(item,index) in tableData">
                                <td>
                                    {{item.name}}
                                </td>
                                <td>
                                    {{timetrans(item.startTime)}} 至 <br>{{timetrans(item.endTime)}}
                                </td>
                                <td v-if="item.status == 0">
                                    <span v-if="(item.startTime <= Date.parse(new Date()) && item.endTime > Date.parse(new Date()))">进行中</span>
                                    <span v-if="(item.startTime > Date.parse(new Date()))">未开始</span>
                                    <span  v-if="(item.endTime <= Date.parse(new Date()))">已结束</span>
                                </td>
                                <td v-if="item.status == 1">
                                    <span>已失效</span>
                                </td>
                             
                                <td >
                                   {{item.viewCount}}
                                </td>
                                <td>
                                    {{item.userCount}}
                                </td>
                                <td>
                                    {{item.rewardPoints}}
                                </td>
                                <!-- <td v-if="activeIndex ==1">
                                    <i class="cursor iconfont iconshangsheng fontIcongreen" v-if="index!=0" @click='upSort(index,item)'></i>
                                    <i class="iconfont iconshangsheng fontIcongrey"  v-if="index==0"></i>
                                    <i class='cursor iconfont fontIcongreen iconjiang' @click='downSort(index,item)' v-if="index!=(tableData.length-1)"></i>
                                    <i class='iconfont fontIcongrey iconjiang' v-if="index==(tableData.length-1)"></i>
                                </td> -->
                                <td>
                                    <span class="color2087 font12 cursor fontWeight" v-if="(item.status == 0 && (item.startTime > Date.parse(new Date())))" @click="goDetail(item.id)">编辑</span>
                                    <span class="line" v-if="(item.status == 0 && (item.startTime > Date.parse(new Date())))"></span>
                                    <span class="color2087 font12 cursor fontWeight" @click="undercarriage(item.id)" v-if="(item.status == 0 && (item.startTime <= Date.parse(new Date()) && item.endTime > Date.parse(new Date())))">使失效</span>
                                    <span class="color2087 font12 cursor fontWeight" @click="enableGoods(item.id)" v-if="(item.status == 1)">使生效</span>
                                    <span class="line"  v-if="(item.status == 1)"></span>
                                    <span class="color2087 font12  fontWeight" v-if="(item.status == 1) || (item.status == 0 && ((item.startTime > Date.parse(new Date())))|| (item.endTime <= Date.parse(new Date())))"   @click="delectCommodity(item.id)">删除</span>
                                </td>
                            </tr>
                        </table>
                        <div v-if="!noData" class="noData">
                            <img class="nodataImg" src="../../assets/images/nodatalist.png"/>
                            <p>暂无数据~</p>
                        </div>
                        <!-- <div class="block" v-if="noData">
                            <el-pagination
                                    @size-change="handleSizeChange"
                                    @current-change="handleCurrentChange"
                                    :current-page="page"
                                    :page-size="size"
                                    :page-sizes="[100]"
                                    layout="total,sizes, prev, pager, next,jumper"
                                    :total="total">
                            </el-pagination>
                        </div> -->
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
                activeIndex: '1',
                orderField: 'saleStartDate',
                orderType: 'desc',
                sortDatas:[
                    {orderType:'',name: '活动名称',showBlue: false,orderField: ''},
                    {orderType:'',name: '有效时间',showBlue: false,orderField: ''},
                    {orderType:'',name: '活动状态',showBlue: false,orderField: ''},
                    {orderType:'',name: '打开次数',showBlue: false,orderField: ''},
                    {orderType:'',name: '参与人数',showBlue: true,orderField: ''},
                    {orderType:'',name: '累计发放积分',showBlue: false,orderField: ''},
                    {orderType:'',name: '操作',showBlue: false,orderField: ''}
                ],
                sortDatasone:[
                   {orderType:'',name: '活动名称',showBlue: false,orderField: ''},
                    {orderType:'',name: '有效时间',showBlue: false,orderField: ''},
                    {orderType:'',name: '活动状态',showBlue: false,orderField: ''},
                    {orderType:'',name: '打开次数',showBlue: false,orderField: ''},
                    {orderType:'',name: '参与人数',showBlue: true,orderField: ''},
                    {orderType:'',name: '累计发放积分',showBlue: false,orderField: ''},
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
            this.userInfo = JSON.parse(localStorage.getItem('user'));
            if(this.userInfo){
            }

        },
        watch:{
        },
        mounted(){
            this.getcommodityData('');//获取商品列表
        },
        methods: {
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
                Service.redeem().recsortredeem(arrdata).then(response => {
                    if(response.errorCode == 0){
                        this.getcommodityData();
                    }else{
                        this.$message.error(response.message)
                    }
                }, err => {
                });
            },
            handleSelect(key, keyPath) {
                this.activeIndex = key;
                if(this.activeIndex == 1){
                    this.type = '';
                    this.status = '';
                }else if(this.activeIndex == 2){
                    this.type = '1';
                    this.status = '0';
                }else if(this.activeIndex == 3){
                    this.type = '2';
                    this.status = '0';
                }else if(this.activeIndex == 4){
                    this.type = '3';
                    this.status = '0';
                }else if(this.activeIndex == 5){
                    this.type = '';
                    this.status = '1';
                }
                this.getcommodityData('search')
                console.log(key, keyPath);
            },
            sortData(item){
                for(let i in this.sortDatas){
                    this.sortDatas[i].showBlue = false;
                }
                item.showBlue = true;
                if(item.orderType == 'asc'){
                    item.orderType = 'desc';
                }else if(item.orderType == 'desc'){
                    item.orderType = 'asc';
                }
                this.orderType = item.orderType;
                this.orderField = item.orderField;
                this.getcommodityData('search')
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
            enableGoods(id){
                this.$confirm('确认使活动生效?', '', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    Service.giftinsurance().enableinsurance({
                    },id).then(response => {
                        if(response.errorCode == 0){
                            this.$message({
                                type: 'success',
                                message: '操作成功!'
                            });
                            this.getcommodityData('');//获取商品列表
                        }else{
                            this.$message.error(response.message)
                        }

                    }, err => {
                    });
                }).catch(() => {
                });
            },
            undercarriage(id) {
                this.$confirm('确认使活动失效?', '', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    Service.giftinsurance().disableinsurance({
                    },id).then(response => {
                        if(response.errorCode == 0){
                            this.$message({
                                type: 'success',
                                message: '操作成功!'
                            });
                            this.getcommodityData('');//获取商品列表
                        }else{
                            this.$message.error(response.message)
                        }
                    }, err => {
                    });
                }).catch(() => {
                });
            },
            delectCommodity(id){
                this.$confirm( '活动删除请谨慎操作，确定删除?', '', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    Service.giftinsurance().deleteinsurance({
                    },id).then(response => {
                        if(response.errorCode == 0){
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                            this.getcommodityData('');//获取商品列表
                        }else{
                            this.$message.error(response.message)
                        }

                    }, err => {
                    });
                }).catch(() => {

                });
            },

            addCommodity(){
                this.$router.push({name:'addinsurance'})
            },
            goDetail(id){
                this.$router.push({name:'addinsurance',query:{id:id}})
            },
            handleSizeChange(val) {
                this.size = val;
                this.getcommodityData('')
            },
            handleCurrentChange(val) {
                this.page = val;
                this.getcommodityData('')
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
            getcommodityData(str){
                if(str == 'search'){
                    this.page = 1;
                }
                Service.giftinsurance().getinsurance({
                    "status": this.status,
                    'type': this.type
                }).then(response => {
                    if(response.errorCode == 0){
                        if(response.data.length == 0){
                            this.noData = false;
                        }else{
                            this.noData = true;
                            // for(var i = 0;i< response.data.records.length;i++){
                            //     response.data.records[i].isshowDes = false;
                            //     // item.startTime <= Date.parse(new Date()
                            // }
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

