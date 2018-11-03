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

export const validateDate = (date) => {
    const dateRegex = /^\d{4}[./]\d{1,2}[./]\d{1,2}$/
    const regs = date.match(dateRegex)

    if(regs) {
        const [ year, month, day ] = date.split(/[./]/)

        if(year < 1902 || year > 9999) {
            alert("Invalid value for year: " + year + " - must be between 1902 and 9999");
            return false;
        }

        if(month < 1 || month > 12) {
            alert("Invalid value for month: " + month);
            return false;
        }

        if(day < 1 || day > 31) {
            alert("Invalid value for day: " + day);
            return false;
        }
    } else {
        alert("Valid date format: yyyy/mm/dd");
        return false;
    }   
    
    return true
}

export const validateTime = (time) => {
    const timeRegex = /^\d{1,2}:\d{2}([ap]m)?$/
    const regs = time.match(timeRegex)

    if(regs) {
        const [ hour, minute ] = time.split(/:/)

        if(hour < 0 || hour > 23) {
            alert("Invalid value for hour: " + hour);
            return false;
        }

        if(minute < 0 || minute > 59) {
            alert("Invalid value for minute: " + minute);
            return false;
        }
    } else {
        alert("Valid date format: hh:mm");
        return false;
    }

    return true
}