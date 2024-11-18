"use server";

import { UserLoginFormType } from "@/src/components/Login/LoginButton/useLoginButton";
import { UserType } from "@/src/types/user";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const login = async (formData: UserLoginFormType) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
    credentials: "include",
  });

  const data = await response.json();

  // 1 min
  const expires = new Date(Date.now() + 30 * 60 * 1000);

  cookies().set("UAT", data.accessToken, {
    httpOnly: true,
    secure: true,
    expires,
    path: "/",
  });
  cookies().set("URT", data.refreshToken, {
    httpOnly: true,
    secure: true,
    expires,
    path: "/",
  });

  return data;
};

export const refreshSession = async (request: NextRequest) => {
  const URT = request.cookies.get("URT")?.value;
  if (URT) {
    const response = await fetch(`${BASE_URL}/auth/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken: URT,
      }),
      credentials: "include",
    });

    const data = await response.json();

    // 1 min
    const expires = new Date(Date.now() + 30 * 60 * 1000);

    const res = NextResponse.next();

    res.cookies.set("UAT", data.accessToken, {
      httpOnly: true,
      secure: true,
      expires,
      path: "/",
    });
    res.cookies.set("URT", data.refreshToken, {
      httpOnly: true,
      secure: true,
      expires,
      path: "/",
    });
    return res;
  }
};

export async function getSession(): Promise<UserType | null> {
  const UAT = cookies().get("UAT")?.value;
  if (!UAT) return null;
  const response = await fetch(`${BASE_URL}/auth/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${UAT}`,
    },
    credentials: "include",
  });

  const data = await response.json();

  return data;
}
