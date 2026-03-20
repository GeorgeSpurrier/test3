/**
 * View Student Details — UC7: View Student Details & Reports
 *
 * HCI Heuristic #6: Recognition Rather Than Recall (Nielsen)
 * — A dropdown selects the student (listing all assigned students by name),
 *   then full details load automatically. No need to remember student IDs.
 *
 * HCI Heuristic #1: Visibility of System Status (Nielsen)
 * — Student summary stats (reports, averages, meetings) load immediately upon selection.
 *   The full report history is displayed newest-first with colour-coded badges.
 *
 * Tog Principle: Anticipation
 * — If the student is at-risk, a prominent alert banner appears at the top
 *   of their details page with a direct "Book Meeting" action.
 */

import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../AuthContext';
import { users, avg, getWellbeingLabel, getProgressLabel, getWellbeingColor, getProgressColor, formatDateTime } from '../data';
import { ArrowLeft, Calendar, AlertTriangle } from 'lucide-react';

export function StudentDetails() {
  const { currentUser, reports, meetings } = useAuth();
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState('');
  if (!currentUser) return null;

  const myStudents = users.filter(u => u.role === 'student' && u.assignedPSId === currentUser.id);
  const student = myStudents.find(s => s.id === selectedId);

  const sReports = student ? reports.filter(r => r.studentId === student.id).sort((a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime()) : [];
  const sMeetings = student ? meetings.filter(m => m.studentId === student.id) : [];
  const avgW = avg(sReports.map(r => r.wellbeing));
  const avgP = avg(sReports.map(r => r.progress));
  const latestW = sReports.length > 0 ? sReports[0].wellbeing : null;
  const isAtRisk = latestW !== null && latestW <= 2;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <button onClick={() => navigate('/ps')} className="flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-gray-700 mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
      </button>

      <h1 className="text-[22px] text-gray-900 mb-1" style={{ fontWeight: 600 }}>Student Details</h1>
      <p className="text-[13px] text-gray-500 mb-6">View individual student reports and meeting history</p>

      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm mb-6">
        <label className="block text-[13px] text-gray-700 mb-2" style={{ fontWeight: 500 }}>Select Student</label>
        <select
          value={selectedId}
          onChange={e => setSelectedId(e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-[14px] bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        >
          <option value="">Choose a student...</option>
          {myStudents.map(s => <option key={s.id} value={s.id}>{s.name} — {s.email}</option>)}
        </select>
      </div>

      {student && (
        <>
          {isAtRisk && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <span className="text-[13px] text-red-700" style={{ fontWeight: 600 }}>
                  Low wellbeing alert — latest rating: {latestW} ({getWellbeingLabel(latestW!)})
                </span>
              </div>
              <button onClick={() => navigate('/ps/book-meeting')} className="flex items-center gap-1.5 px-3 py-2 bg-red-600 text-white rounded-lg text-[12px] hover:bg-red-700" style={{ fontWeight: 600 }}>
                <Calendar className="w-3.5 h-3.5" /> Book Meeting
              </button>
            </div>
          )}

          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm mb-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-[18px] text-gray-900" style={{ fontWeight: 600 }}>{student.name}</div>
                <div className="text-[12px] text-gray-500">{student.email}</div>
              </div>
              <button onClick={() => navigate('/ps/book-meeting')} className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white rounded-lg text-[12px] hover:bg-blue-700" style={{ fontWeight: 600 }}>
                <Calendar className="w-3.5 h-3.5" /> Book Meeting
              </button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: 'Reports', value: sReports.length },
                { label: 'Avg Wellbeing', value: sReports.length > 0 ? avgW : 'N/A' },
                { label: 'Avg Progress', value: sReports.length > 0 ? avgP : 'N/A' },
                { label: 'Meetings', value: sMeetings.length },
              ].map(stat => (
                <div key={stat.label} className="bg-gray-50 rounded-lg p-4">
                  <div className="text-[11px] text-gray-500" style={{ fontWeight: 500 }}>{stat.label}</div>
                  <div className="text-[22px] text-gray-900 mt-1" style={{ fontWeight: 700 }}>{stat.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-[12px] text-gray-400 mb-3" style={{ fontWeight: 600 }}>RECENT REPORTS ({sReports.length})</div>
          {sReports.length === 0 ? (
            <div className="bg-white rounded-xl border border-gray-200 p-8 text-center shadow-sm">
              <p className="text-gray-500 text-[13px]">No reports submitted by this student.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {sReports.map(r => (
                <div key={r.id} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-[12px] text-gray-500">{formatDateTime(r.dateTime)}</div>
                    <div className="flex gap-2">
                      <span className={`px-2.5 py-1 rounded-md border text-[11px] ${getWellbeingColor(r.wellbeing)}`} style={{ fontWeight: 600 }}>
                        W: {r.wellbeing} — {getWellbeingLabel(r.wellbeing)}
                      </span>
                      <span className={`px-2.5 py-1 rounded-md border text-[11px] ${getProgressColor(r.progress)}`} style={{ fontWeight: 600 }}>
                        P: {r.progress} — {getProgressLabel(r.progress)}
                      </span>
                    </div>
                  </div>
                  {r.comments && <p className="text-[13px] text-gray-700 bg-gray-50 rounded-lg p-3">{r.comments}</p>}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
