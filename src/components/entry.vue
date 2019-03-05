<template>
  <div class="entry">
    <div>
      <img src="@/assets/微信图片_20190305111637.png" alt="">
    </div>
    <div class="item" v-for="(item, index) in entrys" :key=index>
      <img :src="item.src" />
      <p>{{item.title}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'entry',
  data() {
    return {
      entrys: [
        {
          src: '@/assets/微信图片_20190305111637.png',
          title: '1'
        },
        {
          src: '@/assets/微信图片_20190305111637.png',
          title: '2'
        },
        {
          src: '@/assets/微信图片_20190305111637.png',
          title: '3'
        },
        {
          src: '@/assets/微信图片_20190305111637.png',
          title: '4'
        },
        {
          src: '@/assets/微信图片_20190305111637.png',
          title: '5'
        },
        {
          src: '@/assets/微信图片_20190305111637.png',
          title: '6'
        },
        {
          src: '@/assets/微信图片_20190305111637.png',
          title: '7'
        },
        {
          src: '@/assets/微信图片_20190305111637.png',
          title: '8'
        }
      ]
    }
  },
  created() {
    // this.lists.forEach((item) => {
    //   item.src = '@/assets/' + item.src;
    // })
    // this.entrys = this.lists;
  }
}
</script>
<style lang="sass" scoped>
.entry
  padding: 20px 0
</style>
