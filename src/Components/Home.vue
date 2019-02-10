<template lang="html">
  <div>
    <div class="home-title">Personal Boards</div>
    <div class="board-list" ref="boardList">
      <div class="board-item" v-for="b in boards" :key="b.id"
        :data-bgcolor="b.bgColor" ref="boardItem">
        <router-link :to="`/b/${b.id}`">
          <div class="board-item-title">{{b.title}}</div>
        </router-link>
      </div>
      <div class="board-item board-item-new">
        <a class="new-board-btn" href="" @click.prevent="addBoard">
          Create new board...
        </a>
      </div>
    </div>
    <AddBoard v-if="isAddBoard" @close="isAddBoard=false" @submit="onAddBoard"/>
  </div>
</template>

<script>
import {board} from '../api'
import AddBoard from './AddBoard.vue'

export default {
  components: {
    AddBoard
  },
  data() {
    return {
      loading: false,
      boards: [],
      error: '',
      isAddBoard: false
    }
  },
  created() {
    this.fetchData()
  },
  updated() {
    this.$refs.boardItem.forEach(el => {
      el.style.backgroundColor = el.dataset.bgcolor
    })
  },
  methods: {
    fetchData() {
      this.loading = true
      board.fetch()
        .then(data => {
          this.boards = data.list
        })
      .finally(() => {
        this.loading = false
      })
    },
    addBoard() {
      this.isAddBoard = true
    },
    onAddBoard(title) {
      board.create(title)
      .then(() => this.fetchData())
      /*
      현재 Home과 AddBoard컴포넌트가 중첩관계이다. (서로 왔다갔다)
      이런게 많아지면 복잡해짐.
      구지 Home에서 api부르지 않고 AddBoard에서 api호출하면 더 간단할 것 같다.
      서비스 전반의 전역 성격의 상태값이 있을 수도 있다. (보드 색 설정)
      체계적 관리 -> Vuex 상태관리
      */
    }
  }

}
</script>

<style lang="css">
.home-title {
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
}
.board-list {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}
.board-item {
  width: 23%;
  height: 100px;
  margin: 0 2% 20px 0;
  border-radius: 3px;
}
.board-item-new {
  background-color: #ddd;
}
.board-item a {
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
}
.board-item a:hover,
.board-item a:focus {
  background-color: rgba(0,0,0, .1);
  color: #666;
}
.board-item-title {
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  padding: 10px;
}
.board-item a.new-board-btn {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  height: 100px;
  width: inherit;
  color: #888;
  font-weight: 700;
}
</style>
