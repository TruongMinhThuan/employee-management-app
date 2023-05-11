import { Col, Row, Space } from 'antd'
import React, { useState } from 'react'
import TableRow from './TableRow'
import { employeeType } from '../../../types/employee.type';
import { EditEmployeeModal } from '../../../screens/employee-management/components';

type Props = {
    employeeList: employeeType[];
}

const EmployeeTable = (props: Props) => {


    return (
        <div>
            <Row style={headerContainerStyle} >
                <Col span={4}>
                    <div style={style}>ID</div>
                </Col>
                <Col span={5}>
                    <div style={style}>Name</div>
                </Col>
                <Col span={5}>
                    <div style={style}>Phone</div>
                </Col>
                <Col span={5}>
                    <div style={style}>Skills</div>
                </Col>
                <Col span={5}>
                    <div style={style}>Actions</div>
                </Col>
            </Row>
            {
                props.employeeList?.map((e: employeeType, index: number) => {

                    return (
                        <TableRow employee={e} key={e.id} number={index} />
                    )
                }
                )
            }

        </div>
    )
}

const style: React.CSSProperties = { padding: '8px 0' };

const headerContainerStyle: React.CSSProperties = {
    // background: '#0092ff',
    // padding: '8px 0',
    borderWidth: 1,
    textAlign: 'center'

};

const itemStyle: React.CSSProperties = {
    // margin: '8px'
    // background: '#0092ff',
    // padding: '8px 0',
    marginTop: 2

};


export default EmployeeTable