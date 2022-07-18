import {useEffect} from "react";
import axios from "axios";
import IndexRouter from "./router/IndexRouter";
import './App.css';

function App() {
    useEffect(()=>{
        console.log("done")
        // axios({
        //     url:"/gateway?cityId=110100&ticketFlag=1&k=7406159",
        //     method:"get",
        //     headers:{
        //         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',
        //         'X-Host': 'mall.film-ticket.cinema.list'
        //     }
        // }).then((res)=>{
        //     console.log(res.data.data.cinemas)
        // }).catch((err)=>{
        //     console.log(err)
        // })
    },[])
  return (
        <IndexRouter></IndexRouter>
  );
}

export default App;
