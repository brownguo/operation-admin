import React, {useEffect, useState} from 'react';
import {Button, Tag, Table, Modal} from "antd";
import axios from "axios";
import UserCreateForm from "../right-manage/CreateUserModal";

function UserManageList(props) {
    const [dataSource, setDataSource] = useState([])
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
        },
        {
            title: '用户名',
            dataIndex: 'username',
        },
        {
            title: 'region',
            dataIndex: 'region',
        },
        {
            title: 'roleState',
            dataIndex: 'id',
            render:(key)=>{
                return <Tag color="green">{key}</Tag>
            }
        },
        {
            title: '操作',
            render:(item)=>{
                return (
                    <div>
                        <Button color="green" shape="round" type="primary">用户</Button>
                        <Button color="green" shape="round" type="danger" onClick={()=>{
                            setItemInfo(item)
                            showModal()
                        }}>删除</Button>
                    </div>
                )
            }
        }
    ];

    useEffect(()=>{
        axios.get("http://localhost:5000/users").then((res)=>{
            setDataSource(res.data)
        })
    }, [])

    const [visible, setVisible] = useState(false);
    const [userVisible, setUserVisible] = useState(false)
    const [itemlInfo, setItemInfo] = useState({});

    const showModal = () => {
        setVisible(true);
    };

    const hideModal = () => {
        setVisible(false)
    }

    const deleteMethod = ()=>{
        setDataSource(dataSource.filter((data)=>{
            return data.id !== itemlInfo.id
        }))
        hideModal()
    }
    const addUser = ()=>{
        setUserVisible(true)
    }
    const cancelUser = ()=>{
        setUserVisible(false)
    }
    return (
        <div>
            <Modal
                title="是否删除用户？"
                visible={visible}
                onOk={()=>{
                    deleteMethod()
                }}
                onCancel={()=>{
                    hideModal()
                }}
            >
                <p>{itemlInfo.id} - {itemlInfo.label}</p>
            </Modal>
            <UserCreateForm visible={userVisible} cancelUser={cancelUser}></UserCreateForm>
            <Button type="primary" onClick={()=>{
                addUser(true)
            }}>添加用户</Button>
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={{
                    pageSize:10
                }}
                rowKey="id"
            />
        </div>
    );
}

export default UserManageList;