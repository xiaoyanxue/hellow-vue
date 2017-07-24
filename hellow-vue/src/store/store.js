import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let store=new Vuex.Store({
	state:{
	"question":[
		{
			"id":"one",
			"name":"1.您的年龄是：",
			"list":["小于25岁","26--35岁","36--45岁","46--55岁","56岁以上"]
		}]/*,
		{
			"id":"two",
			"name":"2.您的性别：",
			"list":["美女","帅哥"]
		},
		{
			"id":"three",
			"name":"3.您的英语水平：",
			"list":["工作、生活中可正常与英美语系老外交流","可看懂互作邮件、口语欠缺","可进行简单对话","毕业后完全没有用过",
				"零基础"]
		},
		{
			"id":"four",
			"name":"4.您觉得学英语最大的难点在于：",
			"list":["没有时间","时间不固定，无法跟上英语培训机构的课程","没有英语语境","难以坚持"]
		},
		{
			"id":"five",
			"name":"5.您愿意接受vipabc客服人员电话回访，预约免费试听课程吗？",
			"list":["我愿意","我不愿意"]
		}
	]	*/
	},
	mutations:{
		"question":function(state,data){
			state.question=data
			/*state.question.forEach((val,ind)=>{
				data=val;
				console.log(data)
			})*/
		}
	}

})


export default store;