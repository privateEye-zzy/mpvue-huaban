<template>
  <div class="container">
    <scroll-view scroll-y style="height:calc(100vh);" scroll-top="0">
      <dl class="z-width-100-percent ub-box ub-col">
        <dd class="ub-box z-width-100-percent z-padding-h-10-px z-margin-bottom-10-px z-box-sizing-border">
          <span class="z-font-size-14 z-color-888">推荐兴趣</span>
        </dd>
        <div class="ub-box z-width-100-percent z-padding-h-10-px z-margin-bottom-10-px z-box-sizing-border" v-for="(val, idx) in cardsData" :key="idx">
          <div class="z-width-100-percent" :class="{'z-border-bottom-1-eee':idx<cardsData.length - 1}">
            <card :cardObj="val"></card>
          </div>
        </div>
      </dl>
    </scroll-view>
  </div>
</template>
<script>
  import {listData} from "../../utils/allData.js"
  import card from "../../components/card.vue"
  export default {
    components: {card},
    data () {
      return {
        cardsData: []
      }
    },
    methods: {},
    mounted() {
      this.cardsData = listData
    },
    onShow () {
      wx.setNavigationBarTitle({title: '发现'})
    }
  }
</script>
<style scoped>
  .container{width:100%;height:100vh;background:#fff;}
</style>
