<template>
  <div id="freeze">
    <Header :showLeft="showLeft" :showTitle="showTitle">
      <p slot="title">冻结钱包</p>
    </Header>
    <div class="container">
      <div class="income">
        <p class="current">当前值</p>
        <p class="curMoney">{{ curMoney }}</p>
        <div class="month">
          <p>锁仓时间: {{mydate.date}}</p>
          <p>释放时间: {{mydate.expire_time}}</p>
        </div>
      </div>
      <div class="detail">
        <p class="title"><span></span>资产明细</p>
        <div class="items">
          <div class="item" v-for="(item, index) in items" :key="index">
            <div class="top">
              <p>{{item.note}}</p>
              <p>{{item.account}}</p>
            </div>
            <div class="bottom">
              <p>{{item.create_time}}</p>
              <p>{{item.c_account}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'

export default {
  data () {
    return {
      showTitle: true,
      showLeft: true,
      items: [],
      curMoney: 0,
      mydate: {}
    }
  },
  methods: {
    getData () {
      var params = new FormData()
      params.append('sid', localStorage.getItem('sid'))
      params.append('type', 4)
      this.axios.post(process.env.API_ROOT + '/api/user/get_money_detail', params).then((res) => {
        let data = res.data.data
        this.items = data
      })
    },
    getdate () {
      var params = new FormData()
      params.append('sid', localStorage.getItem('sid'))
      this.axios.post(process.env.API_ROOT + '/api/block/get_month', params).then((res) => {
        this.mydate = res.data.data
      })
    }
  },
  components: {
    Header
  },
  mounted () {
    this.curMoney = this.$route.params.id
    this.getData()
    this.getdate()
  }
}
</script>

<style lang="stylus">
#freeze
  position absolute
  top 0
  left 0
  right 0
  bottom 2.6rem
  font-size .8rem
  background #fff
  color #000
  .container
    position absolute
    top 2.8rem
    bottom 0
    left 0
    right 0
    padding 0 .8rem
    overflow-y scroll
    -webkit-overflow-scrolling touch
    &::-webkit-scrollbar
      display none
    .income
      margin .8rem 0
      padding 1.5rem 0
      text-align center
      background #f1ad46
      border-radius .4rem
      color #fff
      .current
        font-size .8rem
      .curMoney
        font-size 1.6rem
        line-height 3rem
      .month
        display flex
        justify-content space-around
    .detail
      margin-top 1rem
      .title
        color #333
        span
          display inline-block
          height 10px
          width 10px
          margin-right .5rem
          background #f1ad46
      .items
        color #333
        .item
          margin-top 8px;
          height 60px
          line-height 30px
          border-top 1px solid #ddd
          border-bottom 1px solid #ddd
          .top,.bottom
            display flex
            justify-content space-between
</style>
