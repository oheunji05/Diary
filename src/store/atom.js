import { atom } from 'recoil'

export const userNameState = atom({
    default: '',
    key: 'userName'
})

export const titleState = atom({
    default: [],
    key: 'title'
})

export const dateState = atom({
    default: [],
    key: 'date'
})

export const contentState = atom({
    default: [],
    key: 'content'
})

export const weatherState = atom({
    default: [],
    key: 'weather'
})

export const post_idState = atom({
    default: '',
    key: 'post_id'
})

