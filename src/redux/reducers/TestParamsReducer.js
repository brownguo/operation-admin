let initState = {
    prev_test: "123"
}
const TestParamsReducer = (prevState=initState, action)=>{
    let {type} = action
    console.log("TestParams reducer: ", type)
    return prevState
}

export default TestParamsReducer