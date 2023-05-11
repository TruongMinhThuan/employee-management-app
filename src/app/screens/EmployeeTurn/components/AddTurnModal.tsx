import React, { ChangeEvent, HTMLInputTypeAttribute, useState } from 'react'
import { Button, DatePicker, Form, Input, Modal, Space, Switch, TimePicker } from 'antd';
import { DollarCircleOutlined, SmileOutlined } from '@ant-design/icons';
import { TurnType } from '../../../types/turn.type';

import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { addEmployeeTurn } from '../../../store/features/employeeTurn/employeeTurnSlice'
import { employeeType } from '../../../types/employee.type';
import helpers from '../../../helpers/helpers';
import { firebaseService } from '../../../services';

type Props = {
    setVisible: (value: boolean) => void;
    isVisible: boolean,
    employeeInfo?: employeeType
}


const AddTurnModal = ({ isVisible = false, ...props }: Props) => {
    const [turnInputData, setTurnInputData] = useState({} as TurnType)

    const handleOk = async () => {
        await firebaseService.addData()
        let turnId = helpers.getIdByTime()

        dispatch(addEmployeeTurn({
            employee_id: props.employeeInfo?.id,
            new_turn: { ...turnInputData, id: turnId, employeeInfo: props.employeeInfo }
        }))
        props.setVisible(false);

    };

    const handleCancel = () => {
        props.setVisible(false);
    };

    const turnValue = useAppSelector((state) => state.employeeTurn.value)
    const dispatch = useAppDispatch()


    const _onChangePrice = (evt: any) => {
        setTurnInputData({ ...turnInputData, price: evt?.target?.value })
    }

    const _onChangeService = (evt: any) => {
        setTurnInputData({ ...turnInputData, services: evt?.target?.value })
    }

    const _onChangeStatus = () => {
        setTurnInputData({ ...turnInputData, is_done: !turnInputData.is_done })
    }

    const _onChangeStartDate = (value: any) => {
        setTurnInputData({ ...turnInputData, start_at: value?.$d?.getTime() })
    }

    const _onChangeEndDate = (value: any) => {
        setTurnInputData({ ...turnInputData, end_at: value?.$d?.getTime() })
    }

    const _onChangeTip = (evt: any) => {
        setTurnInputData({ ...turnInputData, tip: evt?.target?.value })
    }

    return (
        <div>
            <Modal
                title={`Add Turn  ${turnValue}  `}
                open={isVisible}
                closable={false}
                footer={[
                    <Button key="cancel" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="ok" onClick={handleOk}>
                        OK
                    </Button>
                ]}

            >
                <Form.Item style={{ marginBottom: 10 }}>
                    <Form.Item label='Services'>
                        <Input placeholder="Nail, Eyelash" id="services" prefix={<DollarCircleOutlined />}
                            onChange={_onChangeService}
                        />
                    </Form.Item>
                    <Form.Item label='Price'>
                        <Input placeholder="100" id="price" prefix={<DollarCircleOutlined />}
                            onChange={_onChangePrice}
                        />
                    </Form.Item>
                    <Form.Item label='Tip'>
                        <Input
                            placeholder="20"
                            id="tip"
                            prefix={<DollarCircleOutlined />}
                            onChange={_onChangeTip}

                        />
                    </Form.Item>
                    <Form.Item label='Start Time' >
                        <TimePicker
                            onSelect={(value) => _onChangeStartDate(value)}
                            showSecond={false}
                        />
                    </Form.Item>
                    <Form.Item label='End Time' >
                        <TimePicker
                            onSelect={(value) => _onChangeEndDate(value)}
                            // showTime={true}
                            showSecond={false}
                        // renderExtraFooter={()=><p>sdsa</p>}

                        />
                    </Form.Item>

                    <Space direction="vertical">

                        <Switch
                            checked={turnInputData.is_done}
                            checkedChildren="Done"
                            unCheckedChildren="Todo"
                            style={{ background: turnInputData?.is_done ? '#1677FF' : 'gray' }}
                            onChange={_onChangeStatus}
                        />
                    </Space>

                </Form.Item>
            </Modal>

        </div>
    )
}

export default AddTurnModal