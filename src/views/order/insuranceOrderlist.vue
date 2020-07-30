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
                            th:nth-child(3){
                                text-align: left;
                            }
                            td{
                                text-align: center;
                                padding: 10px;
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
                                    width: 70px;
                                    height: 70px;
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
                                        line-height: 16px;
                                    }
                                }

                            }
                            td:nth-of-type(2){
                                min-width: 180px;
                                max-width: 320px;
                                text-align: left;
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
                            td:last-child{
                                padding: 10px;
                                width: 80px;
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
    .dialogone::after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 0;
        vertical-align: middle;
    }
    .dialogone{
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
        .color2087:hover{
            color: rgba(13,13,13,0.8);
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
                                <span class="searchLable colorGrey font12">ID </span>
                                <input type="text" v-model="id" class="serchInput font12 colorblack" placeholder="ID"/>
                            </div>
                           
                            <div class="searchBox">
                                <span class="searchLable colorGrey font12">微信昵称 </span>
                                <input type="text" v-model="userNickname" class="serchInput font12 colorblack" placeholder="微信昵称"/>
                            </div>
                            <div class="searchBox flex">
                                <span class="searchLable searchName colorGrey font12">提交时间</span>
                                <el-date-picker
                                        @change="enddateChange"
                                        v-model="insuranceDate"
                                        type="daterange"
                                        unlink-panels
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期"
                                        :picker-options="pickerOptions0"
                                        :default-time="['00:00:00','23:59:59']">
                                </el-date-picker>
                            </div>
                           
                             <div class="searchBox">
                                <span class="searchLable colorGrey font12">姓名 </span>
                                <input type="text" v-model="name" class="serchInput font12 colorblack" placeholder="姓名"/>
                            </div>
                            <div class="searchBox">
                                <span class="searchLable colorGrey font12">手机号 </span>
                                <input type="text" v-model="phone" class="serchInput font12 colorblack" placeholder="手机号"/>
                            </div>
                            <div class="searchBox flex">
                                <span class="searchLable searchName colorGrey font12">积分活动</span>
                                <el-select v-model="status" placeholder="">
                                    <el-option
                                            v-for="item in activityoption"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                            </div>
                            <div class="bacButtonone bacButton cursor" :download="download" :href="href" @click="daochu()">导出</div>
                            <div class="bacButton cursor" @click="getcommodityData('search')">筛选</div>
                        </div>

                    </div>
                    <div class="dataGeneral bannerTable">
                        <table  v-if="noData" class="table">
                            <tr>
                                <th v-for="item in sortDatas" :key="item.name">
                                    {{item.name}}
                                </th>
                            </tr>
                            <tr v-for="(item,index) in tableData" :key="item.orderNo">
                                <td>
                                    {{item.id}}
                                </td>
                                <td>
                                        {{item.userNickname}}
                                </td>

                                <td>
                                    {{item.name}}
                                </td>

                                <td>
                                    {{item.phone}}
                                </td>
                                <td>
                                   {{item.idNumber}}
                                </td>
                                <td >
                                    {{item.activityName}}
                                </td>
                                <td>
                                     {{timetrans(item.createDate)}}
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
        <div class="dialogone" >
            <div class="messge">
                <div class="messageHeader">
                    <div class="messagetitle">
                        <span>请录入发货物流信息</span>
                    </div>
                </div>
                <div class="messageContent">
                    <div class="colorblack font12" style="margin:10px;">
                        <span>编号： {{shiporderNo}}</span>
                         <span style="margin-left:16px;">收货人 {{consigneename}}</span>
                    </div>
                    <div class="messagemessage adressBox messagemessageone">
                        <span class="lableText colorblack font12">物流公司</span>
                        <input type="text" @change="changeValue('expressName','')" v-model="express.expressName"  class="inputBox marginLeft10 colorblack font12" placeholder="物流公司"/>

                    </div>
                    <div class="messagemessage">
                        <span class="lableText colorblack font12">物流单号</span>
                        <input type="text" @change="changeValue('expressNo','')" v-model="express.expressNo"  class="inputBox marginLeft10 colorblack font12" placeholder="物流单号"/>
                    </div>
                </div>
                <div class="messagebtns">
                    <div class="button borderButton copyButton"  @click="closeDiologone()">
                        取消
                    </div>
                    <div class="button bacButton" @click="shipGoods()">
                        确认
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
                activityId: '',
                id: '',
                name:'',
                phone: '',
                userId:'',
                userNickname: '',
                activityoption: [{name:'全部',id: ''}],
                pickerOptions0: { 
                    disabledDate(time) {
                        return time.getTime() > Date.now()
                    }
                },
                shiporderNo: '',
                consigneename: '',
                userName: '',
                userId: '',
                download: '',
                href: '',
                expressNo: '',
                express: {
                    expressName: "",
                    expressNo: ''
                },
                statusOption: [
                    {name: '全部',id: ''},{name: '待支付',id: '1'},{name: '待发货',id: '2'},{name: '待收货',id: '3'},{name: '交易成功',id: '4'},{name: '交易关闭',id: '5'}
                ],
                status: '',
                userValue: '',
                userName: '',
                userOption: [{name:'运单号',value: 0},{name: '收货人姓名',value: 1},{name: '收货人手机号',value: 2}],
                consigneeOption: [{name:'姓名',value: 0},{name: '手机号',value: 1}],
                sortDatas:[
                    {orderType:'',name: 'ID',showBlue: false,orderField: ''},
                    {orderType:'',name: '微信昵称',showBlue: false,orderField: ''},
                    {orderType:'',name: '姓名',showBlue: true,orderField: ''},
                    {orderType:'',name: '手机号',showBlue: true,orderField: ''},
                    {orderType:'',name: '身份证',showBlue: false,orderField: ''},
                    {orderType:'',name: '参与活动',showBlue: false,orderField: ''},
                    {orderType:'',name: '提交时间',showBlue: false,orderField: ''}
                ],
                endDate: "",
                consigneeType: 0,
                consigneeName: "",
                consigneePhone: '',
                startDate: "",
                total: 0,
                size: 10,
                page: 1,
                insuranceDate: '',
                tableData: [],
                noData: true,
                shipId: '',
            };
        },
        created(){

        },
        computed:{

        },
        watch:{
            'consigneeType':function(){
                if(this.consigneeType == 0){
                    this.expressNo = this.userValue;
                    this.consigneeName = ''
                    this.consigneePhone = '';
                }
                if(this.consigneeType == 1){
                    this.expressNo = '';
                    this.consigneeName = this.userValue;
                    this.consigneePhone = '';
                }
                if(this.consigneeType == 2){
                    this.expressNo = '';
                    this.consigneeName = '';
                    this.consigneePhone = this.userValue;
                }
            },
            'status':function(){

            },
        },
        mounted(){
            if(this.$route.query.status){
                this.status = (this.$route.query.status).toString();
            }
            this.getactivityData()
            this.getcommodityData('');//获取订单列表
        },
        methods: {
             getactivityData(){
                Service.giftinsurance().getinsurance({
                    "status": '',
                    'type': ''
                }).then(response => {
                    if(response.errorCode == 0){
                        if(response.data.length == 0){
                        }else{
                            for(var i = 0;i< response.data.length;i++){
                               var obj = {
                                   name: response.data[i].name,
                                   id: response.data[i].id
                               }
                               this.activityoption.push(obj)
                            }
                        }
                    }else{
                        this.$message.error(response.message)
                    }
                }, err => {
                });

            },
            isOther(x, arr){
                for(var i = 0;i<arr.length;i++){
                    if(x === arr[i].id){
                        return true;
                    }
                }

                return false;
            },
            ship(item){
                this.shiporderNo = item.orderNo;
                this.consigneename = item.consignee.name;
                this.shipId = item.id;
                $(".dialogone").css({'display': 'block'})
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
                    orderId: this.shipId
                }).then(response => {
                    if(response.errorCode == 0){
                        this.$message.success('发货成功');
                        this.getcommodityData('')
                        this.shiporderNo = '';
                        this.consigneename = '';
                        this.shipId = '';
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
            closeDiologone() {
                this.shiporderNo = '';
                this.consigneename = '';
                this.shipId = '';
                $(".dialogone").css({"display":"none"})
            },
            undercarriage(id) {
                $(".dialogone").css({'display':'block'})
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
                }else{
                    endDate = this.endDate;
                    startDate = this.startDate;
                }
                if(!this.userId){
                    this.userId = null
                }
                
                Service.giftinsurance().orderexport({
                    activityId: this.activityId,
                    id: this.id,
                    "name": this.name,
                    phone: this.phone,
                    "startDate": startDate,
                    "endDate": endDate,
                    userId: this.userId,
                    userNickname: this.userNickname
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
            getcommodityData(str){
                if(str == 'search'){
                    this.page = 1;
                }
                 if(!this.userId){
                    this.userId = null
                }
                var endDate = '',startDate = '';
                if(this.endDate || this.startDate){
                    endDate = Date.parse(new Date(this.endDate.replace(/-/g, "/")));
                    startDate = Date.parse(new Date(this.startDate.replace(/-/g, "/")));
                }else{
                    endDate = this.endDate;
                    startDate = this.startDate;
                }
                Service.giftinsurance().getorderinsurance({
                    activityId: this.activityId,
                    id: this.id,
                    "name": this.name,
                    phone: this.phone,
                    "page": this.page,
                    "size": this.size,
                    "startDate": startDate,
                    "endDate": endDate,
                    userId: this.userId,
                    userNickname: this.userNickname
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

