import Vue from 'vue'
// import Vuex from 'vuex'
import axios from 'axios'
import Global from './global'
import Util from './util'
import Store from '../vuex/index'
import {Message} from 'element-ui';

axios.interceptors.request.use(config => {
  Store.commit("setIsLoading", true);
  return config
}, error => {
  return Promise.reject(error)
});

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
});

function errorState(response) {
  Store.commit("setIsLoading", false);
  console.log(response.status);
  ;
  // 如果http状态码正常，则直接返回数据
  //if(response && (response.status === 200 || response.status === 304 || response.status === 400)) {
  if (response.status == '200') {

  } else {
    Message.error('请求超时，请稍后再试!')
  }

}

function successState(response) {
  Store.commit("setIsLoading", false);
  //统一判断后端返回的错误码
  if (response.status == '200') {
    if (response.data.errorCode == 0) {
    } else if (response.data.errorCode == -1) {
      // Message.error('服务端错误，请联系管理员');
    } else if (response.data.errorCode == 1) {
      // Message.error(response.data.message);
    } else if (response.data.errorCode == 5001) {
      window.localStorage.clear();
      // Util.localStorageUtil.clear('leadsInfo');
      // localStorage.removeItem('user');
      // localStorage.removeItem('param');
      // localStorage.removeItem('contentnews');
      // localStorage.removeItem('type');
      // localStorage.removeItem('access_token');
      window.location.href = document.location.protocol + '//' + window.location.host + '/'
    } else {
      Message.error(response.data.message)
    }
  } else {
    Message.error('网络请求错误');
  }
}

const getResource = (opts, data) => {
  var tokenVal;
  if (Util.localStorageUtil.get('access_token')) {
    tokenVal = Util.localStorageUtil.get('access_token');
  }
  let contentType = 'application/json; charset=UTF-8';
  if (opts.url.indexOf('/xunan/admin/leads/import') >= 0) {
    contentType = 'multipart/form-data'
  }
  let httpDefaultOpts = { //http默认配置
    method: opts.method,
    baseURL: Global.requestUrl,
    url: opts.url,
    timeout: 200000,
    params: data,
    data: data,
    headers: opts.method == 'get' ? {
      'X-Requested-With': 'XMLHttpRequest',
      "Accept": "application/json",
      "Content-Type": "application/json; charset=UTF-8",
      'token': tokenVal
    } : {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': contentType,
      'token': tokenVal
    }
  };

  if (opts.method == 'get') {
    delete httpDefaultOpts.data
  } else {
    delete httpDefaultOpts.params
  }

  let promise = new Promise(function (resolve, reject) {
    axios(httpDefaultOpts).then(
      (response) => {
        successState(response);
        resolve(response.data)
      }
    ).catch(
      (error) => {
        errorState(error);
        reject(error)
      }
    )

  });
  return promise
};

