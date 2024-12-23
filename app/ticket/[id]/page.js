"use client";

import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import tickets from "../../../data/tickets";

export default function TicketDetail() {
  const router = useRouter();
  const { id } = useParams();
  const ticket = tickets.find((ticket) => ticket.id === parseInt(id));

  if (!ticket) {
    return <p>Ticket not found.</p>;
  }

  return (
    <div className="container">
      <h1>Ticket Details</h1>      
      <p><strong>Ticket ID:</strong> {ticket.id}</p>
      <p><strong>Requested for:</strong> {ticket.empId}</p>
      <p>Type: {ticket.type}</p>
      <p>Status: {ticket.status}</p>
      <p>Description: {ticket.description}</p>
      <button onClick={() => router.push("/dashboard")}>Go to Dashboard</button>
    </div>
  );
}
