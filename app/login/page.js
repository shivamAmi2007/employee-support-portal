"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import users from "../../data/users";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
      router.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
