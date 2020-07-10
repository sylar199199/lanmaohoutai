import Vue from 'vue'
import Router from 'vue-router'
import salesspecification from '@/views/commodity/salesspecification'//销售规格
import commoditymanage from '@/views/commodity/commoditymanage'//商品管理
import editorcommondity from '@/views/commodity/editorcommondity'//编辑，新增产品
import commoditydetail from '@/views/commodity/commoditydetail'//商品详情
import accountpermission from '@/views/account/accountpermission'//账号权限
import adressset from '@/views/baseset/adressset'//地址设置
import baseInfo from '@/views/baseset/baseInfo'//基础信息
import baseinfoDetail from '@/views/baseset/baseinfoDetail'//基础信息


import questionmanage  from '@/views/helpcenter/questionmanage'//问答管理
import customerlist from '@/views/customer/customerlist'//客户列表
import customerdetail from '@/views/customer/customerdetail'///客户详情
import orderlist from '@/views/order/orderlist'//订单列表
import orderDetail from '@/views/order/orderDetail' //订单详情
import revenuequery from '@/views/order/revenuequery'//订单列表
import integralmanage from '@/views/integralmanage/integralmanage'//积分管理
import integraldetail from '@/views/integralmanage/integraldetail'//积分明细
import limitactiveList from '@/views/marketing/limitactiveList'//限时活动列表
import addlimitactive from '@/views/marketing/addlimitactive'//新建限时活动
import clockdaybackground from '@/views/templatemanage/clockdaybackground'//白天打卡背景
import clocknightbackground from '@/views/templatemanage/clocknightbackground'//晚上打卡背景
import posterbackground from '@/views/templatemanage/posterbackground'//专属海报背景

import activityposter from '@/views/templatemanage/activityposter'//活动海报
import guidebackground from '@/views/templatemanage/guidebackground'//引导页


import dynamicmanage from '@/views/communitymanage/dynamicmanage'//动态管理
import topicmanage from '@/views/communitymanage/topicmanage'//话题管理
import publisherlist from '@/views/communitymanage/publisherlist'//发布者查询
import visitlist from '@/views/customer/visitlist'//访客查询
import dynamicDetail from '@/views/communitymanage/dynamicDetail'//动态详情
import insurancelist from '@/views/insurance/insurancelist'//赠险活动列表
import addinsurance from '@/views/insurance/addinsurance'//新建赠险活动
import insuranceOrderlist from '@/views/order/insuranceOrderlist'//赠险订单
import insuranceOrderdetail from '@/views/order/insuranceOrderdetail'//赠险订单详情

import home from '@/views/home/home'
import login from '@/views/login'
import vueEditor from '@/views/vueEditor'
Vue.use(Router);;
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/order/insuranceOrderlist',
            name: 'insuranceOrderlist',
            component: insuranceOrderlist
        },
        {
            path: '/order/insuranceOrderdetail',
            name: 'insuranceOrderdetail',
            component: insuranceOrderdetail
        },
        {
            path: '/insurance/insurancelist',
            name: 'insurancelist',
            component: insurancelist
        },
        {
            path: '/insurance/addinsurance',
            name: 'addinsurance',
            component: addinsurance
        },
        {
            path: '/home/home',
            name: 'home',
            component: home
        },
        {
            path: '/templatemanage/activityposter',
            name: 'activityposter',
            component: activityposter
        },
        
        {
            path: '/customer/visitlist',
            name: 'visitlist',
            component: visitlist
        },
        {
            path: '/templatemanage/guidebackground',
            name: 'guidebackground',
            component: guidebackground
        },
        {
            path: '/order/revenuequery',
            name: 'revenuequery',
            component: revenuequery
        },
        {
            path: '/communitymanage/dynamicmanage',
            name: 'dynamicmanage',
            component: dynamicmanage
        },
        {
            path: '/communitymanage/dynamicDetail',
            name: 'dynamicDetail',
            component: dynamicDetail
        },
        {
            path: '/customer/visitlist',
            name: 'visitlist',
            component: visitlist
        },
        {
            path: '/communitymanage/topicmanage',
            name: 'topicmanage',
            component: topicmanage
        },
        {
            path: '/communitymanage/publisherlist',
            name: 'publisherlist',
            component: publisherlist
        },
        {
            path: '/commodity/salesspecification',
            name: 'salesspecification',
            component: salesspecification
        },
        
        {
            path: '/templatemanage/posterbackground',
            name: 'posterbackground',
            component: posterbackground
        },
        {
            path: '/templatemanage/clockdaybackground',
            name: 'clockdaybackground',
            component: clockdaybackground
        },
        {
            path: '/templatemanage/clocknightbackground',
            name: 'clocknightbackground',
            component: clocknightbackground
        },
        {
            path: '/integralmanage/integralmanage',
            name: 'integralmanage',
            component: integralmanage
        },
        {
            path: '/integralmanage/integraldetail',
            name: 'integraldetail',
            component: integraldetail
        },
        {
            path: '/marketing/limitactiveList',
            name: 'limitactiveList',
            component: limitactiveList
        }, {
            path: '/marketing/addlimitactive',
            name: 'addlimitactive',
            component: addlimitactive
        },
        {
            path: '/commodity/commoditymanage',
            name: 'commoditymanage',
            component: commoditymanage
        },
        {
            path:'/commodity/editorcommondity',
            name: 'editorcommondity',
            component: editorcommondity
        },
        {
            path:'/commodity/commoditydetail',
            name: 'commoditydetail',
            component: commoditydetail
        },
        {
            path:'/baseset/baseinfoDetail',
            name: 'baseinfoDetail',
            component: baseinfoDetail
        },
        {
            path:'/baseset/baseInfo',
            name: 'baseInfo',
            component: baseInfo
        },
        {
            path:'/baseset/adressset',
            name: 'adressset',
            component: adressset
        },
        {
            path:'/helpcenter/questionmanage',
            name: 'questionmanage',
            component: questionmanage
        },
        {
            path:'/customer/customerlist',
            name: 'customerlist',
            component: customerlist
        },
        {
            path: '/customer/customerdetail',
            name: 'customerdetail',
            component: customerdetail
        },
        {
            path:'/order/orderlist',
            name: 'orderlist',
            component: orderlist
        },
        {
            path:'/order/orderDetail',
            name: 'orderDetail',
            component: orderDetail
        },
        {
            path:'/account/accountpermission',
            name: 'accountpermission',
            component: accountpermission
        },
      
      
        {
            path: '/',
            name: 'login',
            component: login
        },
        {
            path:'/vueEditor',
            name: 'vueEditor',
            component: vueEditor
        }
  ]
})
