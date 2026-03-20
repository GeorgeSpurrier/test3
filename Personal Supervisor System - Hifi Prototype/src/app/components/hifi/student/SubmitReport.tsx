/**
 * Submit Self-Report — UC2: Submit Self-Report
 *
 * HCI Heuristic #2: Match Between System and Real World (Nielsen)
 * — Rating labels use natural language (Very Poor → Excellent) with colour coding
 *   that matches real-world associations (red=bad, green=good). This reduces
 *   cognitive effort when selecting a rating.
 *
 * HCI Heuristic #5: Error Prevention (Nielsen)
 * — The submit button is disabled until both required ratings are selected.
 *   Clickable rating buttons prevent typos (vs free-text input in the console app).
 *   FR-04 validation is enforced by design — only valid values 1-5 can be selected.
 *
 * HCI Heuristic #1: Visibility of System Status (Nielsen)
 * — Selected ratings are highlighted with colour and a check mark. After submission,
 *   a success toast and confirmation card provide immediate feedback.
 *
 * HCI Heuristic #3: User Control and Freedom (Nielsen)
 * — "Back to Dashboard" link allows users to abandon the form at any time.
 *   Ratings can be re-selected before submission. The "Submit Another" option
 *   after successful submission supports repeated use.
 *
 * Tog Principle: Colour Blindness
 * — Ratings use both colour AND text labels, so information is not conveyed
 *   by colour alone. Each button also shows its numeric value.
 *
 * Tog Principle: Defaults
 * — No defaults for ratings (forces conscious selection), but the optional
 *   comments field defaults to empty, making it clearly optional.
 */

import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../AuthContext';
import { getWellbeingLabel, getProgressLabel } from '../data';
import { ArrowLeft, CheckCircle2, Send } from 'lucide-react';
import { toast } from 'sonner';

const wellbeingColors = ['', 'bg-red-500', 'bg-orange-500', 'bg-amber-400', 'bg-lime-500', 'bg-green-500'];
const progressColors = ['', 'bg-red-500', 'bg-orange-500', 'bg-amber-400', 'bg-lime-500', 'bg-green-500'];

