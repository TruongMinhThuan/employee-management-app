import React, { ChangeEvent, HTMLInputTypeAttribute, useState } from 'react'
import { Button, DatePicker, Form, Input, Modal, Select, SelectProps, Space, Switch, TimePicker, Tooltip, Typography } from 'antd';
import { DollarCircleOutlined, SmileOutlined } from '@ant-design/icons';
import { TurnType } from '../../../types/turn.type';

import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { addEmployeeTurn } from '../../../store/features/employeeTurn/employeeTurnSlice'
import { employeeType } from '../../../types/employee.type';
import helpers from '../../../helpers/helpers';
import react from '@vitejs/plugin-react';
import { addNewEmployee } from '../../../store/features/employeeManagement/employeeManagementSlice';
import employeeService from '../../../services/employee.service';
import { fetchEmployee } from '../../../store/features/employeeManagement/thunks';

type Props = {
    setVisible?: (value: boolean) => void;
    isVisible?: boolean,
    employeeInfo?: employeeType
}


const AddModal = ({ isVisible = false, ...props }: Props) => {
    const [employeeInfo, setEmployeeInfo] = useState({} as employeeType)
    const dispatch = useAppDispatch()

    const handleOk = () => {
        let turnId = helpers.getIdByTime()

        handleCancel()

    };

    const handleCancel = () => {
        if (props.setVisible) {
            props.setVisible(false);
        }
    };

    const _onChangeUsername = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setEmployeeInfo({ ...employeeInfo, name: evt?.target?.value })
    }

    const _onChangeSkills = (evt: SelectProps[]) => {
        console.log('skills: ', evt);

        // let employee = employeeInfo;
        // employee.skills?.push(evt?.target?.value)
        setEmployeeInfo({ ...employeeInfo, skills: evt })
    }

    const _onChangePhonenumber = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setEmployeeInfo({ ...employeeInfo, phonenumber: evt?.target?.value })
    }

    const handleAddNewEmployee = async () => {
        let key = helpers.getIdByTime().toString()
        // dispatch(addNewEmployee({ ...employeeInfo, key }))
        handleCancel()
        await employeeService.addEmployee(employeeInfo)
        await dispatch(fetchEmployee())
    }


    return (
        <div>
            <Modal
                title={`Add new employee`}
                open={isVisible}
                closable={false}
                footer={[
                    <Button key="cancel" onClick={handleCancel}>
                        Cancel
                    </Button>,

                ]}

            >
                <Form
                    name="complex-form"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                >
                    <Form.Item label="Username">
                        <Space>
                            <Form.Item
                                name="username"
                                noStyle
                                rules={[{ required: true, message: 'Username is required' }]}
                            >
                                <Input
                                    placeholder="Please input"
                                    onChange={_onChangeUsername}
                                />
                            </Form.Item>
                        </Space>
                    </Form.Item>
                    <Form.Item label="Phone">
                        <Space>
                            <Form.Item
                                name="phonenumber"
                                noStyle
                            >
                                <Input
                                    placeholder="Please input"
                                    onChange={_onChangePhonenumber}
                                />
                            </Form.Item>
                        </Space>
                    </Form.Item>

                    <Form.Item label="Skills">
                        <Space>
                            {/* <Form.Item
                                name="skills"
                                noStyle
                            >
                                <Input
                                    placeholder="Please input"
                                    onChange={_onChangeSkills}
                                />
                            </Form.Item> */}

                            <Select
                                mode="tags"
                                size={'middle'}
                                placeholder="Please select"
                                // defaultValue={['a10', 'c12']}
                                onChange={_onChangeSkills}
                                style={{ width: '100%', minWidth: 200 }}
                            // options={options}
                            />
                        </Space>

                    </Form.Item>


                    <Form.Item label=" " colon={false}>
                        <Button htmlType="submit" onClick={handleAddNewEmployee}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>

            </Modal>

        </div>
    )
}

export default AddModal