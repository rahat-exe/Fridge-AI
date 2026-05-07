"use client";

import { useAuth } from "@/hooks/use-auth";

export default function ({children}){
    const{session, isPending} = useAuth();

    if(isPending) return null;
    if(!session) return null;

    return children;

    
}