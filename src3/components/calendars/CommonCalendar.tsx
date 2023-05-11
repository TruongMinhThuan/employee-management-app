import React from 'react'
import { Calendar } from 'antd';
import type { Dayjs } from 'dayjs';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import  {Navigate, useNavigate} from "react-router-dom";

type Props = {}

const CommonCalendar = (props: Props) => {
    let navigate = useNavigate();

    const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };

    const onSelect = (value: Dayjs) => {
        console.log('select ', value.format('YYYY-MM-DD'));
        navigate('/employee-turn-screen')
    };

    return <Calendar
        onPanelChange={onPanelChange}
        onSelect={onSelect}
    />;

}

export default CommonCalendar