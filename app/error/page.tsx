'use client';

import { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import ErrorPage from '@/components/ErrorPage';

function ErrorRouteContent() {
      const router = useRouter();
      const searchParams = useSearchParams();
      const message =
            searchParams.get('message') ||
            'Payment could not be initiated right now. Please return to the merchant site and start the payment again.';

      const handleBack = () => {
            router.push('/payment-generator');
      };

      return (
            <div className="max-w-2xl mx-auto py-12 px-6">
                  <ErrorPage
                        title="Payment could not start"
                        message={message}
                        onBack={handleBack}
                  />
            </div>
      );
}

export default function Page() {
      return (
            <Suspense fallback={<div className="text-slate-200 py-12 text-center">Loading error details...</div>}>
                  <ErrorRouteContent />
            </Suspense>
      );
}
