import { _getData } from './_DATA'

export async function getInitialData () {
    return Promise.all([
      _getData(),
    ]).then(([taskData]) => ({
      taskData
    }))
}