//在这里初始化一个reducer，reducer处理数据，react会遍历所有reducer
export const CollapsedReducer = (prevState={
    is_collapsed_show: false
}, action) =>{
    let {type} = action
    switch (type) {
        case "change_collapsed":
            let newState = {...prevState}
            newState.is_collapsed_show = !newState.is_collapsed_show
            return newState
        default:
            return prevState
    }
}