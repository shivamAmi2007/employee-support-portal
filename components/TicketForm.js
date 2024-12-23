// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import tickets from "../data/tickets";

// export default function TicketForm({ user }) {
//   const router = useRouter();
//   const [type, setType] = useState("");
//   const [description, setDescription] = useState("");

// const [selectedEmployee, setSelectedEmployee] = useState(user); // new added

//   const handleSubmit = () => {
//     if (!type || !description) {
//       alert("Please fill out all fields.");
//       return;
//     }

//     const newTicket = {
//       id: tickets.length + 1,
//       empId: user.id,
//       type,
//       status: "Open",
//       description,
//     };

//     tickets.push(newTicket);
//     alert("Ticket created successfully!");
//     router.push("/dashboard");
//   };

//   return (
//     <div className="container">
//       <h1>Create New Ticket</h1>      
//       <p><strong>Employee Name:</strong> {user.name}</p>
//       <p><strong>Employee ID:</strong> {user.id}</p>
//       <p><strong>Email:</strong> {user.email || "not available"}</p>

//       <select value={type} onChange={(e) => setType(e.target.value)}>
//         <option value="">Select Type of Support</option>
//         <option value="Software Installation">Software Installation</option>
//         <option value="Laptop Change">Laptop Change</option>
//         <option value="SSL Certificate Request">SSL Certificate Request</option>
//         <option value="Facility Request">Facility Request</option>
//       </select>

//       <textarea
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />

//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import tickets from "../data/tickets";
import users from "../data/users"; // Assuming you have a users.js file with employee details.

export default function TicketForm({ user }) {
  const router = useRouter();
  const [selectedEmployee, setSelectedEmployee] = useState(user);
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    // Set the default selected employee as the logged-in user (non-admins).
    if (user.role !== "admin") {
      setSelectedEmployee(user);
    }
  }, [user]);

  const handleEmployeeChange = (e) => {
    const employee = users.find((u) => u.id === Number(e.target.value));
    setSelectedEmployee(employee || user);
  };

  const handleSubmit = () => {
    if (!type || !description) {
      alert("Please fill out all fields.");
      return;
    }

    const newTicket = {
      id: tickets.length + 1,
      empId: selectedEmployee.id,
      type,
      status: "Open",
      description,
    };

    tickets.push(newTicket);
    alert("Ticket created successfully!");
    router.push("/dashboard");
  };

  return (
    <div className="container">
      <h1>Create New Ticket</h1>

      {user.role === "admin" ? (
        <>
          <label htmlFor="employeeSelect">Select Employee:</label>
          <select
            id="employeeSelect"
            value={selectedEmployee?.id || ""}
            onChange={handleEmployeeChange}
          >
            <option value="">Select Employee</option>
            {users.map((emp) => (
              <option key={emp.id} value={emp.id}>
                {emp.name}
              </option>
            ))}
          </select>
            {/* {users.map((emp) => (
              console.log(emp.name)
            ))} */}
        </>
      ) : (
        <p><strong>Employee Name:</strong> {user.name}</p>
      )}

      <p><strong>Employee ID:</strong> {selectedEmployee?.id}</p>
      <p><strong>Email:</strong> {selectedEmployee?.email || "Not available"}</p>

      <label htmlFor="typeSelect">Type of Support:</label>
      <select
        id="typeSelect"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">Select Type of Support</option>
        <option value="Software Installation">Software Installation</option>
        <option value="Laptop Change">Laptop Change</option>
        <option value="SSL Certificate Request">SSL Certificate Request</option>
        <option value="Facility Request">Facility Request</option>
      </select>

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
