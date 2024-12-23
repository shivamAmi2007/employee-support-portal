"use client";

import { useRouter } from "next/navigation";

export default function TicketDetail({ ticket }) {
  const router = useRouter();

  if (!ticket) {
    return <p>Ticket not found.</p>;
  }

  return (
    <div className="container">
      <h1>Ticket Details</h1>
      <p><strong>User:</strong> {ticket.empId}</p>
      <p><strong>Type:</strong> {ticket.type}</p>
      <p><strong>Status:</strong> {ticket.status}</p>
      <p><strong>Description:</strong> {ticket.description}</p>
      <button onClick={() => router.push("/dashboard")}>Go to Dashboard</button>
    </div>
  );
}
