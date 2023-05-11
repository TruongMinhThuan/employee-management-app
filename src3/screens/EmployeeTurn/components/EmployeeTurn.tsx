import React, { useState } from 'react'
import EmployeeInfo from './EmployeeInfo'
import { Divider, Space, Tag, Button, Tooltip } from 'antd';
import { employeeType } from '../../../types/employee.type';
import { PlusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import AddTurnModal from './AddTurnModal';
import Turn from './Turn';
import { TurnType } from '../../../types/turn.type';

type Props = {
  employeeInfo?: employeeType
}

const EmployeeTurn = (props: Props) => {
  const [isAddTurnVisible, setIsAddTurnVisible] = useState(false)

  const getDailyIncome = () => {
    let total = props.employeeInfo?.turns?.reduce((prevValue, currentValue) => Number(prevValue) + Number(currentValue.price), 0)
    return total
  }

  const showTotalDailyIncome = () => {
    if (!props?.employeeInfo?.turns?.length) {
      return null
    }
    return <Tag color="#f50">Total: ${getDailyIncome()} </Tag>

  }

  return (
    <div className='employee-turn--container'>
      <Space style={{ display: 'flex' }}>
        <EmployeeInfo employeeInfo={props.employeeInfo} />
        {showTotalDailyIncome()}
        {/* <Tag color="#108ee9">Tip total:{getDailyIncome()} </Tag> */}
        <Tooltip title="Add turn">
          <Button
            onClick={() => setIsAddTurnVisible(true)}
            shape="circle"
            icon={<PlusOutlined />}
            style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}

          />
        </Tooltip>
      </Space>
      <Space size={[0, 8]} wrap>
        {
          props.employeeInfo?.turns?.map((e: TurnType, index) =>
            <Turn turn={{ ...e, employeeInfo: props.employeeInfo }} index={index} key={index?.toString()} />
          )
        }
      </Space>

      <AddTurnModal employeeInfo={props.employeeInfo} isVisible={isAddTurnVisible} setVisible={setIsAddTurnVisible} />
    </div>
  )
}

export default EmployeeTurn