import React, {useState} from 'react'
import { Layout, Menu } from 'antd';
import { withRouter } from 'react-router-dom'
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import "./sidemenu.css"

const { Sider } = Layout;

const menuList = [
    {
        key: '/user-manage',
        icon: <UserOutlined />,
        label: '用户管理',
        children: [
            {
                key: '/user-mange/list',
                icon: <UploadOutlined />,
                label: '用户列表',
            }
        ]
    },
    {
        key: '/product-manage',
        icon: <VideoCameraOutlined />,
        label: '产品管理',
        children: [
            {
                key: '/product-manage/list',
                icon: <UploadOutlined />,
                label: '产品列表',
            }
        ]
    },
    {
        key: '/role-manage',
        icon: <UploadOutlined />,
        label: '权限管理',
        children: [
            {
                key: '/role-manage/list',
                icon: <UploadOutlined />,
                label: '权限列表',
            }
        ]
    }
]

function SideMenu(props) {
    const [collapsed] = useState(false);
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