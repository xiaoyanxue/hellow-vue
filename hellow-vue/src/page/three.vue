<template>
	<div class="three">
		 <h1>{{question}}</h1>
		 <ul class="three-list">
		 	<li v-for="(i,index) in list" @click="btns(index)">{{i}}<span v-bind:class="{gou:index==ind}"><b></b></span></li>
		 </ul>
		 <div class="big">
	          <div class="one-cat">
	              <img src="../img/three-cat.png" alt="" class="cat" id="three-ti">
	              <img src="../img/three-ti.png" alt=""  class="content">
	             <img src="../img/next.png" alt="" class="next" @click="hh">
	        </div>
        </div>
	</div>
	
</template>
<script>
	export default{
		data:function(){
			return {
				"question":"3.您的英语水平：",
				"list":["工作、生活中可正常与英美语系老外交流","可看懂互作邮件、口语欠缺","可进行简单对话","毕业后完全没有用过",
				'零基础'],
				"ind":-1
			}
		},
	    methods:{
	      btns:function(index){
	        this.ind=index
	      },
	       hh:function(){
		        if(this.ind!=-1){
		          this.$router.push({path:'/four'})
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
	.three-list{
		padding: 0 5% 0 5%;
	}
	.three-list li{
		height: 40px;
		line-height: 40px;
		font-size: 14px;
	}
	#three-ti{
		top: -2px;
	}

</style>