export function SubmitReport() {
  const { currentUser, addReport } = useAuth();
  const navigate = useNavigate();
  const [wellbeing, setWellbeing] = useState<number | null>(null);
  const [progress, setProgress] = useState<number | null>(null);
  const [comments, setComments] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!currentUser) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (wellbeing === null || progress === null) return;

    const report = {
      id: `R${Date.now()}`,
      studentId: currentUser.id,
      dateTime: new Date().toISOString(),
      wellbeing,
      progress,
      comments: comments.trim(),
    };

    addReport(report);
    setSubmitted(true);
    toast.success('Self-report submitted successfully!');
  };

  if (submitted) {
    return (
      <div className="p-8 max-w-lg mx-auto">
        {/*
          HCI Heuristic #1: Visibility of System Status — clear confirmation of successful action.
          HCI Heuristic #3: User Control and Freedom — options to submit another or return.
        */}
        <div className="bg-white rounded-xl border border-green-200 p-8 text-center shadow-sm">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-[20px] text-gray-900" style={{ fontWeight: 600 }}>Report Submitted</h2>
          <p className="text-[13px] text-gray-600 mt-2">
            Your self-report has been recorded. Your Personal Supervisor will be able to see this.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mt-6 text-left">
            <div className="grid grid-cols-2 gap-3 text-[13px]">
              <div>
                <span className="text-gray-500">Wellbeing:</span>{' '}
                <span style={{ fontWeight: 600 }}>{wellbeing} — {getWellbeingLabel(wellbeing!)}</span>
              </div>
              <div>
                <span className="text-gray-500">Progress:</span>{' '}
                <span style={{ fontWeight: 600 }}>{progress} — {getProgressLabel(progress!)}</span>
              </div>
            </div>
            {comments && <div className="text-[13px] text-gray-600 mt-2 border-t border-gray-200 pt-2">{comments}</div>}
          </div>
          <div className="flex gap-3 mt-6">
            <button
              onClick={() => { setWellbeing(null); setProgress(null); setComments(''); setSubmitted(false); }}
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-[13px] text-gray-700 hover:bg-gray-50 transition-colors"
              style={{ fontWeight: 500 }}
            >
              Submit Another
            </button>
            <button
              onClick={() => navigate('/student')}
              className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg text-[13px] hover:bg-blue-700 transition-colors"
              style={{ fontWeight: 500 }}
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <button onClick={() => navigate('/student')} className="flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-gray-700 mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
      </button>

      <h1 className="text-[22px] text-gray-900 mb-1" style={{ fontWeight: 600 }}>Submit Self-Report</h1>
      <p className="text-[13px] text-gray-500 mb-8">Rate your current wellbeing and academic progress</p>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Wellbeing Rating */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <label className="block text-[15px] text-gray-900 mb-1" style={{ fontWeight: 600 }}>
            Wellbeing Rating <span className="text-red-500">*</span>
          </label>
          <p className="text-[12px] text-gray-500 mb-4">How are you feeling overall?</p>
          <div className="grid grid-cols-5 gap-3">
            {[1, 2, 3, 4, 5].map(n => (
              <button
                key={n}
                type="button"
                onClick={() => setWellbeing(n)}
                className={`relative flex flex-col items-center py-4 rounded-lg border-2 transition-all ${
                  wellbeing === n
                    ? `border-blue-500 bg-blue-50 ring-2 ring-blue-200`
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
              >
                <div className={`w-8 h-8 rounded-full ${wellbeingColors[n]} mb-2 flex items-center justify-center text-white text-[13px]`} style={{ fontWeight: 700 }}>
                  {n}
                </div>
                <span className="text-[11px] text-gray-600" style={{ fontWeight: 500 }}>{getWellbeingLabel(n)}</span>
                {wellbeing === n && (
                  <CheckCircle2 className="absolute top-1.5 right-1.5 w-4 h-4 text-blue-500" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Progress Rating */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <label className="block text-[15px] text-gray-900 mb-1" style={{ fontWeight: 600 }}>
            Academic Progress <span className="text-red-500">*</span>
          </label>
          <p className="text-[12px] text-gray-500 mb-4">How is your coursework going?</p>
          <div className="grid grid-cols-5 gap-3">
            {[1, 2, 3, 4, 5].map(n => (
              <button
                key={n}
                type="button"
                onClick={() => setProgress(n)}
                className={`relative flex flex-col items-center py-4 rounded-lg border-2 transition-all ${
                  progress === n
                    ? `border-blue-500 bg-blue-50 ring-2 ring-blue-200`
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
              >
                <div className={`w-8 h-8 rounded-full ${progressColors[n]} mb-2 flex items-center justify-center text-white text-[13px]`} style={{ fontWeight: 700 }}>
                  {n}
                </div>
                <span className="text-[11px] text-gray-600" style={{ fontWeight: 500 }}>{getProgressLabel(n)}</span>
                {progress === n && (
                  <CheckCircle2 className="absolute top-1.5 right-1.5 w-4 h-4 text-blue-500" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Comments */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <label className="block text-[15px] text-gray-900 mb-1" style={{ fontWeight: 600 }}>
            Comments <span className="text-[12px] text-gray-400" style={{ fontWeight: 400 }}>(optional)</span>
          </label>
          <p className="text-[12px] text-gray-500 mb-3">Add any additional context you'd like your supervisor to know</p>
          <textarea
            value={comments}
            onChange={e => setComments(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[14px] bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
            placeholder="e.g. I've been struggling with the latest assignment..."
          />
        </div>

        <button
          type="submit"
          disabled={wellbeing === null || progress === null}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3.5 rounded-xl text-[14px] transition-colors shadow-sm"
          style={{ fontWeight: 600 }}
        >
          <Send className="w-[18px] h-[18px]" />
          Submit Report
        </button>
      </form>
    </div>
  );
}
