import { PageHeader, Button, message, Steps } from "antd";
import React, { useState } from 'react';
const { Step } = Steps;
const steps = [
    {
        title: 'First',
        content: 'First-content',
        description: "This is a description."
    },
    {
        title: 'Second',
        content: 'Second-content',
        description: "This is a description."
    },
    {
        title: 'Last',
        content: 'Last-content',
        description: "This is a description."
    },
];

function UdidManage(props) {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };
    return (
        <div>
            <PageHeader
                className="site-page-header"
                title="UDID Manage"
                subTitle="分步表单"
            />
            <Steps current={current} className="steps-header">
                {steps.map((item) => (
                    <Step key={item.title} title={item.title} description={item.description} />
                ))}
            </Steps>

            <div className="steps-content">
                {steps[current].content}
            </div>
            <div className="steps-action">
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        下一步
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() =>{
                            message.info('done ! Processing complete!')
                            message.success('done ! Processing complete!')
                        }
                    }>
                        提交
                    </Button>
                )}
                {current > 0 && (
                    <Button
                        style={{
                            margin: '0 8px',
                        }}
                        onClick={() => prev()}
                    >
                        上一步
                    </Button>
                )}
            </div>
        </div>
    );
}

export default UdidManage;