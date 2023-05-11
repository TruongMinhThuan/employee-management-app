import React, { useEffect, useState } from 'react';
import { Button, InputNumber, Space } from 'antd';
import EmployeeItem from './components/EmployeeItem';
import EmployeeTurn from './components/EmployeeTurn';
import { employeeType } from '../../types/employee.type';

import EMPLOYEE_DATA from '../../dummy/employee.json'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setEmployeeTurns } from '../../store/features/employeeTurn/employeeTurnSlice';

const EmployeeTurnScreen: React.FC = () => {

    const [employeeList, setEmployeeList] = useState<employeeType[]>([])
    const { employeeTurns } = useAppSelector(state => state.employeeTurn)
    const disatch = useAppDispatch()

    useEffect(() => {
        disatch(setEmployeeTurns({ employeeTurnList: EMPLOYEE_DATA }))
    }, [])

    return (
        <>
            <div>
                {
                    employeeTurns?.map((employee: employeeType, index: any) =>
                        <EmployeeTurn
                            employeeInfo={employee}
                            key={employee?.id.toString()}
                        />
                    )
                }
            </div>

        </>

    )
}

export default EmployeeTurnScreen
