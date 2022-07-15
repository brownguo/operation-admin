import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';

function Home(props) {
    return (
        <div>
            <Button type="primary" onClick={()=>{
                console.log(props.match.url)
            }}>Primary Button</Button>
        </div>
    );
}

export default Home;