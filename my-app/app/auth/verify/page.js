// app/auth/verify/page.js
import { Suspense } from 'react';
import VerifyClient from './VerifyClient';
import LoadingOTP from './LoadingOTP';

export default function VerifyPage() {
  return (
    <Suspense fallback={<LoadingOTP />}>
      <VerifyClient />
    </Suspense>
  );
}