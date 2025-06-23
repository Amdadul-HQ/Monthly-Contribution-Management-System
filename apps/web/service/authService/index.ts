// import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const signUpMember = async (memberData: FieldValues) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/auth/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(memberData),
      }
    );
    const result = await res.json();
    // console.log("user result", result);

    return result;
  } catch (error: any) {
    console.error("Register error:", error);
    return { success: false, message: error.message };
  }
};

export const login = async (data: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    const result = await res.json();

    // if (result.success && result?.data?.accessToken) {
    //   const cookieStore = await cookies();
    //   cookieStore.set("accessToken", result.data.accessToken, {
    //     httpOnly: true,
    //     secure: process.env.NODE_ENV === "production",
    //     path: "/",
    //     sameSite: "lax",
    //   });
    // }

    return result;
  } catch (error: any) {
    console.error("Login error:", error);
    return { success: false, message: error.message };
  }
};