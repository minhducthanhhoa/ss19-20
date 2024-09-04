"use client"
import { useAuth, UserButton } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Dashboard() {
    const userInfo = useAuth();
    const route = useRouter();
    // kiểm tra user đã đang nhập chưa
    if(userInfo.isSignedIn){
        return(
            <div>được đi vào trang Dashboard</div>
        )
    } else {
        // chưa đăng nhập
        route.push("/sign-in")
    }
    
  return userInfo.isSignedIn ? <UserButton /> : route.push("/sign-in")
    
  
}
