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
    }
  }

  .margintop20 {
    margin-top: 20px;
  }

  .marginleft20 {
    margin-left: 20px;
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
                <el-select v-model="selectday" placeholder="">
                  <el-option
                    v-for="item in timeOption"
                    :key="item.value"
                    :label="item.name"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div class="searchBox" style="margin-left: 10px;">
                <el-date-picker
                  v-model="selectTime"
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
                   @click="checkType(item.id)"></i>
                <span class="typeText colorblack font12 marginLeft10" @click="checkType(item.id)">{{item.name}}</span>
              </div>
            </div>
            <div id='analysis'></div>
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
        selectTime: '',
        timeOption: [
          {name: '(自然日)过去30天', value: 1},
          {name: '(自然周)过去12周', value: 2},
          {name: '(自然月)过去12个月', value: 3}
        ],
        checkIndex: 1,
        dataType: 1,
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
        ],
        shelvesType: 0,
        href: '',
        pickerOptions: {
          disabledDate(time) {
            let curDate = (new Date()).getTime();
            let three = 90 * 24 * 3600 * 1000;
            let threeMonths = curDate - three;
            return time.getTime() < threeMonths;
          }
        },
        dialogFormVisible: false,
        sortDatas: [
          {orderType: '', name: '', showspan: false, orderField: ''},
          {orderType: '', name: '浏览次数(pv)', showspan: false, orderField: ''},
          {orderType: '', name: '独立访客(uv)', showspan: false, orderField: ''},
          {orderType: '', name: '人均浏览页数(pv/uv)', showspan: false, orderField: ''},
          {orderType: 'desc', name: '注册人数(人)', showspan: false, orderField: ''},
          {orderType: 'desc', name: '下单客户(人)', showspan: false, orderField: ''},
          {orderType: 'desc', name: '订单数(个)', showspan: false, orderField: ''},
          {orderType: 'desc', name: '订单收入(元)', showspan: false, orderField: ''}
        ],
        selectday: 1,
        normOption: [
          {name: '浏览指标（uv、pv）', value: 1},
          {name: '注册用户', value: 2},
          {name: '订单收入', value: 3},
          {name: '订单数量', value: 4}
        ],
        today: null,
        showOne: false,
        showTwo: false,
        showThree: false,
        showFour: false,
        xData: [1,2,3,4,5],
        yData: [1,2,3,4,5],
        getoverviewCount: null,
        todoCount: null,
        startDate: '',
        endDate: '',
        insuranceDate: '',
        dataTable: [
          {
            xdata:[1,2,3,4,5],
            ydata:[2,2,3,4,5]
          }
        ],
      };
    },
    created() {
      /*this.today = this.getDay(0, 'getday');*/
      // console.log(this.getDay(-29))//获取最近30天
      // console.log(this.getDay(-6))
      // console.log(this.getPassYearFormatDate());//获取最近12个月
    },
    watch: {
      'selectday': function () {
        if (this.selectday) {
          if (this.selectday == 1) {
            this.getDay(-29, this.selectnorm)
          } else if (this.selectday == 2) {
            this.getDay(-6, this.selectnorm)
          } else if (this.selectday == 3) {
            this.getPassYearFormatDate(this.selectnorm)
          }
        } else {
        }
      },
      'selectnorm': function () {
        if (this.selectnorm) {
          if (this.selectday == 1) {
            this.getDay(-29, this.selectnorm)
          } else if (this.selectday == 2) {
            this.getDay(-6, this.selectnorm)
          } else if (this.selectday == 3) {
            this.getPassYearFormatDate(this.selectnorm)
          }
        }
      }
    },
    mounted() {
      /*
           // this.getoverview();
            this.gettodo();
            // this.getanalysis()
            this.overviewtable()//概览表格
            this.getDay(-29,this.selectnorm)//获取30天的*/
      this.getDay(-29, this.dataType)

    },
    methods: {
      checkType(id) {
        this.checkIndex = id
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      Decode(arr) {
        var bstr = atob(arr), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      },
      //下载表格
      daochu() {
        if (this.shelvesType == 1) {
          var endDate = '', startDate = '';
          if (this.endDate || this.startDate) {
            endDate = Date.parse(new Date(this.endDate.replace(/-/g, "/")));
            startDate = Date.parse(new Date(this.startDate.replace(/-/g, "/")));
          } else {
            endDate = this.endDate;
            startDate = this.startDate;
          }
          Service.home().overviewexport({
            startDate: startDate,
            endDate: endDate
          }).then(response => {
            if (response.errorCode == 0) {
              var blob = this.Decode(response.data);
              if (window.URL.createObjectURL(blob).indexOf(location.host) < 0) {//ie不支持
                this.href = window.navigator.msSaveOrOpenBlob(blob, '报表.xlsx');
              } else {
                this.href = URL.createObjectURL(blob);
              }
              this.downloadtable(this.href);
              this.dialogFormVisible = false
            } else {
              this.$message.error(response.message)
            }

          }, err => {
          });
        } else if (this.shelvesType == 0) {
          Service.home().tableexport({}).then(response => {
            if (response.errorCode == 0) {
              var blob = this.Decode(response.data);
              if (window.URL.createObjectURL(blob).indexOf(location.host) < 0) {//ie不支持
                this.href = window.navigator.msSaveOrOpenBlob(blob, '报表.xlsx');
              } else {
                this.href = URL.createObjectURL(blob);
              }
              this.downloadtable(this.href);
              this.dialogFormVisible = false;
            } else {
              this.$message.error(response.message)
            }

          }, err => {
          });
        }
      },
      downloadtable(blobUrl) {
        const a = document.createElement('a');
        a.style.display = 'none';
        a.download = '报表.xlsx';
        a.href = blobUrl;
        a.click();
      },
      //概览表格
      overviewtable() {
        Service.home().overviewtable({}, 5).then(response => {
          if (response.errorCode == 0) {
            var data = response.data;
            for (let i in data) {
              if (data[i].pv == 0) {
                data[i].puv = 0
              } else {
                data[i].puv = (data[i].pv / data[i].uv).toFixed(2)
              }
            }
            this.dataTable = response.data;
            this.$nextTick(() => {
            })
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
      enddateChange(val) {
        if (val) {
          this.startDate = this.timetrans(val[0], 'getday');
          this.endDate = this.timetrans(val[1], 'getday')
        } else {
          this.startDate = '';
          this.endDate = '';
        }
      },
      timetrans(timestamp, type) {
        var d = new Date(timestamp);
        if (type == 'getmonth') {
          var newTime = d.getFullYear() + '-' + (d.getMonth() + 1);
        } else if (type == 'getday') {
          var newTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();

        }

        return newTime
      },
      //获取累计访问人数
      gettodayuvpv(startDate, type, yname) {
        this.getanalysist([1,2,3], [1,2,3], type, yname)
        return;
      },
      getDay(day, type) {
        var today = new Date();
        var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;

        today.setTime(targetday_milliseconds); //注意，这行是关键代码
        if(type == 1){
          // 累计访问人数
          this.gettodayuvpv(targetday_milliseconds, '累计访问人数', '人数')
        }
      },
      doHandleMonth(month) {
        var m = month;
        if (month.toString().length == 1) {
          m = "0" + month;
        }
        return m;
      },
      getPassYearFormatDate(type) {
        var nowDate = new Date();
        var date = new Date(nowDate);
        date.setDate(date.getDate() - 365);

        // var seperator1 = "-";
        // var year = date.getFullYear();
        // var month = date.getMonth() + 1;
        // var strDate = date.getDate();
        // if (month >= 1 && month <= 9) {
        //     month = "0" + month;
        // }
        // if (strDate >= 0 && strDate <= 9) {
        //     strDate = "0" + strDate;
        // }
        // var currentdate = year + seperator1 + month + seperator1 + strDate;
        if (type == 1) {//pv uv
          this.gettomonthuvpv(date.getTime())
        } else if (type == 2) {//注册用户
          this.gettomonthuser(date.getTime())
        } else if (type == 4) {//订单
          this.gettomonthorder(date.getTime())
        }
      },
      getoverview() {
        Service.home().getoverview({}).then(response => {
          if (response.errorCode == 0) {
            this.getoverviewCount = response.data;
          } else {
            this.$message.error(response.message)
          }

        }, err => {
        });
      },
       // 生成echart
      getanalysist(xdata, y1d,type,yname) {
        var myChart = this.echarts.init(document.getElementById('analysis'));
        myChart.clear()
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
            data: [type]
          },
          xAxis: [
            {
              type: 'category',
              data: xdata,
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: yname,
              splitLine: {
                show: type
              },
              axisLabel: {
                formatter: '{value}'
              }
            },
          ],
          series: [
            {
              name: '累计访问人数',
              type: 'line',
              data: y1d
            },
          ]
        };
        myChart.setOption(option)
      },
    },
  }
</script>

