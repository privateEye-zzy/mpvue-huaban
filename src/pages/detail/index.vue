<template>
  <div class="container">
    <scroll-view scroll-y style="height:calc(100vh);" scroll-top="0">
      <dl class="z-width-100-percent ub-box ub-col">
        <dd @click.stop="previewImage(currImgObj.img)" class="ub-box z-width-100-percent z-padding-h-10-px z-margin-bottom-10-px z-box-sizing-border">
          <image class="z-width-100-percent" :src="currImgObj.img" mode="widthFix"></image>
        </dd>
        <dd class="ub-box z-width-100-percent z-padding-h-10-px z-margin-bottom-10-px z-box-sizing-border">
          <span class="z-font-size-16 z-color-333">{{currImgObj.mainTitle}}</span>
        </dd>
        <dd class="ub-box z-width-100-percent z-padding-h-10-px z-margin-bottom-10-px z-box-sizing-border">
          <span class="z-font-size-14 z-color-888 z-lineHeight-22">{{currImgObj.describe}}</span>
        </dd>
      </dl>
    </scroll-view>
     <!--fixed部分-->
    <ul class="fixCon ub-box ub-ver ub-between">
      <li class="ub-box ub-ver z-padding-all-10-px">
        <span class="z-font-size-14 z-color-999"></span>
      </li>
      <li class="ub-flex-1 ub-box ub-end z-padding-all-10-px">
        <div class="ub-box ub-ver">
          <div class="shareBtn ub-box ub-ver z-margin-right-10-px">
             <i class="iconfont icon-shangchuan z-color-333 z-font-size-22 z-margin-right-5-px"></i>
            <span class="z-font-size-14 z-color-888">分享</span>
          </div>
          <span class="collectBtn ub-box ub-ver">
            <i class="iconfont icon-31guanzhu1xuanzhong z-color-fff z-font-size-22 z-margin-right-5-px"></i>
            <span class="z-font-size-14 z-color-fff">采集</span>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import {listData} from "../../utils/allData.js"
  export default {
    data () {
      return {
        currImgObj: {},
      }
    },
    methods: {
      previewImage(img) {
        wx.previewImage({urls: [img]})
      },
    },
    mounted() {
      const listID = this.$root.$mp.query.listID | 0
      const imgID = this.$root.$mp.query.imgID | 0
      this.currImgObj = listData[listID]['listImgs'][imgID]
    },
    onShow () {
      wx.setNavigationBarTitle({title: '详情页'})
    }
  }
</script>
<style scoped>
  .container{width:100%;height:100vh;background:#fff;}
  .fixCon{position: fixed;left: 0;bottom: 0;z-index: 10;width: 100%;background: #fff;}
  .shareBtn, .collectBtn{padding:5px 10px;}
  .shareBtn{background: #eee}
  .collectBtn{background: #ff5722}
</style>
