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
                    padding: 0 20px 20px;
                    .tableTitle{
                        border-bottom: 1px solid #ececec;
                        margin: 0 20px 10px 20px;
                        padding-bottom: 10px;
                    }
                    .bacButton{
                        margin-bottom:15px;
                    }
                    .searchContent{
                        flex-wrap: wrap;
                        position: relative;
                        margin-top: 20px;
                        .searchBox{
                            margin-right:30px;
                            margin-bottom: 20px;
                            .radioBox{
                                .iconfont{
                                    font-size: 18px;
                                    margin-right: 4px;
                                    display: inline-block;
                                    vertical-align: middle;
                                }
                                .typeText{
                                    display: inline-block;
                                    vertical-align: middle;
                                }

                            }
                            .inputBox{
                                width: 60px;
                                height: 30px;
                                line-height: 30px;
                                border: 1px solid #e5e5e5;
                                text-indent: 10px;
                                margin: 0 6px;
                            }
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
                    padding: 20px 0 100px;
                    .previewBox{
                        width: 330px;
                        border: 1px solid #ececec;
                        margin: 20px 0 20px 20px;
                        .previewTitle{
                            text-align: center;
                            height: 40px;
                            line-height: 40px;
                            background: #ececec;
                        }
                        .scrollContent{
                            width: 330px;
                            height: 470px;
                            margin: 16px;
                            overflow-y: auto;
                            flex-wrap: wrap;
                            /*overflow-x: hidden;*/
                        }
                        .previewContent{
                            .contentTitle{
                                margin: 10px 16px;
                            }
                            .productContent{
                                border: 1px solid #ececec;
                                width: 140px;
                                margin-right: 12px;
                                margin-bottom: 10px;
                                border-radius: 5px;
                                .productLeft{
                                    height: 140px;
                                    width: 140px;
                                    margin-right: 8px;
                                    .productImg{
                                        height: 140px;
                                        width: 140px;
                                        border-radius: 5px 5px 0  0;
                                    }
                                }
                                .productRight{
                                    .textLinethrough{
                                        text-decoration: line-through;
                                    }
                                    .priceText{
                                        color: #f24e43;
                                        font-size: 20px;
                                        font-weight: 600;
                                    }
                                    .gouqiicon{
                                        height: 12px;
                                        width: 8px;
                                        display: inline-block;
                                        vertical-align: middle;
                                    }
                                    .flexBetween{
                                        margin: 6px;
                                        line-height: 28px;
                                        .borderSmallButton{
                                            width: 55px;
                                            margin-top: 14px;
                                        }
                                    }
                                    .productName{
                                        line-height: 16px;
                                        margin: 16px 6px 8px;
                                    }
                                    .percent{
                                        text-align: right;
                                        border-radius: 10px;
                                        width: 130px;
                                        height: 15px;
                                        line-height: 15px;
                                        background: #efefef;
                                        margin: 6px;
                                        .percentNumber{
                                            background: -webkit-linear-gradient(0deg, #f6e1b0, #f3bacc);
                                            border-radius: 10px 0 0 10px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    .borderButton{
                        margin: 0 20px;
                    }
                    .noData{
                        text-align: center;
                        padding-top: 30px;
                    }
                    .tableBox{
                        margin: 0 40px;
                    }
                    .tableScrollBox{
                        height: 300px;
                        overflow-y: scroll;
                    }
                    .table{
                        font-size: 12px;
                        border: 1px solid #f6f6f6;

                        width: 562px;
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
                                padding-left: 10px
                            }
                            th:nth-child(4){
                                text-align: center;
                                padding-right: 10px
                            }
                            td{
                                text-align: center;
                                padding: 8px 0;

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
                                    }
                                }

                            }
                            td:nth-of-type(1){
                                min-width: 180px;
                                max-width: 300px;
                                text-align: left;
                                padding-left: 10px
                            }
                            td:nth-of-type(3){
                                text-align: center;
                                .imgicon{
                                    display: inline-block;
                                    vertical-align: middle;
                                    height: 20px;
                                    width: 20px;
                                    padding-right: 10px;
                                }
                            }
                            td:nth-of-type(4){
                                padding-right: 10px;
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
    .marginbottom{
        margin-bottom: 8px;
    }
</style>
<template>
    <div class="general">
        <KlTop></KlTop>
        <div class="salecustomercontent contaner">
            <Aside></Aside>
            <div class="content">
                <div class="contanternews">
                    <div class="dataGeneral bannerTable">
                        <div class="tableTitle colorblack font14"  >活动信息</div>
                        <div class="flex contentFlex">
                            <div class="tableBox">
                                <div class="searchContent clear">
                                    <div class="searchBox">
                                        <span class="searchLable colorGrey font12">活动名称</span>
                                        <input type="text" v-model="name" class="serchInput font12 colorblack" placeholder="请填写活动名称"/>
                                    </div>
                                    <div class="searchBox flex">
                                        <span class="searchLable searchName colorGrey font12">生效时间 </span>
                                        <el-date-picker
                                                @change="enddateChange"
                                                v-model="insuranceDate"
                                                type="datetimerange"
                                                unlink-panels
                                                range-separator="至"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期"
                                               >
                                        </el-date-picker>
                                    </div>
                                    <div class="searchBox flex">
                                        <span class="searchLable searchName colorGrey font12">规则 </span>
                                        <div class="radioBox marginLeft10" >
                                            <i class="iconfont iconxuanzhong color2087 font20 cursor cursor" v-if="shelvesType==1"></i>
                                            <i class="iconfont iconxuanze  font20 cursor" v-if="shelvesType != 1" @click="shelvesType = 1"></i>
                                            <span class="typeText colorblack font12 marginright10">限制参与人数<input type="text" class="inputBox" v-model="limitNumber" />人</span>
                                            <i class="iconfont iconxuanzhong color2087 font20 cursor marginLeft10" v-if="shelvesType==0"></i>
                                            <i class="iconfont iconxuanze  font20 cursor marginLeft10" v-if="shelvesType !=0" @click="shelvesType = 0"></i>
                                            <span class="typeText colorblack font12">不限购</span>
                                        </div>
                                    </div>
                                     <div class="searchBox flex">
                                        <span class="searchLable searchName colorGrey font12"> </span>
                                         <div class="radioBox marginLeft10" >
                                            <i class="iconfont iconxuanzhong color2087 font20 cursor cursor" v-if="rewardPointstype==1"></i>
                                            <i class="iconfont iconxuanze  font20 cursor" v-if="rewardPointstype != 1" @click="rewardPointstype = 1"></i>
                                            <span class="typeText colorblack font12 marginright10">奖励积分<input type="text" class="inputBox" v-model="rewardPoints" />分</span>
                                            <i class="iconfont iconxuanzhong color2087 font20 cursor marginLeft10" v-if="rewardPointstype==0"></i>
                                            <i class="iconfont iconxuanze  font20 cursor marginLeft10" v-if="rewardPointstype !=0" @click="rewardPointstype = 0"></i>
                                            <span class="typeText colorblack font12">不奖励积分</span>
                                        </div>
                                    </div>
                                    <!-- <div class="searchBox">
                                        <span class="searchLable colorGrey font12">URL链接</span>
                                        <input type="text" v-model="name" class="serchInput font12 colorblack" placeholder="请输入URL链接"/>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                        <div class="bacButton" @click="addActiveProduct()"  style="margin: 20px 140px">
                            保存
                        </div>
                    </div>
                </div>
            </div>
            <AddSpecs v-if="showSpecs" @selectGuige = 'getgoodsdata' :goodsdata="goodsdata" @clickbanner="getbackData"></AddSpecs>
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
    import AddSpecs from '@/components/addSpecs'
    export default {
        name: "salecustomer",
        components:{
            Aside,
            KlTop,
            Commodities,
            AddSpecs
        },
        data() {
            return {
                isuserRegDaysLimit: false,
                userRegDaysLimit: null,
                limitNumber: '',
                rewardPoints: '',
                goodsid: '',
                showSpecs: false,
                name: '',
                shelvesType: 1,
                rewardPointstype: 1,
                percent: '90%',
                activeIndex: '1',
                orderField: 'saleStartDate',
                orderType: 'desc',
                sortDatas:[
                    {orderType:'',name: '商品',showBlue: false,orderField: ''},
                     {orderType:'',name: '排序',showBlue: false,orderField: ''},
                    {orderType:'',name: '剩余库存',showBlue: false,orderField: ''},
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
                insuranceDate: [],
                goodsdata: [],
                noData: false,
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
            if(this.$route.query){
                this.goodsid = this.$route.query.id;
                if(this.goodsid){
                    this.getcommodityData();//获取商品列表
                }
            }
        },
        methods: {
            downSort(index,item){//降序
                this.goodsdata[index] = this.goodsdata[index+1];
                this.goodsdata[index+1] = item;
                this.sortRecData();
            },
            upSort(index,item){//升序
                this.goodsdata[index] = this.goodsdata[index-1];
                this.goodsdata[index-1] = item;
                this.sortRecData();
            },
            sortRecData(){
                var arrdata = [];
                for(var i = 0;i < this.goodsdata.length;i++){
                    var obj = {
                        id: this.goodsdata[i].id,
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
            getPercent(num, num1) {
                num = parseFloat(num);
                num1 = parseFloat(num1);
                var total =  parseFloat(num + num1);
                if (isNaN(num) || isNaN(total)) {
                    return "-";
                }
                return total <= 0 ? "0%" : (Math.round(num / total * 10000) / 100.00) + "%";
            },
            addActiveProduct(){
                this.name = this.name.replace(/^\s*|\s*$/g,"");
                if(!this.name){
                    this.$message.warning('请输入活动名称');
                    return;
                }
                if(this.name.length < 2 || this.name.length > 30 ){
                    this.$message.warning('请输入短于2个字不超过30个字的活动名称');
                    return;
                }
                if(!this.startDate || !this.endDate){
                    this.$message.warning('请选择生效时间');
                    return;
                }
                var endDate = Date.parse(new Date(this.endDate.replace(/-/g, "/")));
                var startDate = Date.parse(new Date(this.startDate.replace(/-/g, "/")));
                var limitNumber = '';
                var rewardPoints = '';
                if(this.shelvesType == 0){
                    limitNumber = 0
                }
                if(this.shelvesType == 1){
                    var reg = /^[1-9]\d*$/;
                    if(!reg.test(this.limitNumber)){
                        this.$message.warning('请输入合理的限购人数');
                        return;
                    }else{
                        limitNumber = this.limitNumber;
                    }
                }
                if(this.rewardPointstype == 1){
                     var reg1 = /^[1-9]\d*$/;
                    if(!reg1.test(this.rewardPoints)){
                        this.$message.warning('请输入合理的奖励积分');
                        return;
                    }else{
                        rewardPoints = this.rewardPoints;
                    }
                }else{
                    rewardPoints = 0
                }
                if(this.goodsid){
                    Service.giftinsurance().editorinsurance({
                       "endTime": endDate,
                        "rewardPoints": rewardPoints,
                        "name": this.name,
                        "limitNumber": limitNumber,
                        "startTime": startDate
                    },this.goodsid).then(response => {
                        if(response.errorCode == 0){
                            this.$message.success('添加成功')
                            this.$router.push({name:'insurancelist'})
                        }else{
                            this.$message.error(response.message)
                        }
                    }, err => {
                    });
                }else{
                    Service.giftinsurance().addinsurance({
                        "endTime": endDate,
                        "rewardPoints": rewardPoints,
                        "name": this.name,
                        "limitNumber": limitNumber,
                        "startTime": startDate
                    }).then(response => {
                        if(response.errorCode == 0){
                            this.$message.success('添加成功');
                            this.$router.push({name:'insurancelist'})
                        }else{
                            this.$message.error(response.message)
                        }
                    }, err => {
                    });
                }

            },
            getRecList(){
                this.showSpecs = true;
            },
            getGuigeData(){

            },
            getgoodsdata(obj){
                for(let i in obj){
                    if(obj[i].name.length>15){
                        obj[i].name = obj[i].name.substring(0,15)+'...'
                    }
                }
                this.goodsdata = obj;
                if(this.goodsdata.length != 0){
                    this.noData = true;
                }else{
                    this.noData = false;
                }
                console.log(this.goodsdata)
            },
            getbackData(str){
                if(str == 'sure'){
                    this.showSpecs = false;
                }
                if(str == 'cancle'){
                    this.showSpecs = false;
                }
            },

            handleSelect(key, keyPath) {
                this.activeIndex = key;
                console.log(key, keyPath);
            },
            delectCommodity(item){
                this.$confirm( '商品删除请谨慎操作，确定删除?', '', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    var index =  this.goodsdata.indexOf(item)
                    this.goodsdata.splice(index, 1);
                }).catch(() => {

                });
            },
            addCommodity(){
                this.$router.push({name:'editorcommondity'})
            },
            goDetail(id){
                this.$router.push({name:'editorcommondity',query:{id:id}})
            },
            enddateChange(val){
                console.log(this.insuranceDate)
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

            getcommodityData(){
                Service.giftinsurance().insuranceDetail({
                },this.goodsid).then(response => {
                    if(response.errorCode == 0){
                            if(response.data.limitNumber == 0){
                                this.shelvesType = 0;
                            }else{
                                this.shelvesType = 1;
                                this.limitNumber = response.data.limitNumber;
                            }
                             if(response.data.rewardPoints == 0){
                                this.rewardPointstype = 0;
                            }else{
                                this.rewardPointstype = 1;
                                this.rewardPoints = response.data.rewardPoints;
                            }
                            this.name =  response.data.name;
                            this.startDate = this.timetrans(response.data.startTime);
                            this.endDate = this.timetrans(response.data.endTime);
                            this.insuranceDate.push(new Date(response.data.startTime));
                            this.insuranceDate.push(new Date(response.data.endTime))
                    }else{
                        this.$message.error(response.message)
                    }
                }, err => {
                });

            },
        },

    }
</script>

