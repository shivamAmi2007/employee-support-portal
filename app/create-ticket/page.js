"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import tickets from "../../data/tickets";
export default function CreateTicket() {
  const router = useRouter();
  const user = JSON.parse(sessionStorage.getItem("user"));

  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [status,setStatus]=useState("")

  const handleSubmit = () => {
    const newTicket = {
      id: tickets.length + 1,
      empId: user.id,
      type,
      status,
      description,
    };
    tickets.push(newTicket); // this will add the newly created ticket to tickets list
    router.push("/dashboard");
  };
  
  return (
    <div className="container">
      <h1>Create New Ticket</h1>
      <p>Employee Name: {user.name}</p>
      <p>Employee ID: {user.id}</p>
      <p>Email: {user.email}</p>
      <p>Status:</p>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>        
        <option value="Open">Open</option>
        <option value="Work in progress">Work in progress</option>
        <option value="Pending">Pending</option>
        <option value="Close">Close</option>
        <option value="Cancelled">Cancelled</option>
      </select>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Select Type of Support</option>
        <option value="Software Installation">Software Installation</option>
        <option value="Laptop Change">Laptop Change</option>
        <option value="SSL Certificate Request">SSL Certificate Request</option>
        <option value="Facility Request">Facility Request</option>
      </select>

      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
