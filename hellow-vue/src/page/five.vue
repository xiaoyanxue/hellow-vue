<template>
	<div class="five">
		 <h1>{{question}}</h1>
		 <div class="five-banner">
		 	<img src="../img/five_03.png" alt="">
		 </div>
		 <ul class="five-list">
		 	<li v-for="(i,index) in list" @click="btns(index)">{{i}}<span v-bind:class="{gou:index==ind}"><b></b></span></li>
		 </ul>
		 <div class="big">
	          <div class="one-cat">
	              <img src="../img/five-cat.png" alt="" class="cat" id="five">
	              <img src="../img/five-ti.png" alt=""  class="content">
	            <img src="../img/next.png" alt="" class="next" @click="fivebtn">
	        </div>
        </div>
        <div class="mark" v-if="isShow">
        	<div class="small">
        		<div class="tel">
        			<p>请输入您的手机号！</p>
        			<input type="text" class="phone" v-model="phone">
        			<p class="tip" v-if="isShow3">请输入正确的手机号！</p>
        			<!-- <p class="yanzheng" @click="yanzheng($event)">获取验证码<span class="seconds" v-if="isShow4">({{number}})</span></p> -->
        		</div>
        		
        		<span class="queding" @click="queding">确定</span>
        	</div>
		</div>
	</div>
	
</template>
<script>
	export default{
		data:function(){
			return {
				"question":"5.您愿意接受vipabc客服人员电话回访，预约免费试听课程吗？",
				"list":["我愿意","我不愿意"],
				"ind":-1,
				"isShow":false,
				"isShow3":false,
				"isShow4":false,
				"phone":''
			}
		},
	    methods:{
	      btns:function(index){
	        this.ind=index
	      },
	      fivebtn:function(){
	      	if(this.ind!=-1){
		         this.isShow=true;
		        }else{
		          alert("请点击")
		        }
	      },
	      queding:function(){
	      	var reg=/^1[34578]\d{9}$/;
	      	if(reg.test(this.phone)){
	      		event.currentTarget.disabled=true;
	      		this.isShow4=true;
	      		this.isShow3=false;
	      		this.isShow=false;
	      		this.phone="";
	      		this.$router.push({path:'/login'})
	      	}else{
	      		this.isShow3=true;
	      	}
	      
	      }
	    }

	}
</script>

<style>
	h1{
		margin-bottom: 0;
		font-size: 20px;
	}
	.five-banner{
		width: 100%;
		margin: 0 auto;
	}
	.five-banner img{
		width: 300px;
		height: auto;
		display: block;
		margin: 0 auto;
	}
	.five-list{
		margin: 0 auto;
		display: flex;
		width: 300px;
	}
	.five-list li{
		flex:1;
		height: 40px;
		line-height: 40px;
		font-size: 16px;
		text-align: center;
	}
	#five{
		top: -20px;
		left: 1px;
	}
.mark{
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,.6);
	position: absolute;
	left: 0;
	top: 0;

}
.small{
	width: 300px;
	height: 150px;
	border-radius: 10px;
	background: #fff;
	position: absolute;
	left: 50%;
	top: 50%;
	margin-left: -150px;
	margin-top: -75px;
	border:2px solid yellow;
}
.tel{
	width: 80%;
	height: 50px;
	margin: 20px auto;
}
.tip{
	color: red;
	margin-bottom: 10px;
}
.tel p{
	height: 20px;
	line-height: 20px;
	font-size: 14px;
	text-align: center;
}
.phone{
	width: 60%;
	height: 20px;
	margin-left: 20%;
	background: #ccc;
	border-radius: 3px;
	border: none;
	margin-top:5px;
	padding: 0 10px 0 10px;
	box-sizing:border-box;
}
.yanzheng{
	height: 20px;
}
.queding{
	display: block;
	width: 50px;
	height: 30px;
	background: #ff4856;
	text-align: center;
	line-height: 30px;
	font-size: 16px;
	margin: 20px auto;
}

</style>