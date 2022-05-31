import { api } from "../api"

export class AuthService {
    static async getCurrentUser () {
        const { data } = await api.get<{ number: string }>('/Auth/ClientSessionInfo')
    
        return data
    }
}