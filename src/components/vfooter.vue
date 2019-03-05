<template>
  <div class="footer">
    <router-link to="/">
      <div class="item" v-link="{path: '/'}">
        <i class="el-icon-edit"></i>
        <p>首页</p>
      </div>
    </router-link>
    <router-link to="/car">
      <div class="item" v-link="{path: '/car'}">
        <i class="el-icon-share"></i>
        <p>购物车</p>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'VFooter'
}
</script>
<style lang="sass" scoped>
.footer
  height: 80px
  background: #f3f3f3
  display: flex
  justify-content: space-around
  padding: 8px
  .item
    justify-content: column
    align-item: center
    i
      font-size: 28px
      height: 50%
    p
      font-size: 14px
</style>
