/**
 * Manage Meetings / Update Meeting Status — UC9/UC10
 *
 * HCI Heuristic #3: User Control and Freedom (Nielsen)
 * — Status updates require explicit button clicks (Mark Completed / Cancel).
 *   Cancelled status is visually distinct so the user can see the result.
 *
 * HCI Heuristic #5: Error Prevention (Nielsen)
 * — Only "Scheduled" meetings show action buttons. Completed/Cancelled meetings
 *   have no actions, preventing double-updates.
 *
 * HCI Heuristic #1: Visibility of System Status (Nielsen)
 * — After updating, the meeting card immediately reflects the new status with
 *   appropriate colour change and a toast notification.
 *
 * Tog Principle: Readability
 * — Meetings are grouped into "Upcoming" and "Past" sections. Each card shows
 *   student name, date/time, agenda, and status in a clear hierarchy.
 */

import { useNavigate } from 'react-router';
import { useAuth } from '../AuthContext';
import { users, formatDateTime, getStatusColor } from '../data';
import { ArrowLeft, CheckCircle2, XCircle } from 'lucide-react';
import { toast } from 'sonner';

export function ManageMeetings() {
  const { currentUser, meetings, updateMeetingStatus } = useAuth();
  const navigate = useNavigate();
  if (!currentUser) return null;

  const myMeetings = meetings
    .filter(m => m.supervisorId === currentUser.id)
    .sort((a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime());

  const scheduled = myMeetings.filter(m => m.status === 'Scheduled');
  const past = myMeetings.filter(m => m.status !== 'Scheduled');

  const handleComplete = (id: string) => {
    updateMeetingStatus(id, 'Completed');
    toast.success('Meeting marked as completed');
  };

  const handleCancel = (id: string) => {
    updateMeetingStatus(id, 'Cancelled');
    toast('Meeting cancelled', { icon: '❌' });
  };

  const renderMeeting = (m: typeof myMeetings[0], showActions: boolean) => {
    const student = users.find(u => u.id === m.studentId);
    const bookedByPS = m.bookedBy === currentUser!.id;
    return (
      <div key={m.id} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
        <div className="flex items-start justify-between mb-2">
          <div>
            <div className="text-[14px] text-gray-900" style={{ fontWeight: 600 }}>{student?.name}</div>
            <div className="text-[12px] text-gray-500 mt-0.5">{formatDateTime(m.dateTime)}</div>
          </div>
          <span className={`px-2.5 py-1 rounded-md border text-[11px] ${getStatusColor(m.status)}`} style={{ fontWeight: 600 }}>
            {m.status}
          </span>
        </div>
        <p className="text-[13px] text-gray-700 mb-2">{m.agenda}</p>
        <div className="text-[11px] text-gray-400 mb-3">Booked by: {bookedByPS ? 'You' : 'Student'}</div>
        {showActions && m.status === 'Scheduled' && (
          <div className="flex gap-2 border-t border-gray-100 pt-3">
            <button
              onClick={() => handleComplete(m.id)}
              className="flex items-center gap-1.5 px-4 py-2 bg-green-600 text-white rounded-lg text-[12px] hover:bg-green-700 transition-colors"
              style={{ fontWeight: 600 }}
            >
              <CheckCircle2 className="w-3.5 h-3.5" /> Mark Completed
            </button>
            <button
              onClick={() => handleCancel(m.id)}
              className="flex items-center gap-1.5 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-[12px] hover:bg-gray-50 transition-colors"
              style={{ fontWeight: 500 }}
            >
              <XCircle className="w-3.5 h-3.5" /> Cancel
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <button onClick={() => navigate('/ps')} className="flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-gray-700 mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
      </button>

      <h1 className="text-[22px] text-gray-900 mb-1" style={{ fontWeight: 600 }}>Manage Meetings</h1>
      <p className="text-[13px] text-gray-500 mb-6">{myMeetings.length} total meetings</p>

      {scheduled.length > 0 && (
        <>
          <div className="text-[12px] text-gray-400 mb-3" style={{ fontWeight: 600 }}>SCHEDULED ({scheduled.length})</div>
          <div className="space-y-3 mb-8">{scheduled.map(m => renderMeeting(m, true))}</div>
        </>
      )}

      {past.length > 0 && (
        <>
          <div className="text-[12px] text-gray-400 mb-3" style={{ fontWeight: 600 }}>PAST ({past.length})</div>
          <div className="space-y-3">{past.map(m => renderMeeting(m, false))}</div>
        </>
      )}
    </div>
  );
}
