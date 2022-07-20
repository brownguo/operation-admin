import React, {useEffect, useState} from 'react';
import {Button, Tag, Table, Modal} from "antd";
import axios from "axios";

function RightManageList(props) {
    const [dataSource, setDataSource] = useState([])

    const columns = [
        {
            title: '权限ID',
            dataIndex: 'id',
        },
        {
            title: '权限名称',
            dataIndex: 'label',
        },
        {
            title: '权限路径',
            dataIndex: 'key',
            render:(key)=>{
                return <Tag color="green">{key}</Tag>
            }
        },
        {
            title: '操作',
            render:(item)=>{
                return (
                    <div>
                        <Button color="green" shape="round" type="primary">编辑</Button>
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
        axios.get("http://localhost:5000/rights?_embed=children").then((res)=>{
            setDataSource(res.data)
        })
    }, [])

    const [visible, setVisible] = useState(false);
    const [itemlInfo, setItemInfo] = useState({});

    const showModal = () => {
        setVisible(true);
    };

    const hideModal = () => {
        setVisible(false)
    }

    const deleteMethod = ()=>{
        setDataSource(dataSource.filter(data => data.id !== itemlInfo.id))
        hideModal()
    }
    return (
        <div>
            <Modal
                title="删除权限"
                visible={visible}
                onOk={()=>{
                    deleteMethod()
                }}
                onCancel={()=>{
                    hideModal()
                }}
            >
                <p>{itemlInfo.id} - {itemlInfo.key} - {itemlInfo.label}</p>
            </Modal>
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={{
                    pageSize:10
                }}
            />
        </div>
    );
}

export default RightManageList;