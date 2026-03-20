/**
 * All Students Overview — UC11: ST Views All Students
 *
 * HCI Heuristic #1: Visibility of System Status (Nielsen)
 * — The department-wide table gives a complete picture: every student, their PS,
 *   averages, and a status flag. Summary stats at top provide aggregate overview.
 *
 * HCI Heuristic #4: Consistency and Standards (Nielsen)
 * — The table format mirrors the PS "My Students" view, using the same colour-coded
 *   status badges. This consistency means the ST can read the data immediately
 *   without learning a new format.
 *
 * HCI Heuristic #8: Aesthetic and Minimalist Design (Nielsen)
 * — Status flags (OK, LOW WELLBEING, LOW PROGRESS, NO REPORTS) are computed
 *   automatically per FR-16, surfacing exactly what the ST needs to know.
 *
 * Tog Principle: Colour Blindness
 * — All status flags use text labels + icons, not just colour. "LOW WELLBEING"
 *   includes the AlertTriangle icon as a redundant signal.
 */

import { useNavigate } from 'react-router';
import { useAuth } from '../AuthContext';
import { users, avg, getWellbeingColor } from '../data';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

export function AllStudents() {
  const { reports, meetings } = useAuth();
  const navigate = useNavigate();

  const allStudents = users.filter(u => u.role === 'student');

  const studentData = allStudents.map(s => {
    const ps = users.find(u => u.id === s.assignedPSId);
    const sReports = reports.filter(r => r.studentId === s.id).sort((a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime());
    const sMeetings = meetings.filter(m => m.studentId === s.id);
    const avgW = avg(sReports.map(r => r.wellbeing));
    const avgP = avg(sReports.map(r => r.progress));
    const latestW = sReports.length > 0 ? sReports[0].wellbeing : null;
    const latestP = sReports.length > 0 ? sReports[0].progress : null;

    let status: string;
    let statusStyle: string;
    if (sReports.length === 0) {
      status = 'NO REPORTS';
      statusStyle = 'bg-amber-50 text-amber-600 border-amber-200';
    } else if (latestW !== null && latestW <= 2) {
      status = 'LOW WELLBEING';
      statusStyle = 'bg-red-50 text-red-600 border-red-200';
    } else if (latestP !== null && latestP <= 2) {
      status = 'LOW PROGRESS';
      statusStyle = 'bg-orange-50 text-orange-600 border-orange-200';
    } else {
      status = 'OK';
      statusStyle = 'bg-green-50 text-green-600 border-green-200';
    }

    return { ...s, ps, reportCount: sReports.length, meetingCount: sMeetings.length, avgW, avgP, status, statusStyle };
  });

  const atRisk = studentData.filter(s => s.status === 'LOW WELLBEING').length;
  const noReports = studentData.filter(s => s.status === 'NO REPORTS').length;

  return (
    <div className="p-8">
      <button onClick={() => navigate('/st')} className="flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-gray-700 mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
      </button>

      <h1 className="text-[22px] text-gray-900 mb-1" style={{ fontWeight: 600 }}>All Students Overview</h1>
      <p className="text-[13px] text-gray-500 mb-6">Department-wide student status</p>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="text-[12px] text-gray-500" style={{ fontWeight: 500 }}>Total Students</div>
          <div className="text-[28px] text-gray-900 mt-1" style={{ fontWeight: 700 }}>{allStudents.length}</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="text-[12px] text-gray-500" style={{ fontWeight: 500 }}>At Risk</div>
          <div className={`text-[28px] mt-1 ${atRisk > 0 ? 'text-red-600' : 'text-gray-900'}`} style={{ fontWeight: 700 }}>{atRisk}</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="text-[12px] text-gray-500" style={{ fontWeight: 500 }}>No Reports</div>
          <div className={`text-[28px] mt-1 ${noReports > 0 ? 'text-amber-600' : 'text-gray-900'}`} style={{ fontWeight: 700 }}>{noReports}</div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left px-5 py-3 text-[11px] text-gray-500" style={{ fontWeight: 600 }}>STUDENT</th>
              <th className="text-left px-4 py-3 text-[11px] text-gray-500" style={{ fontWeight: 600 }}>SUPERVISOR</th>
              <th className="text-center px-3 py-3 text-[11px] text-gray-500" style={{ fontWeight: 600 }}>AVG W</th>
              <th className="text-center px-3 py-3 text-[11px] text-gray-500" style={{ fontWeight: 600 }}>AVG P</th>
              <th className="text-center px-3 py-3 text-[11px] text-gray-500" style={{ fontWeight: 600 }}>MEETINGS</th>
              <th className="text-center px-4 py-3 text-[11px] text-gray-500" style={{ fontWeight: 600 }}>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map(s => (
              <tr key={s.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="px-5 py-4">
                  <div className="text-[13px] text-gray-900" style={{ fontWeight: 600 }}>{s.name}</div>
                </td>
                <td className="px-4 py-4 text-[12px] text-gray-500">{s.ps?.name || 'Unassigned'}</td>
                <td className="text-center px-3 py-4">
                  {s.reportCount > 0 ? (
                    <span className={`px-2 py-0.5 rounded text-[12px] border ${getWellbeingColor(s.avgW)}`} style={{ fontWeight: 600 }}>{s.avgW}</span>
                  ) : (
                    <span className="text-[12px] text-gray-400">—</span>
                  )}
                </td>
                <td className="text-center px-3 py-4">
                  {s.reportCount > 0 ? (
                    <span className="text-[13px] text-gray-700" style={{ fontWeight: 600 }}>{s.avgP}</span>
                  ) : (
                    <span className="text-[12px] text-gray-400">—</span>
                  )}
                </td>
                <td className="text-center px-3 py-4 text-[13px] text-gray-700">{s.meetingCount}</td>
                <td className="text-center px-4 py-4">
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded border text-[11px] ${s.statusStyle}`} style={{ fontWeight: 600 }}>
                    {s.status.includes('LOW') && <AlertTriangle className="w-3 h-3" />}
                    {s.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
