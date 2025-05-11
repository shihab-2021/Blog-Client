import Image from "next/image";
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
  };

  return (
    <tr
      className={`font-inter text-gray-900 text-base animate-slideUp ${
        i % 2 ? "bg-gray-50" : "bg-white"
      } hover:bg-purple-50 transition-colors duration-300`}
    >
      <td className="p-4">{data.name}</td>
      <td className="p-4">{data.email}</td>
      <td className="p-4">
        <Image
          height={128}
          width={128}
          alt="Profile Photo"
          src={data?.avatar || "https://i.ibb.co/DMYmT3x/Generic-Profile.jpg"}
          className="object-cover w-[50px] h-[50px] rounded-full border border-gray-400"
        />
      </td>
      <td className="p-4 text-right">
        <Link href={`/dashboard/profile/${data._id}`}>
          <button className="mx-2 bg-amber-500 text-gray-900 font-sen font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-amber-600 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 active:scale-95 transition-all duration-300 cursor-pointer">
            View
          </button>
        </Link>
        <button
          className="mx-2 bg-purple-600 text-white font-sen font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 active:scale-95 transition-all duration-300 cursor-pointer"
          onClick={() => deleteItem(data?._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageUserElement;
