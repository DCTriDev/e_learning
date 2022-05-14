import React from "react";
import "./index.css";
import TableUser from "./TableUser/TableUser";

export default function UserManagement() {
  return (
    <div className="">
        <h1 className='text-center text-3xl mb-6'>Quản lý người dùng</h1>
      <TableUser />
    </div>
  );
}
