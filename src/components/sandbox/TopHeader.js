import React,{useState} from 'react'
import {connect} from "react-redux";
import { Layout, Dropdown, Menu, Space, Avatar } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    SmileOutlined,
    UserOutlined
} from '@ant-design/icons';
const { Header } = Layout;

function TopHeader(props) {
    const changeCollapsed = ()=>{
        props.changeCollapsed()
    }
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
            {React.createElement(props.is_collapsed_status ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: ()=>{
                    changeCollapsed()
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

// 这个state是reducer里初始化的
const mapsStateToProps = (state)=>{
   return {
       is_collapsed_status: state.CollapsedReducer.is_collapsed_show,
   }
}

//dispatch是一个方法，返回的都是一个对象
const mapsDispatchToProps = {
    changeCollapsed(){
        return {
            type: "change_collapsed"
        }
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(TopHeader)