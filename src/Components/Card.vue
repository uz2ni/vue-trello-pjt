<template lang="html">
  <Modal>
    <div v-if="loading">
      loading Card...
    </div>
    <div v-else>
      cid: {{ cid }}
    </div>
  </Modal>
</template>

<script>
import Modal from './Modal.vue'
export default {
  components: {
    Modal
  },
  data() {
    return {
      cid: 0,
      loading: false
    }
  },
  watch: { // 상태 값 감시
    '$route': {
      handler: 'fetchData', // $route가 변경되면 fetchData() 내용을 동작
      immediate: true  // 바로 즉시 실행. create()와 중복됨, false이면 맨 처음에는 실행x, 변경되면 실행o
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
