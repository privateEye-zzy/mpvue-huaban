<template>
   <div @click.stop="$openWin('/pages/list/main?id='+cardObj.id)" class="ub-box ub-col z-width-100-percent">
 	  <dd class="ub-box z-width-100-percent z-margin-bottom-10-px z-box-sizing-border">
	    <ul class="ub-box ub-around z-width-100-percent" style="height:90px">
	      <li v-for="(imgObj, i) in imgs" :key="i" class="item-img">
	        <image class="z-width-100-percent z-height-100-percent" :src="imgObj.img" mode="aspectFill"></image>
	      </li>
	    </ul>
	  </dd>
	  <dd class="ub-box z-width-100-percent z-margin-bottom-5-px z-box-sizing-border">
	    <p class="z-font-size-15 z-font-weight-bold" style="color:#2c2c2c">{{cardObj.listMainTitle}}</p>
	  </dd>
	  <dd class="ub-box z-width-100-percent z-margin-bottom-10-px z-box-sizing-border">
	    <div class="ub-box ub-ver ub-between z-width-100-percent">
	      <p class="z-font-size-14 z-color-888 z-lineHeight-22 z-lines-2-overflow-hidden z-width-50-percent">{{cardObj.listDescribe}}</p>
	      <span class="focusBtn ub-box ub-ver z-font-size-12 z-color-333">关注</span>
	    </div>
	  </dd>
	</div>
</template>
<script>
  export default {
  	props: ['cardObj'],
	data () {
		return {
			imgs: []
		}
	},
	mounted() {
		this.imgs = this.cardObj.listImgs.slice(0, 3)
	},
	methods: {},
  }
</script>
<style scoped>
  .item-img{width: 32%;height: 100%;border-radius: 3px}
  .focusBtn{border: 1px solid #333; border-radius: 3px;padding: 4px 15px;}
</style>
