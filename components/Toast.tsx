'use client';

import React, { useEffect, useState } from 'react';

type ToastPosition = 'center' | 'top-right' | 'bottom-right';

type ToastProps = {
      message: string;
      onClose: () => void;
      duration?: number;
      position?: ToastPosition;
};

const positionClassMap: Record<ToastPosition, string> = {
      center: 'items-center justify-center',
      'top-right': 'items-start justify-end',
      'bottom-right': 'items-end justify-end',
};

const Toast: React.FC<ToastProps> = ({ message, onClose, duration = 2500, position = 'center' }) => {
      const [progress, setProgress] = useState(100);

      useEffect(() => {
            const id = window.setTimeout(onClose, duration);
            // kick off progress bar shrink after mount
            const tick = window.setTimeout(() => setProgress(0), 20);
            return () => {
                  window.clearTimeout(id);
                  window.clearTimeout(tick);
            };
      }, [duration, message, onClose]);

      return (
            <div className={`fixed inset-0 z-50 flex ${positionClassMap[position]} p-6`}>
                  <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-md" onClick={onClose} aria-hidden="true" />

                  <div className="relative w-full max-w-sm" role="status" aria-live="polite">
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-[0_25px_90px_rgba(0,0,0,0.5)] ring-1 ring-white/5">
                              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-cyan-400/5 to-indigo-400/5 opacity-70" aria-hidden="true" />
                              <div className="relative flex items-start gap-3 px-5 py-4">
                                    <div className="mt-1 h-9 w-9 shrink-0 rounded-2xl bg-gradient-to-br from-cyan-500/30 via-indigo-500/30 to-pink-500/30 border border-white/10 flex items-center justify-center text-white">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 9v4" />
                                                <path d="M12 17h.01" />
                                                <path d="M7.8 4.8a7.5 7.5 0 1 1 8.4 0l-3.2 2.4a2 2 0 0 1-2 0z" />
                                          </svg>
                                    </div>
                                    <div className="flex-1 text-sm text-slate-50 font-semibold leading-6 tracking-tight">{message}</div>
                                    <button
                                          type="button"
                                          aria-label="Close notification"
                                          onClick={onClose}
                                          className="shrink-0 rounded-full bg-white/10 text-slate-100 p-2 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition"
                                    >
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path
                                                      fillRule="evenodd"
                                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                      clipRule="evenodd"
                                                />
                                          </svg>
                                    </button>
                              </div>
                              <div className="relative h-1 bg-white/5">
                                    <div
                                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400"
                                          style={{ width: `${progress}%`, transition: `width ${duration}ms linear` }}
                                    />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Toast;
