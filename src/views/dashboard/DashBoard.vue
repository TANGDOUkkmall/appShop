<template>
<!-- http://demo.itlike.com/web/xlmc/api/homeApi
http://demo.itlike.com/web/xlmc/api/homeApi/categories
http://demo.itlike.com/web/xlmc/api/homeApi/categories -->
  <div id="dashboard">
     <van-tabbar v-model="active" active-color="green">
  <van-tabbar-item replace to="/dashboard/home">
    <span>首页</span>
    <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.inactive"
    >
  </van-tabbar-item>
  <van-tabbar-item replace to="/dashboard/category" icon="bag-o">分类</van-tabbar-item>
  <van-tabbar-item replace to="/dashboard/cart" icon="shopping-cart-o" :info="goodsNum>0?goodsNum:''">购物车</van-tabbar-item>
  <van-tabbar-item replace to="/dashboard/mine" icon="smile-o">我的</van-tabbar-item>
</van-tabbar>
<keep-alive>
   <router-view v-if="$route.meta.keepAlive"></router-view>
</keep-alive>
   <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'

export default {
data() {
    return {
      active: Number(sessionStorage.getItem('tabbaractiveindex'))|| 0,
      icon: {
        active: require('@/images/tabbar/home_selected.png'),
        inactive:require('@/images/tabbar/home_default.png')
      }
    }
  },
  watch:{
    active(value){
      let tabbaractiveindex=value>0?value:0
      sessionStorage.setItem('tabbaractiveindex',value)
    }
  },
  computed:{
    ...mapState(['shopCart']),
    goodsNum(){
if(this.shopCart){
 let num=0
 
Object.values(this.shopCart).forEach((goods,index)=>{
  if(goods.checked){
    num+=goods.num
    }


})
return num
}else{
  return 0;
}
    }
  },
  mounted(){
this.INIT_SHOP_CART()
  },
  methods:{
    ...mapMutations(['INIT_SHOP_CART'])
  }
}
</script>

<style lang="less" scoped>
#dashboard{
    width:100%;
    height:100%;
    background-color: rgb(138, 106, 126);

}
</style>
