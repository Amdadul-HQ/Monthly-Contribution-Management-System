'use server'

import { cookies } from 'next/headers'

export async function loginAction(formData: {
  loginType: 'email' | 'phone' | 'memberid',
  login: string,
  password: string
}) {
  const { loginType, login, password } = formData;

  let payload: any = { password };

  if (loginType === 'email') {
    payload.email = login;
  } else if (loginType === 'phone') {
    payload.phone = parseFloat(login);
  } else if (loginType === 'memberid') {
    payload.memberId = parseFloat(login);
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(payload),
    });

    const result = await res.json();

    if (result.success && result?.data?.accessToken) {
      const cookieStore = cookies();
      (await cookieStore).set('accessToken', result.data.accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'lax',
      });
    }

    return result;
  } catch (error: any) {
    console.error('Login error:', error);
    return { success: false, message: error.message };
  }
}

export async function logoutAction() {
  const cookieStore = cookies();
  (await cookieStore).delete('accessToken');
  return { success: true };
}
