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
            let menu_data = res.data
            const menu_list = menu_data.map((item)=>{
                if(item['children'].length > 0){
                    for(let idx in item['children']){
                        delete item['children'][idx]['rightId']
                        if(item['children'][idx]['pagepermisson'] !== 1){
                            delete item['children'][idx]
                        }
                    }
                }else{
                    delete item['children']
                }
                return item
            })
            setMenuList(menu_list)
        })
    }, [])
    const selectKey = props.location.pathname
    const openKey = ["/"+selectKey.split("/")[1]]
    return (
        <Sider trigger={null}  collapsible collapsed={collapsed}>
            <div className="logo"> TestTest</div>
            <Menu
                theme="dark"
                mode="inline"
                defaultOpenKeys={openKey}
                selectedKeys={selectKey}
                items={menuList}
                onClick={(current)=>{
                    props.history.push(current.key)
                }}
            />
        </Sider>
    )
}

export default withRouter(SideMenu)