import React, { ChangeEvent, HTMLInputTypeAttribute, useEffect, useState } from 'react'
import { Button, DatePicker, Form, Input, Modal, Popconfirm, Space, Switch, TimePicker } from 'antd';
import { DollarCircleOutlined, QuestionCircleOutlined, SmileOutlined } from '@ant-design/icons';
import { TurnType } from '../../../types/turn.type';
import { useAppDispatch } from '../../../store/hooks';
import { deleteEmployeeTurn, updateEmployeeTurn } from '../../../store/features/employeeTurn/employeeTurnSlice';
import dayjs from 'dayjs';

type Props = {
    setVisible: (value: boolean) => void;
    isVisible: boolean,
    turnInfo: TurnType

}

const EditTurnModal = (props: Props) => {
    const dispatch = useAppDispatch()
    const [turnInfo, setTurnInfo] = useState({} as TurnType)
    const [isConfirmDeleteLoading, setIsConfirmDeleteLoading] = useState(false)

    const handleOk = () => {
        // dispatch(addEmployeeTurn({
        //     employee_id: props.employeeInfo?.id,
        //     new_turn: turnInfo
        // }))
        props.setVisible(false);

    };

    const handleCancel = () => {
        props.setVisible(false);
    };

    const handleConfirmDelete = () => {
        setIsConfirmDeleteLoading(true);

        setTimeout(() => {
            setIsConfirmDeleteLoading(false);
            dispatch(deleteEmployeeTurn({
                employee_id: props.turnInfo?.employeeInfo?.id,
                turn_id: props.turnInfo?.id
            }))
            props.setVisible(false)
        }, 1000);

    }

    const _onChangePrice = (evt: any) => {
        setTurnInfo({ ...turnInfo, price: evt?.target?.value })
    }

    const _onChangeService = (evt: React.ChangeEvent<HTMLInputElement>) => {
        console.log('====================================');
        console.log('aaa: ', evt.target.value);
        console.log('====================================');
        setTurnInfo({ ...turnInfo, services: evt?.target?.value })
    }

    const _onChangeStatus = () => {
        setTurnInfo({ ...turnInfo, is_done: !turnInfo.is_done })
    }

    const _onChangeStartDate = (value: any) => {
        setTurnInfo({ ...turnInfo, start_at: value?.$d?.getTime() })
    }

    const _onChangeEndDate = (value: any) => {
        setTurnInfo({ ...turnInfo, end_at: value?.$d?.getTime() })
    }

    const _onChangeTip = (evt: any) => {
        setTurnInfo({ ...turnInfo, tip: evt?.target?.value })
    }


    const handleUpdateTurn = () => {
        dispatch(updateEmployeeTurn({
            employee_id: props.turnInfo.employeeInfo?.id,
            turn: turnInfo
        }))
        handleCancel()
    }


    useEffect(() => {
        setTurnInfo(props.turnInfo)
    }, [props.turnInfo])

    return (
        <div>
            <Modal
                title={`Edit Turn`}
                open={props.isVisible}
                closable={true}
                onCancel={handleCancel}
                footer={[
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                        onConfirm={handleConfirmDelete}
                        okType='danger'
                        key={'confirm-delete'}

                    >
                        <Button key="delete" type='default'  >
                            Delete
                        </Button>
                    </Popconfirm>,
                    <Button key="Update" onClick={handleUpdateTurn}>
                        Update
                    </Button>,
                    <Button key="Cancel" onClick={handleCancel}>
                        Cancel
                    </Button>
                ]}

            >
                <Form.Item style={{ marginBottom: 10 }}>
                    <Form.Item label='Services'>
                        <Input
                            placeholder="Nail, Eyelash"
                            id="services"
                            prefix={<DollarCircleOutlined />}
                            value={turnInfo.services}
                            onChange={_onChangeService}
                        />
                    </Form.Item>
                    <Form.Item label='Price'>
                        <Input
                            placeholder="100"
                            id="price"
                            prefix={<DollarCircleOutlined />}
                            value={turnInfo?.price}
                            onChange={_onChangePrice}
                        />
                    </Form.Item>
                    <Form.Item label='Tip'>
                        <Input
                            placeholder="20"
                            id="tip"
                            prefix={<DollarCircleOutlined />}
                            value={turnInfo?.tip}
                            onChange={_onChangeTip}

                        />
                    </Form.Item>
                    <Form.Item label='Start Time' >
                        <TimePicker
                            onSelect={(value) => _onChangeStartDate(value)}
                            showSecond={false}
                            // value={new Date(turnInfo?.start_at)}
                            value={dayjs(turnInfo.start_at)}
                        />
                    </Form.Item>
                    <Form.Item label='End Time' >
                        <TimePicker
                            onSelect={(value) => _onChangeEndDate(value)}
                            // showTime={true}
                            showSecond={false}
                            value={dayjs(turnInfo.end_at)}
                        />
                    </Form.Item>

                    <Space direction="vertical">

                        <Switch
                            checked={turnInfo?.is_done}
                            checkedChildren="Done"
                            unCheckedChildren="Todo"
                            style={{ background: props.turnInfo?.is_done ? '#1677FF' : 'gray' }}
                            onChange={_onChangeStatus}
                        />
                    </Space>

                </Form.Item>
            </Modal>

        </div>)
}

export default EditTurnModal