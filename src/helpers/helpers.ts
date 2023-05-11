import moment from 'moment'
const formatDateTime = (time: string | Date | undefined) => {
    try {

        let dt = moment(time)?.format('YYYY-MM-DD hh:mm')
        return dt.toString()

    } catch (error) {
        return ''
    }
}

const getIdByTime = () => {
    return new Date().getTime()
}

export default { formatDateTime, getIdByTime }