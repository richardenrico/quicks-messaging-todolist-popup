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
