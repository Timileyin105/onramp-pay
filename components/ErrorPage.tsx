import React from 'react';

interface ErrorPageProps {
      title?: string;
      message: string;
      onBack: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ title = 'Something went wrong', message, onBack }) => {
      return (
            <div className="bg-slate-900/70 text-slate-100 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
                  <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-red-500/20 text-red-200 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                        </div>
                        <div>
                              <h2 className="text-2xl font-bold text-white">{title}</h2>
                              <p className="text-slate-300 text-sm">We hit an unexpected error while creating your payment link.</p>
                        </div>
                  </div>

                  <div className="bg-red-500/10 border border-red-500/30 text-red-100 rounded-xl p-4 text-sm leading-relaxed">
                        {message}
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                        <button
                              type="button"
                              onClick={onBack}
                              className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 text-white text-sm font-semibold shadow-[0_12px_35px_rgba(59,130,246,0.35)] transition-colors hover:from-cyan-400 hover:via-indigo-400 hover:to-pink-400"
                        >
                              Back to Create Link
                        </button>
                        <span className="text-xs text-slate-300">Try a different payment provider.</span>
                  </div>
            </div>
      );
};

export default ErrorPage;
