import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: {
                    label: "Имя пользователя",
                    type: "text",
                    placeholder: "имя пользователя"
                },
                password: {
                    label: 'Пароль',
                    type: 'password'
                }
            },
            async authorize(credentials): Promise<any> {
                const user = {id: 42, name: "admin", password: "admin"}

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],

}