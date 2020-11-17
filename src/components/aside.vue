<style rel="stylesheet/scss" lang="scss"  scoped>
    $baseFontSize: 192;
    $bg2087: #0d2c4b;
    $bac97: #929292;
    #aside{
        display: flex;
        .firstAside{
            width: 182px;
            background: #fff;
            padding-top: 0;
            height: 100vh;
            // position: fixed;
            border-right: 1px solid #FAFAFA;
            font-size: 12px;
            .firstLi:first-child:hover{
                background: $bg2087;
                margin-bottom:0px;
            }
            .firstLi{
                .secondUl{
                    padding: 18px 0;
                    background: #f9f9f9;
                    .secondLi{
                        color: $bac97;
                        padding-left: 74px;
                        margin-bottom: 18px;
                        font-size: 12px;
                    }
                    .secondLi:hover{
                        color: $bg2087;
                    }
                    .subactive{
                        color: $bg2087;
                    }
                    .subactive:before{
                        content: '';
                        display: block;
                        position: absolute;
                        height: 17px;
                        width: 4px;
                        background: $bg2087;
                        left: 0;
                    }
                    .secondLi:last-child{
                        margin-bottom: 0px;
                    }
                }
                .firstTitle{
                    height: 58px;
                    line-height: 58px;
                }
                .logo{
                    width: 91rem/$baseFontSize;
                    height: 32rem/$baseFontSize;
                }
                .warmText{
                    color:$bac97;
                    font-size: 12px;
                    display: inline-block;
                    vertical-align: middle;
                    margin-top: -2px;
                    margin-left: 1px;
                }
                .iconfont{
                    padding-left: 30px;
                    font-size: 20px!important;
                    display: inline-block;
                    vertical-align: middle;
                    margin-right: 20px;
                }
                .fontIcongrey{
                    color: #b7b7b7;
                }
                .fontIconwhite{
                    color: #fff;
                }
            }
            .liactive{
                background: $bg2087;
                .warmText{
                    color: #fff;
                }
            }

            .firstLi:hover{

                .firstTitle{
                    background: #fff;
                    .warmText{
                        color: $bg2087;
                    }
                    .iconfont{
                        color: $bg2087;
                    }
                }
                .liactive {
                    background: $bg2087;
                    .warmText{
                        color: #fff;
                    }
                    .iconfont{
                        color: #fff;
                    }
                }
            }
        }

    }

