<template> <!-- app 컴포넌트가 표시하는 인스턴스 템플릿 -->
  <div id="app">
    <Navbar />
    <router-view class="container"></router-view>
  </div>
</template>

<script>
import Navbar from './Components/Navbar.vue'

export default {
  name: 'app',
  components: { Navbar }, // app 컴포넌트에서 사용하는 하위 컴포넌트
  data () {
    return {
    }
  }
}
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0px;
}
#app {
  display: flex;
  flex-direction: column;
}
.container {
  flex-grow: 1;
  position: relative;
}
.btn {
  border-radius: 3px;
  padding: 6px 8px;
  background-color: #e2e4e6;
  border: none;
  display: inline-block;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  cursor: pointer;
}
.btn-success {
  background-color: #5aac44;
  box-shadow: 0 1px 0 #519839;
}
.form-control {
  width: 100%;
  box-sizing: border-box;
  background-color: #e2e4e6;
  border: 1px solid #cdd2d4;
  border-radius: 3px;
  display: block;
  margin-bottom: 12px;
  padding: 6px 8px;
  transition: background-color .3s;
}
input[type=text].form-control,
input[type=password].form-control,
textarea.form-control {
  font-size: 14px;
}
.form-control:focus {
  background-color: #fff;
}
</style>
