"use client";
import ManageUserElement from "@/components/dashboard/admin/ManageUserElement";
import {
  useDeleteUserMutation,
  useGetAllUserQuery,
} from "@/redux/features/user/userApi";

const ManageUserMain = () => {
  const {
    data: users,
    isLoading: loading,
    refetch: refetchUsers,
  } = useGetAllUserQuery({
    refetchOnReconnect: true,
  });
  const [deleteUser] = useDeleteUserMutation();
  const remainingUsers = (id) => {
    const remaining = users?.data?.filter((user) => user._id !== id);
    // setUsers(remaining);
  };
  let i = 0;
  return (
    <div className="md:p-10 p-2 card-design">
      <div className="flex items-center justify-center">
        <h1 className="text-center text-2xl mb-3">Manage Users</h1>
      </div>
      <div className="mx-auto overflow-x-auto w-full">
        <table className="table-auto text-left border-collapse mx-auto card-design w-full min-h-[100px]">
          <thead className="">
            <tr className="border-b-2 py-3">
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody className="">
            {loading ? (
              <div>Loading...</div>
            ) : (
              users?.data?.map((user) => {
                if (user.role == "user") i++;
                return user.role == "user" ? (
                  <ManageUserElement
                    remainingUsers={remainingUsers}
                    data={user}
                    i={i}
                    key={user._id}
                    deleteUser={deleteUser}
                    refetchUsers={refetchUsers}
                  />
                ) : (
                  ""
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUserMain;
