export type Colors =
    | 'white'
    | 'primary_blue'
    | 'primary_gray_1'
    | 'primary_gray_2'
    | 'primary_gray_3'
    | 'indicator_orange'
    | 'indicator_blue'
    | 'indicator_red'
    | 'indicator_yellow'
    | 'chats_yellow'
    | 'chats_yellow_dimmed'
    | 'chats_purple'
    | 'chats_purple_dimmed'
    | 'chats_green'
    | 'chats_green_dimmed'
    | 'stickers_blue'

export const COLORS: Record<Colors, string> = {
    white: '#FFFFFF',
    primary_blue: '#2F80ED',
    primary_gray_1: '#4F4F4F',
    primary_gray_2: '#828282',
    primary_gray_3: '#E0E0E0',
    indicator_orange: '#F8B76B',
    indicator_blue: '#8785FF',
    indicator_red: '#EB5757',
    indicator_yellow: '#F2C94C',
    chats_yellow: '#E5A443',
    chats_yellow_dimmed: '#FCEED3',
    chats_purple: '#9B51E0',
    chats_purple_dimmed: '#EEDCFF',
    chats_green: '#43B78D',
    chats_green_dimmed: '#D2F2EA',
    stickers_blue: '#E9F3FF',
}
