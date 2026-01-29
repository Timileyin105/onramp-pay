import React from 'react';

interface ErrorPageProps {
      title?: string;
      message: string;
      onBack: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ title = 'Something went wrong', message, onBack }) => {
      return (
            <div className="bg-white p-10 rounded-3xl border border-red-200 shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                        </div>
                        <div>
                              <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
                              <p className="text-slate-600 text-sm">We hit an unexpected error while creating your payment link.</p>
                        </div>
                  </div>

                  <div className="bg-red-50 border border-red-100 text-red-700 rounded-xl p-4 text-sm leading-relaxed">
                        {message}
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                        <button
                              type="button"
                              onClick={onBack}
                              className="px-5 py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors"
                        >
                              Back to Create Link
                        </button>
                        <span className="text-xs text-slate-500">Try a different payment provider.</span>
                  </div>
            </div>
      );
};

export default ErrorPage;
