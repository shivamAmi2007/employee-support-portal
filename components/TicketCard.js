"use client";

import { useRouter } from "next/navigation";

export default function TicketCard({ ticket }) {
  const router = useRouter();

  return (
    <div className="ticket-card">
      <p >Type: {ticket.type}</p>
      <p >Status: {ticket.status}</p>
      <button onClick={() => router.push(`/ticket/${ticket.id}`)}>View</button>
    </div>
  );
}