export default {
  login() {
    return {
      loginSms(data) {
        // 登录
        return getResource({
          url: '/lanmao/adnin/account/login',
          method: 'post'
        }, data)
      },
      smsCode(data) {
        return getResource({
          url: '/lanmao/adnin/account/login/code',
          method: 'post'
        }, data)
      },
      loginOut(data) {
        // 登出
        return getResource({
          url: '/lanmao/adnin/account/logout',
          method: 'post'
        }, data)
      },
      changePassword(data) {
        // 重置密码
        return getResource({
          url: '/kl-store/admin/account/password',
          method: 'post'
        }, data)
      },
      accountInfo(data) {
        return getResource({
          url: '/xunan/admin/account/info',
          method: 'GET'
        }, data)
      },
      editorInfo(data) {
        return getResource({
          url: '/xunan/admin/account/info',
          method: 'post'
        }, data)
      }
    }

  },
  channel() {
    return {
      getChannelDetai(data, key) {
        //获取渠道列表
        return getResource({
          url: `/kl-store/admin/channel/${key}`,
          method: 'get'
        }, data)
      },
      getChannel(data) {
        //获取渠道列表
        return getResource({
          url: '/kl-store/admin/channel',
          method: 'get'
        }, data)
      },
      editorChannel(data, key) {
        return getResource({
          url: `/kl-store/admin/channel/${key}`,
          method: 'post'
        }, data)
      }
    }

  },
  community() {
    return {
      deletecommunity(data, key) {
        //删除动态
        return getResource({
          url: `/lanmao/admin/community/post/batch/delete`,
          method: 'post'
        }, data)
      },
      cancelebanPost(data, key) {
        //取消禁言
        return getResource({
          url: `/lanmao/admin/community/user/banPost/cancel?userId=${key}`,
          method: 'post'
        }, data)
      },
      reportbatchcommunity(data, key) {
        //批量举报动态
        return getResource({
          url: `/lanmao/admin/community/post/batch/report`,
          method: 'post'
        }, data)
      },
      getcommunityList(data, key) {
        //获取动态列表
        return getResource({
          url: `/lanmao/admin/community/post/query`,
          method: 'post'
        }, data)
      },
      getcommunityDetail(data, key) {
        //获取动态详情
        return getResource({
          url: `/lanmao/admin/community/post/${key}`,
          method: 'get'
        }, data)
      },
      reportcommunity(data, key) {
        //举报动态
        return getResource({
          url: `lanmao/admin/community/post/${key}/report`,
          method: 'post'
        }, data)
      },
      cancelreportcommunity(data, key) {
        //撤销举报动态
        return getResource({
          url: `lanmao/admin/community/post/${key}/report/cancel`,
          method: 'post'
        }, data)
      },
      topcommunity(data, key) {
        //置顶动态
        return getResource({
          url: `lanmao/admin/community/post/${key}/top`,
          method: 'post'
        }, data)
      },
      canceltopcommunity(data, key) {
        //取消置顶动态
        return getResource({
          url: `lanmao/admin/community/post/${key}/top/cancel`,
          method: 'post'
        }, data)
      },
      gettopicList(data, key) {
        //获取话题列表
        return getResource({
          url: `/lanmao/admin/community/topic`,
          method: 'get'
        }, data)
      },
      getpublisher(data, key) {
        //获取发布者列表
        return getResource({
          url: `/lanmao/admin/community/user/query`,
          method: 'post'
        }, data)
      },
    }
  },
  toppic() {
    return {
      gettopicList(data, key) {
        //获取话题列表
        return getResource({
          url: `/lanmao/admin/community/topic/query`,
          method: 'post'
        }, data)
      },
      editorTopic(data, key) {
        //编辑话题
        return getResource({
          url: `/lanmao/admin/community/topic/${key}`,
          method: 'post'
        }, data)
      },
      //删除话题
      deleteTopic(data, key) {
        return getResource({
          url: `/lanmao/admin/community/topic/${key}`,
          method: 'DELETE'
        }, data)
      },
      addTopic(data) {
        //添加话题
        return getResource({
          url: `/lanmao/admin/community/topic`,
          method: 'post'
        }, data)
      },

    }
  },
  round(){
    return {
      getcircleList(data, key) {
        //获取圈子列表
        return getResource({
          url: `/lanmao/admin/community/circle/query`,
          method: 'post'
        }, data)
      },
      addCircle(data, key) {
        //添加圈子
        return getResource({
          url: `/lanmao/admin/community/circle`,
          method: 'post'
        }, data)
      },
      deleteCircle(data, key) {
        //删除圈子
        return getResource({
          url: `/lanmao/admin/community/circle/${key}`,
          method: 'DELETE'
        }, data)
      },

      editorRound(data, key) {
        //修改圈子
        return getResource({
          url: `/lanmao/admin/community/circle/${key}`,
          method: 'post'
        }, data)
      },
      sortCircle(data) {
        //圈子排序
        return getResource({
          url: `/lanmao/admin/community/circle/sort`,
          method: 'post'
        }, data)
      },
      getposterList(data) {
        //圈子关联海报列表
        return getResource({
          url: `/lanmao/admin/community/circle/poster/query`,
          method: 'post'
        }, data)
      },
      addTopicPoster(data) {
        //新增圈子关联海报
        return getResource({
          url: `/lanmao/admin/community/circle/poster`,
          method: 'post'
        }, data)
      },
      editorPoster(data,key) {
        //修改圈子关联海报
        return getResource({
          url: `/lanmao/admin/community/circle/poster/${key}`,
          method: 'post'
        }, data)
      },
      posterCircle(data) {
        //关联海报排序
        return getResource({
          url: `/lanmao/admin/community/circle/poster/sort`,
          method: 'post'
        }, data)
      },
      deletePoster(data,key) {
        //删除圈子关联海报
        return getResource({
          url: `/lanmao/admin/community/circle/poster/${key}`,
          method: 'DELETE'
        }, data)
      },
      gettopicData(data) {
        //获取圈子关联话题列表
        return getResource({
          url: `/lanmao/admin/community/topic/query`,
          method: 'post'
        }, data)
      },
    }
  },
  // 消息通知相关接口
  notificationSe(){
    return {
      addMesNotification(data, key) {
        // 新增消息通知
        return getResource({
          url: `/lanmao/admin/mp/notification`,
          method: 'post'
        }, data)
      },
      editMesNotification(data, key) {
        // 修改消息通知
        return getResource({
          url: `/lanmao/admin/mp/notification/${key}`,
          method: 'put'
        }, data)
      },
      deleteNotificationSe(data, key) {
        // 删除消息通知
        return getResource({
          url: `/lanmao/admin/mp/notification/${key}`,
          method: 'DELETE'
        }, data)
      },
      getNotification(data, page, size) {
        // 获取消息通知列表
        return getResource({
          url: `/lanmao/admin/mp/notification/query?page=${page}&size=${size}`,
          method: 'get'
        }, data)
      },
      getNotificationTopic(data){
        // 获取通知列表
        return getResource({
          url: `/lanmao/admin/mp/notification/topics`,
          method: 'get'
        },data)
      },
      getNotificationDetails(data,key){
        // 获取通知详情
        return getResource({
          url: `/lanmao/admin/mp/notification/${key}`,
          method: 'get'
        },data)
      }
    }
  },
  // 行为分析接口
  dataStatistics(){
    return{
       // 获取echarts数据
      getAllanalysist(data, page,size,startTime,endTime) {
        return getResource({
          url: `/lanmao/admin/dataAnalyse/allBrowseBehaviour?page=${page}&size=${size}&startTime=${startTime}&endTime=${endTime}`,
          method: 'get'
        }, data)
      },
      // 获取12个月的每个月的累计数据接口
      getMountanalysist(data, page,size,startTime,endTime){
        return getResource({
          url: `/lanmao/admin/dataAnalyse/monthBrowseBehaviour?page=${page}&size=${size}&startTime=${startTime}&endTime=${endTime}`,
          method: 'get'
        }, data)
      },
      // 获取table数据
      getanalysist(data, page,size,startTime,endTime) {
        return getResource({
          url: `/lanmao/admin/dataAnalyse/browseBehaviour?page=${page}&size=${size}&startTime=${startTime}&endTime=${endTime}`,
          method: 'get'
        }, data)
      },
      // 导出数据
      statisticsDaochu(data, page,size,startTime,endTime) {
        return getResource({
          url: `/lanmao/admin/dataAnalyse/exportBrowseBehaviour?page=${page}&size=${size}&startTime=${startTime}&endTime=${endTime}`,
          method: 'get'
        }, data)
      }
    }
  },
  banner() {
    return {
      addBanner(data, key) {
        //添加
        return getResource({
          url: `/kl-store/admin/banner`,
          method: 'post'
        }, data)
      },
      getBanner(data) {
        //获取banner列表
        return getResource({
          url: '/kl-store/admin/banner',
          method: 'get'
        }, data)
      },
      editorBanner(data, key) {
        //编辑
        return getResource({
          url: `/kl-store/admin/banner/${key}`,
          method: 'post'
        }, data)
      },
      sortBanner(data, key) {
        //排序
        return getResource({
          url: `/kl-store/admin/banner/sort`,
          method: 'post'
        }, data)
      },
      deleteBanner(data, key) {
        //删除
        return getResource({
          url: `/kl-store/admin/banner/${key}`,
          method: 'DELETE'
        }, data)
      },

    }

  },
  redeem() {
    return {
      getRedeemList(data, key) {
        //获取活动列表
        return getResource({
          url: `/lanmao/admin/redeem/query`,
          method: 'post'
        }, data)
      },
      recsortredeem(data, key) {
        //排序活动列表
        return getResource({
          url: `/lanmao/admin/redeem/sort`,
          method: 'post'
        }, data)
      },
      redeemList(data, key) {
        //活动商品列表
        return getResource({
          url: `/lanmao/admin/redeem/${key}`,
          method: 'get'
        }, data)
      },
      editorredeemGoods(data, key) {
        //编辑活动
        return getResource({
          url: `/lanmao/admin/redeem/${key}`,
          method: 'post'
        }, data)
      },
      addredeemGoods(data, key) {
        //添加活动商品
        return getResource({
          url: `/lanmao/admin/redeem`,
          method: 'post'
        }, data)
      },
      disableGoods(data, key) {
        //失效活动
        return getResource({
          url: `/lanmao/admin/redeem/${key}/disable`,
          method: 'post'
        }, data)
      },
      enableGoods(data, key) {
        //生效活动
        return getResource({
          url: `/lanmao/admin/redeem/${key}/enable`,
          method: 'post'
        }, data)
      },
      deleteActive(data, key) {
        //删除活动
        return getResource({
          url: `/lanmao/admin/redeem/${key}`,
          method: 'DELETE'
        }, data)
      },
    }
  },
  background() {
    return {
      getbackgroundList(data, key) {
        //获取背景列表
        return getResource({
          url: `/lanmao/admin/background`,
          method: 'get'
        }, data)
      },
      addbackground(data, key) {
        //添加背景
        return getResource({
          url: `/lanmao/admin/background`,
          method: 'post'
        }, data)
      },
      deletebackground(data, key) {
        //删除背景
        return getResource({
          url: `lanmao/admin/background/${key}`,
          method: 'DELETE'
        }, data)
      },

    }
  },
  guide() {
    return {
      //获取引导页列表
      getguideList(data, key) {
        return getResource({
          url: `/lanmao/admin/guide/reg/img`,
          method: 'get'
        }, data)
      },
      addguidepost(data, key) {
        //添加引导页
        return getResource({
          url: `lanmao/admin/guide/reg/img`,
          method: 'post'
        }, data)
      },
      deleteguidepost(data, key) {
        //删除引导页
        return getResource({
          url: `lanmao/admin/guide/reg/img/${key}`,
          method: 'DELETE'
        }, data)
      },
      enableguidepost(data, key) {
        //启用引导页
        return getResource({
          url: `lanmao/admin/guide/reg/img/${key}/enable`,
          method: 'post'
        }, data)
      },
    }
  },
  poster() {
    return {
      getactivetyposterList(data, key) {
        //获取活动海报列表
        return getResource({
          url: `/lanmao/admin/community/activity/poster`,
          method: 'get'
        }, data)
      },
      sortactivitypost(data, key) {
        //排列海报
        return getResource({
          url: `/lanmao/admin/community/activity/poster/sort`,
          method: 'post'
        }, data)
      },
      addactivitypost(data, key) {
        //添加活动海报
        return getResource({
          url: `lanmao/admin/community/activity/poster`,
          method: 'post'
        }, data)
      },
      getactivitypostinfo(data, key) {
        //获取活动海报详情
        return getResource({
          url: `lanmao/admin/community/activity/poster/${key}`,
          method: 'get'
        }, data)
      },
      editoractivitypost(data, key) {
        //编辑活动海报
        return getResource({
          url: `lanmao/admin/community/activity/poster/${key}`,
          method: 'post'
        }, data)
      },
      deleteactivitypost(data, key) {
        //删除活动海报
        return getResource({
          url: `lanmao/admin/community/activity/poster//${key}`,
          method: 'DELETE'
        }, data)
      },


      getposterList(data, key) {
        //获取海报列表
        return getResource({
          url: `/lanmao/admin/poster`,
          method: 'get'
        }, data)
      },
      addpost(data, key) {
        //添加海报
        return getResource({
          url: `/lanmao/admin/poster`,
          method: 'post'
        }, data)
      },
      deletepost(data, key) {
        //删除海报
        return getResource({
          url: `lanmao/admin/poster/${key}`,
          method: 'DELETE'
        }, data)
      },
      sortpost(data, key) {
        //排列海报
        return getResource({
          url: `/lanmao/admin/poster/sort`,
          method: 'post'
        }, data)
      },


    }
  },
  goods() {
    return {
      getGoodsList(data, key) {
        //获取商品列表
        return getResource({
          url: `/lanmao/admin/goods/query`,
          method: 'post'
        }, data)
      },
      copyGoods(data, key) {
        //复制商品
        return getResource({
          url: `/lanmao/admin/goods/${key}/copy`,
          method: 'post'
        }, data)
      },
      onshelfGoods(data, key) {
        //上架商品
        return getResource({
          url: `/lanmao/admin/goods/${key}/onshelf`,
          method: 'post'
        }, data)
      },
      offShelfGoods(data, key) {
        //下架商品
        return getResource({
          url: `/lanmao/admin/goods/offshelf`,
          method: 'post'
        }, data)
      },
      deleteGoods(data, key) {
        //删除商品
        return getResource({
          url: `/lanmao/admin/goods/${key}`,
          method: 'DELETE'
        }, data)
      },
      goodsPlan(data, key) {
        //商品规格查询
        return getResource({
          url: `/kl-store/admin/goods/plan/query`,
          method: 'post'
        }, data)
      },
      editorGoods(data, key) {
        //编辑商品
        return getResource({
          url: `/lanmao/admin/goods/${key}`,
          method: 'post'
        }, data)
      },
      getGoods(data, key) {
        //获取商品
        return getResource({
          url: `/lanmao/admin/goods/${key}`,
          method: 'get'
        }, data)
      },
      addGoods(data, key) {
        //添加商品
        return getResource({
          url: `/lanmao/admin/goods`,
          method: 'post'
        }, data)
      },
      getrecGoods(data, key) {
        //推荐商品列表
        return getResource({
          url: `/kl-store/admin/goods/rec/query`,
          method: 'post'
        }, data)
      },
      addrecGoods(data, key) {
        //添加推荐商品
        return getResource({
          url: `/kl-store/admin/goods/rec`,
          method: 'post'
        }, data)
      },
      recsortGoods(data, key) {
        //排列推荐商品
        return getResource({
          url: `/kl-store/admin/goods/rec/sort`,
          method: 'post'
        }, data)
      },
      deleterecGoods(data, key) {
        //删除推荐商品
        return getResource({
          url: `/kl-store/admin/goods/rec`,
          method: 'DELETE'
        }, data)
      },

    }
  },
  account() {
    return {
      getuserList(data, key) {
        //获取账号列表
        return getResource({
          url: `/kl-store/admin/user/query`,
          method: 'post'
        }, data)
      },
      addUser(data) {
        //添加账号
        return getResource({
          url: `/kl-store/admin/user/add`,
          method: 'post'
        }, data)
      },
      resetPassword(data, key) {
        //重置密码
        return getResource({
          url: `/kl-store/admin/user/${key}/reset/password`,
          method: 'post'
        }, data)
      },
      enableUser(data, key) {
        //启用账号
        return getResource({
          url: `/kl-store/admin/user/${key}/enable`,
          method: 'post'
        }, data)
      },
      disableUser(data, key) {
        //禁用账号
        return getResource({
          url: `/kl-store/admin/user/${key}/disable`,
          method: 'post'
        }, data)
      },
    }
  },
  adress() {
    return {
      setAdress(data, key) {
        //修改地址
        return getResource({
          url: `/kl-store/admin/address`,
          method: 'post'
        }, data)
      },
      getAdress(data, key) {
        //获取地址
        return getResource({
          url: `/kl-store/admin/address?type=${key}`,
          method: 'get'
        }, data)
      },
    }
  },
  help() {
    return {
      categoryList(data, key) {
        //分类列表
        return getResource({
          url: `/kl-store/admin/help/category`,
          method: 'get'
        }, data)
      },
      addCategory(data, key) {
        //添加分类
        return getResource({
          url: `/kl-store/admin/help/category`,
          method: 'post'
        }, data)
      },
      sortCategory(data, key) {
        //排列分类
        return getResource({
          url: `/kl-store/admin/help/category/sort`,
          method: 'post'
        }, data)
      },
      getCategory(data, key) {
        //获取分类
        return getResource({
          url: `/kl-store/admin/help/category/${key}`,
          method: 'get'
        }, data)
      },
      editorCategory(data, key) {
        //修改分类
        return getResource({
          url: `/kl-store/admin/help/category/${key}`,
          method: 'post'
        }, data)
      },
      deleteCategory(data, key) {
        //删除分类
        return getResource({
          url: `/kl-store/admin/help/category/${key}`,
          method: 'DELETE'
        }, data)
      },
      categoryItemlist(data, key) {
        //项目列表
        return getResource({
          url: `/kl-store/admin/help/item?categoryId=${key}`,
          method: 'get'
        }, data)
      },
      addcategoryItem(data, key) {
        //添加项目
        return getResource({
          url: `/kl-store/admin/help/item`,
          method: 'post'
        }, data)
      },
      getcategoryItem(data, key) {
        //获取项目
        return getResource({
          url: `/kl-store/admin/help/item/${key}`,
          method: 'get'
        }, data)
      },
      editorCategoryitem(data, key) {
        //修改项目
        return getResource({
          url: `/kl-store/admin/help/item/${key}`,
          method: 'post'
        }, data)
      },
      deleteCategoryitem(data, key) {
        //删除项目
        return getResource({
          url: `/kl-store/admin/help/item/${key}`,
          method: 'DELETE'
        }, data)
      },
    }
  },
  order() {
    return {
      getincome: function (data, key) {//获取收入列表
        return getResource({
          url: `/lanmao/admin/order/income/query`,
          method: 'post'
        }, data)
      },
      incomeexport: function (data, key) {//导出收入列表
        return getResource({
          url: `/lanmao/admin/order/income/export`,
          method: 'post'
        }, data)
      },

      getOrderdetail: function (data, key) {//获取订单详情
        return getResource({
          url: `/lanmao/admin/order/${key}`,
          method: 'get'
        }, data)
      },
      getremarkList: function (data, key) {//获取订单备注列表
        return getResource({
          url: `/kl-store/admin/order/${key}/remark`,
          method: 'get'
        }, data)
      },
      addremark: function (data, key) {//添加备注
        return getResource({
          url: `/kl-store/admin/order/${key}/remark`,
          method: 'post'
        }, data)
      },
      agreeAfs: function (data, key) {//同意退货
        return getResource({
          url: `/kl-store/admin/order/afs/agree`,
          method: 'post'
        }, data)
      },
      agreerefund: function (data, key) {//同意退款
        return getResource({
          url: `/kl-store/admin/order/afs/refund/agree`,
          method: 'POST'
        }, data)
      },
      refuserefund: function (data, key) {//拒绝退款
        return getResource({
          url: `/kl-store/admin/order/afs/refund/refuse`,
          method: 'POST'
        }, data)
      },
      refuseafs: function (data, key) {//拒绝退货
        return getResource({
          url: `kl-store/admin/order/afs/refuse`,
          method: 'POST'
        }, data)
      },
      orderDaochu: function (data, key) {//订单daochu
        return getResource({
          url: `lanmao/admin/order/export`,
          method: 'POST'
        }, data)
      },
      orderList: function (data, key) {//订单查询
        return getResource({
          url: `lanmao/admin/order/query`,
          method: 'POST'
        }, data)
      },
      orderShip: function (data, key) {//发货
        return getResource({
          url: `/lanmao/admin/order/ship`,
          method: 'POST'
        }, data)
      },
      resetorderShip: function (data, key) {//编辑发货
        return getResource({
          url: `/kl-store/admin/order/ship`,
          method: 'put'
        }, data)
      }
    }
  },
  protocol() {
    return {
      protocolList: function (data, key) {//协议列表
        return getResource({
          url: `/lanmao//admin/protocol`,
          method: 'get'
        }, data)
      },
      protocolDetail: function (data, key) {//协议详情
        return getResource({
          url: `/lanmao//admin/protocol/${key}`,
          method: 'get'
        }, data)
      },
      editorprotocol: function (data, key) {//编辑协议详情
        return getResource({
          url: `/lanmao//admin/protocol/${key}`,
          method: 'post'
        }, data)
      },
    }
  },
  customer() {
    return {
      customerdaochu: function (data, key) {//客户列表daochu
        return getResource({
          url: `/lanmao/admin/customer/export`,
          method: 'post'
        }, data)
      },
      getcustomer: function (data, key) {//客户列表
        return getResource({
          url: `/lanmao/admin/customer/query`,
          method: 'post'
        }, data)
      },
      getcustomerDetail: function (data, key) {//客户详情
        return getResource({
          url: `/lanmao/admin/customer/${key}`,
          method: 'get'
        }, data)
      },
      getvisitor: function (data, key) {//访客户列表
        return getResource({
          url: `/lanmao/admin/customer/visitor/query`,
          method: 'post'
        }, data)
      },
      daochuvisitor: function (data, key) {//导出客户
        return getResource({
          url: `/lanmao/admin/customer/visitor/export`,
          method: 'post'
        }, data)
      },
      deleteuser: function (data, key) {//删除客户
        return getResource({
          url: `/lanmao/admin/customer/${key}`,
          method: 'DELETE'
        }, data)
      },

    }
  },
  points() {
    return {
      getpoints: function (data, key) {//积分列表
        return getResource({
          url: `/lanmao/admin/points/rule`,
          method: 'get'
        }, data)
      },
      getlogList: function (data, key) {//日志查询
        return getResource({
          url: `/lanmao/admin/points/log/query`,
          method: 'POST'
        }, data)
      },
      getpointsstats: function (data, key) {//积分统计
        return getResource({
          url: `/lanmao/admin/points/stats`,
          method: 'get'
        }, data)
      },

    }
  },
  home() {
    return {
      gethotsale: function (data, key) {//热销商品
        return getResource({
          url: `/kl-store/admin/home/hotsale?count=${key}`,
          method: 'get'
        }, data)
      },
      getoverview: function (data, key) {//数据概览
        return getResource({
          url: `/lanmao/admin/home`,
          method: 'get'
        }, data)
      },
      getcommunity: function (data, key) {//社区数据概览
        return getResource({
          url: `/lanmao/admin/home/community`,
          method: 'get'
        }, data)
      },
      gettodo: function (data, key) {//待办统计
        return getResource({
          url: `/kl-store/admin/home/todo`,
          method: 'get'
        }, data)
      },
    }
  },


  dashboard() {
    return {
      groupStats(data) {
        // 团单统计
        return getResource({
          url: '/xunan/admin/dashboard/order/group/stats',
          method: 'post'
        }, data)
      },
      personalStats(data) {
        // 个单统计
        return getResource({
          url: '/xunan/admin/dashboard/order/personal/stats',
          method: 'post'
        }, data)
      },
      dashboardStats(data) {
        // 客户指标
        return getResource({
          url: '/xunan/admin/dashboard/user/stats',
          method: 'post'
        }, data)
      },
      dashboardleadsStats(data) {
        // 销售指标
        return getResource({
          url: '/xunan/admin/dashboard/leads/stats',
          method: 'post'
        }, data)
      },


    }
  },

  role() {
    return {
      getRoles: function (data) {
        return getResource({
          url: '/xunan/admin/perm/role',
          method: 'get'
        }, data)
      },
      resourceTree: function (data) {
        return getResource({
          url: '/xunan/admin/perm/resource/tree',
          method: 'get'
        }, data)
      },
      getDetailrole: function (data, key) {
        return getResource({
          url: `xunan/admin/perm/role/${key}`,
          method: 'GET'
        }, data)
      },
      editorRole: function (data, key) {
        return getResource({
          url: `xunan/admin/perm/role/${key}`,
          method: 'POST'
        }, data)
      },
      addRole: function (data, key) {
        return getResource({
          url: `/xunan/admin/perm/role`,
          method: 'POST'
        }, data)
      },
      deleteRole: function (data, key) {
        return getResource({
          url: `xunan/admin/perm/role/${key}`,
          method: 'DELETE'
        }, data)
      },
    }
  },
  giftinsurance() {
    return {
      insuranceDetail: function (data, key) {//赠险详情
        return getResource({
          url: `/lanmao/admin/gift/insurance/${key}`,
          method: 'get'
        }, data)
      },
      editorinsurance: function (data, key) {//编辑活动
        return getResource({
          url: `/lanmao/admin/gift/insurance/${key}`,
          method: 'post'
        }, data)
      },
      deleteinsurance: function (data, key) {//删除活动
        return getResource({
          url: `/lanmao/admin/gift/insurance/${key}`,
          method: 'DELETE'
        }, data)
      },
      disableinsurance: function (data, key) {//失效活动
        return getResource({
          url: `/lanmao/admin/gift/insurance/${key}/disable`,
          method: 'post'
        }, data)
      },
      enableinsurance: function (data, key) {//生效活动
        return getResource({
          url: `/lanmao/admin/gift/insurance/${key}/enable`,
          method: 'post'
        }, data)
      },
      addinsurance: function (data) {//添加活动
        return getResource({
          url: `/lanmao/admin/gift/insurance/activity`,
          method: 'post'
        }, data)
      },
      getinsurance: function (data) {//查询活动
        return getResource({
          url: `/lanmao/admin/gift/insurance/activity/query`,
          method: 'post'
        }, data)
      },
      getorderinsurance: function (data) {//查询订单
        return getResource({
          url: `/lanmao/admin/gift/insurance/order/query`,
          method: 'post'
        }, data)
      },
      orderexport: function (data) {//查询订单导出
        return getResource({
          url: `/lanmao/admin/gift/insurance/order/export`,
          method: 'post'
        }, data)
      },


    }
  },
  staf() {
    return {
      getstafs: function (data) {
        return getResource({
          url: '/xunan/admin/perm/user',
          method: 'get'
        }, data)
      },
      addStaf: function (data) {
        return getResource({
          url: '/xunan/admin/perm/user',
          method: 'POST'
        }, data)
      },
      editorStaf: function (data, key) {
        return getResource({
          url: `/xunan/admin/perm/user/${key}`,
          method: 'POST'
        }, data)
      },
      getDetailstaf: function (data, key) {
        return getResource({
          url: `xunan/admin/perm/user/${key}`,
          method: 'GET'
        }, data)
      },
      deleteStaf: function (data, key) {
        return getResource({
          url: `xunan/admin/perm/user/${key}`,
          method: 'DELETE'
        }, data)
      },
      getAllRole: function (data) {
        return getResource({
          url: '/xunan/admin/perm/role/all',
          method: 'get'
        }, data)
      },
      chabgePermissions: function (data, key) {
        return getResource({
          url: `/xunan/admin/perm/role/permissions`,
          method: 'get'
        }, data)
      },
    }
  },
  product() {
    return {
      productQuery: function (data) {//商品查询
        return getResource({
          url: '/xunan/admin/product/query',
          method: 'post'
        }, data)
      },
      productStats: function (data) {//商品统计
        return getResource({
          url: '/xunan/admin/product/stats',
          method: 'get'
        }, data)
      },
      companyQuery: function (data) {//保险公司
        return getResource({
          url: '/xunan/admin/product/query/company',
          method: 'get'
        }, data)
      },
      addPromotion: function (data) {//添加推广
        return getResource({
          url: '/xunan/admin/product/promotion',
          method: 'post'
        }, data)
      },
      promotionproductQuery: function (data) {//推广商品查询
        return getResource({
          url: '/xunan/admin/product/promotion/query',
          method: 'post'
        }, data)
      },
      searchChannel: function (data, key) {//搜索渠道
        return getResource({
          url: `/xunan/admin/product/promotion/search/channel`,
          method: 'get'
        }, data)
      },
      searchProduct: function (data, key) {//商品搜索
        return getResource({
          url: `/xunan/admin/product/promotion/search/product`,
          method: 'get'
        }, data)
      },
      edtorPromotion: function (data, key) {
        return getResource({
          url: `/xunan/admin/product/promotion/${key}`,
          method: 'post'
        }, data)
      },
      promotionDetail: function (data, key) {
        return getResource({
          url: `/xunan/admin/product/promotion/${key}`,
          method: 'get'
        }, data)
      },
      deletePromotion: function (data, key) {
        return getResource({
          url: `/xunan/admin/product/promotion/${key}`,
          method: 'DELETE'
        }, data)
      },

    }
  },

  user() {
    return {
      userQuery: function (data) {//个人查询
        return getResource({
          url: '/xunan/admin/user/query',
          method: 'post'
        }, data)
      },
      getuserDetail: function (data, key) {//用户详情
        return getResource({
          url: `/xunan/admin/user/${key}`,
          method: 'GET'
        }, data)
      },
      getuserOrderStats: function (data, key) {//用户订单统计
        return getResource({
          url: `/xunan/admin/user/${key}/stats`,
          method: 'GET'
        }, data)
      },
      getuserStats: function (data, key) {//用户统计
        return getResource({
          url: `/xunan/admin/user/stats`,
          method: 'GET'
        }, data)
      },
    }
  },
  // 抽奖
  lottery() {
    return {
      // 获取可参加活动的商品
      getlotterygoods: function (data, key) {
        return getResource({
          url: `/lanmao/admin/lottery/query/goods`,
          method: 'get'
        }, data)
      },
      // 抽奖活动添加
      addactivity: function (data, key) {
        return getResource({
          url: `/lanmao/admin/lottery`,
          method: 'post'
        }, data)
      },
      editoractivity(data,key){
        //抽奖活动编辑
        return getResource({
          url: `/lanmao/admin/lottery/${key}`,
          method: 'put'
        }, data)
      },
      copyactivity(data,key){
        //抽奖活动复制
        return getResource({
          url: `/lanmao/admin/lottery/copy/${key}`,
          method: 'post'
        }, data)
      },
      addhelpRules(data,key){
        //添加活动规则
        return getResource({
          url: `/lanmao/admin/lottery/helpRules`,
          method: 'post'
        }, data)
      },
      gethelpRules(data,key){
        //获取活动规则
        return getResource({
          url: `/lanmao/admin/lottery/helpRules`,
          method: 'get'
        }, data)
      },
      // 获取抽奖活动列表
      queryactivity(data,key){
        return getResource({
          url: `/lanmao/admin/lottery/list?status=${key}`,
          method: 'get'
        }, data)
      },
      // 首页是否显示
      showlottery(data,key){
        return getResource({
          url: `/lanmao/admin/lottery/show/${key}`,
          method: 'put'
        }, data)
      },
      sortactivity(data,key){
        //抽奖活动排序
        return getResource({
          url: `/lanmao/admin/lottery/sort/${key}`,
          method: 'put'
        }, data)
      },
      //获取抽奖活动详情
      getlotteryDetail(data,key){
        return getResource({
          url: `/lanmao/admin/lottery/${key}`,
          method: 'get'
        }, data)
      },
      // 失效/生效
      invalidactivity(data,key){
        return getResource({
          url: `/lanmao/admin/lottery/invalid/${key}`,
          method: 'put'
        }, data)
      },
      // 删除抽奖活动
      deleteactivity(data,key){
        return getResource({
          url: `/lanmao/admin/lottery/${key}`,
          method: 'DELETE'
        }, data)
      },
    }
  }
}


