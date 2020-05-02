<template>
  <div id="addAddress">
 <van-nav-bar
  title="添加地址"
  :fixed="true"
  :border="true"
  left-text="返回"
  right-text="编辑"
  left-arrow
  @click-left="onClickLeft"

/>
<van-address-edit
  :area-list="areaList"
  show-postal
 
  show-set-default
  show-search-result
  :search-result="searchResult"
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
  
  @change-detail="onChangeDetail"
/>
  </div>
</template>

<script>
import { AddressEdit,Toast} from 'vant';
export default {
     data() {
    return {
      areaList,
      searchResult: []
    }
  },
methods:{
  onClickLeft(){
    this.$router.go(-1)
  },
     onSave() {
      Toast('save');
    },
  
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    }
  },
    onClickLeft(){
        this.$router.go(-1)
    }
}

</script>

<style scoped>
#addAddress{
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background-color:rgb(226, 221, 221) ;
 z-index: 9999;
}
.van-address-edit{
  margin-top:3rem
}
</style>