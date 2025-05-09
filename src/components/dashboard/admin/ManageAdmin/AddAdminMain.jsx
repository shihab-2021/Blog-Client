"use client";
import { useToggleUserRoleMutation } from "@/redux/features/auth/authApi";
import React, { useState } from "react";
import { toast } from "sonner";

const AddAdminMain = () => {
  const [email, setEmail] = useState("");
  const [toggleUserRole] = useToggleUserRoleMutation();

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = async (e) => {
    e.preventDefault();
    const user = { email };
    const res = await toggleUserRole(user).unwrap();
    if (res?.success) {
      setEmail("");
      document.getElementById("make-admin").reset();
      toast.success(res.message, { duration: 2000 });
    }
  };
  return (
    <div className="border border-gray-100 shadow-lg rounded-lg w-full md:w-2/3 lg:w-1/2 p-3 m-auto my-5">
      <div className="pt-5 ">
        <h2 className=" text-xl text-center">MAKE AN ADMIN</h2>
        <form
          id="make-admin"
          className="my-5 text-center mx-auto"
          onSubmit={handleAdminSubmit}
          style={{ maxWidth: "25rem" }}
        >
          <input
            required
            placeholder="Enter email to make admin"
            className="text-xl bg-auto p-2 border-slate-500 border rounded-lg w-full"
            type="email"
            onBlur={handleOnBlur}
          />
          <br />
          <br />
          <button
            className=" border py-2 px-3 rounded-lg border-teal-500 text-xl text-teal-500 mx-auto cursor-pointer"
            type="submit"
          >
            Make Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAdminMain;
