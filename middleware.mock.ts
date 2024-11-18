import { NextResponse, type NextRequest } from "next/server";
import { refreshSession } from "./app/(auth)/actions/auth";

export const middleware = async (request: NextRequest) => {
  // return refreshSession(request);
  return NextResponse.next();
};
