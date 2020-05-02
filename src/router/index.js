import Vue from 'vue'
import VueRouter from 'vue-router'
import DashBoard from '../views/dashboard/DashBoard.vue'
const Home=()=>import('../views/home/Home.vue')
const Cart=()=>import('../views/cart/Cart.vue')
const Category=()=>import('../views/category/Category.vue')
const Mine=()=>import('../views/mine/Mine.vue')
const Confirmorder=()=>import('../views/order/order.vue')
const Address=()=>import('../views/order/children/Myaddr.vue')
const AddAddress=()=>import('../views/order/children/children/AddAddress.vue')
const EditAddress=()=>import('../views/order/children/children/EditAddress.vue')


//引入登录
const Login=()=>import('../views/login/login.vue')

// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
 {path:'/',redirect:'/dashboard'},
 {path:'/dashboard',name:'dashboard',component:DashBoard,children:[
   {path:'/dashboard',redirect:'/dashboard/home'},
   {path:'home',name:'home',component:Home,meta:{
     keepAlive:true
   }},
   {path:'category',name:'category',component:Category,meta:{
    keepAlive:true
  }},
   {path:'cart',name:'cart',component:Cart,meta:{
    keepAlive:true
  }},
   {path:'mine',name:'mine',component:Mine,meta:{
    keepAlive:true
  }}
 ]},
 {path:"/confirmorder",name:"order",component:Confirmorder,children:[
   {path:'address',name:"address",component:Address,children:[
     {path:'addaddress',name:'addaddress',component:AddAddress},
     {path:'editaddress',name:'editaddress',component:EditAddress}

   ]}
 ]},
 {path:'/login',name:'login',component:Login,meta:{
  keepAlive:true
}}
]

const router = new VueRouter({
  routes
})

export default router
