import {CLEAR_CART,ADD_GOODS,INIT_SHOP_CART,REDUCE_CART,SELECTED_SINGER_GOODS,SELECTED_ALL_GOODS} from './mutations-type'
import {getStore,setStore,removeStore} from './../config/global'
export default{
    [ADD_GOODS](state,{goodsId,goodsName,smallImage,goodsPrice}){
let shopCart=state.shopCart
if(shopCart[goodsId]){
    shopCart[goodsId]['num']++

}else{
    shopCart[goodsId]={
        'num':1,
        'id':goodsId,
        "name":goodsName,
        'small_image':smallImage,
        'price':goodsPrice,
        'checked':true
    }
}
//
state.shopCart={...shopCart}
// 1.3
setStore("shopCart",state.shopCart)
    },
    // 页面初始化 获取购物车数据
    [INIT_SHOP_CART](state){
let initCart=getStore("shopCart")
if(initCart){
    state.shopCart=JSON.parse(initCart)
}

    },

    
[REDUCE_CART](state,{goodsId}){
    console.log(goodsId)
    let shopCart=state.shopCart
    let goods=shopCart[goodsId]
    console.log(goods)
    if(goods){
        console.log("cc",goods)
        if(goods['num']>0){
            goods['num']--;
            if(goods['num']===0){
                delete shopCart[goodsId]
            }
    
        }else{
            goods=null
        }
        state.shopCart={...shopCart}
        setStore("shopCart",state.shopCart)
    }
    },
    [SELECTED_SINGER_GOODS](state,{goodsId}){
        let shopCart=state.shopCart
        let goods=shopCart[goodsId]
        if(goods){
            // console.log(goods)
            if(goods.checked){
goods.checked=!goods.checked
            }else{
                // this.$set
              goods.checked=true
            }
            state.shopCart={...shopCart}
            setStore("shopCart",state.shopCart)
        }
    },
    [SELECTED_ALL_GOODS](state,{isSelected}){
        let shopCart=state.shopCart
      Object.values(shopCart).forEach((goods,index)=>{
        if(isSelected){
            goods.checked=!isSelected
                        }else{
                            // this.$set
                          goods.checked=!isSelected
                        }
      })
      state.shopCart={...shopCart}
      setStore("shopCart",state.shopCart)
    },
    [CLEAR_CART](state){
        
 state.shopCart=null
        state.shopCart={...state.shopCart}
       setStore("shopCart",state.shopCart)
       
    }
}

