import { getInitialData } from '../../utils/api'
import { receiveTaskData } from './task'

export const handleInitalData = () => {
    return (dispatch) => {
        return getInitialData()
            .then(({ taskData }) => {
                dispatch(receiveTaskData(taskData))
            })
    }
}