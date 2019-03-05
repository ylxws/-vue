<template>
  <div class="car">
    <!-- <div class="item" v-for="(item, index) in carList" :key="index">
      <img :src="item.src">
      <div class="detail">
        <div class="des">
          <p>{{item.name}}</p>
          <span>{{item.time}}</span>
          <span>{{item.status}}</span>
        </div>
        <div class="pay">已支付{{item.money}}</div>
      </div>
    </div> -->
    <div class="recommend-list">
      <ul>
        <li v-for="(item, index) in carList" class="item" :key="index">
          <div class="icon">
            <img :src="item.src" width="60" height="60">
          </div>
          <div class="text">
            <h2 class="name" v-html="item.name"></h2>
            <p class="desc" v-html="item.time"></p>
          </div>
        </li>
      </ul>
  </div>
</div>
  </div>
</template>
<script>
export default {
  name: 'car',
  data() {
    return {
      carList: [
        {
          src: require('../assets/微信图片_20190305111645.png'),
          name: '好好学习',
          time: '2019-03-05',
          status: '已购买',
          money: 500
        },
        {
          src: require('../assets/微信图片_20190305111645.png'),
          name: '好好学习',
          time: '2019-03-05',
          status: '已购买',
          money: 500
        }
      ]
    }
  }
}
</script>
<style lang="sass" scoped>
.car
  .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: 14px
          color:  #7e8c8d
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size:14px
            .name
              margin-bottom: 10px
              color: #7e8c8d
            .desc
              color: #7e8c8d
</style>

