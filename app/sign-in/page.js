"use client"

import { useAuth } from "@/hooks/use-auth"
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignIn(){
    const router = useRouter();
    const { data, isPending } = authClient.useSession();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");


    if (!isPending && data) {
      router.push("/");
    }


    const handleSubmit = async(e) => {
        e.preventDefault();
        const data = await authClient.signIn.email({
            email,password
        })
        console.log(data);

        if(!data.error){
            router.push("/")
        }

    }
    return (
      <main>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className=""
            />
          </div>

          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="*********"
              className=""
            />
          </div>
          <div>
            <button type="submit">Sign in</button>
          </div>
        </form>
      </main>
    );
}