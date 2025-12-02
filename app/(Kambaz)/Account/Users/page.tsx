"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import PeopleTable from "../../Courses/[cid]/People/Table/Table";
import * as client from "../client";
import { FormControl } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
  password?: string;
  email?: string;
  section?: string;
  role: string;
  loginId?: string;
  lastActivity?: string;
  totalActivity?: string;
}

export default function Users() {
 const [users, setUsers] = useState<User[]>([]);
 const [allUsers, setAllUsers] = useState<User[]>([]);
 const [role, setRole] = useState("");
 const [name, setName] = useState("");
 const { uid } = useParams();

 const fetchUsers = async () => {
   console.log("fetchUsers called in Users page");
   const users = await client.findAllUsers();
   console.log("Fetched users:", users);
   setAllUsers(users);
   setUsers(users);
 };

 const applyFilters = () => {
   let filtered = allUsers;

   // Filter by role
   if (role) {
     filtered = filtered.filter((user) => user.role === role);
   }

   // Filter by name
   if (name) {
     filtered = filtered.filter((user) => {
       const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
       return fullName.includes(name.toLowerCase());
     });
   }

   setUsers(filtered);
 };

 const filterUsersByRole = (selectedRole: string) => {
   setRole(selectedRole);
 };

 const filterUsersByName = (searchName: string) => {
   setName(searchName);
 };

 const createUser = async () => {
    const user = await client.createUser({
      firstName: "New",
      lastName: `User${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: "password123",
      email: `email${users.length + 1}@neu.edu`,
      section: "S101",
      role: "STUDENT",
    });
    setUsers([...users, user]);
  };


 useEffect(() => {
   fetchUsers();
 }, [uid]);

 useEffect(() => {
   applyFilters();
 }, [role, name, allUsers]);

 return (
   <div>
    <button onClick={createUser} className="float-end btn btn-danger wd-add-people">
        <FaPlus className="me-2" />
        Users
      </button>
     <h3>Users</h3>
      <FormControl
        value={name}
        onChange={(e) => filterUsersByName(e.target.value)}
        placeholder="Search people"
        className="float-start w-25 me-2 wd-filter-by-name" />
     <select value={role} onChange={(e) => filterUsersByRole(e.target.value)}
              className="form-select float-start w-25 wd-select-role" >
        <option value="">All Roles</option>    <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option> <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Administrators</option>
      </select>
     <PeopleTable users={users} fetchUsers={fetchUsers} />
   </div>
);}