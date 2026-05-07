"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export async function useAuth(){
    const router = useRouter();
    const{data:session, isPending} =  authClient.useSession();

    useEffect(()=>{
        if(!isPending && !session){
            router.push('/sign-in')
        }
        if(!isPending && session){
            router.push('/')
        }
    },[session, isPending])

    return {
        session, isPending
    }
}