<template>
      <div> <van-nav-bar
  title="你的订单"
  :fixed="true"
  :border="true"
  left-text="返回"
  right-text="编辑"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
<van-contact-card
  type="add"
  add-text="添加你的info"
  tel="13510974706"
  @click="chooseaddr"
/>
   
<!--  -->
<van-cell-group>
  
  <van-cell title="送达时间" value="请选折送达时间" is-link></van-cell>
  <van-cell value="内容" is-link :center="true">
  <!-- 使用 title 插槽来自定义标题 -->
  <template #title>
    <img src="../../images/50 (1).jpg" alt="" style="width:3rem;height:3rem">
    <img src="../../images/50 (4).jpg" alt="" style="width:3rem;height:3rem">
    <img src="../../images/51 (3).jpg" alt="" style="width:3rem;height:3rem">

  </template>
</van-cell>
</van-cell-group>

<van-cell-group>
  <van-cell title="支付方式" value="支付宝" is-link></van-cell>
</van-cell-group>
<!--  -->
<van-cell-group>
 <van-cell title="备注">
 <input type="text" placeholder="选填！！备注你的需求">
</van-cell>
</van-cell-group>
<!--  -->
<van-cell-group>
  <van-cell title="商品金额" value="$60.3" is-link></van-cell>
  <van-cell title="配送费" value="$100" is-link></van-cell>

</van-cell-group>

<van-submit-bar
  label="帅气漂亮美丽的你请支付"
  button-type="success"
  :price="1000"
  button-text="提交订单"
  @submit="onSubmit"
/>
<transition name="router-slider" mode="out-in">
    <router-view></router-view>
</transition>

  </div>
</template>

<script>
import { NavBar,Dialog,ContactCard, ContactList, ContactEdit,Cell, CellGroup,SubmitBar} from 'vant';
export default {

     methods: {
         onSubmit(){
console.log("你吸引了我的注意")
         },
    chooseaddr(){
this.$router.push("/confirmorder/address")
         },
    onClickLeft() {
          Dialog.confirm({
  title: '提示',
  message: '你要取消订单吗'
}).then(() => {
     this.$router.go(-1)
    console.log("白白")
}).catch(()=>{
this.$toast({
    message:"已取消"
})
})
    
    },
    onClickRight() {
     this.$toast({
          message:"编辑"
      });
    }
  }

}
</script>

<style scoped>
#order{
    width:100%;
    height:100%;
    background-color: rgb(223, 230, 230);
}
.router-slider-enter-active,.router-slider-leave-active{
transition: all 0.5s;
}
.router-slider-enter,.router-slider-leave-active{
    transform:translate3d(2rem,0,0) rotate(90deg);
    opacity: 0;
}
.van-contact-card{
    margin-top:3rem
}
.van-cell-group{
    margin-top:0.5rem
}

</style>