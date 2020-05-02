<template>
  <div class="wrapper">
    <div class="itemWrapper" v-for="item of navlist" :key="item.cid">
        <div class="imageWrapper">
            <img class="image" :src="item.icon_url">
        </div>
        <div class="titleWrapper">
            <span class="title">{{item.name}}</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
props:{
  navlist:Array
}
}
</script>

<style scoped>
  .wrapper {
            padding-top: 0.9375rem;
            background: #FFF;
            padding-bottom: 0.9375rem;
        }

        .itemWrapper {
            display: inline-block;
            padding-top: 0.3125rem;
            width: 20%; }

        .imageWrapper {
            padding-bottom: 58.823%;
            height: 0;
            overflow: hidden;
            text-align: center; }

        .image {
            width: 58.823%;
            height: auto;
            display: inline-block; }

        .titleWrapper {
            padding: 0.4375rem 0.3125rem 0.375rem 0.3125rem; }

        .title {
            font-size: 0.75rem;
            color: #555555;
            text-align: center;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
</style>