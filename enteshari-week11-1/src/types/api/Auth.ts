export interface RegisterResponseType {
    jwt: string
    user: UserType
}

export interface UserType {
    id: number
    documentId: string
    username: string
    email: string
    provider: string
    confirmed: boolean
    blocked: boolean
    createdAt: string
    updatedAt: string
    publishedAt: string
    phone: any
}
