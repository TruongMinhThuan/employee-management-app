import { Space, Tag } from 'antd';
import React, { useState } from 'react'
import { TurnType } from '../../../types/turn.type';
import { SmileOutlined } from '@ant-design/icons';
import TurnDetailModal from './EditTurnModal';

type Props = {
    turn: TurnType;
    index?: number
}

const Turn = ({ ...props }: Props) => {

    const [isShowTurnDetail, setIsShowTurnDetail] = useState(false)
    const getTurnIndex = () => {
        // return props.turn?.id
        return (Number(props.index) + 1).toString()
    }

    const showTurnDetail = () => {
        setIsShowTurnDetail(true)
    }

    return (
        <div>
            <Space className='turn-item' onClick={showTurnDetail}>
                <span className='turn-item--id'>{getTurnIndex()}</span>
                <Tag color="red">${props.turn?.price}</Tag>
                <Tag color="blue">TIP ${props.turn?.tip}</Tag>
            </Space>
            <TurnDetailModal turnInfo={props.turn} isVisible={isShowTurnDetail} setVisible={setIsShowTurnDetail} />
        </div>
    )
}

export default Turn