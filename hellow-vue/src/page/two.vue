<template>
	<div class="two">
		 <h1>{{question}}</h1>
		 <div class="banner">
		 	<img src="../img/two.png" alt="">
		 </div>
		 <ul class="two-list">
		 	<li v-for="(i,index) in list" @click="btns(index)">{{i}}<span v-bind:class="{gou:index==ind}"><b></b></span></li>
		 </ul>
		 <div class="big">
	          <div class="one-cat">
	              <img src="../img/one-cat.png" alt="" class="cat">
	              <img src="../img/two-ti.png" alt=""  class="content">
	              <img src="../img/next.png" alt="" class="next" @click="hh">
	        </div>
        </div>
	</div>
	
</template>
<script>
	export default{
		data:function(){
			return {
				"question":"2.您的性别：",
				"list":["美女","帅哥"],
				"ind":-1
			}
		},
	    methods:{
	      btns:function(index){
	        this.ind=index
	      },
	       hh:function(){
	        if(this.ind!=-1){
	          this.$router.push({path:'/three'})
	        }else{
	          alert("请点击")
	        }
	      }
	    }
	}
</script>

<style>
	.banner{
		width: 100%;
	}
	.banner img{
		width: 300px;
		height: auto;
		display: block;
		margin: 0 auto;
	}
	.two-list{
		margin: 0 auto;
		height: 50px;
		display: flex;
		
	}
	.two-list li{
		flex:1;
		text-align: center;
		font-size: 18px;
		line-height: 50px;
		margin-left: 10px;
		height: 50px;
	}
</style>