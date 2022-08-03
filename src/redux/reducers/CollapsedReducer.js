//在这里初始化一个reducer
export const CollapsedReducer = (prevState={
    isShow: false
}, action) =>{
    console.log(action)
    return prevState
}