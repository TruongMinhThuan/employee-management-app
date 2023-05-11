import { Button, Space } from 'antd'
import React from 'react'

type Props = {
    onAddClick?: () => void
}

const ManagementMenu = (props: Props) => {

    return (
        <div className='management-menu-container'>
            <Space >
                {/* <Button type="primary" danger>
                    Primary
                </Button>
                <Button type="primary" danger>
                    Primary
                </Button>
                <Button type="primary" danger>
                    Primary
                </Button> */}
                <Button type="primary" ghost onClick={props.onAddClick}>
                    Add new employee
                </Button>
            </Space>
        </div>

    )
}

export default ManagementMenu