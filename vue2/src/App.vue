<template>
  <div id="app">
    <Row>
      <i-col span="12" >
        col-12
      </i-col>
      <i-col span="12">
        col-12
        <Button>Default</Button>
      </i-col>
    </Row>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
  import ICol from "../node_modules/iview/src/components/grid/col";
export default {
  components: {ICol},
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
