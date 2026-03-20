/**
 * View My Reports — UC3: View My Reports
 *
 * HCI Heuristic #1: Visibility of System Status (Nielsen)
 * — Summary statistics at the top give an at-a-glance picture of total reports,
 *   average wellbeing, and average progress before the user scrolls down.
 *
 * HCI Heuristic #6: Recognition Rather Than Recall (Nielsen)
 * — Each report card shows the date, ratings (with colour-coded badges), and
 *   comments inline — no need to click through to see details.
 *
 * HCI Heuristic #8: Aesthetic and Minimalist Design (Nielsen)
 * — Reports are sorted newest-first (most relevant to the user). Each card
 *   has a consistent structure: date header, rating badges, optional comments.
 *
 * Tog Principle: Colour Blindness
 * — Rating badges use colour AND text labels (e.g., "W: 2 — Poor") so the
 *   information is accessible without colour perception.
 */

import { useNavigate } from 'react-router';
import { useAuth } from '../AuthContext';
import { avg, getWellbeingLabel, getProgressLabel, getWellbeingColor, getProgressColor, formatDateTime } from '../data';
import { ArrowLeft, TrendingDown, TrendingUp, BarChart3 } from 'lucide-react';

export function ViewReports() {
  const { currentUser, reports } = useAuth();
  const navigate = useNavigate();
  if (!currentUser) return null;

  const myReports = reports
    .filter(r => r.studentId === currentUser.id)
    .sort((a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime());

  const avgW = avg(myReports.map(r => r.wellbeing));
  const avgP = avg(myReports.map(r => r.progress));

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <button onClick={() => navigate('/student')} className="flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-gray-700 mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
      </button>

      <h1 className="text-[22px] text-gray-900 mb-1" style={{ fontWeight: 600 }}>My Reports</h1>
      <p className="text-[13px] text-gray-500 mb-6">{myReports.length} report{myReports.length !== 1 ? 's' : ''} submitted</p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <div className="text-[12px] text-gray-500" style={{ fontWeight: 500 }}>Total Reports</div>
            <div className="text-[22px] text-gray-900" style={{ fontWeight: 700 }}>{myReports.length}</div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
            <TrendingDown className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <div className="text-[12px] text-gray-500" style={{ fontWeight: 500 }}>Avg Wellbeing</div>
            <div className="text-[22px] text-gray-900" style={{ fontWeight: 700 }}>{avgW || 'N/A'}</div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <div className="text-[12px] text-gray-500" style={{ fontWeight: 500 }}>Avg Progress</div>
            <div className="text-[22px] text-gray-900" style={{ fontWeight: 700 }}>{avgP || 'N/A'}</div>
          </div>
        </div>
      </div>

      {/* Reports List */}
      {myReports.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center shadow-sm">
          <p className="text-gray-500 text-[14px]">No reports submitted yet.</p>
          <button
            onClick={() => navigate('/student/submit-report')}
            className="mt-3 text-blue-600 text-[13px] hover:underline"
            style={{ fontWeight: 500 }}
          >
            Submit your first report
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {myReports.map(report => (
            <div key={report.id} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div className="text-[12px] text-gray-500">{formatDateTime(report.dateTime)}</div>
                <div className="flex gap-2">
                  <span className={`px-2.5 py-1 rounded-md border text-[11px] ${getWellbeingColor(report.wellbeing)}`} style={{ fontWeight: 600 }}>
                    W: {report.wellbeing} — {getWellbeingLabel(report.wellbeing)}
                  </span>
                  <span className={`px-2.5 py-1 rounded-md border text-[11px] ${getProgressColor(report.progress)}`} style={{ fontWeight: 600 }}>
                    P: {report.progress} — {getProgressLabel(report.progress)}
                  </span>
                </div>
              </div>
              {report.comments && (
                <p className="text-[13px] text-gray-700 bg-gray-50 rounded-lg p-3">{report.comments}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
