import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import store from './store/store.js'
import login from './page/login.vue'
import one from './page/one.vue'
import two from './page/two.vue'
import three from './page/three.vue'
import four from './page/four.vue'
import five from './page/five.vue'
import App from './App.vue'
import axios from './js/axios.js'
import reset from './style/reset.css'


Vue.use(VueRouter)

const routes = [
	{
		path:'/',
		redirect:'/one'//重定向
	},
	{
		"path":'/one',
		component:one
	},
	{
		"path":'/two',
		component:two
	},
	{
		"path":'/three',
		component:three
	},
	{
		"path":'/four',
		component:four
	},
	{
		"path":'/five',
		component:five
	},
	{
		"path":'/login',
		component:login
	}
]
	
let router=new VueRouter({routes});

new Vue({
  router,
  store,
  render: h => h(App),
  data:{
  	list:[]
  },
  created:function(){
  	axios.get('./data/data.json').then((data)=>{
  		this.list=data.data.question
  	//	console.log(this.list)
  	})
  }
}).$mount("#app")
