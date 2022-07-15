import React from 'react';
import { Button } from 'antd';

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