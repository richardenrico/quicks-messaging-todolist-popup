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
    // | 'chats_yellow'
    // | 'chats_yellow'
    // | 'chats_yellow'

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
}
