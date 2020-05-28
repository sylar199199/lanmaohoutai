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
                         .imgUrl{
                            width: 38px;
                            height: 42px;
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
                                padding-left: 16px;
                                width:300px;
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
        height: 450px;
        width: 380px;
        margin: 0 auto;
        img{
            height: 450px;
            width: 380px;
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
                      
                       
                    </div>
                    <div class="dataGeneral bannerTable">
                        
                        <table   class="table">
                            <tr>
                                <th v-for="item in sortDatas" :key='item.name'>
                                    {{item.name}}
                                </th>
                            </tr>
                            <tr v-for="item in tableData" :key="item.id">
                               <td>
                                    {{item.name}}
                                </td>
                                
                                <td>
                                    {{timetrans(item.createDate)}}
                                </td>
                                <td>
                                    <span class="color2087 font12  fontWeight" @click="goDetail(item.id)">编辑</span>
                                </td>
                            </tr>
                        </table>
                       
                    </div>
                </div>
            </div>
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
    import Commodities from '@/components/commodities'
    export default {
        components:{
            Aside,
            KlTop,
            Commodities
        },
        data() {
            return {
                sortDatas:[
                    {orderType:'',name: '基础信息',showBlue: false,orderField: ''},
                    {orderType:'',name: '更新时间',showBlue: false,orderField: ''},
                    {orderType:'',name: '操作',showBlue: false,orderField: ''}
                ],
                tableData: [],
               

            };
        },
        created(){
         
           

        },
        watch:{
        },
        mounted(){
            this.getprotocolList('');//获取列表
        },
        methods: {
            getprotocolList(){
                 Service.protocol().protocolList({
                    }).then(response => {
                        if(response.errorCode == 0){
                          this.tableData = response.data;
                        }else{
                            this.$message.error(response.message)
                        }

                    }, err => {
                    });
            },
            goDetail(id){
                this.$router.push({'name':'baseinfoDetail',query:{"id":id}})
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
        }
    }
</script>