</style>
<template>
    <div style="background: #fff;">
        <div id="aside">
            <ul class="firstAside">
                <li  class='cursor firstLi' v-for="(item,index) in items" :key="item.name" v-if="item.name != '退出' && (item.isdelete == false)"  >
                    <div class="firstTitle" :class="{liactive:item.isSubShow}" @click="showToggle(item,index)" >
                        <i :class='item.greyIcon' v-if="!item.showIcon" ></i>
                        <i  v-if="item.showIcon" :class="item.greenIcon"></i>
                        <span class="warmText">{{item.name}}</span>
                    </div>
                    <ul class="secondUl"  v-if="item.showIcon && item.subItems.length != 0 " >
                        <li  :class="{subactive:ite.isSubShow}" class="secondLi cursor" v-if="ite.isdelete == false" v-for="(ite,indexsecond) in item.subItems" @click="jumpRouter(item.subItems,ite,index,indexsecond)" :key="ite.name">{{ite.name}}</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    import Service from '@/common/service'
    export default {
        data(){
            return{
                title: '销售',
                userInfo: '',
                userType: null,
                secondContent: [
                ],
                hasSales: '',
                hasLeads: '',
                hasCustomer: '',
                hasSettings: '',
                hasUser: '',
                hasRole: '',
                hasClient: '',
                hasCustomeruser: '',
                hasCustomerenterprise: '',
                hasOrder: '',
                hasOrderUser: '',
                hasOrderenterprise: '',
                items: [
                    {
                        name: '概况',
                        greyIcon: 'iconzhuye iconfont fontIcongrey',
                        greenIcon: 'iconzhuye iconfont fontIconwhite',
                        isSubShow: false,
                        showIcon: false,
                        isShow: false,
                        isdelete: false,
                        subItems: [
                          {
                            title: '数据概况',
                            secTitlte: '',
                            isdelete: false,
                            secgreyIcon: '',
                            secgreenIcon: '',
                            name: '数据概况',
                            isSubShow: false,
                            router:'home',
                            thirditems: []
                          },
                          {
                            title: '行为分析',
                            secTitlte: '',
                            isdelete: false,
                            secgreyIcon: '',
                            secgreenIcon: '',
                            name: '行为分析',
                            isSubShow: false,
                            router:'behaviorAnalysis',
                            thirditems: []
                          }
                        ]
                    },
                    {
                        name: '客户管理',
                        greyIcon: 'iconkehu iconfont fontIcongrey',
                        greenIcon: 'iconkehu iconfont fontIconwhite',
                        isSubShow: false,
                        showIcon: false,
                        isShow: false,
                        isdelete: false,
                        subItems: [
                            {
                                title: '客户查询',
                                secTitlte: '',
                                isdelete: false,
                                secgreyIcon: '',
                                secgreenIcon: '',
                                name: '客户查询',
                                isSubShow: false,
                                router:'customerlist',
                                thirditems: []
                            },

                             {
                                title: '访客查询',
                                secTitlte: '',
                                isdelete: false,
                                secgreyIcon: '',
                                secgreenIcon: '',
                                name: '访客查询',
                                isSubShow: false,
                                router:'visitlist',
                                thirditems: []
                            },
                            {
                                title: '积分管理',
                                secTitlte: '',
                                isdelete: false,
                                secgreyIcon: '',
                                secgreenIcon: '',
                                name: '积分管理',
                                isSubShow: false,
                                router:'integralmanage',
                                thirditems: []
                            }
                        ]
                    },
                    {
                        name: '订单管理',
                        greyIcon: 'icondingdan iconfont fontIcongrey',
                        greenIcon: 'icondingdan iconfont fontIconwhite',
                        isSubShow: false,
                        showIcon: false,
                        isShow: false,
                        isdelete: false,
                        subItems: [
                            {
                                title: '订单查询',
                                secTitlte: '',
                                isdelete: false,
                                secgreyIcon: '',
                                secgreenIcon: '',
                                name: '订单查询',
                                isSubShow: false,
                                router:'orderlist',
                                thirditems: []
                            },
                            {
                                title: '收入查询',
                                secTitlte: '',
                                isdelete: false,
                                secgreyIcon: '',
                                secgreenIcon: '',
                                name: '收入查询',
                                isSubShow: false,
                                router:'revenuequery',
                                thirditems: []
                            },
                             {
                                title: '赠险订单',
                                secTitlte: '',
                                isdelete: false,
                                secgreyIcon: '',
                                secgreenIcon: '',
                                name: '赠险订单',
                                isSubShow: false,
                                router:'insuranceOrderlist',
                                thirditems: []
                            }
                        ]
                    },
                    {
                        name: '商品管理 ',
                        greyIcon: 'icondingdan1 iconfont fontIcongrey',
                        greenIcon: 'icondingdan1 iconfont fontIconwhite',
                        isSubShow: false,
                        showIcon: false,
                        isShow: false,
                        isdelete: false,
                        subItems: [
                            {
                                isdelete: false,
                                title: '商品管理',
                                secTitlte: '',
                                secgreyIcon: 'icon-icon-personal iconfont fontIcongrey',
                                secgreenIcon: 'icon-icon-personal iconfont fontIconwhite',
                                name: '商品管理',
                                isSubShow: false,
                                router:'commoditymanage',
                                thirditems:[
                                ]
                            }
                        ]
                    },
                    {
                        name: '营销玩法',
                        greyIcon: 'iconyingxiao iconfont fontIcongrey',
                        greenIcon: 'iconyingxiao iconfont fontIconwhite',
                        isSubShow: false,
                        showIcon: false,
                        isShow: false,
                        isdelete: false,
                        subItems: [
                            {
                                title: '抽奖福利',
                                secTitlte: '',
                                isdelete: false,
                                secgreyIcon: '',
                                secgreenIcon: '',
                                name: '抽奖福利',
                                isSubShow: false,
                                router:'rafflebenefits',
                                thirditems: []
                            },
                            {
                                title: '限时兑换',
                                secTitlte: '',
                                isdelete: false,
                                secgreyIcon: '',
                                secgreenIcon: '',
                                name: '限时兑换',
                                isSubShow: false,
                                router:'limitactiveList',
                                thirditems: []
                            },{
                                title: '赠险活动',
                                secTitlte: '',
                                isdelete: false,
                                secgreyIcon: '',
                                secgreenIcon: '',
                                name: '赠险活动',
                                isSubShow: false,
                                router:'insurancelist',
                                thirditems: []
                            }
                        ]
                    },
                    {
                        name: '模板管理',
                        greyIcon: 'iconshangchengmoban iconfont fontIcongrey',
                        greenIcon: 'iconshangchengmoban iconfont fontIconwhite',
                        isSubShow: false,
                        showIcon: false,
                        isShow: false,
                        isdelete: false,
                        subItems: [
                            {
                                title: '白天打卡背景',
                                secTitlte: '',
                                isdelete: false,
                                secgreyIcon: '',
                                secgreenIcon: '',
                                name: '白天打卡背景',
                                isSubShow: false,
                                router:'clockdaybackground',
                                thirditems: []
                            },
                            {
                                title: '晚上打卡背景',
                                secTitlte: '',
                                isdelete: false,
                                secgreyIcon: '',
                                secgreenIcon: '',
                                name: '晚上打卡背景',
                                isSubShow: false,
                                router:'clocknightbackground',
                                thirditems: []
                            },
                             {
                                title: '专属海报背景',
                                secTitlte: '',
                                isdelete: false,
                                secgreyIcon: '',
                                secgreenIcon: '',
                                name: '专属海报背景',
                                isSubShow: false,
                                router:'posterbackground',
                                thirditems: []
                            },
                            {
                                title: '活动海报',
                                secTitlte: '',
                                isdelete: false,
                                secgreyIcon: '',
                                secgreenIcon: '',
                                name: '活动海报',
                                isSubShow: false,
                                router:'activityposter',
                                thirditems: []
                            },
                             {
                                title: '新人引导页',
                                secTitlte: '',
                                isdelete: false,
                                secgreyIcon: '',
                                secgreenIcon: '',
                                name: '新人引导页',
                                isSubShow: false,
                                router:'guidebackground',
                                thirditems: []
                            }

                        ]
                    },
                      {
                        name: '社区管理',
                        greyIcon: 'iconshequdongtaiicon iconfont fontIcongrey',
                        greenIcon: 'iconshequdongtaiicon iconfont fontIconwhite',
                        isSubShow: false,
                        showIcon: false,
                        isShow: false,
                        isdelete: false,
                        subItems: [
                            {
                                title: '帖子管理',
                                secTitlte: '',
                                isdelete: false,
                                secgreyIcon: '',
                                secgreenIcon: '',
                                name: '帖子管理',
                                isSubShow: false,
                                router:'dynamicmanage',
                                thirditems: []
                            },
                            {
                                title: '话题管理',
                                secTitlte: '',
                                isdelete: false,
                                secgreyIcon: '',
                                secgreenIcon: '',
                                name: '话题管理',
                                isSubShow: false,
                                router:'topicmanage',
                                thirditems: []
                            },
                            {
                                title: '圈子管理',
                                secTitlte: '',
                                isdelete: false,
                                secgreyIcon: '',
                                secgreenIcon: '',
                                name: '圈子管理',
                                isSubShow: false,
                                router:'roundmanage',
                                thirditems: []
                            },
                             {
                                title: '发布者管理',
                                secTitlte: '',
                                isdelete: false,
                                secgreyIcon: '',
                                secgreenIcon: '',
                                name: '发布者管理',
                                isSubShow: false,
                                router:'publisherlist',
                                thirditems: []
                            },
                            {
                                title: '消息通知',
                                secTitlte: '',
                                isdelete: false,
                                secgreyIcon: '',
                                secgreenIcon: '',
                                name: '消息通知',
                                isSubShow: false,
                                router:'messageNotification',
                                thirditems: []
                            }
                        ]
                    },
                     {
                        name: '设置',
                        greyIcon: 'iconshezhi iconfont fontIcongrey',
                        greenIcon: 'iconshezhi iconfont fontIconwhite',
                        isSubShow: false,
                        showIcon: false,
                        isShow: false,
                        isdelete: false,
                        subItems: [
                            {
                                title: '基础信息',
                                secTitlte: '',
                                isdelete: false,
                                secgreyIcon: '',
                                secgreenIcon: '',
                                name: '基础信息',
                                isSubShow: false,
                                router:'baseInfo',
                                thirditems: []
                            }
                        ]
                    },
            /*        {
                        name: '统计数据',
                        greyIcon: 'el-icon-picture iconfont fontIcongrey',
                        greenIcon: 'el-icon-picture iconfont fontIconwhite',
                        isSubShow: false,
                        showIcon: false,
                        isShow: false,
                        isdelete: false,
                        subItems: [

                        ]
                    },*/
                ],
                hasChannel: '',
                hasCommodity: '',
                hasProductManage: '',
                hasProductpromotion: '',
                haschannelordergroup:'',
                haschannelorderpersonal: '',
                hasCustomerauthentication: '',
                isShowLogo: false,
                hasGeneralView: ''
            }
        },
        created() {
            this.url = window.location.href;
            this.changeRouter();
            this.userInfo = JSON.parse(localStorage.getItem('user'));
            if(this.userInfo){
                this.userType = this.userInfo.userType;
                // if(this.userType == 2){
                //     this.items[5].isdelete = true
                // }
            }
            var params = JSON.parse(localStorage.getItem('klparam'));
            if(params){
                if(params.index == 0){
                    this.isShowLogo = false;
                }
                if(params.from == 'parent'){
                    for(let i in this.items){
                        if(params.index != i){
                            this.items[i].isSubShow = false;
                            this.items[i].showIcon = false;
                        }else{
                            this.items[i].isSubShow = true;
                            this.items[i].showIcon = true;
                            for(let j in this.items[i].subItems){
                                this.items[i].subItems[j].isSubShow = false;
                                if(params.childindex == j){
                                    this.items[i].subItems[j].isSubShow = true;
                                }
                            }
                        }
                    }
                }
            }
              if(!params){
                  for(var i = 0;i < this.items.length;i++){
                      if(this.items[i].name != '概况'){
                          if(this.items[i].isdelete == false){
                              this.items[i].isSubShow = true;
                              this.items[i].showIcon = true;
                              for(let ite of this.items[i].subItems){
                                  if(ite.isdelete == false){
                                      ite.isSubShow = true;
                                      break;
                                  }
                              }
                              return;
                          }
                      }
                  }
              }

        },
        mounted() {
            $('html , body').animate({scrollTop: 0},100);
        },
        methods: {
            changeRouter(){
                for(var i = 0;i < this.items.length;i++){
                    for(var j = 0;j < this.items[i].subItems.length;j++){
                        if(this.items[i].subItems[j].thirditems.length == 0){
                            if(this.url.indexOf(this.items[i].subItems[j].router)>0){
                                var obj = {
                                    index: i,
                                    from: 'parent',
                                    childindex: j,
                                    thirdIndex: '',
                                };;
                                localStorage.setItem('klparam',JSON.stringify(obj))
                            }
                        }else{
                            for(var k = 0;k < this.items[i].subItems[j].thirditems.length;k++){
                                if(this.url.indexOf(this.items[i].subItems[j].thirditems[k].router)>0){
                                    var obj = {
                                        index: i,
                                        from: 'parent',
                                        childindex: j,
                                        thirdIndex: k,
                                    };;
                                    localStorage.setItem('klparam',JSON.stringify(obj))
                                }
                            }
                        }
                    }
                }
            },
            judgeArr(arr,value){
                var num = 0;
                for(var i=0;i<arr.length;i++){
                    if(arr[i] == value){
                    }else{
                        num++;
                    }
                }
                return num
            },
            enterStyle(item){
                if(!item.showIcon){
                    item.showIcon = true;
                }
                item.isShow = true;
            },
            leaveStyle(item){
                if(!item.isSubShow){
                    item.showIcon = false;
                }
                item.isShow = false;
            },
            showToggle (item,index) {//第一个侧边栏
                if(item.name != '概况'){
                    var obj = {
                        index: index,
                        from: 'parent',
                        childindex: '',
                        thirdIndex: '',
                    };;
                    localStorage.setItem('klparam',JSON.stringify(obj));;
                    for(let ite of item.subItems){
                        if(ite.isdelete == false){
                            this.$router.push({ name: ite.router});;
                            return;
                        }
                    }

                }
                if(item.name == '概况'){
                    var obj = {
                        index: 0,
                        from: 'parent',
                        childindex: '',
                        thirdIndex: '',
                    };;
                    localStorage.setItem('klparam',JSON.stringify(obj));;
                    this.$router.push({ name: 'home'})
                }
            },
            jumpRouter(subItems,ite,index,indexsecond){
                var obj = {
                    index: index,
                    from: 'parent',
                    childindex: indexsecond,
                    thirdIndex: '',
                };;
                for(let i in subItems){
                    subItems[i].isSubShow = false;
                }
                ite.isSubShow = true;
                localStorage.setItem('klparam',JSON.stringify(obj));
                this.$router.push({'name':ite.router});;
                this.$forceUpdate()
            }
        }
    }</script>
