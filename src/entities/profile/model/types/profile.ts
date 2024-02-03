import { Country, Currency } from '@shared/const/common'

export interface Profile {
    userId: number
    name: string
    secondName: string
    age: number
    currency: Currency
    country: Country
    city: string
    nick: string
    avatar: string
}
