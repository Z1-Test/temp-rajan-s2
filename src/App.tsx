import * as React from 'react';
import PlatformShowcase from '../PLATFORM-SHOWCASE';
import Portal from './staylook/Portal';
import { Layout, Component } from 'lucide-react';

export default function App() {
    const [view, setView] = React.useState<'dashboard' | 'portal'>('dashboard');

    return (
        <div className="relative min-h-screen">
            {/* View Switcher Overlay (for dev preview only) */}
            <div className="fixed bottom-6 right-6 z-[100] flex gap-2 bg-black/80 backdrop-blur-md p-2 rounded-2xl shadow-2xl border border-white/10">
                <button
                    onClick={() => setView('dashboard')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${view === 'dashboard' ? 'bg-white text-black' : 'text-white hover:bg-white/10'}`}
                >
                    <Layout size={16} />
                    App
                </button>
                <button
                    onClick={() => setView('portal')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${view === 'portal' ? 'bg-white text-black' : 'text-white hover:bg-white/10'}`}
                >
                    <Component size={16} />
                    Portal
                </button>
            </div>

            {view === 'dashboard' ? <PlatformShowcase /> : <Portal />}
        </div>
    );
}
