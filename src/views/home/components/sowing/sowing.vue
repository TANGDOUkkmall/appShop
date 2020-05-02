<template>
  <swiper class="swiper" :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="item of sowinglist" :key="item.public_id">
       <img :src="item.icon_url" :alt="item.public_name">
     </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    props:{
        sowinglist:Array
    },
components: {
    swiper,
    swiperSlide
  },
  data() {
      return {
         swiperOption: {
             notNextTick:true,
  pagination: {
            el: '.swiper-pagination',
            clickable:true,
          },
          loop:true,
          autoplay:{
              delay:2000
          },
          speed:600,
          on:{
              slideChangeTransitionEnd(){
                //   console.log(this.activeIndex)
              }
          }
         } ,
      }
  },
  computed:{
      swiper(){
          return this.$refs.mySwiper.swiper
      }
  },
  mounted(){
     
  },
  methods:{

  }
}
</script>

<style>
.swiper{
    width:100%;
    height:250px;
    background-color:rgb(199, 193, 199);
    }
    .swiper img{
        width:100%;
        height:100%;
    }
    .swiper-pagination-bullet-active{
        background-color: brown ;
    }
</style>