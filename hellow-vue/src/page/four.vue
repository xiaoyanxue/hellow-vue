<template>
	<div class="four">
		 <h1>{{question}}</h1>
		 <ul class="four-list">
		 	<li v-for="(i,index) in list" @click="btns(index)">{{i}}<span v-bind:class="{gou:index==ind}"><b></b></span></li>
		 </ul>
		 <div class="big">
	          <div class="one-cat">
	              <img src="../img/four-cat.png" alt="" class="cat" id="three-ti">
	              <img src="../img/four-ti.png" alt=""  class="content">
	             <img src="../img/next.png" alt="" class="next" @click="hh">
	        </div>
        </div>
	</div>
	
</template>
<script>
	export default{
		data:function(){
			return {
				"question":"4.您觉得学英语最大的难点在于：",
				"list":["没有时间","时间不固定，无法跟上英语培训机构的课程","没有英语语境","难以坚持"],
				"ind":-1
			}
		},
	    methods:{
	      btns:function(index){
	        this.ind=index
	      },
	       hh:function(){
	        if(this.ind!=-1){
	          this.$router.push({path:'/five'})
	        }else{
	          alert("请点击")
	        }
	      }
	    }
	}
</script>

<style>
	h1{
		margin-bottom: 0;
	}
	.four-list{
		padding: 0 1% 0 5%
	}
	.four-list li{
		height: 50px;
		font-size: 14px;
		line-height: 50px;
	}
	#three-ti{
		top: -2px;
	}
</style>