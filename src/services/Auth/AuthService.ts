import { api } from '../api'

export interface Theme {
    color: string
    secondaryColor: string
    fontColor: string
    secondaryFontColor: string
    tertiaryFontColor: string
    icon?: string
}
interface AuthResponse {
    tableNumber: string
    theme: Theme
}

export class AuthService {
    static async getCurrentUser () {
        const { data } = await api.get<AuthResponse>('/Auth/TokenClaims')

        localStorage.setItem('theme', JSON.stringify(data.theme))
    
        return {
            number: data.tableNumber,
            ...data
        }
    }
}