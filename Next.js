import { signIn } from "next-auth/client";

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Twitter scraper</h1>
      <button onClick={() => signIn()}>Sign in with Twitter</button>
    </div>
  );
}

import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";

export default NextAuth({
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    }),
  ],
});

import { signIn, signOut, useSession } from "next-auth/client";

export default function Home() {
  const [session, loading] = useSession();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (session) {
    return (
      <div>
        <h1>Welcome, {session.user.name}!</h1>
        <p>You are authenticated with Twitter.</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Welcome to my Twitter scraper</h1>
        <button onClick={() => signIn()}>Sign in with Twitter</button>
      </div>
    );
  }
}
