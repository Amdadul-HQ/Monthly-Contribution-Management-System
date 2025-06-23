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