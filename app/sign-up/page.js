"use client"

import { useAuth } from "@/hooks/use-auth"
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SignUp(){
  const {data, isPending} = authClient.useSession();
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    

    useEffect(()=>{
      console.log(data, isPending)
      if (!isPending && data) {
        router.push("/");
      }
    },[data, isPending])

    const handleSubmit = async() => {
        const data = await authClient.signUp.email({
            name,email,password
        })

    }
    return (
      <main className="max-w-4xl h-screen flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Ali"
              className=""
            />
          </div>
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
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </main>
    );
}