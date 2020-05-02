<template>
  <div id="category">
    
      <Header></Header>
       <div class="listWrapper" v-if="!showLoading">
          <div class="leftWeapper">
            <ul class="wrapper">
    <li ref="menulist" @click="clickLeft(index)" class="categoryItem" :class="{selected:current===index}" v-for="(left,index) of Categoriesdata" :key="left.id">
        <span class="textWrapper">{{left.name}}</span>
    </li>
   
</ul>
          </div>
            <ContentView :CategoriesDetaildata="CategoriesDetaildata"></ContentView>
          
    </div>
  
  
  
      <van-loading v-else type="spinner" color="pink">拼命加载中</van-loading>
  </div>
</template>

<script>
import Header from './components/Header'
import Bscroll from 'better-scroll'
import {getCategories,getCategoriesDetail} from '../../service/api/index'
import ContentView from '../category/components/Content'
import PubSub from 'pubsub-js'
import {mapMutations} from 'vuex'
import { Toast } from 'vant';
export default {
components:{
  Header,
  ContentView
},
data() {
  return {
    showLoading:true,
    Categoriesdata:[],
    CategoriesDetaildata:[],
    current:0
    // 右边
  }
},
created(){
  this.initData()
},
mounted(){
  PubSub.subscribe('categoryAddToCart',(msg,goods)=>{
if(msg==='categoryAddToCart'){
  this.ADD_GOODS({
    goodsId:goods.id,
    goodsName:goods.name,
    smallImage:goods.small_image,
    goodsPrice:goods.price
  })
  Toast({
    message:'add succ'
  })
}
  })
},
methods:{
   ...mapMutations(['ADD_GOODS']),
 
  async initData(){
let leftRes=await getCategories()
console.log(leftRes)
if(leftRes.success){
  this.Categoriesdata=leftRes.data.cate
  console.log("left",this.Categoriesdata)
}
let rightRes=await getCategoriesDetail("lk001")
console.log(rightRes)
if(rightRes.success){
 this.CategoriesDetaildata=rightRes.data.cate
 console.log("right",this.CategoriesDetaildata)
}
this.showLoading=false

this.$nextTick(()=>{
  this.leftScroll=new Bscroll('.leftWeapper',{probeType:3})
})
  },
   async clickLeft(index){
this.current=index
let menulists=this.$refs.menulist

let el=menulists[index]
console.log(el)
this.leftScroll.scrollToElement(el,300)
let rightRes=await getCategoriesDetail(`lk00${index+1}`)
console.log(rightRes)
if(rightRes.success){
 this.CategoriesDetaildata=rightRes.data.cate
 console.log("right",this.CategoriesDetaildata)
}
  },
}
}
</script>

<style lang="less" scoped>
#category{
    width:100%;
    height:100%;
    background-color: rgb(236, 240, 238);
    overflow: hidden;
    .listWrapper{
      display: flex;
      position: absolute;
      top:2.75rem;
      bottom:3rem;
      width:100%;
      overflow: hidden;
      .leftWeapper{
background-color: rgb(231, 234, 235);
width:5.5rem;
flex:0 0 5.3rem;
  .wrapper {
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            overflow-scrolling: touch;
            position: absolute;
            left: 0;
            bottom: 0;
            top: 0;
            width: 5.3125rem;
            background: #F4F4F4;
        }


        .wrapper::-webkit-scrollbar {
            display: none;
        }

        .categoryItem {
            padding: 0.75rem 0;
            border-bottom: solid 1px #E8E9E8;
        }

        .categoryItem .textWrapper {
            line-height: 1.25rem;
            border-left: solid 0.1875rem transparent;
            padding: 0.3125rem 0.6875rem;
            font-size: 0.8125rem;
            color: #666666;
        }
        .categoryItem.selected {
            background: #FFF;
        }

        .categoryItem.selected .textWrapper {
            border-left-color: #3cb963;
            font-weight: bold;
            font-size: 0.875rem;
            color: #333333;
        }

        @media (min-width: 960px) {
            .wrapper {
                border-right: 1px solid #E8E9E8;
            }
            .wrapper .categoryItem {
                background: #fff;
            }
        }
      }
      }
     
}
.van-loading{
  position: absolute;
  top:40%;
  left:50%;
  transform: translate(-50%,-40%);
}

</style>