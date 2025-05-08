"use client";
import { useEffect, useRef, useState } from "react";
import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from "@/redux/features/user/userApi";
import Image from "next/image";
import { FileEdit } from "lucide-react";
import Loading from "@/components/shared/Loading";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { useProfileQuery } from "@/redux/features/auth/authApi";
import {
  useDeleteBlogMutation,
  useGetBlogsByUserQuery,
} from "@/redux/features/blog/blogApi";
import UserBlogs from "@/components/dashboard/user/UserBlogs";

const UserDetailsPage = ({ params }) => {
  const dialogRef = useRef(null);
  const nameInputRef = useRef(null);
  const fileInputRef = useRef(null);
  const imagePreviewRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [id, setId] = useState("");
  const [updateUser] = useUpdateUserMutation();
  const token = useSelector(useCurrentToken);
  const { data: userInfo } = useProfileQuery(token);
  const {
    data: userBlogs,
    isLoading: userBlogsLoading,
    refetch: refetchUserBlogs,
  } = useGetBlogsByUserQuery(id, {
    skip: !id,
    refetchOnReconnect: true,
  });
  const [deleteBlog] = useDeleteBlogMutation();

  const openModal = () => dialogRef.current?.showModal();
  const closeModal = () => dialogRef.current?.close();

  const {
    data: profile,
    isLoading: loading,
    refetch: refetchProfile,
  } = useGetSingleUserQuery(id, {
    skip: !id,
    refetchOnReconnect: true,
  });

  const handleImagePreview = async () => {
    const file = fileInputRef.current?.files?.[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "ml_default");
    setImageLoading(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dvszolotz/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const result = await res.json();

    const value = result.secure_url;
    setPreview(value);
    setImageLoading(false);
    if (file && imagePreviewRef.current) {
      const reader = new FileReader();
      reader.onload = () => {
        if (imagePreviewRef.current) {
          imagePreviewRef.current.src = reader.result;
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = async () => {
    const name = nameInputRef.current?.value;

    if (!name) return;

    let formData = {
      id: userInfo?.data?._id,
      data: {},
    };
    if (name) formData.data.name = name;
    if (preview) formData.data.avatar = preview;

    try {
      await updateUser(formData);
      refetchProfile();
      toast.success("Profile updated successfully!");
      closeModal();
    } catch (error) {
      toast.error("Profile update failed!");
    }
  };
  useEffect(() => {
    (async () => {
      const { id } = await params;
      setId(id);
    })();
  }, [params]);
  return (
    <div>
      <div className="relative bg-white shadow-lg rounded-2xl max-w-md w-full p-6 text-center mx-auto">
        {profile?.data?._id === userInfo?.data?._id && (
          <button
            className="absolute bg-gray-100 top-4 right-4 text-[#FFBC00] hover:text-amber-500 cursor-pointer transition p-2 rounded-md"
            onClick={openModal}
            title="Edit Profile"
          >
            <FileEdit size={20} />
          </button>
        )}

        {profile && (
          <>
            <div className="flex justify-center mb-4">
              <div className="rounded-full overflow-hidden border-4 border-[#FFBC00] w-32 h-32">
                <Image
                  height={128}
                  width={128}
                  alt="Profile Photo"
                  src={
                    profile?.data?.avatar ||
                    "https://i.ibb.co/DMYmT3x/Generic-Profile.jpg"
                  }
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-gray-800 mb-2">Profile</h1>
            <div className="text-left space-y-2 text-gray-700">
              <p>
                <span className="font-semibold text-[#FFBC00]">Name:</span>{" "}
                {profile?.data?.name}
              </p>
              <p>
                <span className="font-semibold text-[#FFBC00]">Email:</span>{" "}
                {profile?.data?.email}
              </p>
              <p>
                <span className="font-semibold text-[#FFBC00]">Role:</span>{" "}
                {profile?.data?.role}
              </p>
            </div>
          </>
        )}

        <div className="flex justify-center">
          <dialog
            ref={dialogRef}
            className="rounded-xl p-6 shadow-lg w-96 backdrop:bg-black/30"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              position: "fixed",
            }}
          >
            <form method="dialog" className="space-y-4">
              <h3 className="text-lg font-bold text-gray-800">
                Update Profile
              </h3>

              <input
                ref={nameInputRef}
                defaultValue={profile?.data?.name}
                className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-[#FFBC00]"
                placeholder="Enter your name"
              />

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImagePreview}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:bg-[#FFBC00] file:text-white file:rounded hover:file:bg-yellow-600"
              />

              {preview && (
                <Image
                  ref={imagePreviewRef}
                  src={preview}
                  alt="Preview"
                  width={96}
                  height={96}
                  className="w-24 h-24 mx-auto rounded-full object-cover border border-gray-300"
                />
              )}
              {imageLoading && <Loading />}

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleUpdate}
                  className="bg-[#FFBC00] text-white px-4 py-2 rounded hover:bg-yellow-600"
                >
                  Save
                </button>
              </div>
            </form>
          </dialog>
        </div>
      </div>
      <UserBlogs
        blogs={userBlogs?.data}
        loading={userBlogsLoading}
        isAdmin={userInfo?.data?.role === "admin" ? true : false}
        isAuthor={profile?.data?._id === userInfo?.data?._id ? true : false}
        deleteBlog={deleteBlog}
        refetchUserBlogs={refetchUserBlogs}
      />
    </div>
  );
};

export default UserDetailsPage;
