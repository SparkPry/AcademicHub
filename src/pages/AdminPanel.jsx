import React, { useState } from "react";
import { Users, CreditCard, ShieldCheck } from "lucide-react";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("users");

  // Dummy data
  const users = [
    { id: 1, name: "John Doe", role: "Student", status: "Active" },
    { id: 2, name: "Jane Smith", role: "Instructor", status: "Pending" },
    { id: 3, name: "Bob Lee", role: "Student", status: "Disabled" },
  ];

  const payments = [
    { id: 1, user: "John Doe", course: "React 101", amount: "$49", date: "2025-10-10" },
    { id: 2, user: "Jane Smith", course: "AI Basics", amount: "$59", date: "2025-10-15" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-10">Admin Control Panel</h1>

      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveTab("users")}
          className={`px-6 py-3 rounded-xl flex items-center gap-2 ${
            activeTab === "users" ? "bg-cyan-500" : "bg-slate-700 hover:bg-slate-600"
          }`}
        >
          <Users className="w-5 h-5" /> Manage Users
        </button>

        <button
          onClick={() => setActiveTab("payments")}
          className={`px-6 py-3 rounded-xl flex items-center gap-2 ${
            activeTab === "payments" ? "bg-cyan-500" : "bg-slate-700 hover:bg-slate-600"
          }`}
        >
          <CreditCard className="w-5 h-5" /> View Payments
        </button>

        <button
          onClick={() => setActiveTab("instructors")}
          className={`px-6 py-3 rounded-xl flex items-center gap-2 ${
            activeTab === "instructors" ? "bg-cyan-500" : "bg-slate-700 hover:bg-slate-600"
          }`}
        >
          <ShieldCheck className="w-5 h-5" /> Approve Instructors
        </button>
      </div>

      {/* User Management */}
      {activeTab === "users" && (
        <div className="bg-slate-800 p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">User Management</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="text-cyan-400 border-b border-slate-600">
                <th className="p-2">ID</th>
                <th className="p-2">Name</th>
                <th className="p-2">Role</th>
                <th className="p-2">Status</th>
                <th className="p-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-slate-700 hover:bg-slate-700/50">
                  <td className="p-2">{user.id}</td>
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.role}</td>
                  <td className="p-2">{user.status}</td>
                  <td className="p-2 text-center">
                    <button className="px-3 py-1 bg-red-500 hover:bg-red-600 rounded-lg text-sm">
                      Disable
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Payments */}
      {activeTab === "payments" && (
        <div className="bg-slate-800 p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Payments Overview</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="text-cyan-400 border-b border-slate-600">
                <th className="p-2">ID</th>
                <th className="p-2">User</th>
                <th className="p-2">Course</th>
                <th className="p-2">Amount</th>
                <th className="p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id} className="border-b border-slate-700 hover:bg-slate-700/50">
                  <td className="p-2">{payment.id}</td>
                  <td className="p-2">{payment.user}</td>
                  <td className="p-2">{payment.course}</td>
                  <td className="p-2">{payment.amount}</td>
                  <td className="p-2">{payment.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Approve Instructors */}
      {activeTab === "instructors" && (
        <div className="bg-slate-800 p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Instructor Approvals</h2>
          <ul className="space-y-3">
            {users
              .filter((user) => user.role === "Instructor" && user.status === "Pending")
              .map((instructor) => (
                <li
                  key={instructor.id}
                  className="flex justify-between bg-slate-700/40 p-3 rounded-lg"
                >
                  <span>{instructor.name}</span>
                  <button className="px-4 py-1 bg-green-500 hover:bg-green-600 rounded-lg text-sm">
                    Approve
                  </button>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
