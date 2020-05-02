export const showback=(callback)=>{
    let docb=document.documentElement || document.body
    let oldScrollTop,requestFrame;
    // 监听滚动
    document.addEventListener('scroll',()=>{
        showbackfun();
    },false)
    document.addEventListener('touchcstart',()=>{
showbackfun()
    },{passive:true});
    document.addEventListener('touchmove',()=>{
showbackfun()
    },{passive:true})
    document.addEventListener('touchend',()=>{
        oldScrollTop=docb.scrollTop
moveEnd()
    },{passive:true})

const moveEnd=()=>{
    requestAnimationFrame(()=>{
        if(docb.scrollTop!=oldScrollTop){
          oldScrollTop=docb.scrollTop  
          moveEnd()
        }else{
            cancelAnimationFrame(requestFrame)
        }
        showbackfun()
    })
}

    const showbackfun=()=>{
        // console.log(docb.scrollTop)
        if(docb.scrollTop>750){
            callback(true)
        }else{
            callback(false)
        }
    }
}

// 本地化存储
export const setStore=(name,content)=>{
if(!name) return
if(typeof content!=="string"){
content=JSON.stringify(content)
}
window.sessionStorage.setItem(name,content)
}
// 本地化获取
export const getStore=(name)=>{
    if(!name) return
    return window.sessionStorage.getItem(name)
}
// 本地化删除
export const removeStore=(name)=>{
if(!name) return
return window.sessionStorage.removeItem(name)
}