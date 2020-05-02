import ajax from './ajax'
// http://demo.itlike.com/web/xlmc/api/homeApi
// http://demo.itlike.com/web/xlmc/api/homeApi/categories
// http://demo.itlike.com/web/xlmc/api/homeApi/categoriesdetail/lk001 
// 配置基础路劲
const BASE_URL="http://demo.itlike.com/web/xlmc"
export const getHomeData=()=>ajax(BASE_URL+'/api/homeApi')
export const getCategories=()=>ajax(BASE_URL+'/api/homeApi/categories')
export const getCategoriesDetail=(preParams)=>ajax(BASE_URL+'/api/homeApi/categoriesdetail/'+preParams)
// 用戶中心接口
// const LOCAL_BASE_URL='http://localhost:3000/web/xlmc'
export const getPhoneCode=(phone)=>ajax(BASE_URL+'/api/send_code',{phone})
export const getLogin=(phone,code)=>ajax(BASE_URL+'/api/login_code',{phone,code},type="post")
