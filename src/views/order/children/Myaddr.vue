<template>
  <div id="address">
       <van-nav-bar
  title="我的地址"
  :fixed="true"
  :border="true"
  left-text="返回"
  right-text="编辑"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
      <van-address-list
  v-model="chosenAddressId"
  :list="list"
  @add="onAdd"
  @edit="onEdit"
/>
<transition name="router-slider" mode="out-in">
<router-view></router-view>
</transition>



  </div>
</template>

<script>
import { AddressList,Toast} from 'vant';
export default {
 data() {
    return {
      chosenAddressId: '2',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
    
    }
  },
  methods: {
      onClickRight(){
          console.log("hha")
      },
      onClickLeft(){
this.$router.go(-1)
      },
    onAdd() {
        this.$router.push('/confirmorder/address/addaddress')
    //   Toast('新增地址');
    },
    onEdit(item, index) {
         this.$router.push('/confirmorder/address/editaddress')
      Toast('编辑地址:' + index);
    }
  }
}
</script>

<style scoped>
#address{
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background-color: rgb(243, 241, 241);
    z-index: 10;
}
.van-address-list{
    margin-top:3rem
}
.router-slider-enter-active,.router-slider-leave-active{
transition: all 0.5s;
}
.router-slider-enter,.router-slider-leave-active{
    transform:translate3d(2rem,0,0) ;
    opacity: 0;
}

</style>