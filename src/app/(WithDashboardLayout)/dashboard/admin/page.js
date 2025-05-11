"use client";
import Loading from "@/components/shared/Loading";
import { useGetAdminDashboardStatsQuery } from "@/redux/features/blog/blogApi";
import React from "react";

const AdminDashboard = () => {
  const { data: stats, isLoading } = useGetAdminDashboardStatsQuery({
    refetchOnReconnect: true,
  });
  const cards = [
    {
      title: "Total Users",
      value: stats?.data?.totalUsers,
      color: "bg-gradient-to-r from-blue-500 to-blue-700",
    },
    {
      title: "Total Admins",
      value: stats?.data?.totalAdmins,
      color: "bg-gradient-to-r from-purple-500 to-purple-700",
    },
    {
      title: "Total Blogs",
      value: stats?.data?.totalBlogs,
      color: "bg-gradient-to-r from-green-500 to-green-700",
    },
    {
      title: "Total Comments",
      value: stats?.data?.totalComments,
      color: "bg-gradient-to-r from-orange-500 to-orange-700",
    },
    {
      title: "Total Likes",
      value: stats?.data?.totalLikes,
      color: "bg-gradient-to-r from-pink-500 to-pink-700",
    },
    {
      title: "Total Dislikes",
      value: stats?.data?.totalDislikes,
      color: "bg-gradient-to-r from-red-500 to-red-700",
    },
  ];

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="min-h-screen bg-gray-100 py-12 px-6">
          <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
            🛠️ Admin Dashboard Overview
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {cards.map((card) => (
              <div
                key={card.title}
                className={`rounded-2xl p-6 text-white shadow-xl transform hover:scale-[1.02] transition duration-300 ${card.color}`}
              >
                <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
                <p className="text-4xl font-bold">{card.value || 0}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AdminDashboard;
