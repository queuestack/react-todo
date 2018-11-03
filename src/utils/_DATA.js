const taskData = {
    authedUser: 'oxoxx',
    tasks: [{
        title: 'title1',
        body: 'body1',
        dueDate: 1541150030181,
        priority: 'high',
        done: false
    }, {
        title: 'title2',
        body: 'body2',
        dueDate: undefined,
        priority: 'middle',
        done: false,
    }, {
        title: 'title3',
        body: 'body3',
        dueDate: 1551150040181,
        priority: 'low',
        done: true,            
    }]
}

export function _getData () {
    return new Promise((res, rej) => {
        setTimeout(() => res({...taskData}), 1000)
    })
}