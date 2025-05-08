import Link from "next/link";
import { toast } from "sonner";
import Swal from "sweetalert2";

const ManageUserElement = ({
  data,
  remainingUsers,
  i,
  deleteUser,
  refetchUsers,
}) => {
  const deleteItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          const res = await deleteUser(id).unwrap();
          if (res.success) {
            refetchUsers();
            toast.success(res.message, { duration: 2000 });
          }
        } catch (err) {
          console.log(err);
          toast.error(err?.data?.message || "Something went wrong", {
            duration: 2000,
          });
        }
      }
    });
    // const agree = window.confirm("Are you sure you want to delete this user?");

    // if (agree) {
    //   remainingUsers(data._id);
    //   fetch(`https://universal-hostel-api.onrender.com/users/${data._id}`, {
    //     method: "DELETE",
    //   })
    //     .then((res) => res.json())
    //     .then((data) => console.log(data));
    // }
  };
  return (
    <tr className={`${i % 2 && "bg-gray-100"}`}>
      <td className="p-2">{data.name}</td>
      <td className="p-2">{data.email}</td>
      <td className="p-2">{data.phone}</td>
      <td className="float-right p-2">
        <Link href={`/dashboard/profile/${data._id}`}>
          <button className="mx-2 bg-green-400 py-1 px-3 text-gray-800 font-bold rounded hover:bg-green-600 cursor-pointer">
            View
          </button>
        </Link>

        <button
          className="mx-2 bg-red-400 py-1 px-3 text-gray-800 font-bold rounded hover:bg-red-600 cursor-pointer"
          onClick={() => deleteItem(data?._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageUserElement;
