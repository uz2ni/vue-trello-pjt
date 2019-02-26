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
import {mapActions} from 'vuex'

export default {
  props: ['listId'],
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
    ...mapActions([
      'ADD_CARD'
    ]),
    onSubmit() {
      if(this.invalidInput) return
      const {inputTitle, listId} = this
      const pos = this.newCardPos() // pos값 추가
      this.ADD_CARD({title: inputTitle, listId,pos})
        .finally(() => this.inputTitle = '')
    },
    newCardPos() {
      const curList = this.$store.state.board.lists.filter(l => l.id === this.listId)[0]
      if (!curList) return 65535 // board에 list가 없을 경우
      const {cards} = curList
      if (!cards.length) return 65535 // card가 존재하지 않을 경우
      return cards[cards.length - 1].pos * 2 // card list 기존 값 있을 경우 마지막 pos의 2배로 지정
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
