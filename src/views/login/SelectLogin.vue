<template>
  <div class="select-login">
<div class="bottom">
    <img src="./images/04.jpg" alt="">
</div>
<h3 style="margin-top:100px">选择登录方式</h3>
<button @click="login">手机登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
 methods:{
  login(){
    this.$router.push('/login')
  },
}
}
</script>

<style scoped>
.select-login{
    background-color: rgb(216, 187, 207);
    width:100%;
    height:100%;
    position: fixed;
    left:0;
    top:0;
    bottom:0;
    display:flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;

}
button{
    width:80%;
    height:50px;
    z-index: 99;
    margin-top:100px;
    border-radius: 0.3rem;
    background-color: rgb(116, 41, 82);
    border:none;
    font-size: 20px;
    color: rgb(253, 245, 245);
   
}
.bottom{
    position:fixed;
    top:130px;
    left:50%;
    transform: translateX(-50%);
}
.bottom>img{
  margin-top:100px;
  border-radius: 50%;
}
</style>