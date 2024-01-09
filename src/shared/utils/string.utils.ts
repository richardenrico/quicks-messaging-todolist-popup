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

export function getDDMMYYYYDate(date: Date): string {
    const formattedDate = date.toLocaleString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    })

    return formattedDate
}

export function calculateDateRange(date: Date): string {
    const currentDateTime: Date = new Date()

    const dateRange: number = date.getTime() - currentDateTime.getTime()

    const days: number = Math.floor(dateRange / (1000 * 60 * 60 * 24))

    const rangeString: string = `${days + 1} Days`

    if (dateRange > 0) {
        return rangeString
    }
    return 'Invalid Due Date'
}

interface Chat {
    mode: string
    receiverMode: number
    sender: string
    message: string
    timestamp: number
    isRead: boolean
}

interface GroupedChats {
    time: number
    chats: Chat[]
}

export function getGroupedMessageByDay(data: Chat[]) {
    const groupedChats: GroupedChats[] = []

    data.forEach((chat) => {
        const chatTime = new Date(chat.timestamp * 1000)
        const chatDay = new Date(
            chatTime.getFullYear(),
            chatTime.getMonth(),
            chatTime.getDate()
        ).getTime()
    
        const existingGroup = groupedChats.find((group) => group.time === chatDay)
    
        if (existingGroup) {
            existingGroup.chats.push(chat)
        } else {
            groupedChats.push({
                time: chatDay,
                chats: [chat],
            })
        }
    })

    return groupedChats
}