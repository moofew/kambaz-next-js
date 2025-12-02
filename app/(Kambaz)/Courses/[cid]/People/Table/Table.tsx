"use client"
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import PeopleDetails from "../Details";
import { User } from "../../../../Account/client";
// import * as db from "../../Database";
// import { useParams } from "nextjs/navigation";
export default function PeopleTable({ users = [], fetchUsers }: { users?: User[]; fetchUsers: () => void; }) {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <div id="wd-people-table">
      {showDetails && (
        <PeopleDetails
          user={selectedUser}
          onClose={() => {
            console.log("onClose called - refreshing table");
            setShowDetails(false);
            setSelectedUser(null);
            fetchUsers();
          }}/>
      )}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <span className="text-decoration-none"
                   style={{ cursor: "pointer" }}
                   onClick={() => {
                     setShowDetails(true);
                     setSelectedUser(user);
                   }} >
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name text-danger">{user.firstName}</span>{" "}
                  <span className="wd-last-name text-danger">{user.lastName}</span>
                </span>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>);}

