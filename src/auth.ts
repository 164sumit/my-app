// auth.ts
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import { User } from './lib/models/user.model'
import connect from './lib/mongoose'
// import connect from './lib/mongoose'
// import User from './models/User'

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(connect),
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        await connect()
        const user = await User.findOne({ email: credentials?.email })
        if (user && user.password === credentials?.password) {
          return user
        }
        return null
      },
    }),
  ],
})