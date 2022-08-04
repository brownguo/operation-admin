let initState = {
    isLoading: false
}

const LoadingReducer = (prevState=initState, action)=>{
    let type = action.type
    let payload = action.payload
    switch (type) {
        case "change_loading":
            let newState = {...prevState}
            newState.isLoading = payload
            return newState
        default:
            return prevState
    }
}

export default LoadingReducer