import React,{useState} from 'react'
import { Layout, Dropdown, Menu, Space, Avatar } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    SmileOutlined,
    UserOutlined
} from '@ant-design/icons';
const { Header } = Layout;

function TopHeader(props) {
    const [collapsed, setCollapsed] = useState(false)
    const menu = (
        <Menu
            items={[
                {
                    key: '2',
                    label: (
                        <span>工作台</span>
                    ),
                    icon: <SmileOutlined />,
                    disabled: true,
                },
                {
                    key: '4',
                    danger: true,
                    label: '退出登录',
                },
            ]}
        />
    );
    return (
        <Header
            className="site-layout-background"
            style={{
                padding: 0,
            }}
        >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: ()=>{
                    setCollapsed(!collapsed)
                },
            })}
            <div style={{float:"right"}}>
                <span>当前用户administrator</span>
                <Dropdown overlay={menu}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                    </a>
                </Dropdown>
            </div>
        </Header>
    )
}

export default TopHeader