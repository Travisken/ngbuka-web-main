import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
 
export const { handlers, signIn, signOut, auth } = NextAuth({

  pages: {
    signIn: '/signin',
    // error: '/auth/error', // Error code passed in query string as ?error=
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: { },
        password: { }
      },

      async authorize(credentials, req) {
        const res = await apiWithOutAuth.post("/auth/login", {
          body: JSON.stringify(credentials),
        })
        const user = await res.json();
        console.log(user, 'user  token');
  
        // If no error and we have user data, return it
        if (res.ok && user) {
          return user
        }
        // Return null if user data could not be retrieved
        return null
      }
    })
  ],
})