let initState = {
    prev_test: "123"
}
const TestParamsReducer = (prevState=initState, action)=>{
    let {type} = action
    return prevState
}

export default TestParamsReducer