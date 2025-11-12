import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  cookies().delete('auth_token');
  const response = NextResponse.redirect(new URL('/auth/login', request.url));
  return response;
}