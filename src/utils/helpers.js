export const formatTask = (title, body, dueDate, priority, done) => {
    return {
        title,
        body,
        dueDate,
        priority,
        done
    }
}

export const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    const time = date.toLocaleTimeString('it-IT')
    const [month, day, year] = date.toLocaleDateString().split('/')
    const [hour, minute, second] = time.split(':')

    return {
        year,
        month,
        day,
        hour,
        minute,
        second
    }
}

export const formatTime = (date, time) => {
    const [ year, month, day ] = date.split('/')
    const [ hour, minute ] = time.split(':')

    const dueDate = new Date(year, month - 1, day, hour, minute).getTime()
    
    return dueDate
}