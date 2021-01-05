<style rel="stylesheet/scss" lang="scss" scoped>
  $baseFontSize: 192;
  .salecustomercontent {
    display: flex;
    min-height: calc(100vh - 50px);
    margin-top: 60px;

    .content {
      flex: 1;
      padding: 20px;

      .contanternews {
        .selectChannel {
          .channnelTitle {
            padding-bottom: 20px;
            position: relative;

            .detailImg {
              height: 356px;
              width: 200px;
              position: absolute;
              top: 10px;
              z-index: 9999;
              border-radius: 10px;
              margin-left: 10px;
            }
          }

          .processContent {
            height: 64px;
            width: 300px;
            margin: 0 auto;
          }

          .channnelContent {
            .channnelBox {
              margin-right: 20px;
              padding: 15px 35px;
              border: solid 1px #b7b7b7;
              text-align: center;
              position: relative;
            }

            .selectBox {
              margin-right: 20px;
              padding: 15px 35px;
              text-align: center;
              position: relative;
              border: solid 1px #0d2c4b;

              .selectIcon {
                height: 26px;
                width: 26px;
                position: absolute;
                top: 0;
                right: 0;
              }
            }
          }
        }

        .baseInfo {
          margin-top: 20px;

          .lableBox {
            margin-bottom: 24px;
            position: relative;

            .lableText {
              display: inline-block;
              min-width: 78px;
              text-align: right;
            }

            .showImg {
              position: absolute;
              height: 234px;
              width: 312px;
              box-shadow: 0px 2px 24px 0px rgba(199, 199, 199, 0.51);
              border-radius: 4px;
              z-index: 1000;
            }

            .productguigeBox {
              border: 1px solid #f9f9f9;
              padding: 12px;

              .planName {
                border: 1px solid #f9f9f9;
                line-height: 40px;
                background: #fff;
              }
            }

            .detailImg {
              height: 356px;
              width: 200px;
              position: absolute;
              top: 0px;
              z-index: 9999;
              border-radius: 10px;
              margin-left: 10px;
              left: 570px;
            }

            .radioBox {
              .iconfont {
                display: inline-block;
                vertical-align: middle;
                margin-top: -2px;
              }

              .iconxuanze {
                color: #e5e5e5;
              }

              .colorblack {
                margin-right: 30px;
              }
            }

            .timeSelect {
              margin-top: -4px;
            }

            .guigeTable {
              width: 92%;
              border: solid 1px #f6f6f6;

              tr {
                border-bottom: 1px solid #f6f6f6;

                th {
                  background: #f6f6f6;
                  color: #929292;
                  position: relative;

                  .iconwenhao {
                    font-size: 15px;
                    margin: 2px;
                  }

                  .warmText {
                    padding: 10px;
                    line-height: 20px;
                    position: absolute;
                    background-color: #ffffff;
                    box-shadow: 0px 2px 24px 0px rgba(199, 199, 199, 0.51);
                    border-radius: 4px;
                    left: -2px;
                    bottom: 40px;
                  }
                }

                td {
                  padding: 15px 10px;
                  color: #000;
                  line-height: 30px;

                  .iconbianji {
                    margin-left: 15px;
                  }

                  .editorInput {
                    text-align: center;
                  }

                  .borderBox {
                    width: 66px;
                    border: 1px solid #e5e5e5;
                    text-align: right;
                    padding-right: 5px;
                  }
                }
              }
            }

            .guigeBox {
              min-width: 168px;
              height: 30px;
              line-height: 30px;
              text-align: center;
              border: 1px solid #f9f9f9;
              /*background-color: #f9f9f9;*/
              position: relative;
              margin-right: 20px;
              margin-bottom: 10px;

              .planName {
                border: none;
                min-width: 168px;
                /*background: #f9f9f9;*/
                text-align: center;
              }

              .iconcuowu {
                position: absolute;
                right: -5px;
                top: -15px;
                color: #929292;
              }

              .iconiconjia {
                font-size: 12px;
                position: absolute;
                top: 0px;
                right: 112px;
              }

              .guigeText {
                /*position: absolute;*/
                /*top: 8px;*/
                /*right: 58px;*/
              }
            }

            .inputBox {
              text-indent: 10px;
              width: 730px;
              height: 30px;
              border: solid 1px #e5e5e5;
              line-height: 30px;
            }

            .yunfeibox {
              width: 243px;
            }

            .imgUrlBox {
              flex-wrap: wrap;

              .imgFile {
                width: 130px;
                height: 130px;
                background-color: #f9f9f9;
                border-radius: 4px;
                margin-bottom: 12px;
                position: relative;
                margin-right: 20px;

                .deleteIcon {
                  position: absolute;
                  right: -1px;
                  top: -1px;
                  color: #929292;
                }

                .applicaninfoone {
                  width: 110px;
                  height: 110px;
                  margin: 10px;
                  position: relative;

                  .bannerImg {
                    width: 106px;
                    height: 106px;
                    position: absolute;
                  }

                  .warmText {
                    position: absolute;
                    color: #fff;
                    width: 106px;
                    height: 18px;
                    left: 0px;
                    bottom: 2px;
                    text-align: center;
                  }

                  .imgBox {
                    display: inline-block;
                    width: 106px;
                    height: 106px;

                    .uploadtext {
                      width: 106px;
                      height: 106px;
                      color: #979797;
                      position: relative;
                    }
                  }
                }

                .websiteinput {
                  width: 300px;
                  height: 30px;
                  line-height: 30px;
                  text-indent: 10px;
                  border: solid 1px #e5e5e5;
                  margin-top: 40px;
                }
              }

              .applicaninfo {
                width: 130px;
                height: 130px;
                background-color: #f9f9f9;
                border-radius: 4px;
                text-align: center;

                .imgBox {
                  display: inline-block;
                  width: 130px;
                  height: 130px;

                  .uploadtext {
                    color: #979797;
                    position: relative;
                    margin-top: 60px;
                    height: 55px;

                    .uploadIcon {
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
            }
          }

          .editorBox {
            .preview {
              margin-right: 20px;
              width: 267px;
              height: 473px;
              background-color: #ffffff;
              border: solid 1px #e5e5e5;

              .previewTitle {
                display: inline-block;
                text-align: center;
                color: #fff;
                width: 267px;
                height: 40px;
                line-height: 40px;
                background-color: #000000
              }

              .previewcontent {
                padding: 0 15px;
                max-height: 433px;
                overflow-y: auto;

                p {
                  line-height: 16px;
                  margin: 0 !important;
                }
              }

              .previewcontentone {
                padding: 0 15px;
                max-height: 433px;
                overflow-y: auto;

                p {
                  line-height: 16px;
                  margin: 0 !important;
                }
              }
            }
          }
        }

        .nextButoon {
          margin: 50px auto;
          text-align: center;

          .bacButton {
            display: inline-block;
          }
        }
      }
    }
  }

  .el-message-box__message {
    text-align: left;
  }
</style>
<template>
  <div class="general">
    <KlTop></KlTop>
    <div class="salecustomercontent contaner">
      <Aside></Aside>
      <div class="content">
        <div class="contanternews">
          <div class="selectChannel backWhite padding20">
            <div class="processContent ">
              <img src="../../assets/images/productone.png">
            </div>
          </div>
          <div class="selectChannel backWhite padding20 baseInfo">
            <div class="channnelTitle">
              <span class="colorblack font16 fontWeight marginright10">商品类型</span>
            </div>
            <div class="channnelContent flex">
              <div @click="changeBox(item,index)"
                   :class="item.isSelect?'selectBox cursor color2087 font12':'channnelBox cursor font12 colorGrey'"
                   v-for="(item,index) in selectData">
                <span> {{item.name}}</span>
                <br>
                <span>(物流发货)</span>
                <img v-if='item.isSelect' class="selectIcon " src="../../assets/images/selectIcon.png">
              </div>
            </div>
          </div>
          <div class="selectChannel backWhite padding20 baseInfo">
            <div class="channnelTitle">
              <span class="colorblack font16 fontWeight marginright10">基本信息</span>
            </div>
            <div class="lableBox">
              <span class="colorGrey font12 marginright10">商品名称</span>
              <input type="text" class="colorblack font12 inputBox" v-model="goodsObj.name" @change="changeName('name')"
                     placeholder="请输入小于30个字符"/>
            </div>
            <!--<div class="lableBox">-->
            <!--<span class="colorGrey font12 marginright10">卖点简介</span>-->
            <!--<input type="text" class="colorblack font12 inputBox" v-model="goodsObj.summary" @change="changeName('summary')" placeholder="请输入小于80个字符"/>-->
            <!--</div>-->
            <!--<div class="lableBox">-->
            <!--<span class="colorGrey font12 marginright10">服务说明</span>-->
            <!--<input type="text" class="colorblack font12 inputBox" v-model="goodsObj.serviceNotes" @change="changeName('serviceNotes')" placeholder="请输入小于20个字符"/>-->
            <!--<img class="detailImg" v-if="showNote" src="../../assets/images/shuoming.png"/>-->
            <!--<i class="iconfont iconwenhao cursor color2087 font16"  @mouseover="showNote = true" @mouseout="showNote = false" ></i>-->
            <!--</div>-->
            <div class="lableBox flex" style="margin-bottom: 0;">
              <span class="colorGrey font12 marginright10" style="display: inline-block;width: 64px;">详情头部</span>
              <div class="flex imgUrlBox">
                <div class="imgFile flex" v-for='(item,index) in goodsObj.imgs' v-if="item.imgUrl"
                     @dragstart="handleDragStart($event,item)"
                     @dragover.prevent="handleDragOver($event,item)"
                     @dragenter="handleDragEnter($event,item,index)"
                     @dragend="handleDragEnd($event,item)" draggable="true">
                  <i class="iconfont iconcuowu cursor deleteIcon" @click="delectImg(index,item)"></i>
                  <div class="applicaninfoone" @click="getIndex(index)">
                    <img class="bannerImg" :src="item.imgUrl">
                    <span class="warmText back2087 font12">更换图片</span>
                    <el-upload
                      class="upload-demo imgBox"
                      name="file"
                      :action="upFileAction"
                      :headers="headers"
                      :on-change="handleChange"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload"
                      :on-error="errphoto"
                      :show-file-list="false"
                      accept="">
                      <div class="uploadtext">
                      </div>
                    </el-upload>
                  </div>
                </div>
                <div class="applicaninfo" @click="uploadIndex = ''">
                  <el-upload
                    class="upload-demo imgBox"
                    name="file"
                    :action="upFileAction"
                    :headers="headers"
                    :on-change="handleChange"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                    :on-error="errphoto"
                    :show-file-list="false"
                    accept="">
                    <div class="uploadtext">
                      <i class="iconfont iconiconjia color2087 uploadIcon"></i>
                      <span>添加图片<br>800*800像素</span>
                    </div>
                  </el-upload>
                </div>
              </div>
            </div>
            <div class="lableBox" style="margin-top:6px;">
              <span class="colorGrey font12" style="margin-left: 70px;">建议尺寸：800*800像素，你可以拖拽图片调整顺序</span>
            </div>
          </div>
          <div class="selectChannel backWhite padding20 baseInfo">
            <div class="channnelTitle">
              <span class="colorblack font16 fontWeight marginright10">价格库存</span>
            </div>
            <div class="lableBox flex">
              <span class="colorGrey font12 lableText marginright10 " style="display: inline-block;">商品规格</span>
              <div class="productguigeBox">
                <div class=" font12 cursor">
                  <span class="colorGrey font12" style="display: inline-block; min-width: 56px;">规格名</span>
                  <input type="text" class="planName guigeBox" readonly v-model="guigeName" placeholder="规格名"/>
                </div>
                <div class="flex" style="flex-wrap: wrap;">
                  <span class="colorGrey font12" style="display: inline-block; min-width: 56px;">规格值</span>
                  <div class="guigeBox color2087 font12 cursor" v-for="(item,index) in specs"
                       @dragstart="handleDragStartguige($event,item)"
                       @dragover.prevent="handleDragOverguige($event,item)"
                       @dragenter="handleDragEnterguige($event,item)"
                       @dragend="handleDragEndguige($event,item)" draggable="true">
                    <input type="text" class="planName" v-model="item.name" @change="editorspecs(item)"/>
                    <i class="iconfont cursor iconcuowu font16" @click="delectGuige(index)"></i>
                  </div>
                  <div class="guigeBox color2087 font12 cursor" @click="addSpec()">
                    <i class="iconfont cursor iconiconjia color2087 font12"></i>
                    <span class="colorGrey guigeText">添加规格</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="lableBox flex" v-if="specs.length != 0">
              <span class="colorGrey font12 marginright10 lableText">价格维护</span>
              <table class="guigeTable">
                <tr>
                  <th>{{guigeName}}</th>
                  <th>价格(元)</th>
                  <th>消耗积分</th>
                  <th>
                    库存
                  </th>
                  <th>
                    成本价
                  </th>
                  <th>
                    销量
                  </th>
                </tr>
                <tr v-for="item in specs">
                  <td>{{item.name}}</td>
                  <td>
                    ¥
                    <!--<span class="valueSpan"  v-if="!item.issellPriceEditor" >{{item.sellPrice}}</span>-->
                    <input type="tel" class="editorInput borderBox" v-model="item.price"
                           @blur="removsellPriceBorder(item,'')">
                    <!--<i class="iconfont iconbianji color2087 font14 cursor" @click="item.issellPriceEditor = true"></i>-->
                  </td>
                  <td>
                    <!--<span class="valueSpan"  v-if="!item.issellPriceEditor" >{{item.sellPrice}}</span>-->
                    <input type="tel" class="editorInput borderBox" v-model="item.points"
                           @blur="removpointsBorder(item,'')">
                    <!--<i class="iconfont iconbianji color2087 font14 cursor" @click="item.issellPriceEditor = true"></i>-->
                  </td>
                  <td>
                    <input type="text" class="editorInput borderBox" v-model="item.stock"
                           @blur="removstockBorder(item,'')">
                  </td>
                  <td>
                    ¥
                    <input type="tel" class="editorInput borderBox" v-model="item.costPrice"
                           @blur="removmarketPriceBorder(item,'')">
                  </td>
                  <td>
                    {{item.salesVolume}}
                  </td>
                </tr>
              </table>
            </div>
            <div class="lableBox">
              <span class="colorGrey lableText font12 marginright10">价格</span>
              <input type="text" readonly class="colorblack readonlyBox font12 inputBox yunfeibox"
                     v-model="goodsObj.price" placeholder=""/>
            </div>
            <div class="lableBox">
              <span class="colorGrey lableText font12 marginright10">划线价格</span>
              <input type="text" class="colorblack  font12 inputBox yunfeibox" @change="changeExpress('')"
                     v-model="goodsObj.marketPrice" placeholder="请输入划线价格"/>
              <span class="colorGrey font12">划线价在商品详情会以划线形式显示</span>
            </div>
            <div class="lableBox">
              <span class="colorGrey lableText font12 marginright10">库存扣减方式</span>
              <span class="colorblack font12 marginright10">买家支付成功，扣减库存数量</span>
              <i @mouseover="showImgone = true" @mouseout="showImgone = false"
                 class="iconfont iconwenhao cursor  color2087 font16"></i>
              <img v-if="showImgone" class="showImg" src="../../assets/images/imgOne.png">
            </div>
            <div class="lableBox">
              <span class="colorGrey font12 lableText marginright10">库存</span>
              <input type="text" readonly class="colorblack readonlyBox font12 inputBox yunfeibox" v-model="stock"
                     placeholder=""/>
            </div>
            <div class="lableBox">
              <span class="colorGrey font12 marginright10 lableText">积分消耗方式</span>
              <span class="colorblack font12 marginright10">买家支付成功，扣减消耗积分</span>
              <i @mouseover="showImgtwo = true" @mouseout="showImgtwo = false"
                 class="iconfont iconwenhao cursor  color2087 font16"></i>
              <img v-if="showImgtwo" class="showImg" src="../../assets/images/imgTwo.png">
            </div>
          </div>
          <div class="selectChannel backWhite padding20 baseInfo">
            <div class="channnelTitle">
              <span class="colorblack font16 fontWeight marginright10">物流信息</span>
            </div>
            <div class="lableBox">
              <span class="colorGrey lableText font12 marginright10">配送描述</span>
              <input type="text" class="colorblack font12 inputBox" v-model="goodsObj.tags" @change="changeName('tags')"
                     placeholder="请输入小于30个字符"/>
            </div>
          </div>
          <!--<div class="selectChannel backWhite padding20 baseInfo">-->
          <!--<div class="channnelTitle">-->
          <!--<span class="colorblack font16 fontWeight marginright10">其他信息</span>-->
          <!--</div>-->
          <!--<div class="lableBox flex">-->
          <!--<span class="colorGrey font12 marginright10">上架时间</span>-->
          <!--<div class="radioBox marginLeft10" >-->
          <!--<i class="iconfont iconxuanzhong color2087 font20 cursor cursor" v-if="goodsObj.shelvesType==0"></i>-->
          <!--<i class="iconfont iconxuanze  font20 cursor" v-if="goodsObj.shelvesType!= 0" @click="goodsObj.shelvesType = 0"></i>-->
          <!--<span class="colorblack font12">立即上架</span>-->
          <!--<i class="iconfont iconxuanzhong color2087 font20 cursor" v-if="goodsObj.shelvesType==1"></i>-->
          <!--<i class="iconfont iconxuanze  font20 cursor" v-if="goodsObj.shelvesType !=1" @click="goodsObj.shelvesType = 1"></i>-->
          <!--<span class="colorblack font12">定时上架</span>-->
          <!--</div>-->
          <!--<div class="timeSelect" v-if="goodsObj.shelvesType==1">-->
          <!--<el-date-picker-->
          <!--:picker-options="expireTimeOption"-->
          <!--@change="changeSelfTime()"-->
          <!--v-model="shelfTime"-->
          <!--type="datetime"-->
          <!--placeholder="选择日期时间"-->
          <!--default-time="12:00:00">-->
          <!--</el-date-picker>-->
          <!--</div>-->
          <!--</div>-->
          <!--<div class="lableBox flex">-->
          <!--<span class="colorGrey font12 marginright10">下架时间</span>-->
          <!--<div class="timeSelect">-->
          <!--<el-date-picker-->
          <!--:picker-options="expireTimeOption"-->
          <!--@change="changeoffTime()"-->
          <!--v-model="offTime"-->
          <!--type="datetime"-->
          <!--placeholder="选择日期时间"-->
          <!--default-time="12:00:00">-->
          <!--</el-date-picker>-->
          <!--</div>-->
          <!--</div>-->
          <!--</div>-->
          <div class="nextButoon">
            <span class="bacButton cursor" @click="goDetail()">下一步</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import Util from '@/common/util'
  import Aside from '@/components/aside'
  import AddSpecs from '@/components/addSpecs'
  import GoumaiEditor from '@/components/goumaiEditor'
  import Filter from '@/common/filter'
  import Service from '@/common/service'
  import Store from '@/vuex/index'
  import KlTop from '@/components/klTop'
  import Global from '@/common/global'
  import VueUeditorWrap from 'vue-ueditor-wrap' // ES6 Module

  export default {
    name: "salecustomer",
    components: {
      Aside,
      KlTop,
      AddSpecs,
      GoumaiEditor
    },
    data() {
      return {
        stock: '',
        showImgtwo: false,
        showImgone: false,
        guigeName: '规格',
        showSellWarm: false,
        showMarkWarm: false,
        showNote: false,
        showImg: false,
        goodsObj: {
          marketPrice: '',
          description: '',//产品详情
          imgUrl: '',
          name: '',
          imgs: [],
          price: '',
          specs: [],
          tags: ''
        },
        productId: '',
        expireTimeOption: {
          disabledDate(date) {
            return date.getTime() < Date.now() - 8.64e7;
          }
        },
        shelfTime: '',
        offTime: '',
        isInstructions: 1,
        msgData: '',
        shiyongmasg: '',
        myConfig: {
          autoHeightEnabled: false,
          initialFrameHeight: 345,
          initialFrameWidth: '640',
          UEDITOR_HOME_URL: '../../../static/UEditor/',
        },
        isShangjia: 1,
        isGoumai: 1,
        showSpecs: false,
        specs: [],
        uploadIndex: '',
        upFileAction: '',
        imageUrl: '',
        headers: {},
        selectData: [{'name': '实物商品', isSelect: true}],
        showOne: false,
        showTwo: false,
        showThree: false,
        showFour: false,
        dissipate: [],
        timer: null,
        username: '',
        userInfo: '',
        permissions: [],
        dragging: null,
        draggingguige: null,
      };
    },
    beforeDestroy() {
      // if(this.specs.length != 0){
      //     for(var i = 0;i < this.specs.length;i++){
      //         this.goodsObj.price = this.goodsObj.specs[0].price;
      //         if(this.specs[i]){
      //             var obj = {
      //                 "id": this.specs[i].id,
      //                 "costPrice": this.specs[i].costPrice,
      //                 "name": this.specs[i].name,
      //                 "points":this.specs[i].points,
      //                 "sort": parseInt(i)+1,
      //                 "stock": this.specs[i].stock
      //             };
      //             this.goodsObj.specs.push(obj)
      //         }
      //     }
      // }
      if (this.goodsObj.imgs.length != 0) {
        for (var i = 0; i < this.goodsObj.imgs.length; i++) {
          this.goodsObj.imgUrl = this.goodsObj.imgs[0].imgUrl;
          this.goodsObj.imgs[i].sort = parseInt(i) + 1;
        }
      }
      if (!this.productId) {
        Util.localStorageUtil.set('specs', this.specs);
        Util.localStorageUtil.set('goodsObj', this.goodsObj);
      } else {
        // Util.localStorageUtil.set('specs'+this.productId,this.specs);
        // Util.localStorageUtil.set('goodsObj'+this.productId,this.goodsObj);
      }
    },
    created() {
      if (this.$route.query.id) {
        this.productId = this.$route.query.id;
        if (Util.localStorageUtil.get('goodsObj') && !this.productId) {
          this.goodsObj = Util.localStorageUtil.get('goodsObj');
          this.specs = Util.localStorageUtil.get('specs');
          this.stock = this.specs[0].stock;
          this.goodsObj.specs = [];
        }
        // this.getCommodity(this.productId)
        if (Util.localStorageUtil.get('goodsObj' + this.productId)) {
          this.goodsObj = Util.localStorageUtil.get('goodsObj' + this.productId);
          this.specs = Util.localStorageUtil.get('specs' + this.productId);
          this.stock = this.specs[0].stock;
          this.goodsObj.specs = [];
        } else {
          if (this.productId) {
            this.getCommodity(this.productId)
          }
        }
      }
      var tokenVal = Util.localStorageUtil.get('access_token');
      this.headers = {token: tokenVal};
      this.userInfo = JSON.parse(localStorage.getItem('user'))
      console.log(this.headers)
    },
    watch: {},
    mounted() {

      this.upFileAction = Global.requestUrl + "/lanmao/admin/upload/img";
    },
    methods: {
      BrowserType() {//判断浏览器类型
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
        var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器
        var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
        var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
        var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器
        if (isIE) {
          var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
          reIE.test(userAgent);
          var fIEVersion = parseFloat(RegExp["$1"]);
          return {name: "IE", num: fIEVersion};
        }//isIE end

        if (isFF) {
          return {name: "FF", num: "FF"};
        }
        if (isOpera) {
          return {name: "Opera", num: "Opera"};
        }
        if (isSafari) {
          return {name: "Safari", num: "Safari"};
        }
        if (isChrome) {
          return {name: "Chrome", num: "Chrome"};
        }
        if (isEdge) {
          return {name: "Edge", num: "Edge"};
        }
      },
      getCommodity(productId) {
        Service.goods().getGoods({}, productId
        ).then(response => {
          if (response.errorCode == 0) {
            this.goodsObj.name = response.data.name;
            this.goodsObj.imgUrl = response.data.imgUrl;
            this.goodsObj.description = response.data.description;
            this.goodsObj.imgs = response.data.imgs;
            // this.goodsObj.status = response.data.status;
            this.goodsObj.price = response.data.price;
            this.goodsObj.marketPrice = response.data.marketPrice;
            this.goodsObj.tags = response.data.tags;
            this.stock = response.data.specs[0].stock;
            if (response.data.specs) {
              for (var i = 0; i < response.data.specs.length; i++) {
                var obj = {
                  id: response.data.specs[i].id,
                  name: response.data.specs[i].name,
                  costPrice: response.data.specs[i].costPrice,
                  points: response.data.specs[i].points,
                  price: response.data.specs[i].price,
                  sort: response.data.specs[i].sort,
                  originStock: response.data.specs[i].stock,
                  stock: response.data.specs[i].stock,
                  salesVolume: response.data.specs[i].salesVolume
                };
                this.specs.push(obj)
              }
            }
            this.goodsObj.specs = [];
          } else {
            this.$message.error(response.message)
          }
        }, err => {
        });
      },
      timetrans(timestamp) {
        var getSeconds = '', getMinutes = '', getHours = '';
        var d = new Date(timestamp);
        getHours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
        getMinutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
        getSeconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
        var newTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + getHours + ':' + getMinutes + ':' + getSeconds;
        return newTime
      },
      changeName(str, type) {
        var on = true;
        if (str == 'name') {
          if (this.goodsObj[str].length > 30 || this.goodsObj[str].length < 2) {
            this.$message.error('商品名称必须填写，最多30个字且不少于2个字');
            on = false;
            return;
          }
        }
        if (str == 'tags') {
          if (this.goodsObj[str].length > 30 || this.goodsObj[str].length < 2) {
            this.$message.error('配送描述必须填写，最多30个字且不少于2个字');
            on = false;
            return;
          }
        }
        if (type == 'submit') {
          return on;
        }
      },
      delectGuige(index) {
        this.specs.splice(index, 1)
      },
      editorspecs(item) {
        item.name = item.name.replace(/^\s*|\s*$/g, "");
        this.$forceUpdate()
      },
      handleDragStartguige(e, item) {
        e.dataTransfer.setData("imgInfo", '')
        this.draggingguige = item;
      },
      handleDragEndguige(e, item) {
        this.draggingguige = null
      },
      //首先把div变成可以放置的元素，即重写dragenter/dragover
      handleDragOverguige(e) {
        e.dataTransfer.dropEffect = 'move'// e.dataTransfer.dropEffect="move";//在dragenter中针对放置目标来设置!
      },
      handleDragEnterguige(e, item, index) {
        e.dataTransfer.effectAllowed = "move";//为需要移动的元素设置dragstart事件
        if (item === this.draggingguige) {
          return
        }
        const newItems = [...this.specs];
        const src = newItems.indexOf(this.draggingguige);
        const dst = newItems.indexOf(item);
        newItems.splice(dst, 0, ...newItems.splice(src, 1));
        this.specs = newItems;
      },
      handleDragStart(e, item) {
        this.dragging = item;
      },
      handleDragEnd(e, item) {
        this.dragging = null
      },
      //首先把div变成可以放置的元素，即重写dragenter/dragover
      handleDragOver(e) {
        e.dataTransfer.dropEffect = 'move'// e.dataTransfer.dropEffect="move";//在dragenter中针对放置目标来设置!
      },
      handleDragEnter(e, item, index) {
        e.dataTransfer.effectAllowed = "move";//为需要移动的元素设置dragstart事件
        if (item === this.dragging) {
          return
        }
        const newItems = [...this.goodsObj.imgs];
        const src = newItems.indexOf(this.dragging);
        const dst = newItems.indexOf(item);
        newItems.splice(dst, 0, ...newItems.splice(src, 1));
        this.goodsObj.imgs = newItems;
      },
      goDetail() {
        if (!this.changeName('name', 'submit')) {
          return;
        }
        if (this.goodsObj.imgs.length == 0) {
          this.$message.error('请上传详情头部图片');
          return
        }
        if (this.specs.length == 0) {
          this.$message.error('请添加服务规格');
          return
        }
        if (this.specs.length != 0) {
          for (var i = 0; i < this.specs.length; i++) {
            if (!this.specs[i].name) {
              this.$message.error('请输入规格值');
              return;
            }
            if (this.specs[i].price == 0 && this.specs[i].points == 0) {
              this.$message.error('价格与积分不能同时为0');
              return;
            }
            if (!this.removsellPriceBorder(this.specs[i], 'submit')) {
              return;
            }
            if (!this.removpointsBorder(this.specs[i], 'submit')) {
              return;
            }
            // if(!this.removstockBorder(this.specs[i],'submit')){
            //
            //     return;
            // }
            if (!this.removmarketPriceBorder(this.specs[i], 'submit')) {
              return;
            }
          }
        }
        if (!this.changeExpress('submit')) {
          return
        }
        if (!this.changeName('tags', 'submit')) {
          return;
        }
        for (var i = 0; i < this.goodsObj.imgs.length; i++) {
          this.goodsObj.imgs[i].sort = parseInt(i) + 1;
          this.goodsObj.imgUrl = this.goodsObj.imgs[0].imgUrl;
        }
        for (var i = 0; i < this.specs.length; i++) {
          this.goodsObj.price = this.specs[0].price;
          if (this.specs[i]) {
            var obj = {
              "id": this.specs[i].id,
              "costPrice": this.specs[i].costPrice,
              "name": this.specs[i].name,
              "points": this.specs[i].points,
              "sort": parseInt(i) + 1,
              "stock": parseInt(this.specs[i].stock) - parseInt(this.specs[i].originStock),
              'price': this.specs[i].price,
              'salesVolume': this.specs[i].salesVolume
            };
            this.goodsObj.specs.push(obj)
          }
        }
        if (!this.productId) {
          Util.localStorageUtil.set('specs', this.specs);
          Util.localStorageUtil.set('goodsObj', this.goodsObj);
        } else {
          Util.localStorageUtil.set('specs' + this.productId, this.specs);
          Util.localStorageUtil.set('goodsObj' + this.productId, this.goodsObj);
        }
        this.$router.push({name: 'commoditydetail', query: this.$route.query})
      },
      // 添加自定义按钮
      addCustomButtom(editorId) {
        window.UE.registerUI('test-button', function (editor, uiName) {
          // 注册按钮执行时的 command 命令，使用命令默认就会带有回退操作
          editor.registerCommand(uiName, {
            execCommand: function () {
              editor.execCommand('inserthtml', `<span>这是一段由自定义按钮添加的文字</span>`);
            }
          });
          // 创建一个 button
          var btn = new window.UE.ui.Button({
            // 按钮的名字
            name: uiName,
            // 提示
            title: '鼠标悬停时的提示文字',
            // 需要添加的额外样式，可指定 icon 图标，图标路径参考常见问题 2
            cssRules: "background-image: url('/test-button.png') !important;background-size: cover;",
            // 点击时执行的命令
            onclick: function () {
              // 这里可以不用执行命令，做你自己的操作也可
              editor.execCommand(uiName);
            }
          });
          // 当点到编辑内容上时，按钮要做的状态反射
          editor.addListener('selectionchange', function () {
            var state = editor.queryCommandState(uiName);
            if (state === -1) {
              btn.setDisabled(true);
              btn.setChecked(false);
            } else {
              btn.setDisabled(false);
              btn.setChecked(state);
            }
          });
          // 因为你是添加 button，所以需要返回这个 button
          return btn;
        }, 0 /* 指定添加到工具栏上的哪个位置，默认时追加到最后 */, editorId /* 指定这个 UI 是哪个编辑器实例上的，默认是页面上所有的编辑器都会添加这个按钮 */);
      },
      // 添加自定义弹窗
      addCustomDialog(editorId) {
        window.UE.registerUI('test-dialog', function (editor, uiName) {
          // 创建 dialog
          var dialog = new window.UE.ui.Dialog({
            // 指定弹出层中页面的路径，这里只能支持页面，路径参考常见问题 2
            iframeUrl: '/customizeDialogPage.html',
            // 需要指定当前的编辑器实例
            editor: editor,
            // 指定 dialog 的名字
            name: uiName,
            // dialog 的标题
            title: '这是一个自定义的 Dialog 浮层',
            // 指定 dialog 的外围样式
            cssRules: 'width:600px;height:300px;',
            // 如果给出了 buttons 就代表 dialog 有确定和取消
            buttons: [
              {
                className: 'edui-okbutton',
                label: '确定',
                onclick: function () {
                  dialog.close(true);
                }
              },
              {
                className: 'edui-cancelbutton',
                label: '取消',
                onclick: function () {
                  dialog.close(false);
                }
              }
            ]
          });
          // 参考上面的自定义按钮
          var btn = new window.UE.ui.Button({
            name: 'dialog-button',
            title: '鼠标悬停时的提示文字',
            cssRules: `background-image: url('/test-dialog.png') !important;background-size: cover;`,
            onclick: function () {
              // 渲染dialog
              dialog.render();
              dialog.open();
            }
          });
          return btn;
        }, 0 /* 指定添加到工具栏上的那个位置，默认时追加到最后 */, editorId /* 指定这个UI是哪个编辑器实例上的，默认是页面上所有的编辑器都会添加这个按钮 */);
      },
      getbackData(str) {
        if (str == 'sure') {
          this.showSpecs = false;
        }
        if (str == 'cancle') {
          this.showSpecs = false;
        }
      },
      addSpec() {
        var obj = {
          name: '',
          id: '',
          costPrice: '',
          points: '',
          price: '',
          stock: '',
          originStock: 0,
          salesVolume: 0
        };
        this.specs.push(obj)
        this.goodsObj.price = this.specs[0].price;
        this.stock = this.specs[0].stock;
      },
      changeExpress(type) {
        var on = true;
        var reg = /((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/;
        if (!reg.test(this.goodsObj.marketPrice)) {
          this.$message.error('请输入正确合理的划线价格');
          on = false;
        }
        for (let i in this.specs) {
          if (parseFloat(this.specs[i].price) >= parseFloat(this.goodsObj.marketPrice)) {
            this.$message.error('划线价格请高于销售价格');
            on = false;
            return
          }
        }
        if (type == 'submit') {
          return on
        }
      },
      removpointsBorder(item, type) {
        var on = true;
        var reg = /^[0-9]\d*$/;
        if (!reg.test(item.points)) {
          on = false;
          this.$alert('请输入合理的消耗积分', '消耗积分修改提醒', {
            confirmButtonText: '确定',
            callback: action => {
              // item.stock = item.originalStock;
            }
          });
        }
        if (type == 'submit') {
          return on;
        }
        this.$forceUpdate()
      },
      removstockBorder(item, type) {
        var on = true;
        var reg = /^[1-9]\d*$/;
        if (!reg.test(item.stock)) {
          on = false;
          this.$alert('修改库存可能会有如下问题：库存改为0时，前台会显示缺货,库存数超过实际库存可能导致超卖而增加后续退货的工作', '确认修改库存吗', {
            confirmButtonText: '确定',
            callback: action => {
              // item.stock = item.originalStock;
            }
          });
        }
        if (type == 'submit') {
          return on;
        }
        this.stock = this.specs[0].stock;
        this.$forceUpdate()
      },
      removsellPriceBorder(item, type) {
        var on = true;
        var reg = /((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/;
        if (!reg.test(parseFloat(item.price))) {
          on = false;
          this.$alert('请输入合理的销售价格', '销售价格修改提醒', {
            confirmButtonText: '确定',
            callback: action => {
              item.price = '';
            }
          });
        }
        if (parseFloat(item.price) < 0) {
          on = false;
          this.$alert('请输入合理的销售价格', '销售价格修改提醒', {
            confirmButtonText: '确定',
            callback: action => {
              item.price = '';
            }
          });
        }
        // else if(item.price <= item.costPrice){
        //     on = false;
        //     this.$alert('为保持良好用户体验，注意销售价格高于成本价', '销售价格修改提醒', {
        //         confirmButtonText: '确定',
        //         callback: action => {
        //             item.price = '';
        //             // item.sellPrice = item.originalsellPrice;
        //         }
        //     });
        // }
        this.goodsObj.price = this.specs[0].price;
        if (type == 'submit') {
          return on;
        }
        this.$forceUpdate()
      },
      removmarketPriceBorder(item, type) {
        var on = true;
        var reg = /((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/;
        if (!reg.test(item.costPrice)) {
          on = false;
          this.$alert('请输入合理的成本价格', '成本价格修改提醒', {
            confirmButtonText: '确定',
            callback: action => {
              item.costPrice = ''
            }
          });
        }
        // else if(item.costPrice >= item.price){
        //     on = false;
        //     this.$alert('为保持良好用户体验，注意销售价格高于成本价', '成本价格修改提醒', {
        //         confirmButtonText: '确定',
        //         callback: action => {
        //             item.costPrice = ''
        //         }
        //     });
        // }
        if (type == 'submit') {
          return on;
        }
        this.$forceUpdate()
      },
      handleDragStart(e, item) {
        this.dragging = item;
      },
      handleDragEnd(e, item) {
        this.dragging = null
      },
      //首先把div变成可以放置的元素，即重写dragenter/dragover
      handleDragOver(e) {
        e.dataTransfer.dropEffect = 'move'// e.dataTransfer.dropEffect="move";//在dragenter中针对放置目标来设置!
      },
      handleDragEnter(e, item) {
        e.dataTransfer.effectAllowed = "move";//为需要移动的元素设置dragstart事件
        if (item === this.dragging) {
          return
        }
        const newItems = [...this.goodsObj.imgs];
        const src = newItems.indexOf(this.dragging);
        const dst = newItems.indexOf(item);
        newItems.splice(dst, 0, ...newItems.splice(src, 1));
        this.goodsObj.imgs = newItems;
      },
      delectImg(index, item) {
        this.goodsObj.imgs.splice(index, 1);
        this.$forceUpdate()
      },
      getIndex(index) {
        this.uploadIndex = index;
      },
      beforeAvatarUpload(file) {
        var num = 0;
        for (var i = 0; i < this.goodsObj.imgs.length; i++) {
          if (this.goodsObj.imgs[i].imgUrl) {
            num++
          }
        }
        Store.commit("setIsLoading", true);
        const isLt2M = file.size / 1024 / 1024 < 2;
        var index = file.name.indexOf('.');
        // const isExcel = file.name.substring(index+1) === 'xlsx';
        // const isExcel1 = file.name.substring(index+1) === 'xls';
        // if (!isExcel && !isExcel1) {
        //     this.$message.error('请上传正确的excel文件!');
        // }
        if (!isLt2M) {
          Store.commit("setIsLoading", false);
          this.$message.error('上传文件大小不能超过2M!');
        }
        return isLt2M;
        // if((num >= 8 && this.uploadIndex === '')){
        //     this.$message.warning('上传数最多8张');
        //     return false
        // }else{
        //     Store.commit("setIsLoading", true);
        //     const isLt2M = file.size / 1024 / 1024 < 2;
        //     var index = file.name.indexOf('.');
        //     if (!isLt2M) {
        //         Store.commit("setIsLoading", false);
        //         this.$message.error('上传文件大小不能超过2M!');
        //     }
        //     return isLt2M;
        // }
      },
      errphoto(err, file, fileList) {
      },
      handleAvatarSuccess(res, file) {
        Store.commit("setIsLoading", false);
        if (res.errorCode == 5001) {
          window.localStorage.clear();
          window.location.href = document.location.protocol + '//' + window.location.host + '/'
        } else if (res.data) {
          if (this.uploadIndex === '') {
            var obj = {
              id: '',
              imgUrl: res.data,
              sort: ''
            };
            this.goodsObj.imgs.push(obj);
          } else {
            for (var i = 0; i < this.goodsObj.imgs.length; i++) {
              if (this.uploadIndex == i) {
                this.goodsObj.imgs[i].imgUrl = res.data;
              }
            }
          }
          // this.totalPerson = this.tableData.length;
          // if(this.totalPerson == 0){
          //     this.$message.error('您上传的文件为空，请重新上传');
          // }else{
          //     this.totalpremium = (this.tableData.length)*this.premium;
          // }
        } else {
          this.$message.error(res.message);
        }
      },
      handleChange(file, fileList) {
      },
      changeBox(item, index) {
        this.goodsObj.visibleType = index;
        for (let i in this.selectData) {
          this.selectData[i].isSelect = false;
        }
        item.isSelect = true;
        this.$forceUpdate()
      },
    },

  }
</script>

