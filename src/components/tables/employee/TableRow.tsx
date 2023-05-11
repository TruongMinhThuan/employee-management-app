import { Avatar, Button, Col, Row, Space, Tag } from 'antd'
import React, { useState } from 'react'
import { employeeType } from '../../../types/employee.type'
import { EditEmployeeModal } from '../../../screens/employee-management/components'
import { UserOutlined } from '@ant-design/icons'
import employeeService from '../../../services/employee.service'
import { useAppDispatch } from '../../../store/hooks'
import { fetchEmployee } from '../../../store/features/employeeManagement/thunks'

type Props = {
    employee: employeeType,
    onEditClick?: () => void
}

const TableRow = ({ employee, ...props }: Props) => {
    const [isEditVisible, setIsEditVisible] = useState<boolean>(false)
    const dispatch = useAppDispatch()

    const showEmployeeUpdateModal = () => {
        setIsEditVisible(true)
    }

    const deleteEmployee = async () => {
        // setIsEditVisible(true)
        await employeeService.deleteEmployee(employee)
        
        console.log('eempp:: ',employee);
        dispatch(fetchEmployee())
    }


    return (
        <Row style={containerStyle}>
            <Col span={6}>
                <div style={style}>
                    <Avatar size="large" icon={<UserOutlined />}  style={{margin:6}}/>
                    <span>
                        {employee.name}
                    </span>

                </div>

            </Col>
            <Col span={6}>
                <div style={style}>{employee.phonenumber}</div>
            </Col>
            <Col span={6}>
                <div style={style}>
                    {employee.skills?.map((e) => <Tag>{e}</Tag>)}
                </div>
            </Col>
            <Col span={6}>
                <Space >
                    <Button onClick={showEmployeeUpdateModal}>Edit</Button>
                    <Button onClick={deleteEmployee}>Delete</Button>

                </Space>
            </Col>
            <EditEmployeeModal
                isVisible={isEditVisible}
                setVisible={setIsEditVisible}
                employeeInfo={employee}
            />
        </Row>)
}

const style: React.CSSProperties = {
    padding: '8px 0',
    paddingLeft: 12,
    textAlign: 'center'
};
const containerStyle: React.CSSProperties = {
    borderBottomWidth: 1,
    paddingTop: 6,
    paddingBottom: 6,
    display:'flex',
    alignItems:'center'
};


export default TableRow