export function getStringDate(date: Date): string {
    const formattedDate = date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
    })

    return formattedDate
}

export function getNumberDate(date: Date): string {
    const formattedDate = date.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
    })

    return formattedDate
}

export function getHoursMinuteTime(date: Date): string {
    const formattedDate = date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
    })

    return formattedDate
}

export function getFullDayTime(date: Date): string {
    const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ]
    const currentDay = new Date().getDay()
    const inputDay = date.getDay()

    const formatter = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    })
    const formattedDate = formatter.format(date)

    if (currentDay - inputDay === 0) {
        return `Today ${formattedDate}`
    } 
    // else if (currentDay - inputDay === 1) {
    //     return `Yesterday ${formattedDate}`
    // }
    return `${daysOfWeek[inputDay]} ${formattedDate}`
}
