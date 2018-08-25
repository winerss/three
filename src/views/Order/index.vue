<template>
  <div id="money">
    <div class="header">
      <div class="center">
        <div class="btn-group">
          <p><router-link to="/order/saleOrder">{{lang.label}}</router-link></p>
          <p><router-link to="/order/buyOrder">{{lang.label2}}</router-link></p>
        </div>
      </div>
      <div class="right">
        <p @click="goDetail"><img src="../../assets/img/edit.png" alt=""> {{lang.label3}}</p>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lang: {}
    }
  },
  methods: {
    goDetail () {
      this.$router.push('/putup')
    }
  },
  mounted () {
    let lang = {
      en: {
        label: 'Sell',
        label2: 'Buy',
        label3: 'Pending Order'
      },
      cn: {
        label: '卖单',
        label2: '买单',
        label3: '挂单'
      }
    }
    if (localStorage.getItem('language') === 'en') {
      this.lang = lang.en
    } else {
      this.lang = lang.cn
    }
  }
}
</script>

<style lang="stylus">
#money
  position absolute
  top 0
  left 0
  right 0
  bottom 2.6rem
  font-size .8rem
  .header
    position fixed
    display flex
    z-index 2
    top 0
    left 0
    right 0
    height 2.4rem
    padding 0 .8rem
    line-height 2.4rem
    font-weight bold
    background: -webkit-linear-gradient(left, #ff740e, #ff3d33); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #ff740e, #ff3d33); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #ff740e, #ff3d33); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #ff740e, #ff3d33); /* 标准的语法（必须放在最后） */
    background #ebebeb
    color #333
    font-size .8rem
    border-bottom 1px solid #999
    .center
      width 60%
      margin 0 auto
      display flex
      justify-content center
      .btn-group
        height 1.4rem
        width 80%
        margin-top .5rem
        display flex
        justify-content center
        align-items center
        overflow hidden
        border 1px solid #ff740e;
        font-size 0
        p
          display inline-block
          line-height 1.4rem
          width 100%
          text-align center
          font-size .8rem
          overflow hidden
          a
            display inline-block
            width 100%
            color #333
          .router-link-active
            background #ff740e
            color #fff
    .right
      position absolute
      right .8rem
      line-height 2.6rem
      p
        img
          height 1.2rem
          float left
          margin .6rem .2rem 0 0
</style>
