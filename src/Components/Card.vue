<template lang="html">
  <div>
    <div v-if="loading">
      loading Card...
    </div>
    <div v-else>
      cid: {{ cid }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cid: 0,
      loading: false
    }
  },
  watch: {
    '$route': {
      handler: 'fetchData',
      immediate: true  // 바로 즉시 실행. create()와 중복됨
    }

  },

  methods: {
    fetchData() {
      this.loading = true
      setTimeout(() => {
        this.cid = this.$route.params.cid
        this.loading = false
      }, 500)
    }
  }

}
</script>

<style lang="css">
</style>
