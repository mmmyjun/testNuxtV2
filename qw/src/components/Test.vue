<template>
  <div class="hello">
    测试 
    <button @click="changeMol">改变成测试</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    changeMol() {
      console.log('changeMol', this.$root.parentVuex, this.$root.parentVuex.default())
      this.$root.parentVuex.default().commit('changeInMol', '测试的内');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
