/**
 * Book Meeting (Student) — UC4: Book Meeting with Personal Supervisor
 *
 * HCI Heuristic #5: Error Prevention (Nielsen)
 * — Date input has a min attribute set to today to prevent booking in the past (FR-08).
 *   All required fields must be filled before the submit button becomes active.
 *   Date and time use native browser pickers to prevent format errors.
 *
 * HCI Heuristic #2: Match Between System and Real World (Nielsen)
 * — The PS card at the top uses familiar contact card conventions: name, email,
 *   role label. "Agenda" is standard meeting terminology.
 *
 * HCI Heuristic #1: Visibility of System Status (Nielsen)
 * — After booking, a success confirmation card shows all meeting details including
 *   a "Scheduled" status badge, giving immediate feedback.
 *
 * Tog Principle: Anticipation
 * — The PS information is pre-filled and displayed since the student can only book
 *   with their assigned PS — no unnecessary selection step.
 */

import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../AuthContext';
import { users, formatDateTime } from '../data';
import { ArrowLeft, Calendar, CheckCircle2, User } from 'lucide-react';
import { toast } from 'sonner';

export function BookMeeting() {
  const { currentUser, addMeeting } = useAuth();
  const navigate = useNavigate();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [agenda, setAgenda] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!currentUser) return null;
  const ps = users.find(u => u.id === currentUser.assignedPSId);

  const today = new Date().toISOString().split('T')[0];
  const canSubmit = date && time && agenda.trim() && ps;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    const meeting = {
      id: `M${Date.now()}`,
      studentId: currentUser.id,
      supervisorId: ps!.id,
      dateTime: `${date}T${time}`,
      agenda: agenda.trim(),
      status: 'Scheduled' as const,
      bookedBy: currentUser.id,
    };

    addMeeting(meeting);
    setSubmitted(true);
    toast.success('Meeting booked successfully!');
  };

  if (submitted) {
    return (
      <div className="p-8 max-w-lg mx-auto">
        <div className="bg-white rounded-xl border border-green-200 p-8 text-center shadow-sm">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-[20px] text-gray-900" style={{ fontWeight: 600 }}>Meeting Booked</h2>
          <p className="text-[13px] text-gray-600 mt-2">Your meeting with {ps?.name} has been scheduled.</p>
          <div className="bg-gray-50 rounded-lg p-4 mt-6 text-left text-[13px] space-y-1.5">
            <div><span className="text-gray-500">When:</span> <span style={{ fontWeight: 500 }}>{formatDateTime(`${date}T${time}`)}</span></div>
            <div><span className="text-gray-500">With:</span> <span style={{ fontWeight: 500 }}>{ps?.name}</span></div>
            <div><span className="text-gray-500">Agenda:</span> <span style={{ fontWeight: 500 }}>{agenda}</span></div>
            <div><span className="text-gray-500">Status:</span> <span className="px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 rounded text-[11px]" style={{ fontWeight: 600 }}>Scheduled</span></div>
          </div>
          <button
            onClick={() => navigate('/student/my-meetings')}
            className="w-full mt-6 px-4 py-2.5 bg-blue-600 text-white rounded-lg text-[13px] hover:bg-blue-700 transition-colors"
            style={{ fontWeight: 500 }}
          >
            View My Meetings
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <button onClick={() => navigate('/student')} className="flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-gray-700 mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
      </button>

      <h1 className="text-[22px] text-gray-900 mb-1" style={{ fontWeight: 600 }}>Book Meeting</h1>
      <p className="text-[13px] text-gray-500 mb-6">Schedule a meeting with your Personal Supervisor</p>

      {ps && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6 flex items-center gap-4">
          <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center">
            <User className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <div className="text-[11px] text-blue-600" style={{ fontWeight: 600 }}>YOUR PERSONAL SUPERVISOR</div>
            <div className="text-[15px] text-gray-900" style={{ fontWeight: 600 }}>{ps.name}</div>
            <div className="text-[12px] text-gray-500">{ps.email}</div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[13px] text-gray-700 mb-1.5" style={{ fontWeight: 500 }}>
              Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              min={today}
              value={date}
              onChange={e => setDate(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-[14px] bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-[13px] text-gray-700 mb-1.5" style={{ fontWeight: 500 }}>
              Time <span className="text-red-500">*</span>
            </label>
            <input
              type="time"
              value={time}
              onChange={e => setTime(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-[14px] bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
        </div>
        <div>
          <label className="block text-[13px] text-gray-700 mb-1.5" style={{ fontWeight: 500 }}>
            Agenda <span className="text-red-500">*</span>
          </label>
          <textarea
            value={agenda}
            onChange={e => setAgenda(e.target.value)}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[14px] bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
            placeholder="What would you like to discuss?"
          />
        </div>
        <button
          type="submit"
          disabled={!canSubmit}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 rounded-lg text-[14px] transition-colors"
          style={{ fontWeight: 600 }}
        >
          <Calendar className="w-[18px] h-[18px]" />
          Book Meeting
        </button>
      </form>
    </div>
  );
}
