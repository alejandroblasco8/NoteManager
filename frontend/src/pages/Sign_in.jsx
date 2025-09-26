import React, { useState } from "react";
import Header from "../components/Header.jsx"
import Logo from "../assets/app-logo.png"
import TextField from "@mui/material/TextField";


export default function Sign_in() {

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    return (
    <div className="h-screen flex flex-col space-y-10 bg-white">

        <Header />

        <div className="flex flex-col items-center">
            <img src={Logo} alt="Logotipo App" className="w-24"></img>
        </div>
        <main className="flex flex-row items-center justify-center">
            <section className="section-style">
            </section>
            <section className="section-style !border-r-0">
                <div className="flex flex-col items-center p-6 max-w-sm mx-auto my-12 space-y-10">
                    <div className="flex flex-col space-y-4">
                        <TextField
                            label="Email" variant="outlined" size="small" type="email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
                        <TextField
                            label="Password" variant="outlined" size="small" type="password" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
            </section>
        </main>
    </div>
    );
}
