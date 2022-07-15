import React from 'react';
import TopHeader from "../../components/sandbox/TopHeader";
import SideMenu from "../../components/sandbox/SideMenu";
import {Switch, Route, Redirect} from "react-router-dom";
import Home from "./home/Home";
import NoPermission from "./nopermission/NoPermission";
import UserManage from "./user-manage/UserManage";
import RightManage from "./right-manage/RightManage";
import {Layout} from "antd";

function NewsSandbox() {
    return (
        <Layout>
            <TopHeader></TopHeader>
            <SideMenu></SideMenu>
            <Switch>
                <Route path="/home" component={Home} exact></Route>
                <Route path="/user-manage" component={UserManage} exact></Route>
                <Route path="/right-manage" component={RightManage} exact></Route>
                <Redirect from="/" to="/home" exact></Redirect>
                <Route path="*" component={NoPermission}></Route>
            </Switch>
        </Layout>
    );
}

export default NewsSandbox;