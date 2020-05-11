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
                        <div class="borderButton cursor"  @click="addCommodity()">新建限时兑换</div>
                        <table  v-if="noData" class="table">
                            <tr>
                                <th v-for="item in sortDatas">
                                    {{item.name}}
                                </th>
                            </tr>
                            <tr v-for="(item,index) in tableData">
                                <td>
                                  fgfgfg
                                </td>
                                <td>
                                    {{timetrans(item.saleStartDate)}}
                                </td>
                                <td >
                                    <span v-if="(item.status == 0 && (item.saleStartDate <= Date.parse(new Date())))">在售中</span>
                                    <span v-if="(item.status == 0 && (item.saleStartDate > Date.parse(new Date())))">待上架</span>
                                    <span  v-if="item.status == 1" @mouseover="showDes(item)" @mouseout="hideDes(item)" >已下架</span>
                                    <span v-if="item.isshowDes " class="undercarriageReason">{{item.statusDesc}}</span>
                                </td>
                                <td>
                                    {{item.totalStock}}
                                </td>
                                <td >
                                    <span v-if="(item.status == 0 && (item.saleStartDate <= Date.parse(new Date())))">在售中</span>
                                    <span v-if="(item.status == 0 && (item.saleStartDate > Date.parse(new Date())))">待上架</span>
                                    <span  v-if="item.status == 1" @mouseover="showDes(item)" @mouseout="hideDes(item)" >已下架</span>
                                    <span v-if="item.isshowDes " class="undercarriageReason">{{item.statusDesc}}</span>
                                </td>
                                <td>
                                    {{item.totalStock}}
                                </td>
                                <td>
                                    {{item.totalStock}}
                                </td>
                                <td>
                                    <span class="color2087 font12 cursor" @click="goDetail(item.id)">编辑</span>
                                    <span class="line"></span>
                                    <!--<span class="color2087 font12 cursor" @click="undercarriage(item.id)" v-if="(item.status == 0 && (item.saleStartDate <= Date.parse(new Date())))">下架</span>-->
                                    <!--<span class="line"  v-if="(item.status == 0 && (item.saleStartDate <= Date.parse(new Date())))"></span>-->
                                    <span class="color2087 font12 cursor" @click="delectCommodity(item.id)">删除</span>
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
                                    layout="total,sizes, prev, pager, next,jumper"
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
                    {orderType:'',name: '付款人数',showBlue: false,orderField: ''},
                    {orderType:'',name: '付款订单数',showBlue: true,orderField: ''},
                    {orderType:'',name: '实际消耗积分',showBlue: false,orderField: ''},
                    {orderType:'',name: '订单实付金额',showBlue: true,orderField: ''},
                    {orderType:'',name: '操作',showBlue: false,orderField: ''}
                ],
                endDate: "",
                name: "",
                startDate: "",
                status: '',
                type: '',
                total: 0,
                size: 10,
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
            this.getChannel();
            this.getcommodityData('');//获取商品列表
        },
        methods: {
            handleSelect(key, keyPath) {
                this.activeIndex = key;
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
            undercarriage(id) {
                this.$confirm('确认下架?', '', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    Service.goods().offShelfGoods({
                    },id).then(response => {
                        if(response.errorCode == 0){
                            this.$message({
                                type: 'success',
                                message: '下架成功!'
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
                this.$confirm( '商品删除请谨慎操作，确定删除?', '', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    Service.goods().deleteGoods({
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
                this.$router.push({name:'editorcommondity'})
            },
            goDetail(id){
                this.$router.push({name:'editorcommondity',query:{id:id}})
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
            getChannel(){
                Service.channel().getChannel({
                }).then(response => {
                    if(response.errorCode == 0){
                        var selectData = response.data;
                        selectData.unshift({id: '',name:'全部'});;
                        this.channelsOption = response.data
                    }else{
                        this.$message.error(response.message)
                    }

                }, err => {
                });
            },
            getcommodityData(str){
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
                Service.goods().getGoodsList({
                    "channelId": this.channelId,
                    "endDate": endDate,
                    "name": this.name,
                    "page": this.page,
                    "size": this.size,
                    "startDate": startDate,
                    orderType: this.orderType,
                    orderField: this.orderField,
                    "status": '',
                    "type": this.type,
                    recommend: ''
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
        },

    }
</script>

