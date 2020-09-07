<template>
      <div id="src">
        <div class="ctrl-search">
          <input class="input-search" type="text" v-model="gitUser" >
        </div>
          <div class="btn-search"> 
            <button class="btn" @click="addData" >
              <a class="btn" > 
                  <i class="material-icons">search</i>
              </a>
            </button>
          </div>
      </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      gitUser:"",
      detalhes: [] 
    }
  },
  methods: {
    addData() {
        if(this.gitUser !== "") {
          
          this.$store.dispatch('addData', {gituser: this.gitUser})
          console.log(this.$store.dispatch('addData', {gituser: this.gitUser}).then(function (response) {
    return response
  }))
          if(this.$router.currentRoute.name == 'home'){
            console.log('result')
            }
      }
      this.gitUser= ''
    }
  },
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
.container > div {
  width: 50%;
  margin: auto;
  text-align: center;
}

a {
  color: #42b983;
}

#src {
  justify-content: center;
}

#src,
.ctrl-search,
.btn-search {
  display: flex;
}

.input-search,
.ctrl-search {
  width: 100%;
}

input {
  position: relative;

/* White */

background: #FFFFFF;
border: 2px solid #000000;
box-sizing: border-box;
}

.btn {
position: relative;
width: 100px;
text-align: center;
background: #000000;
border-radius: 0px;
border: initial;
}

.btn > i {
  line-height: 1.5;
}

.icone.lupa {
 position: relative;
left: 0%;
right: 19.09%;
top: 0%;
bottom: 19.09%;

border: 2px solid #fff;
box-sizing: border-box;
}

.icone.lupa:after {
position: relative;
left: 65.35%;
right: 3.54%;
top: 65.35%;
bottom: 3.54%;

border: 2px solid #fff;
  
}

</style>