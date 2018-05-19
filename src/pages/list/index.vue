<template>
  <div class="container">
    <scroll-view scroll-y style="height:calc(100vh);" scroll-top="0">
      <dl class="z-width-100-percent ub-box ub-col">
        <dd class="ub-box z-width-100-percent z-padding-h-10-px z-margin-bottom-10-px z-box-sizing-border">
          <ul class="z-width-100-percent ub-box ub-ver ub-between z-padding-v-20-px">
            <li class="ub-box ub-col z-width-70-percent">
              <span class="z-font-size-16 z-color-000 z-margin-bottom-10-px">{{currList.listMainTitle}}</span>
              <span class="z-width-100-percent z-lineHeight-22 z-font-size-14 z-color-888">{{currList.listDescribe}}</span>
            </li>
            <span class="focusBtn ub-box ub-ver z-font-size-12 z-color-333">+关注</span>
          </ul>
        </dd>
        <dd class="z-width-100-percent z-padding-all-10-px z-box-sizing-border z-bg-color-fff">
          <!--瀑布流-->
          <waterfall :imgList="currList.listImgs"></waterfall>
        </dd>
      </dl>
    </scroll-view>
  </div>
</template>
<script>
  import {listData} from "../../utils/allData.js"
  import waterfall from "../../components/waterfall.vue"
  export default {
    components: {waterfall},
    data () {
      return {
        currList: {}
      }
    },
    methods: {},
    mounted() {
      const id = this.$root.$mp.query.id | 0
      this.currList = listData[id]
    },
    onShow () {
      wx.setNavigationBarTitle({title: '列表页'})
    }
  }
</script>
<style scoped>
  .container{width:100%;height:100vh;background:#f8f8f8;}
  .focusBtn{border: 1px solid #333; border-radius: 3px;padding: 4px 15px;}
</style>
