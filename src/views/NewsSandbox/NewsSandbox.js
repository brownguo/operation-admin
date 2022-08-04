import React from 'react';
import TopHeader from "../../components/sandbox/TopHeader";
import SideMenu from "../../components/sandbox/SideMenu";
import {Switch, Route, Redirect} from "react-router-dom";
import Home from "./home/Home";
import NoPermission from "./nopermission/NoPermission";
import UserManage from "./user-manage/UserManage";
import RightManage from "./right-manage/RightManage";
import "./NewsSandbox.css"
import {Layout} from "antd";
import RightManageList from "./right-manage/RightManageList";
import RightRoleList from "./right-manage/RightRoleList";
import UserManageList from "./user-manage/UserManageList";
import UdidManage from "./udid-manage/UDIDManage";
import { Spin } from 'antd'
import {connect} from "react-redux";

const {Content, Footer} = Layout;

function NewsSandbox(props) {
    let {loading_status} = props
    console.log(loading_status)
    return (
        <Layout>
            <SideMenu></SideMenu>
            <Layout className="site-layout">
                <TopHeader></TopHeader>
                <Spin size="large" spinning={loading_status}>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Switch>
                            <Route path="/home" component={Home} exact></Route>
                            <Route path="/user-manage" component={UserManage} exact></Route>
                            <Route path="/user-manage/list" component={UserManageList} exact></Route>
                            {/*<Route path="/right-manage" component={RightManage} exact></Route>*/}
                            <Route path="/right-manage/right/list" component={RightManageList} exact></Route>
                            <Route path="/right-manage/role/list" component={RightRoleList} exact></Route>
                            <Route path="/news-manage/add" component={UdidManage} exact></Route>
                            <Redirect from="/" to="/home" exact></Redirect>
                            <Route path="*" component={NoPermission}></Route>
                        </Switch>
                    </Content>
                </Spin>
                <Footer style={{ textAlign: 'center' }}>Created by brown!</Footer>
            </Layout>
        </Layout>
    );
}

const mapsToProps = (state)=>{
    return {
        loading_status: state.LoadingReducer.isLoading
    }
}

export default connect(mapsToProps)(NewsSandbox);