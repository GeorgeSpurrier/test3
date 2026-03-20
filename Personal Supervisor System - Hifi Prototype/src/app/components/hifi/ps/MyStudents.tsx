/**
 * View All My Students — UC6: PS Views All Students Dashboard
 *
 * HCI Heuristic #1: Visibility of System Status (Nielsen)
 * — The data table provides a complete at-a-glance view of all students with their
 *   report counts, averages, and meeting counts. LOW WELLBEING ALERT section uses
 *   a prominent red-bordered card that cannot be missed (FR-12).
 *
 * HCI Heuristic #5: Error Prevention (Nielsen)
 * — "Book Meeting" button on each at-risk student card enables direct action,
 *   reducing the chance of forgetting to follow up.
 *
 * HCI Heuristic #8: Aesthetic and Minimalist Design (Nielsen)
 * — The table shows exactly the metrics a PS needs. Colour-coded wellbeing values
 *   highlight concerns without adding noise.
 *
 * Tog Principle: Colour Blindness
 * — At-risk alerts use text labels ("LOW WELLBEING", icons) in addition to red colour.
 *   Table cells include numeric values, not just colour indicators.
 */

import { useNavigate } from 'react-router';
import { useAuth } from '../AuthContext';
import { users, avg, getWellbeingLabel, getWellbeingColor, formatDateShort } from '../data';
import { ArrowLeft, AlertTriangle, Calendar } from 'lucide-react';

export function MyStudents() {
  const { currentUser, reports, meetings } = useAuth();
  const navigate = useNavigate();
  if (!currentUser) return null;

  const myStudents = users.filter(u => u.role === 'student' && u.assignedPSId === currentUser.id);

  const studentData = myStudents.map(s => {
    const sReports = reports.filter(r => r.studentId === s.id).sort((a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime());
    const sMeetings = meetings.filter(m => m.studentId === s.id);
    const avgW = avg(sReports.map(r => r.wellbeing));
    const avgP = avg(sReports.map(r => r.progress));
    const latestWellbeing = sReports.length > 0 ? sReports[0].wellbeing : null;
    const latestReport = sReports.length > 0 ? sReports[0] : null;
    const isAtRisk = latestWellbeing !== null && latestWellbeing <= 2;
    return { ...s, reportCount: sReports.length, meetingCount: sMeetings.length, avgW, avgP, latestWellbeing, latestReport, isAtRisk };
  });

  const atRiskStudents = studentData.filter(s => s.isAtRisk);

  return (
    <div className="p-8">
      <button onClick={() => navigate('/ps')} className="flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-gray-700 mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
      </button>

      <h1 className="text-[22px] text-gray-900 mb-1" style={{ fontWeight: 600 }}>My Students Dashboard</h1>
      <p className="text-[13px] text-gray-500 mb-6">{myStudents.length} students assigned to you</p>

      {/* Students Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-8">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left px-5 py-3 text-[11px] text-gray-500" style={{ fontWeight: 600 }}>STUDENT</th>
              <th className="text-center px-3 py-3 text-[11px] text-gray-500" style={{ fontWeight: 600 }}>REPORTS</th>
              <th className="text-center px-3 py-3 text-[11px] text-gray-500" style={{ fontWeight: 600 }}>AVG WELLBEING</th>
              <th className="text-center px-3 py-3 text-[11px] text-gray-500" style={{ fontWeight: 600 }}>AVG PROGRESS</th>
              <th className="text-center px-3 py-3 text-[11px] text-gray-500" style={{ fontWeight: 600 }}>MEETINGS</th>
              <th className="text-center px-3 py-3 text-[11px] text-gray-500" style={{ fontWeight: 600 }}>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map(s => (
              <tr key={s.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="px-5 py-4">
                  <div className="text-[13px] text-gray-900" style={{ fontWeight: 600 }}>{s.name}</div>
                  <div className="text-[11px] text-gray-400">{s.email}</div>
                </td>
                <td className="text-center px-3 py-4 text-[13px] text-gray-700">{s.reportCount}</td>
                <td className="text-center px-3 py-4">
                  {s.reportCount > 0 ? (
                    <span className={`px-2 py-0.5 rounded text-[12px] border ${getWellbeingColor(s.avgW)}`} style={{ fontWeight: 600 }}>{s.avgW}</span>
                  ) : (
                    <span className="text-[12px] text-gray-400">N/A</span>
                  )}
                </td>
                <td className="text-center px-3 py-4">
                  {s.reportCount > 0 ? (
                    <span className="text-[13px] text-gray-700" style={{ fontWeight: 600 }}>{s.avgP}</span>
                  ) : (
                    <span className="text-[12px] text-gray-400">N/A</span>
                  )}
                </td>
                <td className="text-center px-3 py-4 text-[13px] text-gray-700">{s.meetingCount}</td>
                <td className="text-center px-3 py-4">
                  {s.isAtRisk ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-50 text-red-600 border border-red-200 rounded text-[11px]" style={{ fontWeight: 600 }}>
                      <AlertTriangle className="w-3 h-3" /> LOW WELLBEING
                    </span>
                  ) : s.reportCount === 0 ? (
                    <span className="px-2 py-0.5 bg-amber-50 text-amber-600 border border-amber-200 rounded text-[11px]" style={{ fontWeight: 600 }}>NO REPORTS</span>
                  ) : (
                    <span className="px-2 py-0.5 bg-green-50 text-green-600 border border-green-200 rounded text-[11px]" style={{ fontWeight: 600 }}>OK</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Low Wellbeing Alerts */}
      {atRiskStudents.length > 0 && (
        <div className="bg-white rounded-xl border-2 border-red-200 shadow-sm p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <h2 className="text-[15px] text-red-700" style={{ fontWeight: 700 }}>LOW WELLBEING ALERTS</h2>
          </div>
          <div className="space-y-3">
            {atRiskStudents.map(s => (
              <div key={s.id} className="bg-red-50/50 border border-red-100 rounded-lg p-4 flex items-start justify-between">
                <div>
                  <div className="text-[14px] text-gray-900" style={{ fontWeight: 600 }}>{s.name}</div>
                  <div className="text-[12px] text-gray-600 mt-1">
                    Latest wellbeing: <span style={{ fontWeight: 600 }}>{s.latestWellbeing} ({getWellbeingLabel(s.latestWellbeing!)})</span>
                  </div>
                  {s.latestReport && (
                    <div className="text-[11px] text-gray-400 mt-0.5">Reported: {formatDateShort(s.latestReport.dateTime)}</div>
                  )}
                </div>
                <button
                  onClick={() => navigate('/ps/book-meeting')}
                  className="flex items-center gap-1.5 px-3 py-2 bg-red-600 text-white rounded-lg text-[12px] hover:bg-red-700 transition-colors shrink-0"
                  style={{ fontWeight: 600 }}
                >
                  <Calendar className="w-3.5 h-3.5" /> Book Meeting
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
