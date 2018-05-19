<template>
  <div class="masonry">
    <div class="item" v-for="(imgObj, i) in imgList" :key="i" @click.stop="$openWin('/pages/detail/main?listID='+listID+'&imgID='+i)">
      <div class="item-content" style="height: 150px">
        <image class="z-width-100-percent z-height-100-percent z-border-radius-3" :src="imgObj.img" mode="aspectFill"></image>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['imgList'],
    data () {
      return {
        listID: '0',
      }
    },
    onLoad() {
      this.listID = this.$root.$mp.query.id | 0
    },
    methods: {},
  }
</script>
<style scoped>
  .masonry{width: 100%;column-count: 2;column-gap: 8px;}
  .item{break-inside: avoid;box-sizing: border-box;padding-bottom: 8px}
  .item-content{width: 100%;;background: #eee}
</style>