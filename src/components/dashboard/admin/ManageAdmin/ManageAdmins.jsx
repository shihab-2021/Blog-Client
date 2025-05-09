"use client";
import ManageAdminElement from "./ManageAdminElement";
import Loading from "@/components/shared/Loading";
import { useToggleUserRoleMutation } from "@/redux/features/auth/authApi";
import { useGetAllUserQuery } from "@/redux/features/user/userApi";

const ManageAdmins = () => {
  const {
    data: users,
    isLoading: loading,
    refetch: refetchUsers,
  } = useGetAllUserQuery({
    refetchOnReconnect: true,
  });
  const [toggleUserRole] = useToggleUserRoleMutation();
  let i = 0;
  return (
    <div className="md:p-10 p-2">
      <div className="flex items-center justify-center">
        <h1 className="text-center text-2xl mb-3">Manage Admins</h1>
      </div>
      <div className="mx-auto overflow-x-auto w-full">
        {loading ? (
          <Loading />
        ) : (
          <table className="table-auto text-left border-collapse mx-auto card-design w-full min-h-[100px]">
            <thead className="">
              <tr className="border-b-2 py-3">
                <th>Name</th>
                <th>Email</th>
                <th>Avatar</th>
              </tr>
            </thead>
            <tbody className="">
              {users?.data?.map((user) => {
                if (user.role == "admin" && !user.isDeleted) i++;
                return user.role == "admin" && !user.isDeleted ? (
                  <ManageAdminElement
                    data={user}
                    key={user._id}
                    i={i}
                    remainingUsers={refetchUsers}
                    toggleUserRole={toggleUserRole}
                  />
                ) : (
                  ""
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ManageAdmins;
