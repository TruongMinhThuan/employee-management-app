import React from 'react'
import { Avatar, Badge, Space, Descriptions } from 'antd';
import './style.css';
import { employeeType } from '../../../types/employee.type';


type Props = {
    employeeInfo?: employeeType
}

const EmployeeInfo = (props: Props) => {
    return (
        <div className='employee-item'>
            <Avatar shape="square" src={props?.employeeInfo?.avatar}  />
            <p className='employee-item-name'>{props.employeeInfo?.name}</p>
        </div>
    )
}

export default EmployeeInfo