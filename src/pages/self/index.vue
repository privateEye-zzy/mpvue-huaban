<template>
  <div class="container">
    <scroll-view scroll-y style="height:calc(100vh);" scroll-top="0">
      <dl class="z-width-100-percent ub-box ub-col z-height-100-percent">
        <dd class="ub-box ub-ver z-width-100-percent z-padding-h-10-px z-margin-bottom-10-px z-box-sizing-border ub-between">
          <div class="z-padding-v-20-px ub-box ub-ver">
             <image :src="userInfo.avatarUrl" class="head-img" mode="aspectFill"></image>
             <button v-if="isLogin===false" class="loginBtn" lang="zh_CN" open-type="getUserInfo" @getuserinfo="onGetUserInfo">登录</button>
              <ul v-if="isLogin===true" class="ub-box z-margin-left-10-px ub-col">
                <li class="z-font-size-16 z-color-333 z-margin-bottom-5-px">{{userInfo.nickName}}</li>
                <li class="z-font-size-14 z-color-888">{{userInfo.province}} {{userInfo.city}} {{userInfo.gender}}</li>
              </ul>
          </div>
          <div @click.stop="exitLogin()" class="exitBtn z-margin-right-20-px ub-box ub-ver z-font-size-14">退出</div>
        </dd>
        <dd class="ub-box ub-ver z-width-100-percent z-padding-h-10-px  z-box-sizing-border z-bg-color-fff ub-flex-1">
          <!--我的收藏面板-->
          {{isLogin}}
        </dd>
      </dl>
    </scroll-view> 
  </div>
</template>
<script>
export default {
  computed: {
    isLogin() {
      return this.$store.state.isLogin
    },
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  data () {},
  methods: {
    onGetUserInfo (e) {
      this.$store.commit('updateIsLogin', true)
      this.$store.commit('updateUser', e.mp.detail.userInfo)
      // console.log(e.mp.detail.userInfo)
    },
    exitLogin() {
      this.$store.commit('updateIsLogin', false)
      this.$store.commit('cleanUserInfo')
    }
  },
  onShow () {
    wx.setNavigationBarTitle({title: '我的'})
  }
}
</script>
<style scoped>
  .container{width:100%;height:100vh;background:#f5f5f5;}
  .head-img{width:70px;height:70px;border-radius:50%;background:#eee}
  .loginBtn{font-size:14px;color:#fff;padding:0px 25px;margin-left: 10px;background: #ff5722}
  .exitBtn{border: 1px solid #ff6f00;padding:7px 15px;color:#ff6f00;border-radius: 3px}
</style>
