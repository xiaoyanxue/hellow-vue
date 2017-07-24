<template>
  <div id="app">
    <p class="titles"><a class="back" @click="back"><</a>{{title}}</p>
     <router-view></router-view>
  </div>
</template>

<script>
  export default { 
  name: 'app',
  data:function(){
        return {
          "title":"填问卷，送话费"
        }
    },
    methods:{
      back:function(){
         this.$router.go(-1)
      }
     
    }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  background: url(./img/bg.jpg) no-repeat;
  background-size: 100% 100%;

}
.titles{
    height: 40px;
    color: #333333;
    font-size: 14px;
    line-height: 44px;
    border-bottom: 1px solid #c4c1c0;
    background: #fff;
    text-align: center;
}
.gou{
  width: 20px;
  height: 20px;
  background: #ff4856;
  border: 1px solid #000;
  border-radius: 50%;
  margin-left: 5px;
  color: #0c002c;
  line-height: 20px;
  display: inline-block;
  position: relative;
}
  .gou b{
      position: absolute;
      left: 0px;
      top:10px;
     }
    .gou b:after{
      content: "";
      position: absolute;
      width: 7px;
      height: 4px;
      border-radius: 4px;
      background: #000;
      transform:rotate(37deg);
    }
  .gou b:before{
      content: "";
      position: absolute;
      width: 14px;
      height: 3px;
      border-radius: 4px;
      background: #000;
      transform:translateX(5px) rotate(-37deg);
    }

    .back{
      position: absolute;
      left: 10px;
      font-size: 24px;
      color: #000;
    }

/*# sourceMappingURL=reset.css.map */

</style>
