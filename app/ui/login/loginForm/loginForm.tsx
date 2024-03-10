"use client";

// import { authenticate } from "@/app/lib/actions";
import styles from "./loginForm.module.css";
//import { useFormState } from "react-dom";

const LoginForm = () => {
  //const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <form
      action="/"
      className="bg-bgsoft p-[50px] rounded-[10px] w-[420px] h-[420px] flex flex-col items-center justify-center gap-[30px]"
    >
      <h1 className="mt-[20px]">Login</h1>
      <input
        className="w-[100%] p-[30px] border border-solid border-[2px] border-[#2e374a] rounded-[5px] bg-bg text-t"
        type="text"
        placeholder="username"
        name="username"
      />
      <input
        className="w-[100%] p-[30px] border border-solid border-[2px] border-[#2e374a] rounded-[5px] bg-bg text-t"
        type="password"
        placeholder="password"
        name="password"
      />
      <button className="w-[100%] p-[30px] bg-teal-500 text-t border-none cursor-pointer rounded-[5px] mb-[10px]">
        Login
      </button>
      {/* {state && state} */}
    </form>
  );
};

export default LoginForm;
