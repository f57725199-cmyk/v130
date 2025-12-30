
import React from 'react';
import { X, Star, CheckCircle } from 'lucide-react';

interface Props {
    onClose: () => void;
}

export const FeatureList: React.FC<Props> = ({ onClose }) => {
    const features = [
        { title: "Academic Season", desc: "Month-wise guided syllabus structure for Class 9-12. Content unlocks monthly." },
        { title: "Smart Content Access", desc: "Access PDF Notes, Video Lectures, and MCQs directly from the Season timeline." },
        { title: "MCQ Practice & Analysis", desc: "Practice chapter-wise MCQs. Unlock detailed analysis and explanations." },
        { title: "Universal Prize List", desc: "Top performers (>60%) in weekly tests get featured and win rewards." },
        { title: "Daily Login Bonus", desc: "Get 10 Free Coins every day just by opening the app." },
        { title: "Engagement Rewards", desc: "Earn Coins and Free Subscriptions by studying for 10-60 minutes daily." },
        { title: "Premium Subscriptions", desc: "Unlock unlimited access with Weekly, Monthly, or Lifetime plans." },
        { title: "NST Coins Store", desc: "Buy coins to unlock specific premium content without a full subscription." },
        { title: "Spin & Win", desc: "Try your luck daily to win extra coins." },
        { title: "Profile Customization", desc: "Update your Class, Board, and Password (Free for Premium, Coin cost for others)." },
        { title: "Live Support Chat", desc: "Directly chat with Admin/Teachers for doubt resolution." },
        { title: "Offline Support", desc: "Access downloaded PDFs and cached content even without internet." }
    ];

    return (
        <div className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-sm flex items-end sm:items-center justify-center p-4 animate-in fade-in">
            <div className="bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl max-h-[85vh] flex flex-col shadow-2xl">
                <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50 rounded-t-3xl">
                    <div>
                        <h3 className="text-xl font-black text-slate-800">App Features</h3>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Complete Guide ({features.length})</p>
                    </div>
                    <button onClick={onClose} className="bg-white p-2 rounded-full shadow-sm text-slate-400 hover:text-slate-600">
                        <X size={20} />
                    </button>
                </div>
                
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {features.map((feat, idx) => (
                        <div key={idx} className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-black text-sm">
                                {idx + 1}
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 text-sm mb-1">{feat.title}</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">{feat.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="p-4 border-t border-slate-100 bg-slate-50 rounded-b-3xl">
                    <button onClick={onClose} className="w-full py-3 bg-slate-800 text-white font-bold rounded-xl shadow-lg">
                        Got it!
                    </button>
                </div>
            </div>
        </div>
    );
};
