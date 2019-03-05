<template>
  <div class="home">
    <banner></banner>
    <entry></entry>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/banner.vue'
import Entry from '@/components/entry.vue'

export default {
  name: 'home',
  data() {
    return {}
  },
  components: {
    Banner,
    Entry
  }
}
</script>
