// "use client";
// import Link from "next/link";
// import { SocialButtons } from "./SocialButton";
// import { signIn } from "next-auth/react";
// import Swal from "sweetalert2";
// import { useSearchParams } from "next/navigation";
// import { useRouter } from "next/navigation";
// import { useRef } from "react";

// const LoginForm = () => {
//   const params = useSearchParams();
//   const router = useRouter();
//   const formRef = useRef();
//   const callback = params.get("callbackUrl") || "/";

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;
//     console.log(email, password, callback);

//     const result = await signIn("credentials", {
//       email,
//       password,
//       redirect: false,
//       callbackUrl: params.get("callbackUrl") || "/",
//     });

//     if (!result.ok) {
//       Swal.fire(
//         "error",
//         "Email password not Matched . Try Google Login / Register",
//         "error"
//       );
//     } else {
//       Swal.fire("success", "Welcome to Kidz Hub", "success");
//       router.push(callback);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-base-200">
//       <div className="card w-full max-w-sm shadow-xl bg-base-100">
//         <div className="card-body">
//           <h2 className="text-2xl font-semibold text-center">Login</h2>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               className="input input-bordered w-full"
//               required
//             />

//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               className="input input-bordered w-full"
//               required
//             />

//             <button type="submit" className="btn btn-primary w-full">
//               Login
//             </button>
//           </form>

//           <SocialButtons />

//           <p className="text-center text-sm mt-4">
//             Don’t have an account?{" "}
//             <Link
//               href={`/register?callbackUrl=${callback}`}
//               className="link link-primary"
//             >
//               Register
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default LoginForm;



"use client";
import Link from "next/link";
import { SocialButtons } from "./SocialButton";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const params = useSearchParams();
  const router = useRouter();
  const callback = params.get("callbackUrl") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: callback,
    });

    if (!result.ok) {
      Swal.fire(
        "error",
        "Email password not Matched. Try Google Login / Register",
        "error"
      );
    } else {
      Swal.fire("success", "Welcome to Kidz Hub", "success");
      router.push(callback);
    }
  };

  const handleMockDataFill = () => {
    setEmail("mh@gmail.com");
    setPassword("123456");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-center">Login</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="input input-bordered w-full"
              required
            />

            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="input input-bordered w-full"
              required
            />

            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </form>

          <button
            type="button"
            onClick={handleMockDataFill}
            className="btn btn-outline btn-ghost mt-2"
          >
            Fill Demo Credentials
          </button>

          <div className="divider">OR</div>
          <SocialButtons />

          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <Link
              href={`/register?callbackUrl=${callback}`}
              className="link link-primary"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;