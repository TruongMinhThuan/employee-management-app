import React, { useEffect, useState } from 'react'
import { Button, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import ManagementMenu from '../../components/navbar/ManagementMenu';
import AddModal from './components/AddModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { employeeType } from '../../types/employee.type';
import { setEmployeeList } from '../../store/features/employeeManagement/employeeManagementSlice';
import EditModal from './components/EditModal';
import EmployeeTable from '../../components/tables/employee/EmployeeTable';
import employeeService from '../../services/employee.service';
import { fetchEmployee } from '../../store/features/employeeManagement/thunks';

type Props = {}


// interface DataType {
//     id?:string;
//     key?: string;
//     name?: string;
//     age?: number;
//     address?: string;
//     skills?: string[];
//     phonenumber?: string;
// }

const data: employeeType[] = [
    {
        id: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        skills: ['Nail', 'Eyelash'],
        phonenumber: '09769044548',
        key: '1'
    },
    {
        id: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        skills: ['Nail', 'Eyelash', 'Facial'],
        phonenumber: '09769044548',
        key: '2'
    },
    {
        id: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        skills: ['Nail', 'Eyelash'],
        phonenumber: '09769044548',
        key: '3'
    },
];






const EmployeeManagementScreen = (props: Props) => {
    const [isAddVisible, setIsAddVisible] = useState<boolean>(false)
    const [isEditVisible, setIsEditVisible] = useState<boolean>(false)
    const [selectedEmployee, setSelectedEmployee] = useState({} as employeeType)

    const { employeeList } = useAppSelector((state: RootState) => state.employeeManagement)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchEmployee())
    }, [])


    return (
        <div>
            <ManagementMenu onAddClick={() => setIsAddVisible(true)} />
            {/* <Table columns={columns} dataSource={employeeList} /> */}
            <EmployeeTable employeeList={employeeList} />
            <AddModal isVisible={isAddVisible} setVisible={setIsAddVisible} />

        </div>
    )
}

export default EmployeeManagementScreen