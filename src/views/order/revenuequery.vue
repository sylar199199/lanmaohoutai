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
                        align-items: center;
                        padding-bottom: 20px;
                         .bacButtonone{
                                margin-right: 15px;
                            }
                        .searchBox{
                            margin-right:30px;
                           
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
                            <div class="searchBox flex">
                                <span class="searchLable searchName colorGrey font12">日期</span>
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
                             <div class="bacButton bacButtonone cursor" @click="getcommodityData('search')">筛选 </div>
                            <div class="bacButton cursor" :download="download" :href="href" @click="daochu()">导出</div>
                           
                        </div>

                    </div>
                    <div class="dataGeneral bannerTable">
                        <table  v-if="noData" class="table">
                            <tr>
                                <th v-for="item in sortDatas" :key="item.name">
                                    {{item.name}}
                                </th>
                            </tr>
                            <tr v-for="item in tableData" :key="item.id" >
                                <td>
                                    {{timetrans(item.date)}}
                                </td>
                                <td>
                                    {{item.orderAmount}}
                                </td>
                                
                                <td>
                                    {{item.costAmount}}
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
                download: '',
                href: '',
                id: '',
                sortDatas:[
                    {orderType:'',name: '日期',showBlue: false,orderField: ''},
                    {orderType:'',name: '实收金额',showBlue: false,orderField: ''},
                    {orderType:'',name: '采购成本',showBlue: false,orderField: ''}
                   
                ],
                endDate: "",
                startDate: "",
                status: '',
                afsStatus: '',
                total: 0,
                size: 10,
                page: 1,
                insuranceDate: '',
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
            this.getcommodityData('');//获取订单列表
        },
        methods: {
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
                var newTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() ;
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
                Service.order().incomeexport({
                    "endDate": endDate,
                    "page": this.page,
                    "size": this.size,
                    "startDate": startDate
                }).then(response => {
                    if(response.errorCode == 0){
                        var blob = this.Decode(response.data);
                        if(window.URL.createObjectURL(blob).indexOf(location.host) < 0){//ie不支持
                            this.href =  window.navigator.msSaveOrOpenBlob(blob, '列表.xlsx');
                        }else{
                            this.download = '列表.xlsx';
                            this.href = URL.createObjectURL(blob);
                        }
                        window.open(this.href)
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
                Service.order().getincome({
                    "endDate": endDate,
                    "page": this.page,
                    "size": this.size,
                    "startDate": startDate
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

