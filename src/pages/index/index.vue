<template>
  <div class="container">
    <scroll-view scroll-y style="height:calc(100vh);" scroll-top="0">
      <dl class="z-width-100-percent ub-box ub-col">
        <dd class="ub-box z-relative z-box-sizing-border z-width-100-percent">
          <image style="height:170px" class="z-width-100-percent" :src="banner" mode="aspectFill"></image>
          <div class="search-con ub-box ub-ver">
           <div class="z-width-90-percent ub-box ub-col ub-ver-h">
              <div class="ub-box ub-ver-v z-margin-v-5-px">
                <i class="iconfont icon-31guanzhu1xuanzhong z-color-fff z-font-size-22 z-margin-right-8-px"></i>
                <span class="z-color-fff z-font-size-18">huaban.com</span>
              </div>
              <div @click.stop="$openWin('/pages/search/main')" class="search ub-box ub-ver-v z-width-100-percent z-box-sizing-border">
                <i class="iconfont icon-search z-color-333 z-font-size-16"></i>
                <span class="z-font-size-16 z-color-999 z-margin-left-8-px">搜索你喜欢的...</span>
              </div>
           </div>
          </div>
        </dd>
        <dd class="ub-box z-width-100-percent z-padding-h-10-px z-margin-bottom-10-px z-box-sizing-border z-margin-top-40-px">
          <span class="z-font-size-14 z-color-888">分类浏览</span>
        </dd>
        <dd class="ub-box z-width-100-percent z-padding-h-10-px z-margin-bottom-10-px z-box-sizing-border">
          <ul class="ub-box ub-wrap z-width-100-percent">
            <li @click.stop="$openWin('/pages/error/main')" v-for="(val, idx) in entrances" :key="idx" class="z-width-50-percent z-box-sizing-border z-margin-bottom-10-px" :class="{'z-padding-right-10-px': idx % 2 === 0}">
              <div class="item z-relative">
                 <image style="height:100%;border-radius:4px" class="z-width-100-percent" :src="val.img" mode="aspectFill"></image>
                 <div class="item-title ub-box ub-ver">
                   <span class="z-font-size-15 z-color-fff">{{val.name}}</span>
                 </div>
              </div>
            </li>    
          </ul>
        </dd>
      </dl>
    </scroll-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      banner: 'http://hbfile.b0.upaiyun.com/img/home/banner/c88dab66a15416697c930a31c0ec3364b2c3990b102914',
      entrances: [
        {name: 'UI/UX', img: 'http://img.hb.aicdn.com/c135d30071e8778efc570e94b98ca66b8e69ef211456c-ITnPci_sq320'},
        {name: '女装/搭配', img: 'http://img.hb.aicdn.com/88f4b24767fe503ae2af5336fa27a205fad24fd2eeed-5sYCzi_sq320'},
        {name: '男士/风尚', img: 'http://img.hb.aicdn.com/dc4ae8b99aff0730ebf9d24703510b7ec4fed8051cf2b-TNiY2l_sq320'},
        {name: '女装/搭配', img: 'http://img.hb.aicdn.com/fa1fc9c40f284a1afb25942e0842aca95354f94c25539-JIp7xH_sq320'},
        {name: '工业设计', img: 'http://img.hb.aicdn.com/241398285b137a4787d02b99c1e103f755d67e3818a7c-jPB83Z_sq320'},
        {name: '摄影', img: '//img.hb.aicdn.com/57576941bed4143eb2643ee9f23c597b7f6b1b69180cc-Ct89Yv_sq320'},
        {name: '造型/美妆', img: 'http://img.hb.aicdn.com/d3109ecc9a57204cb258c16607869079d71f5deab568-YKYavU_sq320'},
        {name: '婚纱', img: 'http://img.hb.aicdn.com/6fa1d1210b4f6f47b34fcfe14281c235b38a4ac6193b4-FzrTba_sq320'},
      ]
    }
  },
  methods: {},
  onShow () {
    wx.setNavigationBarTitle({title: '首页'})
  }
}
</script>
<style scoped>
  .container{width:100%;height:100vh;background:#fff;}
  .search-con{position: absolute;z-index: 1;left: 0;bottom: -30px;width: 100%;height: 100px;background: transparent;}
  .search{background: #fff;border-radius: 4px;padding: 10px 10px; box-shadow: 0 0 5px #c4c4c4;}
  .item{height: 140px;}
  .item-title{position: absolute;left: 0;bottom: 0;width: 100%;height: 30px;background: rgba(0,0,0,.2);}
</style>
