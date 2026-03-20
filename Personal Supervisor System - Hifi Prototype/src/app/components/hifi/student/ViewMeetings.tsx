/**
 * View My Meetings — UC5: View My Meetings (Student)
 *
 * HCI Heuristic #1: Visibility of System Status (Nielsen)
 * — Meeting status badges (Scheduled/Completed/Cancelled) use distinct colours
 *   so students immediately see which meetings are upcoming vs past.
 *
 * HCI Heuristic #6: Recognition Rather Than Recall (Nielsen)
 * — Each meeting card shows all key details inline: who, when, agenda, status,
 *   and who initiated the booking — no need to remember or click through.
 *
 * HCI Heuristic #4: Consistency and Standards (Nielsen)
 * — Meeting cards use the same card component pattern as reports for visual consistency.
 *   Status badge colours match across all meeting views (student, PS, ST).
 *
 * Tog Principle: Readability
 * — Text hierarchy: supervisor name is bold, date is secondary, agenda is body text.
 *   "Booked by: You / Supervisor" uses natural language rather than IDs.
 */

import { useNavigate } from 'react-router';
import { useAuth } from '../AuthContext';
import { users, formatDateTime, getStatusColor } from '../data';
import { ArrowLeft, Calendar } from 'lucide-react';

export function ViewMeetings() {
  const { currentUser, meetings } = useAuth();
  const navigate = useNavigate();
  if (!currentUser) return null;

  const myMeetings = meetings
    .filter(m => m.studentId === currentUser.id)
    .sort((a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime());

  const upcoming = myMeetings.filter(m => m.status === 'Scheduled');
  const past = myMeetings.filter(m => m.status !== 'Scheduled');

  const renderMeeting = (m: typeof myMeetings[0]) => {
    const ps = users.find(u => u.id === m.supervisorId);
    const bookedByMe = m.bookedBy === currentUser.id;
    return (
      <div key={m.id} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
        <div className="flex items-start justify-between mb-2">
          <div>
            <div className="text-[14px] text-gray-900" style={{ fontWeight: 600 }}>{ps?.name}</div>
            <div className="text-[12px] text-gray-500 mt-0.5">{formatDateTime(m.dateTime)}</div>
          </div>
          <span className={`px-2.5 py-1 rounded-md border text-[11px] ${getStatusColor(m.status)}`} style={{ fontWeight: 600 }}>
            {m.status}
          </span>
        </div>
        <p className="text-[13px] text-gray-700 mb-2">{m.agenda}</p>
        <div className="text-[11px] text-gray-400">Booked by: {bookedByMe ? 'You' : 'Supervisor'}</div>
      </div>
    );
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <button onClick={() => navigate('/student')} className="flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-gray-700 mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
      </button>

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-[22px] text-gray-900" style={{ fontWeight: 600 }}>My Meetings</h1>
          <p className="text-[13px] text-gray-500">{myMeetings.length} total meetings</p>
        </div>
        <button
          onClick={() => navigate('/student/book-meeting')}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-[13px] hover:bg-blue-700 transition-colors"
          style={{ fontWeight: 500 }}
        >
          <Calendar className="w-4 h-4" /> Book New Meeting
        </button>
      </div>

      {upcoming.length > 0 && (
        <>
          <div className="text-[12px] text-gray-400 mb-3" style={{ fontWeight: 600 }}>UPCOMING ({upcoming.length})</div>
          <div className="space-y-3 mb-8">{upcoming.map(renderMeeting)}</div>
        </>
      )}

      {past.length > 0 && (
        <>
          <div className="text-[12px] text-gray-400 mb-3" style={{ fontWeight: 600 }}>PAST ({past.length})</div>
          <div className="space-y-3">{past.map(renderMeeting)}</div>
        </>
      )}

      {myMeetings.length === 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center shadow-sm">
          <p className="text-gray-500 text-[14px]">No meetings yet.</p>
          <button onClick={() => navigate('/student/book-meeting')} className="mt-3 text-blue-600 text-[13px] hover:underline" style={{ fontWeight: 500 }}>
            Book your first meeting
          </button>
        </div>
      )}
    </div>
  );
}
