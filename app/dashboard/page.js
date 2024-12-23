"use client";

import { useRouter } from "next/navigation";
import tickets from "../../data/tickets";
import TicketCard from "../../components/TicketCard";

export default function Dashboard() {
  const router = useRouter();
  const user = JSON.parse(sessionStorage.getItem("user"));

  if (!user) {
    router.push("/login");
    return null;
  }

  const userTickets = user.role === "admin" 
    ? tickets.filter((ticket) => ticket.id !== "") 
    : tickets.filter((ticket) => ticket.empId === user.id);

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    router.push("/");
  };

  return (
    <div className="container">
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ color: "white"}}>Welcome, {user.role === "admin" ? "Admin" :user.name}</h1>
        <button onClick={handleLogout} style={{ background: "white", color: "#007bff", padding: "0.5rem 1rem", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Logout
        </button>
      </header>
      {user.role === "admin" ?<div>
        {/* <h2>All open tickets</h2>         */}
      </div> :<div>
        <h2>Employee Details</h2>
        <p><strong>Employee ID:</strong> {user.id}</p>
        <p><strong>Department:</strong> {user.department}</p>
        <p><strong>Reporting Manager:</strong> {user.manager}</p>
      </div>}
      

      <div>
        <h2>{user.role === "admin" ? "All Open Tickets" : "Your Tickets"}</h2>
        {userTickets.length > 0 ? (
          userTickets.map((ticket) => <TicketCard key={ticket.id} ticket={ticket} />) // Here we are calling TicketCard Component py passing props key and Ticket. 
        ) : (
          <p>No tickets found.</p>
        )}
      </div>

      <button
        onClick={() => router.push("/create-ticket")}
        style={{
          marginTop: "1rem",
          background: "#007bff",
          color: "white",
          padding: "0.75rem 1.5rem",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Create New Support Case
      </button>
    </div>
  );
}


