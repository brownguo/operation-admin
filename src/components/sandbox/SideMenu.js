import React, {useEffect, useState} from 'react'
import { Layout, Menu } from 'antd';
import { withRouter } from 'react-router-dom'
import axios from "axios";
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import "./sidemenu.css"

const { Sider } = Layout;

function SideMenu(props) {
    const [collapsed] = useState(false);
    const [menuList, setMenuList] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/rights?_embed=children").then((res)=>{
            console.log(res.data)
            setMenuList(res.data)
        })
    }, [])
    return (
        <Sider trigger={null}  collapsible collapsed={collapsed}>
            <div className="logo"> TestTest</div>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['user-manage']}
                items={menuList}
                onClick={(current)=>{
                    props.history.push(current.key)
                }}
            />
        </Sider>
    )
}

export default withRouter(SideMenu)