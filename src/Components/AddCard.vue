<template>
  <div class="add-card">
    <form @submit.prevent="onSubmit">
      <input class="form-control" type="text" v-model="inputTitle" ref="inputText">
      <button class="btn btn-success" type="submit" :disabled="invalidInput">Add Card</button>
      <a class="cancel-add-btn" href="" @click.prevent="$emit('close')">&times;</a>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputTitle: ''
    }
  },
  computed: {
    // 값x -> disabled=true, 값o -> disabled=false
    invalidInput() {
      return !this.inputTitle.trim()
    }
  },
  mounted() {
    this.$refs.inputText.focus()
    this.setupClickOutside(this.$el) // AddCard 컴포넌의 엘리멘트가 넘어감
  },
  methods: {
    onSubmit() {
      console.log(this.inputTitle);
    },
    setupClickOutside(el) {
      document.querySelector('body').addEventListener('click', e => {
        if (el.contains(e.target)) return // 눌린 target이 AddCard에 포함된다면 리턴
        this.$emit('close') // 아니면 부모에 close 넘김
      })
    }
  }
}
</script>

<style>
.add-card {
  padding: 10px;
  display: block;
  position: relative;
}
.add-card .cancel-add-btn {
  display: inline-block;
  margin-left: 10px;
  vertical-align: middle;
  text-decoration: none;
  color: #888;
  font-size: 24px;
}
.add-card .cancel-add-btn:hover,
.add-card .cancel-add-btn:focus {
  color: #666;
}
</style>
