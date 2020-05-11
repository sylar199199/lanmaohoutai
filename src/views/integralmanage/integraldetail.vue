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
                    margin-top: 15px;
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
                                position: relative;
                                .iconshengjiangxu{
                                    font-size: 16px;
                                    margin-left: 5px;
                                }
                                .iconwenhao{
                                    font-size: 16px;
                                    margin-left: 5px;
                                }
                                .warmText{
                                    display: inline-block;
                                    width: 200px;
                                    padding: 10px;
                                    line-height: 20px;
                                    position: absolute;
                                    background-color: #ffffff;
                                    box-shadow: 0px 2px 24px 0px rgba(199, 199, 199, 0.51);
                                    border-radius: 4px;
                                    left: -2px;
                                    bottom: 45px;
                                    z-index: 10;
                                }
                            }
                            th:nth-child(3){
                                text-align: left;
                            }
                            td{
                                text-align: center;
                                padding: 20px 0;
                                .undercarriageReason{
                                    min-width: 120px;
                                    position: absolute;
                                    padding: 10px;
                                    line-height: 20px;
                                    background-color: #ffffff;
                                    box-shadow: 0px 2px 24px 0px rgba(199, 199, 199, 0.51);
                                    border-radius: 4px;
                                    left: -44px;
                                    top: -18px;
                                }
                                .line{
                                    display: inline-block;
                                    height: 8px;
                                    width: 3px;
                                    background: #eee;
                                    margin: 0 10px;
                                }
                                .productImg{
                                    width: 116px;
                                    height: 60px;
                                    max-width: 116px;
                                    max-height: 60px;
                                }
                                .productBox{
                                    display: flex;
                                    flex-direction: column;
                                    height: 60px;
                                    justify-content: space-between;
                                    padding-left: 10px;
                                    .productText{
                                        margin-bottom: 0px;
                                        margin-top: 0;
                                    }
                                }

                            }
                            td:nth-of-type(2){
                                /*min-width: 180px;*/
                                /*max-width: 300px;*/
                                text-align: center;
                            }
                            td:nth-of-type(3){
                                text-align: left;
                                .imgicon{
                                    display: inline-block;
                                    vertical-align: middle;
                                    height: 20px;
                                    width: 20px;
                                    padding-right: 10px;
                                }
                            }
                            td:nth-of-type(5){
                                position: relative;
                                .warmtext{
                                    position: absolute;
                                    color: #fff;
                                    font-size: 12px;
                                    top: 50px;
                                    background: #000;
                                    padding: 4px 6px;
                                    border-radius: 4px;
                                }
                                .imgicon{
                                    display: inline-block;
                                    vertical-align: middle;
                                    height: 20px;
                                    width: 20px;
                                    margin-right: 20px;
                                }
                            }
                            .upimg{
                                display: inline-block;
                                vertical-align: middle;
                                height: 20px;
                                width: 20px;
                            }
                            .downimg{
                                display: inline-block;
                                vertical-align: middle;
                                height: 20px;
                                width: 20px;
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
                            <div class="searchBox flex">
                                <span class="searchLable searchName colorGrey font12">积分类型</span>
                                <el-select v-model="type" placeholder="">
                                    <el-option
                                            v-for="item in typeOption"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                            </div>
                            <div class="searchBox flex">
                                <span class="searchLable searchName colorGrey font12">积分活动</span>
                                <el-select v-model="activityType" placeholder="">
                                    <el-option
                                            v-for="item in activityOption"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                            </div>
                            <div class="searchBox flex">
                                <span class="searchLable searchName colorGrey font12">奖励条件</span>
                                <el-select v-model="ruleId" placeholder="">
                                    <el-option
                                            v-for="item in pointsData"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                            </div>
                            <div class="searchBox">
                                <span class="searchLable colorGrey font12">用户id</span>
                                <input type="text" v-model="userId" class="serchInput font12 colorblack" placeholder='用户id'/>
                            </div>
                            <div class="searchBox flex">
                                <span class="searchLable searchName colorGrey font12">产生时间</span>
                                <el-date-picker
                                        @change="enddateChange"
                                        v-model="insuranceDate"
                                        type="daterange"
                                        unlink-panels
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期"
                                        :default-time="['00:00:00','23:59:59']">
                                </el-date-picker>
                            </div>
                            <div class="bacButton cursor" @click="customerList('search')">查询</div>
                        </div>

                    </div>
                    <div class="dataGeneral bannerTable">
                        <table  v-if="noData" class="table">
                            <tr>
                                <th v-for="(item,index) in sortDatas">
                                    {{item.name}}
                                </th>
                            </tr>
                            <tr v-for="(item,index) in tableData">
                                <td>
                                   {{item.userId}}
                                </td>
                                <td>
                                    {{item.nickname}}
                                </td>
                                <td>
                                    {{item.phone}}
                                </td>
                                <td>
                                    <span v-if="item.type == 1">积分发放</span>
                                    <span v-if="item.type == 2">积分消耗</span>
                                </td>
                                <td>
                                    <span v-if="item.activityType == 1">养生打卡</span>
                                    <span v-if="item.activityType == 2">推荐奖励</span>
                                    <span v-if="item.activityType == 3">积分消耗</span>
                                    <span v-if="item.activityType == 0">新人奖励</span>
                                </td>
                                <td v-if="item.createDate">{{timetrans(item.createDate)}}</td>
                                <td v-if="!item.createDate"></td>
                                <td>{{item.createBy}}</td>
                                <td>
                                    {{(item.reason)}}
                                </td>
                                <td>
                                    <span v-if="item.type == 1">
                                         +{{item.points}}
                                    </span>
                                    <span v-if="item.type == 2">
                                         -{{item.points}}
                                    </span>
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
                activityOption: [
                    {name: '全部',id: ''},
                    {name: '养生打卡',id: 1},
                    {name: '推荐奖励',id: 2},
                    {name:'积分消耗',id: 3},
                    {name:'新人奖励',id: 0}
                ],
                pointsData: [],
                typeOption:[{name: '全部',id:''},{name: '积分发放',id:'1'},{name: '积分消耗',id:'2'}],
                type: '',
                activityType: '',
                showspan: false,
                orderField: 'orderCount',
                orderType: 'desc',
                sortDatas:[
                    {orderType:'',name: '用户id',showBlue: false,orderField: ''},
                    {orderType:'',name: '微信昵称 ',showBlue: false,orderField: ''},
                    {orderType:'',name: '手机号',showBlue: false,orderField: ''},
                    {orderType:'',name: '积分类型',showBlue: false,orderField: ''},
                    {orderType:'',name: '积分活动',showBlue: false,orderField: ''},
                    {orderType:'',name: '操作时间',showBlue: true,orderField: ''},
                    {orderType:'',name: '操作人',showBlue: false,orderField: ''},
                    {orderType:'',name: '原因',showBlue: false,orderField: ''},
                    {orderType:'',name: '明细',showBlue: false,orderField: ''}
                ],
                ruleId: '',
                userId: '',
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

        },
        watch:{
        },
        mounted(){
            if(this.$route.query.userId){
                this.userId = parseInt(this.$route.query.userId)

            }
            this.pointsList();
        },
        methods: {
            pointsList(){
                Service.points().getpoints({
                }).then(response => {
                    if(response.errorCode == 0){

                        if(response.data.length == 0){
                        }else{
                            this.pointsData = response.data;
                            var obj = {
                                id: '',
                                name: '全部'
                            }
                            this.pointsData.unshift(obj)
                            if(this.$route.query.id){
                                this.ruleId = parseInt(this.$route.query.id);
                            }
                            this.customerList('');
                            console.log(this.ruleId )
                        }
                    }else{
                        this.$message.error(response.message)
                    }
                }, err => {
                });

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
                this.customerList('search')
            },

            handleSizeChange(val) {
                this.size = val;
                this.customerList('')
            },
            handleCurrentChange(val) {
                this.page = val;
                this.customerList('')
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
            customerList(str){
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
                Service.points().getlogList({
                    "userId": this.userId,
                    'endDate': endDate,
                    'startDate': startDate,
                    "ruleId": this.ruleId,
                    "page": this.page,
                    "size": this.size,
                    type: this.type,
                    activityType: this.activityType,
                }).then(response => {
                    if(response.errorCode == 0){
                        if(response.data.records.length == 0){
                            this.noData = false;
                            console.log(this.noData )
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

