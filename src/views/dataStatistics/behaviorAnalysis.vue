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
        .waitThing {
          margin-top: 20px;
          background: #fff;

          .rideoBox {
            width: 100%;
            padding: 0 200px 20px 50px;
            box-sizing: border-box;
            background: #f6f6f6;
            display: flex;
            flex-wrap: wrap;
            margin-top: 30px;

            .flex {
              padding-bottom: 20px;
              border-bottom: 1px solid #f3f3f3;
              flex-wrap: wrap;
            }

            .typeText {
              width: 100px;
            }
          }

          #analysis {
            width: 937px;
            height: 300px;
          }
        }
      }
      .table {
        font-size: 12px;
        border: 1px solid #f6f6f6;
        margin: 20px 20px;
        width: 937px;

        .imgUrl {
          height: 35px;
          width: 40px;
          margin-right: 6px;
        }

        tr {
          border-bottom: 1px solid #f6f6f6;

          .line {
            display: inline-block;
            height: 8px;
            width: 3px;
            background: #eee;
            margin: 0 10px;
          }

          th {
            font-size: 12px;
            text-align: center;
            background: #f6f6f6;

            .iconshengjiangxu {
              font-size: 16px;
              margin-left: 5px;
            }
          }

          th:nth-child(1) {
            max-width: 60px;
          }

          td:nth-child(2) {
            max-width: 70px;
          }

          td:nth-child(3) {
            max-width: 70px;
          }

          td:nth-child(4) {
            max-width: 50px;
          }

          td:nth-child(5) {
            max-width: 64px;
            min-width: 64px;
          }

          th:nth-child(7) {
            min-width: 80px;
          }

          td:nth-child(10) {
            max-width: 100px;
          }

          th:nth-child(11) {
            min-width: 100px;
          }

          th:nth-child(12) {
            min-width: 120px;
          }

          th:nth-child(13) {
            min-width: 80px;
          }

          td {
            text-align: center;
            padding: 20px 16px;
          }
        }
      }

      .block {
        text-align: right;
        margin-top: 35px;
        margin-right: 20px;
      }
    }
  }

  .margintop20 {
    margin-top: 20px;
  }

  .marginleft20 {
    margin-left: 20px;
  }
  .flexSpence{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .flexCenter {
    display: flex;
    align-items: center;
  }

  /deep/ .el-input__icon {
    line-height: 30px;
  }
</style>
<template>
  <div class="general">
    <KlTop></KlTop>
    <div class="salecustomercontent contaner">
      <Aside></Aside>
      <div class="content">
        <div class="contanternews">

          <div class="backWhite padding20 waitThing ">

            <div class="timeTJ flex" style="align-items: center">
              <div>统计时间</div>
              <div class="searchBox marginLeft10">
                <el-select v-model="selectType" @change="changeDateType" placeholder="">
                  <el-option
                    v-for="item in typeOption"
                    :key="item.value"
                    :label="item.name"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div class="searchBox" style="margin-left: 10px;">
                <el-date-picker
                  @change="changeDate"
                  v-model="selectDate"
                  type="datetime"
                >
                </el-date-picker>
              </div>
            </div>
            <div class="colorblack font16 fontWeight marginright10 margintop20">行为数据</div>
            <div class="rideoBox">
              <div class="marginleft20 flexCenter margintop20" v-for="(item,index) in dataSelectList" :key="item.id">
                <i class="iconfont color2087 font20 cursor"
                   :class="checkIndex == item.id? 'iconxuanzhong' :'iconxuanze'"
                   @click="checkSelect(item)"></i>
                <span class="typeText colorblack font12 marginLeft10" @click="checkType(item.id)">{{item.name}}</span>
              </div>
            </div>
            <div id='analysis'></div>
            <div class="flexSpence">
              <div class="colorblack font16 fontWeight marginright10 margintop20">详细数据</div>
              <div class="bacButtonone bacButton cursor" :download="download" :href="href" @click="daochu()">导出</div>
            </div>
            <table v-if="noData" class="table">
              <tr>
                <th v-for="item in sortDatas" :key="item.name">
                  {{item.name}}
                </th>
              </tr>
              <tr v-for="(item, index) in tableData" :key="item.id">
                <td>
                  {{timetransAgo(item.statisticsDate)}}
                </td>
                <td>
                  {{item.totalVisitors}} <!--累计访问人数-->
                </td>
                <td>
                  {{item.openNums}} <!--打开次数-->
                </td>
                <td>
                  {{item.visitNums}} <!--访问次数-->
                </td>
                <td>
                  {{item.visitorNums}} <!--访问人数-->
                </td>
                <td>
                  {{item.newVisitorNums}}  <!--新访问人数-->
                </td>
                <td>
                  {{item.visitDepthNums}} <!--平均访问深度-->
                </td>
                <td>
                  {{item.stayLengthStr}} <!--人均停留时长-->
                </td>
                <td>
                  {{item.monthActiveNums}} <!--月活跃人数-->
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
                :page-sizes="[5,10,20]"
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
  import Filter from '@/common/filter'
  import Service from '@/common/service'
  import Store from '@/vuex/index'
  import KlTop from '@/components/klTop'
  import Global from '@/common/global'

  export default {
    name: "salecustomer",
    components: {
      Aside,
      KlTop,
    },
    data() {
      return {
        selectDate: new Date(), // 选择的日期
        selectType: 1, // 日期类行
        selectId: 1, // 数据类行
        startDate: '', // 开始日期
        endDate: '', // 结束日期
        typeOption: [
          {name: '(自然日)过去30天', value: 1},
          {name: '(自然周)过去12周', value: 2},
          {name: '(自然月)过去12个月', value: 3}
        ], // 日期选择数组
        checkIndex: 1,
        dataSelectList: [
          {
            id: 1,
            name: '累计访问人数'
          },
          {
            id: 2,
            name: '打开次数'
          },
          {
            id: 3,
            name: '访问次数'
          },
          {
            id: 4,
            name: '访问人数'
          },
          {
            id: 5,
            name: '访问新人数'
          },
          {
            id: 6,
            name: '平均访问深度'
          },
          {
            id: 7,
            name: '人均停留时长'
          }, {
            id: 8,
            name: '月活跃用户'
          },
        ],// 单选数组
        startDate: '',  // 开始日期
        endDate: '', // 结束日期
        // 表格数据
        download: '行为分析.xlsx',
        href: '',
        noData: true,
        page: 1,
        size: 10,
        total: 0,
        tableData: [],
        sortDatas: [
          {orderType: '', name: '日期', showBlue: false, orderField: ''},
          {orderType: '', name: '累计访问人数', showBlue: false, orderField: ''},
          {orderType: '', name: '打开次数', showBlue: false, orderField: ''},
          {orderType: '', name: '访问次数', showBlue: false, orderField: ''},
          {orderType: '', name: '访问人数', showBlue: false, orderField: ''},
          {orderType: '', name: '新访问人数', showBlue: false, orderField: ''},
          {orderType: '', name: '平均访问深度', showBlue: false, orderField: ''},
          {orderType: '', name: '人均停留时长', showBlue: false, orderField: ''},
          {orderType: '', name: '月活越用户', showBlue: false, orderField: ''},
        ],
      };
    },
    mounted() {
      this.getAllDate(this.selectDate, this.selectType, this.selectId)
    },
    methods: {
      // 获取数据
      getAllDate(selectDate, selectType, selectId) {
        this.endDate = this.timetransAgo(selectDate.getTime())
        if (selectType == 1) {
          let agoDate = selectDate.getTime() - 3600 * 1000 * 24 * 29
          this.startDate = this.timetransAgo(agoDate)
        } else if (selectType == 2) {
          let agoDate = selectDate.getTime() - 3600 * 1000 * 24 * 84
          this.startDate = this.timetransAgo(agoDate)
        } else if (selectType == 3) {
          // 获取12个自然月前的时间
          let agoDateYear = (new Date().getFullYear() - 1)
          this.startDate = new Date().setFullYear(agoDateYear)
          this.startDate = this.timetransAgo((this.startDate + 3600 * 1000 * 24))
        }
        this.gettabletData(this.startDate, this.endDate);
        this.getAllechartsData(this.startDate, this.endDate, selectId, selectType);
      },
      // 切换时间端
      changeDateType(selectType) {
        this.getAllDate(this.selectDate, selectType,this.selectId)
      },
      // 切换日期
      changeDate(val) {
        this.getAllDate(val, this.selectType,this.selectId)
      },
      // 获取所有数据echarts
      getAllechartsData(startDate, endDate ,selectId, selectType){
        Service.dataStatistics().getanalysist({}, this.page, 1000, startDate, endDate).then(response => {
          if (response.errorCode == 0) {
            if (response.data.records.length == 0) {
              this.noData = false;
            } else {
              this.noData = true;
              let echartDatas = response.data.records;
              let optionsData = this.getOptions(selectId, echartDatas)
              let xinterval = this.getXinterval(selectType)
              this.getanalysist( optionsData.xdata, optionsData.ydata, optionsData.title, optionsData.danwei, xinterval)
            }
          }
        });
      },
      getXinterval(type){
        if(type == 1){
          return 4
        } else if(type == 2){
          return 6
        }else if(type == 3){
          return 30
        }
      },
      // 获取列表数据
      gettabletData(startDate, endDate) {
        Service.dataStatistics().getanalysist({}, this.page, this.size, startDate, endDate).then(response => {
          if (response.errorCode == 0) {
            if (response.data.records.length == 0) {
              this.noData = false;
            } else {
              this.noData = true;
              this.total = response.data.total;
              this.tableData = response.data.records;
              this.$nextTick(() => {
                this.tableData = response.data.records;
              })
            }
          }
        });
        // 生产echart

      },
      getOptions(type, tableDate) {
       let optionsSet = {};
        optionsSet.xdata = tableDate.map(item=>{
          return  this.timetransAgo(item.statisticsDate)
        })
        switch (type) {
          case 1:
            optionsSet.title = '累计访问人数'
            optionsSet.danwei = '人数'
            optionsSet.ydata = tableDate.map(item=>{
              return item.totalVisitors
            })
            return optionsSet
            break
          case 2:
            optionsSet.title = '打开次数'
            optionsSet.danwei = '次数'
            optionsSet.ydata = tableDate.map(item=>{
              return item.openNums
            })
            return optionsSet
            break
          case 3:
            optionsSet.title = '访问次数'
            optionsSet.danwei = '次数'
            optionsSet.ydata = tableDate.map(item=>{
              return item.visitNums
            })
            return optionsSet
            break
          case 4:
            optionsSet.title = '访问人数'
            optionsSet.danwei = '人数'
            optionsSet.ydata = tableDate.map(item=>{
              return  item.visitorNums
            })
            return optionsSet
            break
          case 5:
            optionsSet.title = '新访问人数'
            optionsSet.danwei = '人数'
            optionsSet.ydata = tableDate.map(item=>{
              return item.newVisitorNums
            })
            return optionsSet
            break
          case 6:
            optionsSet.title = '平均访问深度'
            optionsSet.danwei = '深度'
            optionsSet.ydata = tableDate.map(item=>{
              return item.visitDepthNums
            })
            return optionsSet
            break
          case 7:
            optionsSet.title = '人均停留时长'
            optionsSet.danwei = '分钟'
            optionsSet.ydata = tableDate.map(item=>{
              return   item.stayLengthStr
            })
            return optionsSet
            break
          case 8:
            optionsSet.title = '月活跃用户'
            optionsSet.danwei = '人数'
            optionsSet.ydata = tableDate.map(item=>{
              return item.monthActiveNums
            })
            return optionsSet
            break
        }
      },
      Decode(arr) {
        var bstr = atob(arr), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr],{type : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      },
      daochu(){
        Service.dataStatistics().statisticsDaochu({}, this.page, this.size, this.startDate, this.endDate).then(response=>{
          if(response.errorCode == 0){
            var blob = this.Decode(response.data);
            if(window.URL.createObjectURL(blob).indexOf(location.host) < 0){//ie不支持
              this.href =  window.navigator.msSaveOrOpenBlob(blob, '行为分析.xlsx');
            }else{
              this.href = URL.createObjectURL(blob);
            }
            this.downloadtable(this.href);
          }else{
            this.$message.error(response.message)
          }
        })
      },
      downloadtable(blobUrl){
        const a = document.createElement('a');
        a.style.display = 'none';
        a.download = '行为分析.xlsx';
        a.href = blobUrl;
        a.click();
      },
      // 生成echart
      getanalysist(xdata, ydata, title, danwei, xinterval) {
        var myChart = this.echarts.init(document.getElementById('analysis'));
        myChart.clear();
        var option = {
          color: ['#56ae97'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          toolbox: {},
          legend: {
            data: [title]
          },
          xAxis: [
            {
              type: 'category',
              data: xdata.reverse(),
              axisPointer: {
                type: 'shadow',
              },
              axisLabel:{
                interval: xinterval
              },
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: danwei,
              splitLine: {
                show: true
              },
              axisLabel: {
                formatter: '{value}'
              }
            },
          ],
          series: [
            {
              name: title,
              type: 'line',
              smooth: true,
              data: ydata.reverse()
            },
          ]
        };
        myChart.setOption(option)
      },
        // 切换数据类行
      checkSelect(item) {
        this.checkIndex = item.id
        this.SelectId = item.id
        this.getAllechartsData(this.startDate, this.endDate, item.id)
      },
      timetransAgo(timestamp) {
        var d = new Date(timestamp);
        var newTime = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate();
        return newTime
      },
      handleSizeChange(val) {
        this.size = val;
        this.gettabletData(this.startDate,this.endDate)
      },
      handleCurrentChange(val) {
        this.page = val;
        this.gettabletData(this.startDate,this.endDate)
      },
    },
  }
</script>

