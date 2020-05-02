<template>
  <div id="mine" v-if="userInfo.token">
    <van-nav-bar title="有魅力的你" :fixed="true" :border="false" />
    <van-cell-group>
      <van-cell style="background-color:darkolivegreen">
        <template #title>
          <div class="person">
            <img src="../../images/50 (1).jpg" alt="" />
            <div class="personinfo">
              <span>升幂小仙女</span>
              <span>微信号</span>
            </div>
          </div>
        </template>
      </van-cell>
    </van-cell-group>

    <van-cell-group style="margin:0">
      <van-cell
        icon="hot"
        title="我的订单"
        value="查看所有订单"
        is-link
      ></van-cell>
      <van-grid>
        <van-grid-item
          v-for="(order, index) of orderData"
          :key="index"
          :icon="order.icon"
          :text="order.title"
        />
      </van-grid>
    </van-cell-group>

    <van-cell-group style="margin-top:0.3rem">
      <van-cell icon="hot" title="我的优惠券" value="1张" is-link></van-cell>
      <van-cell icon="hot" title="我的收货地址" value="1张" is-link></van-cell>
    </van-cell-group>

    <van-cell-group style="margin-top:0.3rem">
      <van-cell
        icon="hot"
        title="联系客服"
        value="客服时间 07:00-22:00"
        is-link
      ></van-cell>
      <van-cell icon="hot" title="意见反馈" value="1张" is-link></van-cell>
    </van-cell-group>

    <van-cell-group style="margin-top:0.3rem">
      <van-cell
        icon="hot"
        title="美少女战士"
        value="下载app体验超好"
        is-link
      ></van-cell>
    </van-cell-group>
  </div>
  <select-login v-else></select-login>
</template>

<script>
import { NavBar, Grid, GridItem } from "vant";
import {mapState,mapMutations} from "vuex"
import SelectLogin from "./../../views/login/SelectLogin";
export default {
  data() {
    return {
      orderData: [
        { icon: "video-o", title: "待支付" },
        { icon: "chat-o", title: "待收货" },
        { icon: "good-job-o", title: "待评价" },
        { icon: "more-o", title: "售后" },
      ],
    };
  },
  computed:{
    ...mapState(["userInfo"])
  },
  components: {
    SelectLogin,
  },
};
</script>

<style lang="less" scoped>
#mine {
  width: 100%;
  height: 100%;
  background-color: rgb(231, 217, 188);
}
.van-nav-bar {
  background-color: darkolivegreen;
}
.van-nav-bar__title {
  color: white;
  font-weight: 600;
}
.van-cell-group {
  margin-top: 2.5rem;
}
.person {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.person > img {
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  border: 0.2rem dotted white;
}
.personinfo {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}
.personinfo > span {
  font-size: 18px;
  color: white;
}
.van-icon-hot {
  color: brown;
  font-size: 25px;
}
</style>
