import React from 'react'
import { Avatar, Badge, Space, Descriptions } from 'antd';
import './style.css';

type Props = {}

const EmployeeItem = (props: Props) => {
    return (
        <div className='employee-item'>
            <Avatar shape="square" />
            <p className='employee-item-name'>Name</p>
        </div>
    )
}

export default EmployeeItem