"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { verifyToken } from "@/utils/verifyToken";
import { setUser } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "@/redux/features/auth/authApi";

const LoginPage = () => {
  const form = useForm();
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirectPath");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = form;

  const onSubmit = async (data) => {
    try {
      const res = await login(data).unwrap();
      const user = verifyToken(res.data.accessToken);
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      // setIsLoading(true);
      if (res?.success) {
        toast.success("Successfully Logged In!");
        if (redirect) {
          router.push(redirect);
        } else {
          router.push("/");
        }
      } else {
        toast.error(res?.error);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <Suspense>
        <div className="min-h-screen flex justify-center items-center font-arima text-black">
          <div className="border-2 border-gray-300 rounded-xl flex-grow max-w-md w-full p-5">
            <div className="flex items-center space-x-4 mb-4">
              <div>
                <h1 className="text-xl font-semibold">Sign In</h1>
                <p className="font-extralight text-sm text-gray-600">
                  Please sign in to continue to your account
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="email">Email</label>
              <input
                {...register("email")}
                type="email"
                className="p-2 mb-2 border rounded w-full text-lg"
                required
              />
              <label htmlFor="password">Password</label>
              <input
                {...register("password")}
                type="password"
                className="p-2 mb-2 border rounded w-full text-lg"
                required
              />

              <input
                className="bg-[#4b5563] hover:bg-[#374151] cursor-pointer text-lg font-bold w-full my-2 rounded text-white px-3 py-2"
                type="submit"
                value={"Signin"}
              />
            </form>
            <p className="text-sm text-gray-600 text-center my-3">
              Do not have any account?{" "}
              <Link
                href="/register"
                className="text-blue-400 underline font-semibold hover:text-blue-500 "
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default LoginPage;
