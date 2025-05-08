"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useSignupMutation } from "@/redux/features/auth/authApi";

export default function Register() {
  const form = useForm();
  const [signup] = useSignupMutation();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = form;

  const password = form.watch("password");
  const passwordConfirm = form.watch("passwordConfirm");

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      const res = await signup(data).unwrap();

      if (res?.success) {
        toast.success(res?.message);
        router.push("/login");
      } else {
        toast.error(res?.message);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center font-arima bg-white text-black">
      <div className="border-2 border-gray-200 shadow-lg rounded-2xl flex-grow max-w-md w-full p-6 bg-white my-20">
        {/* Logo & Title */}
        <div className="flex items-center space-x-4 mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Register</h1>
            <p className="text-sm text-gray-500">
              Join us today and start your journey!
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Email</label>
          <input
            {...register("name")}
            type="text"
            placeholder="Your Name"
            className="p-2 mb-2 border rounded w-full text-lg"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            {...register("email")}
            type="email"
            placeholder="Your Email"
            className="p-2 mb-2 border rounded w-full text-lg"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="p-2 mb-2 border rounded w-full text-lg"
            required
          />
          <label htmlFor="passwordConfirm">Confirm Password</label>
          <input
            {...register("passwordConfirm")}
            type="password"
            placeholder="Confirm Password"
            className="p-2 mb-2 border rounded w-full text-lg"
            required
          />

          <input
            className="bg-[#4b5563] hover:bg-[#374151] cursor-pointer text-lg font-bold w-full my-2 rounded text-white px-3 py-2"
            type="submit"
            value={"Signup"}
          />
        </form>

        {/* Registration Form */}
        {/* <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-5 space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute left-3 top-1.5 text-gray-400">
                        👤
                      </span>
                      <Input
                        {...field}
                        value={field.value || ""}
                        className="pl-9"
                        required
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute left-3 top-1.5 text-gray-400">
                        📧
                      </span>
                      <Input
                        type="email"
                        {...field}
                        value={field.value || ""}
                        className="pl-9"
                        required
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute left-3 top-1.5 text-gray-400">
                        🔒
                      </span>
                      <Input
                        type="password"
                        {...field}
                        value={field.value || ""}
                        className="pl-9"
                        required
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="passwordConfirm"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute left-3 top-1.5 text-gray-400">
                        🔒
                      </span>
                      <Input
                        type="password"
                        {...field}
                        value={field.value || ""}
                        className="pl-9"
                        required
                      />
                    </div>
                  </FormControl>
                  {passwordConfirm && password !== passwordConfirm ? (
                    <FormMessage> ❌ Passwords do not match</FormMessage>
                  ) : (
                    <FormMessage />
                  )}
                </FormItem>
              )}
            />

            <Button
              disabled={
                password && passwordConfirm && password !== passwordConfirm
                  ? true
                  : false
              }
              type="submit"
              className="mt-5 w-full cursor-pointer"
            >
              {isSubmitting ? "Registering...." : "Register"}
            </Button>
          </form>
        </Form> */}

        {/* Login Link */}
        <p className="text-sm text-gray-600 text-center my-4">
          Already have an account?
          <Link
            href="/login"
            className="text-blue-400 underline font-semibold hover:text-blue-500 "
          >
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
