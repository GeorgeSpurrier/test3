/**
 * Book Meeting (PS) — UC5/UC8: Book Meeting with Student (Supervisor-initiated)
 *
 * HCI Heuristic #5: Error Prevention (Nielsen)
 * — Student dropdown ensures only valid assigned students can be selected.
 *   Date min attribute prevents past dates. All fields required before submission.
 *
 * HCI Heuristic #6: Recognition Rather Than Recall (Nielsen)
 * — Students listed by name in dropdown rather than requiring ID entry.
 *
 * HCI Heuristic #2: Match Between System and Real World (Nielsen)
 * — Uses standard meeting booking conventions: date, time, agenda fields.
 *
 * Tog Principle: Efficiency of the User
 * — Minimal fields required. The supervisor doesn't need to enter their own details.
 */

import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../AuthContext';
import { users, formatDateTime } from '../data';
import { ArrowLeft, Calendar, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export function PSBookMeeting() {
  const { currentUser, addMeeting } = useAuth();
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [agenda, setAgenda] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!currentUser) return null;
  const myStudents = users.filter(u => u.role === 'student' && u.assignedPSId === currentUser.id);
  const today = new Date().toISOString().split('T')[0];
  const canSubmit = studentId && date && time && agenda.trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    addMeeting({
      id: `M${Date.now()}`,
      studentId,
      supervisorId: currentUser.id,
      dateTime: `${date}T${time}`,
      agenda: agenda.trim(),
      status: 'Scheduled',
      bookedBy: currentUser.id,
    });
    setSubmitted(true);
    toast.success('Meeting booked successfully!');
  };

  const selectedStudent = users.find(u => u.id === studentId);

  if (submitted) {
    return (
      <div className="p-8 max-w-lg mx-auto">
        <div className="bg-white rounded-xl border border-green-200 p-8 text-center shadow-sm">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-[20px] text-gray-900" style={{ fontWeight: 600 }}>Meeting Booked</h2>
          <p className="text-[13px] text-gray-600 mt-2">Meeting with {selectedStudent?.name} has been scheduled.</p>
          <div className="bg-gray-50 rounded-lg p-4 mt-6 text-left text-[13px] space-y-1.5">
            <div><span className="text-gray-500">Student:</span> <span style={{ fontWeight: 500 }}>{selectedStudent?.name}</span></div>
            <div><span className="text-gray-500">When:</span> <span style={{ fontWeight: 500 }}>{formatDateTime(`${date}T${time}`)}</span></div>
            <div><span className="text-gray-500">Agenda:</span> <span style={{ fontWeight: 500 }}>{agenda}</span></div>
          </div>
          <div className="flex gap-3 mt-6">
            <button onClick={() => { setStudentId(''); setDate(''); setTime(''); setAgenda(''); setSubmitted(false); }} className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-[13px] text-gray-700 hover:bg-gray-50" style={{ fontWeight: 500 }}>
              Book Another
            </button>
            <button onClick={() => navigate('/ps/meetings')} className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg text-[13px] hover:bg-blue-700" style={{ fontWeight: 500 }}>
              View Meetings
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <button onClick={() => navigate('/ps')} className="flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-gray-700 mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
      </button>

      <h1 className="text-[22px] text-gray-900 mb-1" style={{ fontWeight: 600 }}>Book Meeting</h1>
      <p className="text-[13px] text-gray-500 mb-6">Schedule a meeting with one of your students</p>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm space-y-5">
        <div>
          <label className="block text-[13px] text-gray-700 mb-1.5" style={{ fontWeight: 500 }}>Select Student <span className="text-red-500">*</span></label>
          <select value={studentId} onChange={e => setStudentId(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-[14px] bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
            <option value="">Choose a student...</option>
            {myStudents.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[13px] text-gray-700 mb-1.5" style={{ fontWeight: 500 }}>Date <span className="text-red-500">*</span></label>
            <input type="date" min={today} value={date} onChange={e => setDate(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-[14px] bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
          </div>
          <div>
            <label className="block text-[13px] text-gray-700 mb-1.5" style={{ fontWeight: 500 }}>Time <span className="text-red-500">*</span></label>
            <input type="time" value={time} onChange={e => setTime(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-[14px] bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
          </div>
        </div>
        <div>
          <label className="block text-[13px] text-gray-700 mb-1.5" style={{ fontWeight: 500 }}>Agenda <span className="text-red-500">*</span></label>
          <textarea value={agenda} onChange={e => setAgenda(e.target.value)} rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[14px] bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none" placeholder="Reason for the meeting..." />
        </div>
        <button type="submit" disabled={!canSubmit} className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 rounded-lg text-[14px] transition-colors" style={{ fontWeight: 600 }}>
          <Calendar className="w-[18px] h-[18px]" /> Book Meeting
        </button>
      </form>
    </div>
  );
}
