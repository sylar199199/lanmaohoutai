<template>
  <div id="app">
      <loading v-if="isLoading"></loading>
    <router-view/>
  </div>
</template>

<script>
    import Store from './vuex/index';
    import Loading from './components/Loading';
export default {
  name: 'App',
    computed: {
        isLoading: function () {
            return Store.state.isLoading
        }
    },
    components: {
        Loading,
    },
    data() {
        return {
            router:'home'
        };
    },
}
</script>

<style>
.flexWrap{
    flex-wrap: wrap;
}
.alignCenter{
    align-items: center;
}
    .el-menu--horizontal>.el-menu-item.is-active {
        border-bottom: 2px solid #0d2c4b;
        color: #0d2c4b;
    }
    #remote .row label{
        width: 56px;
    }
    .searchBox .el-date-editor .el-range__close-icon{
        margin-top: -8px;
    }
    .adressBox .el-textarea__inner{
        width: 220px;
        height: 80px!important;
    }
    .adressBox .el-input--suffix .el-input__inner{
        width: 220px;
        border-radius: 0;
        color: #000;
    }
    .messagemessageone  .el-input--suffix .el-input__inner{
        width: 300px;
        border-radius: 0;
        color: #000;
    }
    .adressBox .el-select .el-input .el-input__inner:hover{
        border-color: #e5e5e5;
    }
    .adressBox .el-select .el-input__inner:focus {
        border-color: #0d2c4b;
    }
    .adressBox .el-select .el-input.is-focus .el-input__inner{
        border-color: #e5e5e5;
    }
    .adressBox .el-cascader .el-input .el-input__inner:focus, .adressBox .el-cascader .el-input.is-focus .el-input__inner {
        border-color: #e5e5e5;
    }
    .adressBox .el-cascader:not(.is-disabled):hover .el-input__inner{
        border-color: #e5e5e5;
    }
    .el-message-box__btns{
        text-align: center;
    }
    .el-button--small{
        width: 120px;
        height: 40px;
        border-radius: 20px;
        border: solid 1px #0d2c4b;
    }
#app {
  font-family: "微软雅黑",PingFang SC, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.el-range-editor.is-active, .el-range-editor.is-active:hover{
    border-color: #e5e5e5;
}
.el-range-editor, .el-range-editor:hover{
    border-color: #e5e5e5;
}
.el-date-editor .el-range__close-icon{
    margin-top: -4px;
}
    .el-upload{
        width: 100%;
    }
.searchBox .el-icon-date{
    margin-top: -6px;
    line-height: 32px;
}
.searchBoxone .el-select .el-input__inner{
    width: 100px;
}
.el-date-editor .el-range-input{
    border-top: 1px solid #DCDFE6;
    border-bottom: 1px solid #DCDFE6;
    line-height: 30px;
}
    .el-message-box__btns button:nth-child(2) {
        margin-left: 20px;
    }

.el-icon-arrow-up{
    line-height: 30px;
}
.timeSelect .el-icon-time{
    line-height: 32px;
}
.el-date-editor.el-input{
    width: 200px;
}
.el-tabs__active-bar{
  left:30px;
    background-color: #0d2c4b;
}
.el-tabs__item.is-active {
    color: #0d2c4b;
}
.el-tabs__item:hover {
    color: #0d2c4b;
    cursor: pointer;
}
.el-tree-node__children .el-tree-node__children{
    word-wrap:break-word;
    min-width: 330px;
}
.el-tabs__item{
    font-size: 12px;
    color: #929292;
}
.el-tree-node {
    white-space: normal;
    outline: 0;
}
.el-tree-node__children .el-tree-node__children .el-tree-node {
    display:inline-block;
    width: 170px;
}
.el-tree-node__children .el-tree-node__children .el-tree-node .el-tree-node__content{
    padding-left: 30px!important;
    min-height: 30px;
}
.el-message .el-icon-success{
    color: #0d2c4b;
}
.el-message--success .el-message__content{
    color: #0d2c4b;
}
.el-input__inner{
    border-radius: 0;
    border-color: #e5e5e5;
}
.el-radio__inner:hover{
    border-color: #0d2c4b;
}
.el-tabs__nav{
    padding-left: 30px;
}
.el-date-table td.today span {
    color: #0d2c4b;
    font-weight: 700;
}

.el-textarea__inner:focus{
    border-color: #0d2c4b;
}
.el-textarea{
    font-size: 12px;
    color: #000;
}
.el-date-table td.current:not(.disabled) span {
    color: #fff;
    background-color: #0d2c4b;
}
.el-radio__input.is-checked .el-radio__inner {
    border-color: #0d2c4b;
    background: #0d2c4b;
}
.el-radio__input.is-checked+.el-radio__label {
    color: #0d2c4b;

}
.el-input--suffix .el-input__inner{
    border-radius: 4px;
}
.el-date-table td span:hover{
    color: #0d2c4b;
}
.el-message-box__title{
    text-align: center;
}
    .el-textarea__inner:hover{
        border: solid 1px #e5e5e5;
    }
    .el-textarea__inner{
        border: solid 1px #e5e5e5;
        border-radius:  0;
        padding: 5px 10px;
        color: #000;
        font-size: 12px;
    }
    .el-message-box__status.el-icon-warning{
        display: none;
    }
    .el-message-box__message{
        text-align: center;
    }
    .el-textarea__inner:focus{
        border: solid 1px #e5e5e5;
    }
.el-radio__label{
    font-size: 12px;
}
.el-button:hover{
    color: #0d2c4b;
    border-color: #0d2c4b;
    background-color: #0d2c4b;
}
.el-button--text:hover{
    color: #0d2c4b;
    background-color: #fff;
    border-color: #fff;
}
    .el-button--text{
        color: #0d2c4b;
    }
.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #0d2c4b;
    border-color: #0d2c4b;
}
.el-checkbox__input.is-checked+.el-checkbox__label {
    color: #0d2c4b;
}
.el-pager li.active {
    color: #0d2c4b;
    font-weight: 600;
    cursor: default;
    font-size:16px;
}
.el-date-editor .el-range__icon{
    margin-top: -10px;
}
.el-pager li:hover{
    color: #0d2c4b;
}
.el-input{
    font-size: 12px;
}
.el-pagination__sizes .el-input .el-input__inner:hover {
    border-color: #0d2c4b;
}
.el-select-dropdown__item.selected {
    color: #0d2c4b;
    font-weight: 700;
}
.el-pagination__editor.el-input .el-input__inner:focus{
    border-color: #0d2c4b;
}
.el-message--warning{
    z-index: 20000!important;
}
.el-message{
    z-index: 20000!important;
}
    .el-button--default:hover{
        border-color: #0d2c4b;
        color: #232323;
        background-color: #fff;
    }
    .el-message-box{
        padding-bottom: 20px;
        width: 360px;
    }
.el-button--primary {
    color: #fff!important;
    background-color: #0d2c4b!important;
}

    .el-checkbox+.el-checkbox{
        margin-left: 0!important;
        margin-right: 20px!important;
    }
.el-checkbox{
    margin-right: 15px!important;
}

</style>
