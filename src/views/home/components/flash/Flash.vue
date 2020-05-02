<template>
  <div class="wrapper">
      <div class="titleWrapper">
          <div class="title">限时抢购</div>
<span class="actionStateText">07:00</span>
<div class="actionStateTextEnd">已结束</div>
<span class="more">更多</span>
      </div>
      <div class="itemsWrapper">
<FlashSale v-for="product of flashsalelist" :product="product" :key="product.id"></FlashSale>
      </div>
  </div>
</template>

<script>
import FlashSale from '../flash/Flashsale'
export default {
    props:{
        flashsalelist:Array
    },
components:{
    FlashSale
}
}
</script>

<style lang="less" scoped>
   .wrapper{ 
       position:relative;
       margin-top:0.6rem;
       padding:1.25rem 0 0.9rem 0;
       background:white;
    .titleWrapper{
       position: relative;
       margin:0 0.6rem 0.6rem 0.6rem;
       height:1.5rem;
        } 
        .title{
            display: inline-block;
            border-left: 4px #333333 solid;
            padding-left:0.3rem;
            height:1.3rem;
            line-height:1.3rem;
            vertical-align: middle;
            font-size: 1.8rem;

        } 
        .actionStateText{
            border-radius: 3px;
            padding:0.5rem;
            color:cadetblue;
            margin-left:0.3rem
        }
        .actionStateTextEnd{
display: inline-block;
vertical-align:middle;
font-size:0.8rem;
border-radius: 3px;
padding:0.15rem;
border:1px solid #333333;
color:#666;
margin-left:0.3rem;
        }
        .more{
            position:absolute;
            top:0;
            right:0;
            line-height: 1.5rem;
            font-size: 0.8rem;
            color:#2eb257;
        }
        .itemsWrapper{
            white-space: nowrap;
            overflow-x: auto;
            overflow-y: hidden;
           
        }
   }
</style>