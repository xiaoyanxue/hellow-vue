<template>
	<div class="one">
        <h1>{{question}}</h1>
        <ul class="one-list">
          <li v-for="(i,index) in list" @click="btns(index)">{{i}}<span v-bind:class="{gou:index==ind}"><b></b></span></li>
        </ul>
        <div class="big">
          <div class="one-cat">
              <img src="../img/one-cat.png" alt="" class="cat">
              <img src="../img/one-content.png" alt=""  class="content">
             <img src="../img/next.png" alt="" class="next" @click="hh">
        </div>
        </div>
    </div>
</template>	
<script>
export default { 
  data:function(){
        return {
          "question":"1.您的年龄是：",
          'list':["小于25岁","26--35岁","36--45岁","46--55岁","56岁以上"],
          "ind":-1
        }
    },
    methods:{
      btns:function(index){
        this.ind=index;
        //this.$store.commit("question")
      },
      hh:function(){
        if(this.ind!=-1){
          this.$router.push({path:'/two'})
        }else{
          alert("请点击")
        }
      }
    }
}
</script>

<style>


.one-list{
  display: flex;
  flex-wrap:wrap;
  padding: 10px;
  
}
.one-list li{
   width: 40%;
   margin-right: 10%;
   font-size:18px;
   text-align: center;
   margin-bottom: 30px;
   height: 30px;
}
.big{
  width: 100%;
  margin: 0 auto;
  position: absolute;
  bottom: 15%;
}
.one-cat{
  width: 200px;
  height: 150px;
  position:relative;
  margin: 0 auto;
}

.cat{
  width: 100px;
  height: auto;
  position:absolute;
  top: 37px;
  left: -5px;
}
.content{
  width: 100px;
  height: auto;
  position: absolute;
  right: -15px;
  top: 15px;
}
.next{
  width: 100%;
  height: auto;
  position: absolute;
  bottom:20px;
  left: 0;
}


</style>