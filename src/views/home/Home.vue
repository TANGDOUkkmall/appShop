<template>
  <div id="home">
    <div v-if="!showLoading">
       <Header/>
    <Swiper :sowinglist="sowinglist"></Swiper>
   <Nav :navlist="navlist"></Nav>
   <Flash :flashsalelist="flashsalelist"></Flash>
   <YouLike :youlikelist="youlikelist"></YouLike>
   <MarkPage v-if="showbackfun" @scrollToTop="scrollToTop"></MarkPage>
    </div>
    <van-loading v-else type="spinner" color="pink">拼命加载中</van-loading>
  </div>
</template>

<script> 
import {getHomeData} from './../../service/api/index'
import Header from './components/header/header'
import Swiper from './components/sowing/sowing'
import Nav from './components/Nav/Nav'
import Flash from './components/flash/Flash'
import YouLike from './components/youlike/YouLike'
import MarkPage from './components/markpage/MarkPage'
import {showback} from '../../config/global'
import PubSub from 'pubsub-js'
import {mapMutations} from 'vuex'
import { Toast } from 'vant';
export default {
  data() {
    return {
      sowinglist:[],
      navlist:[],
      flashsalelist:[],
      youlikelist:[],
      showLoading:true,
      showbackfun:false
    }
  },
components:{
Header,
Swiper,
Nav,
Flash,
YouLike,
MarkPage
},
mounted(){
  PubSub.subscribe('homeAddToCart',(msg,goods)=>{
if(msg==='homeAddToCart'){
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
created(){
  getHomeData().then(res=>{
    console.log(res)
    if(res.success){
      this.sowinglist=res.data.list[0].icon_list
      this.navlist=res.data.list[2].icon_list
      this.flashsalelist=res.data.list[3].product_list
      this.youlikelist=res.data.list[12].product_list

console.log(this.navlist)
    console.log(this.sowinglist)
    console.log(this.flashsalelist)
    console.log(this.youlikelist)

    }
    if(this.sowinglist.length>0){
      this.showLoading=false
      showback((status)=>{
this.showbackfun=status
      })
    }
  })
},
methods:{
  ...mapMutations(['ADD_GOODS']),
scrollToTop(){
  alert("人生太难了")
}
}
}
</script>

<style lang="less" scoped>
#home{
    width:100%;
    height:100%;
    background-color: rgb(143, 43, 43);
}
.van-loading{
  position: absolute;
  top:40%;
  left:50%;
  transform: translate(-50%,-40%);
}
</style>