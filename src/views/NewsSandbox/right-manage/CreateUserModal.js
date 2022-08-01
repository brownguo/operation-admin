import { Form, Input, Modal, Radio } from 'antd';

const UserCreateForm = (props) => {
    let {visible, cancelUser } = props
    const [form] = Form.useForm();
    const onCreate = (values) => {
        console.log('Received values of form: ', values);
        cancelUser()
    };
    return (
        <Modal
            visible={visible}
            title="添加用户"
            okText="提交"
            cancelText="取消"
            onCancel={cancelUser}
            onOk={() => {
                form.validateFields()
                    .then((values) => {
                        form.resetFields();
                        onCreate(values);
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{
                    modifier: 'public',
                }}
            >
                <Form.Item
                    name="username"
                    label="用户名"
                    rules={[
                        {
                            required: true,
                            message: '请输入用户名',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="passwd"
                    label="密码"
                    rules={[
                        {
                            required: true,
                            message: '请输入用户名',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
};
export default UserCreateForm;