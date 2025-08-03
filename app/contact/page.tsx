"use client";
import {useState} from "react";
export default function Contact() {
    const [count,setCount]=useState(0);
    console.log("Contact");
    return (
        <div>
            <h1>Contact</h1>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    );
}