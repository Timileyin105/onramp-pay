'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import ErrorPage from '@/components/ErrorPage';
import { Suspense } from 'react';

function ErrorPageContent() {
      const router = useRouter();
      const searchParams = useSearchParams();
      const message =
            searchParams.get('message') ||
            'An unexpected error happened. Please return to the previous tab and select another payment provider.';

      const handleBack = () => {
            router.push('/payment-generator');
      };

      return (
            <div className="max-w-2xl mx-auto py-12 px-6">
                  <ErrorPage message={message} onBack={handleBack} />
            </div>
      );
}

export default function Page() {
      return (
            <Suspense fallback={<div>Loading...</div>}>
                  <ErrorPageContent />
            </Suspense>);
}