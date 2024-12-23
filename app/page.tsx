"use client";

import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div className="welcome-container" >

      <div className="welcome-header">
        <h1>Welcome to Employee Support Portal</h1>
        <p></p>
      </div>

      

      <div className="welcome-footer">
        <button className="login-button" onClick={handleLogin}>
          Click here to login
        </button>
      </div>
    </div>
  );
}
