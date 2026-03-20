/**
 * Personal Supervisor System — Vanilla JS SPA
 * Based on data.ts from the Figma Hi-Fi Prototype
 */

'use strict';

/* =========================================================
   1. SEED DATA (from prototype data.ts)
   ========================================================= */

const SEED_USERS = [
  { id: 'S001', name: 'George Spurrier', email: 'george.spurrier@uni.ac.uk', password: 'pass123', role: 'student', assignedPSId: 'PS001' },
  { id: 'S002', name: 'Tom Brown',       email: 'tom.brown@uni.ac.uk',       password: 'pass123', role: 'student', assignedPSId: 'PS001' },
  { id: 'S003', name: 'Emma Wilson',     email: 'emma.wilson@uni.ac.uk',     password: 'pass123', role: 'student', assignedPSId: 'PS001' },
  { id: 'S004', name: 'Priya Sharma',    email: 'priya.sharma@uni.ac.uk',    password: 'pass123', role: 'student', assignedPSId: 'PS002' },
  { id: 'S005', name: "Liam O'Brien",    email: 'liam.obrien@uni.ac.uk',     password: 'pass123', role: 'student', assignedPSId: 'PS002' },
  { id: 'PS001', name: 'Dr. Xinhui Ma',   email: 'xinhui.ma@uni.ac.uk',      password: 'pass123', role: 'ps' },
  { id: 'PS002', name: 'Dr. Emily Smith', email: 'emily.smith@uni.ac.uk',    password: 'pass123', role: 'ps' },
  { id: 'ST001', name: 'Dr. John Whelan', email: 'john.whelan@uni.ac.uk',    password: 'pass123', role: 'st' },
];

const SEED_REPORTS = [
  { id: 'R001', studentId: 'S001', dateTime: '2024-03-18T14:30', wellbeing: 2, progress: 3, comments: 'Struggling to keep up with coursework this week. Feeling anxious about the upcoming deadline.' },
  { id: 'R002', studentId: 'S001', dateTime: '2024-03-11T10:15', wellbeing: 3, progress: 3, comments: 'Managing workload but finding it challenging.' },
  { id: 'R003', studentId: 'S001', dateTime: '2024-03-04T09:00', wellbeing: 3, progress: 4, comments: 'Good week overall.' },
  { id: 'R004', studentId: 'S001', dateTime: '2024-02-26T11:45', wellbeing: 4, progress: 4, comments: '' },
  { id: 'R005', studentId: 'S001', dateTime: '2024-02-19T16:00', wellbeing: 2, progress: 2, comments: 'Really behind on assignment. Need help.' },
  { id: 'R006', studentId: 'S002', dateTime: '2024-03-17T13:00', wellbeing: 4, progress: 5, comments: 'Great week. Finished project early.' },
  { id: 'R007', studentId: 'S002', dateTime: '2024-03-10T10:00', wellbeing: 4, progress: 4, comments: '' },
  { id: 'R008', studentId: 'S002', dateTime: '2024-03-03T11:30', wellbeing: 5, progress: 4, comments: 'Enjoying the module.' },
  { id: 'R009', studentId: 'S002', dateTime: '2024-02-25T14:00', wellbeing: 4, progress: 5, comments: '' },
  { id: 'R010', studentId: 'S002', dateTime: '2024-02-18T09:30', wellbeing: 3, progress: 4, comments: 'Bit stressed about exams.' },
  { id: 'R011', studentId: 'S002', dateTime: '2024-02-11T10:00', wellbeing: 4, progress: 4, comments: '' },
  { id: 'R012', studentId: 'S002', dateTime: '2024-02-04T15:00', wellbeing: 5, progress: 5, comments: 'Best week yet.' },
  { id: 'R013', studentId: 'S002', dateTime: '2024-01-28T11:00', wellbeing: 4, progress: 4, comments: '' },
  { id: 'R014', studentId: 'S004', dateTime: '2024-03-16T10:00', wellbeing: 3, progress: 3, comments: 'Average week.' },
  { id: 'R015', studentId: 'S004', dateTime: '2024-03-09T14:30', wellbeing: 4, progress: 4, comments: '' },
  { id: 'R016', studentId: 'S005', dateTime: '2024-03-15T16:00', wellbeing: 1, progress: 2, comments: 'Really struggling with everything. Need to talk to someone.' },
  { id: 'R017', studentId: 'S005', dateTime: '2024-03-08T10:00', wellbeing: 2, progress: 2, comments: 'Things are getting worse.' },
];

const SEED_MEETINGS = [
  { id: 'M001', studentId: 'S001', supervisorId: 'PS001', dateTime: '2024-03-22T14:00', agenda: 'Wellbeing check-in and coursework support', status: 'Scheduled', bookedBy: 'PS001' },
  { id: 'M002', studentId: 'S001', supervisorId: 'PS001', dateTime: '2024-03-15T10:00', agenda: 'Wellbeing check-in', status: 'Completed', bookedBy: 'PS001' },
  { id: 'M003', studentId: 'S001', supervisorId: 'PS001', dateTime: '2024-02-20T11:00', agenda: 'Discuss assignment concerns', status: 'Completed', bookedBy: 'S001' },
  { id: 'M004', studentId: 'S002', supervisorId: 'PS001', dateTime: '2024-03-20T15:00', agenda: 'Mid-term progress review', status: 'Scheduled', bookedBy: 'S002' },
  { id: 'M005', studentId: 'S002', supervisorId: 'PS001', dateTime: '2024-02-28T10:00', agenda: 'General check-in', status: 'Completed', bookedBy: 'PS001' },
  { id: 'M006', studentId: 'S003', supervisorId: 'PS001', dateTime: '2024-03-25T11:00', agenda: 'Initial welcome meeting', status: 'Scheduled', bookedBy: 'PS001' },
  { id: 'M007', studentId: 'S004', supervisorId: 'PS002', dateTime: '2024-03-18T10:00', agenda: 'Progress review', status: 'Completed', bookedBy: 'PS002' },
  { id: 'M008', studentId: 'S004', supervisorId: 'PS002', dateTime: '2024-03-25T14:00', agenda: 'Follow-up', status: 'Scheduled', bookedBy: 'S004' },
  { id: 'M009', studentId: 'S005', supervisorId: 'PS002', dateTime: '2024-03-20T09:00', agenda: 'Urgent wellbeing check-in', status: 'Scheduled', bookedBy: 'PS002' },
  { id: 'M010', studentId: 'S005', supervisorId: 'PS002', dateTime: '2024-03-12T11:00', agenda: 'Discuss support options', status: 'Completed', bookedBy: 'PS002' },
];

/* =========================================================
   2. LOCAL STORAGE PERSISTENCE
   ========================================================= */

const LS_KEYS = { reports: 'pss_reports', meetings: 'pss_meetings', session: 'pss_session' };

function loadData() {
  const reports  = JSON.parse(localStorage.getItem(LS_KEYS.reports)  || 'null') || [...SEED_REPORTS];
  const meetings = JSON.parse(localStorage.getItem(LS_KEYS.meetings) || 'null') || [...SEED_MEETINGS];
  return { reports, meetings };
}

function saveReports(reports)  { localStorage.setItem(LS_KEYS.reports,  JSON.stringify(reports)); }
function saveMeetings(meetings){ localStorage.setItem(LS_KEYS.meetings, JSON.stringify(meetings)); }
function saveSession(userId)   { localStorage.setItem(LS_KEYS.session, userId); }
function clearSession()        { localStorage.removeItem(LS_KEYS.session); }
function getSavedSession()     { return localStorage.getItem(LS_KEYS.session); }

/* =========================================================
   3. APP STATE
   ========================================================= */

const state = {
  currentUser: null,
  users: SEED_USERS,
  reports: [],
  meetings: [],
  currentPage: null,
  selectedStudentId: null,   // for PS student details
};

function initState() {
  const { reports, meetings } = loadData();
  state.reports = reports;
  state.meetings = meetings;
}

/* =========================================================
   4. HELPER FUNCTIONS (mirrors data.ts)
   ========================================================= */

const WELLBEING_LABELS  = { 1: 'Very Poor', 2: 'Poor', 3: 'Average', 4: 'Good', 5: 'Excellent' };
const PROGRESS_LABELS   = { 1: 'Very Behind', 2: 'Behind', 3: 'On Track', 4: 'Ahead', 5: 'Far Ahead' };

function getWellbeingLabel(r) { return WELLBEING_LABELS[r] || 'Unknown'; }
function getProgressLabel(r)  { return PROGRESS_LABELS[r]  || 'Unknown'; }

function getWellbeingClass(r) {
  if (r <= 2) return 'wb-low';
  if (r <= 3) return 'wb-mid';
  return 'wb-high';
}

function getStatusClass(status) {
  if (status === 'Scheduled') return 'status-scheduled';
  if (status === 'Completed') return 'status-completed';
  return 'status-cancelled';
}

function avg(nums) {
  if (!nums.length) return 0;
  return Math.round((nums.reduce((a, b) => a + b, 0) / nums.length) * 10) / 10;
}

function formatDateTime(dt) {
  const d = new Date(dt);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    + ' at ' + d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
}

function formatDateShort(dt) {
  const d = new Date(dt);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

function getStudentReports(studentId) {
  return state.reports
    .filter(r => r.studentId === studentId)
    .sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));
}

function getStudentMeetings(studentId) {
  return state.meetings.filter(m => m.studentId === studentId);
}

function getSupervisorMeetings(supervisorId) {
  return state.meetings.filter(m => m.supervisorId === supervisorId);
}

function isAtRisk(studentId) {
  const reports = getStudentReports(studentId);
  return reports.length > 0 && reports[0].wellbeing <= 2;
}

function findUser(id) { return state.users.find(u => u.id === id); }

function getMyStudents(supervisorId) {
  return state.users.filter(u => u.role === 'student' && u.assignedPSId === supervisorId);
}

/* =========================================================
   5. TOAST NOTIFICATIONS
   ========================================================= */

function showToast(message, type = 'default') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast${type !== 'default' ? ' toast-' + type : ''}`;

  const icons = { success: '✅', error: '❌', info: 'ℹ️', default: '💬' };
  toast.innerHTML = `<span>${icons[type] || icons.default}</span><span>${escHtml(message)}</span>`;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'toast-out 0.25s ease forwards';
    toast.addEventListener('animationend', () => toast.remove());
  }, 3000);
}

/* =========================================================
   6. MODAL DIALOGS
   ========================================================= */

function showModal({ title, body, actions }) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').innerHTML = body;

  const actionsEl = document.getElementById('modal-actions');
  actionsEl.innerHTML = '';
  actions.forEach(({ label, className, onClick }) => {
    const btn = document.createElement('button');
    btn.className = `btn ${className}`;
    btn.textContent = label;
    btn.addEventListener('click', () => {
      hideModal();
      onClick();
    });
    actionsEl.appendChild(btn);
  });

  document.getElementById('modal-overlay').classList.remove('hidden');
}

function hideModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
}

/* =========================================================
   7. ROUTING / NAVIGATION
   ========================================================= */

const PAGE_NAV = {
  // Student nav items
  'student-dashboard':     { label: 'Dashboard',       icon: '🏠', section: 'Student' },
  'student-submit-report': { label: 'Submit Report',   icon: '📝', section: 'Student' },
  'student-view-reports':  { label: 'My Reports',      icon: '📋', section: 'Student' },
  'student-book-meeting':  { label: 'Book Meeting',    icon: '📅', section: 'Student' },
  'student-view-meetings': { label: 'My Meetings',     icon: '📖', section: 'Student' },
  // PS nav items
  'ps-dashboard':          { label: 'Dashboard',       icon: '🏠', section: 'Supervisor' },
  'ps-my-students':        { label: 'My Students',     icon: '👥', section: 'Supervisor' },
  'ps-student-details':    { label: 'Student Details', icon: '👤', section: 'Supervisor' },
  'ps-book-meeting':       { label: 'Book Meeting',    icon: '📅', section: 'Supervisor' },
  'ps-manage-meetings':    { label: 'Manage Meetings', icon: '📋', section: 'Supervisor' },
  // ST nav items
  'st-dashboard':          { label: 'Dashboard',       icon: '🏠', section: 'Senior Tutor' },
  'st-all-students':       { label: 'All Students',    icon: '👥', section: 'Senior Tutor' },
  'st-ps-summary':         { label: 'PS Summary',      icon: '📊', section: 'Senior Tutor' },
};

const ROLE_PAGES = {
  student: ['student-dashboard','student-submit-report','student-view-reports','student-book-meeting','student-view-meetings'],
  ps:      ['ps-dashboard','ps-my-students','ps-student-details','ps-book-meeting','ps-manage-meetings'],
  st:      ['st-dashboard','st-all-students','st-ps-summary'],
};

function navigateTo(pageId) {
  // Hide all page-inner divs
  document.querySelectorAll('.page-inner').forEach(el => el.classList.add('hidden'));

  // Show the target page
  const target = document.getElementById('page-' + pageId);
  if (target) target.classList.remove('hidden');

  state.currentPage = pageId;

  // Update sidebar nav active state
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.page === pageId);
  });

  // Render page content
  renderPage(pageId);
}

function escHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* =========================================================
   8. PAGE RENDERERS
   ========================================================= */

function renderPage(pageId) {
  switch (pageId) {
    case 'student-dashboard':    renderStudentDashboard(); break;
    case 'student-view-reports': renderStudentViewReports(); break;
    case 'student-book-meeting': renderStudentBookMeeting(); break;
    case 'student-view-meetings':renderStudentViewMeetings(); break;
    case 'student-submit-report':renderStudentSubmitReport(); break;
    case 'ps-dashboard':         renderPSDashboard(); break;
    case 'ps-my-students':       renderPSMyStudents(); break;
    case 'ps-student-details':   renderPSStudentDetails(); break;
    case 'ps-book-meeting':      renderPSBookMeeting(); break;
    case 'ps-manage-meetings':   renderPSManageMeetings(); break;
    case 'st-dashboard':         renderSTDashboard(); break;
    case 'st-all-students':      renderSTAllStudents(); break;
    case 'st-ps-summary':        renderSTPSSummary(); break;
  }
}

/* ---- Student Dashboard ---- */
function renderStudentDashboard() {
  const u = state.currentUser;
  document.getElementById('student-welcome-name').textContent = `Welcome back, ${u.name.split(' ')[0]}`;

  const myReports   = getStudentReports(u.id);
  const myMeetings  = state.meetings.filter(m => m.studentId === u.id);
  const upcoming    = myMeetings.filter(m => m.status === 'Scheduled');
  const avgWellbeing = avg(myReports.map(r => r.wellbeing));
  const avgProgress  = avg(myReports.map(r => r.progress));

  document.getElementById('student-stats').innerHTML = [
    { label: 'Total Reports',     value: myReports.length },
    { label: 'Avg Wellbeing',     value: myReports.length ? avgWellbeing : 'N/A' },
    { label: 'Avg Progress',      value: myReports.length ? avgProgress  : 'N/A' },
    { label: 'Upcoming Meetings', value: upcoming.length },
  ].map(s => `<div class="stat-card"><div class="stat-label">${s.label}</div><div class="stat-value">${s.value}</div></div>`).join('');

  const ps = findUser(u.assignedPSId);
  const psCard = document.getElementById('student-ps-card');
  if (ps) {
    psCard.classList.remove('hidden');
    psCard.innerHTML = `
      <div class="ps-avatar">👨‍🏫</div>
      <div>
        <div class="ps-info-meta">Your Personal Supervisor</div>
        <div class="ps-info-name">${escHtml(ps.name)}</div>
        <div class="ps-info-email">${escHtml(ps.email)}</div>
      </div>`;
  } else {
    psCard.classList.add('hidden');
  }
}

/* ---- Student Submit Report ---- */
function renderStudentSubmitReport() {
  buildRatingButtons('wellbeing-rating', 'wellbeing', WELLBEING_LABELS);
  buildRatingButtons('progress-rating', 'progress', PROGRESS_LABELS);

  const form = document.getElementById('report-form');
  // Reset form state
  form.querySelectorAll('.rating-btn').forEach(b => b.classList.remove('selected'));
  form.querySelector('.rating-check') && form.querySelectorAll('.rating-check').forEach(c => c.remove());
  document.getElementById('report-comments').value = '';
  document.getElementById('report-submit-btn').disabled = true;

  // Remove any old success card
  const existing = document.getElementById('report-success');
  if (existing) existing.remove();
  form.classList.remove('hidden');
}

function buildRatingButtons(containerId, field, labels) {
  const container = document.getElementById(containerId);
  if (container.children.length > 0) return; // already built
  [1,2,3,4,5].forEach(n => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'rating-btn';
    btn.dataset.value = n;
    btn.dataset.field = field;
    btn.innerHTML = `
      <div class="dot dot-${n}">${n}</div>
      <span class="label">${labels[n]}</span>`;
    btn.addEventListener('click', () => selectRating(field, n));
    container.appendChild(btn);
  });
}

const ratingState = { wellbeing: null, progress: null };

function selectRating(field, value) {
  ratingState[field] = value;

  const containerId = field === 'wellbeing' ? 'wellbeing-rating' : 'progress-rating';
  document.querySelectorAll(`#${containerId} .rating-btn`).forEach(btn => {
    const selected = parseInt(btn.dataset.value) === value;
    btn.classList.toggle('selected', selected);
    const existing = btn.querySelector('.rating-check');
    if (selected && !existing) {
      const check = document.createElement('span');
      check.className = 'rating-check';
      check.textContent = '✓';
      btn.appendChild(check);
    } else if (!selected && existing) {
      existing.remove();
    }
  });

  document.getElementById('report-submit-btn').disabled =
    ratingState.wellbeing === null || ratingState.progress === null;
}

/* ---- Student View Reports ---- */
function renderStudentViewReports() {
  const u = state.currentUser;
  const reports = getStudentReports(u.id);
  const avgWb = avg(reports.map(r => r.wellbeing));
  const avgPg = avg(reports.map(r => r.progress));

  document.getElementById('student-reports-count').textContent = `${reports.length} total report${reports.length !== 1 ? 's' : ''} submitted`;

  document.getElementById('student-report-stats').innerHTML = [
    { label: 'Total Reports',   value: reports.length },
    { label: 'Avg Wellbeing',   value: reports.length ? avgWb : 'N/A' },
    { label: 'Avg Progress',    value: reports.length ? avgPg : 'N/A' },
  ].map(s => `<div class="stat-card"><div class="stat-label">${s.label}</div><div class="stat-value">${s.value}</div></div>`).join('');

  const list = document.getElementById('student-reports-list');
  if (!reports.length) {
    list.innerHTML = `<div class="empty-state"><div class="empty-state-icon">📋</div><div class="empty-state-text">No reports submitted yet. Submit your first self-report!</div></div>`;
    return;
  }
  list.innerHTML = reports.map(r => reportCardHtml(r)).join('');
}

function reportCardHtml(r) {
  return `<div class="report-card">
    <div class="report-header">
      <div class="report-date">${escHtml(formatDateTime(r.dateTime))}</div>
      <div class="report-badges">
        <span class="badge ${getWellbeingClass(r.wellbeing)}">W: ${r.wellbeing} — ${getWellbeingLabel(r.wellbeing)}</span>
        <span class="badge ${getWellbeingClass(r.progress)}">P: ${r.progress} — ${getProgressLabel(r.progress)}</span>
      </div>
    </div>
    ${r.comments ? `<div class="report-comments">${escHtml(r.comments)}</div>` : ''}
  </div>`;
}

/* ---- Student Book Meeting ---- */
function renderStudentBookMeeting() {
  const u   = state.currentUser;
  const ps  = findUser(u.assignedPSId);
  document.getElementById('student-booking-ps').textContent = ps ? ps.name : 'Not assigned';

  const today = new Date().toISOString().split('T')[0];
  const dateInput = document.getElementById('student-meeting-date');
  const timeInput = document.getElementById('student-meeting-time');
  const agendaInput = document.getElementById('student-meeting-agenda');

  dateInput.min = today;
  dateInput.value = '';
  timeInput.value = '';
  agendaInput.value = '';

  // Clear error messages
  ['student-meeting-date-error','student-meeting-time-error','student-meeting-agenda-error'].forEach(id => {
    document.getElementById(id).textContent = '';
  });

  // Remove success card if any
  const success = document.getElementById('student-meeting-success');
  if (success) success.remove();
  document.getElementById('student-meeting-form').classList.remove('hidden');
}

/* ---- Student View Meetings ---- */
function renderStudentViewMeetings() {
  const u = state.currentUser;
  const meetings = state.meetings
    .filter(m => m.studentId === u.id)
    .sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));

  const scheduled = meetings.filter(m => m.status === 'Scheduled');
  const past      = meetings.filter(m => m.status !== 'Scheduled');

  document.getElementById('student-meetings-count').textContent = `${meetings.length} total meeting${meetings.length !== 1 ? 's' : ''}`;

  const ps = findUser(u.assignedPSId);

  document.getElementById('student-meetings-scheduled').innerHTML = scheduled.length
    ? `<div class="sub-heading">Upcoming (${scheduled.length})</div>` + scheduled.map(m => studentMeetingCardHtml(m, ps)).join('')
    : '';

  document.getElementById('student-meetings-past').innerHTML = past.length
    ? `<div class="sub-heading">Past (${past.length})</div>` + past.map(m => studentMeetingCardHtml(m, ps)).join('')
    : '';

  if (!meetings.length) {
    document.getElementById('student-meetings-scheduled').innerHTML =
      `<div class="empty-state"><div class="empty-state-icon">📅</div><div class="empty-state-text">No meetings yet. Book a meeting with your supervisor!</div></div>`;
  }
}

function studentMeetingCardHtml(m, ps) {
  return `<div class="meeting-card">
    <div class="meeting-card-header">
      <div>
        <div class="meeting-student">${ps ? escHtml(ps.name) : 'Supervisor'}</div>
        <div class="meeting-datetime">${escHtml(formatDateTime(m.dateTime))}</div>
      </div>
      <span class="badge ${getStatusClass(m.status)}">${m.status}</span>
    </div>
    <div class="meeting-agenda">${escHtml(m.agenda)}</div>
    <div class="meeting-booked-by">Booked by: ${m.bookedBy === state.currentUser.id ? 'You' : 'Supervisor'}</div>
  </div>`;
}

/* ---- PS Dashboard ---- */
function renderPSDashboard() {
  const u = state.currentUser;
  document.getElementById('ps-welcome-name').textContent = `Welcome back, ${u.name.replace('Dr. ', '')}`;

  const myStudents = getMyStudents(u.id);
  const myMeetings = getSupervisorMeetings(u.id);
  const upcoming   = myMeetings.filter(m => m.status === 'Scheduled');
  const atRiskCount = myStudents.filter(s => isAtRisk(s.id)).length;

  document.getElementById('ps-stats').innerHTML = [
    { label: 'Students',          value: myStudents.length },
    { label: 'At Risk',           value: atRiskCount, red: atRiskCount > 0 },
    { label: 'Upcoming Meetings', value: upcoming.length },
    { label: 'Total Meetings',    value: myMeetings.length },
  ].map(s => `<div class="stat-card"><div class="stat-label">${s.label}</div>
    <div class="stat-value ${s.red ? 'red' : ''}">${s.value}</div></div>`).join('');

  const badge = document.getElementById('ps-at-risk-badge');
  if (atRiskCount > 0) {
    badge.className = 'at-risk-badge';
    badge.innerHTML = `⚠ ${atRiskCount} at risk`;
  } else {
    badge.className = 'hidden';
  }
}

/* ---- PS My Students ---- */
function renderPSMyStudents() {
  const u = state.currentUser;
  const myStudents = getMyStudents(u.id);
  const atRiskStudents = [];

  document.getElementById('ps-students-count').textContent = `${myStudents.length} student${myStudents.length !== 1 ? 's' : ''} assigned to you`;

  const tbody = document.getElementById('ps-students-tbody');
  tbody.innerHTML = myStudents.map(s => {
    const reports  = getStudentReports(s.id);
    const meetings = getStudentMeetings(s.id);
    const avgWb  = avg(reports.map(r => r.wellbeing));
    const avgPg  = avg(reports.map(r => r.progress));
    const atRisk = reports.length > 0 && reports[0].wellbeing <= 2;

    if (atRisk) atRiskStudents.push({ s, reports, latestW: reports[0].wellbeing, latestDate: reports[0].dateTime });

    const statusBadge = atRisk
      ? `<span class="badge badge-red">⚠ LOW WELLBEING</span>`
      : reports.length === 0
        ? `<span class="badge badge-amber">NO REPORTS</span>`
        : `<span class="badge badge-green">OK</span>`;

    return `<tr>
      <td><div class="cell-name">${escHtml(s.name)}</div><div class="cell-email">${escHtml(s.email)}</div></td>
      <td class="text-center">${reports.length}</td>
      <td class="text-center">${reports.length ? `<span class="badge ${getWellbeingClass(avgWb)}">${avgWb}</span>` : '<span class="text-muted">N/A</span>'}</td>
      <td class="text-center">${reports.length ? `<strong>${avgPg}</strong>` : '<span class="text-muted">N/A</span>'}</td>
      <td class="text-center">${meetings.length}</td>
      <td class="text-center">${statusBadge}</td>
    </tr>`;
  }).join('');

  const section = document.getElementById('ps-at-risk-section');
  if (atRiskStudents.length) {
    section.innerHTML = `<div class="at-risk-section">
      <div class="at-risk-title">⚠ LOW WELLBEING ALERTS</div>
      ${atRiskStudents.map(({ s, latestW, latestDate }) => `
        <div class="at-risk-student-card">
          <div>
            <div class="at-risk-student-name">${escHtml(s.name)}</div>
            <div class="at-risk-wellbeing">Latest wellbeing: <strong>${latestW} (${getWellbeingLabel(latestW)})</strong></div>
            <div class="at-risk-date">Reported: ${formatDateShort(latestDate)}</div>
          </div>
          <button class="btn btn-danger btn-sm" data-book-student="${s.id}">📅 Book Meeting</button>
        </div>`).join('')}
    </div>`;

    section.querySelectorAll('[data-book-student]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.selectedStudentId = btn.dataset.bookStudent;
        navigateTo('ps-book-meeting');
      });
    });
  } else {
    section.innerHTML = '';
  }
}

/* ---- PS Student Details ---- */
function renderPSStudentDetails() {
  const u = state.currentUser;
  const myStudents = getMyStudents(u.id);

  const select = document.getElementById('ps-student-select');
  // Repopulate if needed
  select.innerHTML = '<option value="">Choose a student...</option>';
  myStudents.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.id;
    opt.textContent = `${s.name} — ${s.email}`;
    select.appendChild(opt);
  });

  // If a student is pre-selected (from at-risk booking flow), show their details
  if (state.selectedStudentId) {
    select.value = state.selectedStudentId;
    renderStudentDetail(state.selectedStudentId);
  } else {
    document.getElementById('ps-student-detail-content').innerHTML = '';
  }
}

function renderStudentDetail(studentId) {
  if (!studentId) {
    document.getElementById('ps-student-detail-content').innerHTML = '';
    return;
  }

  const student = findUser(studentId);
  if (!student) return;

  const reports  = getStudentReports(studentId);
  const meetings = getStudentMeetings(studentId);
  const avgWb = avg(reports.map(r => r.wellbeing));
  const avgPg = avg(reports.map(r => r.progress));
  const latestW = reports.length ? reports[0].wellbeing : null;
  const atRisk  = latestW !== null && latestW <= 2;

  let html = '';

  if (atRisk) {
    html += `<div class="alert alert-red">
      <div class="alert-icon">⚠</div>
      <div>
        <div class="alert-title">Low wellbeing alert — latest rating: ${latestW} (${getWellbeingLabel(latestW)})</div>
      </div>
      <button class="btn btn-danger btn-sm" style="margin-left:auto;flex-shrink:0" id="detail-book-btn">📅 Book Meeting</button>
    </div>`;
  }

  html += `<div class="card">
    <div class="student-detail-header">
      <div>
        <div class="student-detail-name">${escHtml(student.name)}</div>
        <div class="student-detail-email">${escHtml(student.email)}</div>
      </div>
      <button class="btn btn-primary btn-sm" id="detail-book-btn2">📅 Book Meeting</button>
    </div>
    <div class="student-detail-stats">
      <div class="student-stat"><div class="student-stat-label">Reports</div><div class="student-stat-value">${reports.length}</div></div>
      <div class="student-stat"><div class="student-stat-label">Avg Wellbeing</div><div class="student-stat-value">${reports.length ? avgWb : 'N/A'}</div></div>
      <div class="student-stat"><div class="student-stat-label">Avg Progress</div><div class="student-stat-value">${reports.length ? avgPg : 'N/A'}</div></div>
      <div class="student-stat"><div class="student-stat-label">Meetings</div><div class="student-stat-value">${meetings.length}</div></div>
    </div>
  </div>`;

  html += `<div class="sub-heading">RECENT REPORTS (${reports.length})</div>`;
  if (!reports.length) {
    html += `<div class="empty-state"><div class="empty-state-icon">📋</div><div class="empty-state-text">No reports submitted by this student.</div></div>`;
  } else {
    html += reports.map(r => reportCardHtml(r)).join('');
  }

  html += `<div class="sub-heading" style="margin-top:24px">MEETING HISTORY (${meetings.length})</div>`;
  if (!meetings.length) {
    html += `<div class="empty-state"><div class="empty-state-icon">📅</div><div class="empty-state-text">No meetings scheduled yet.</div></div>`;
  } else {
    const supervisor = findUser(state.currentUser.id);
    html += meetings
      .sort((a,b) => new Date(b.dateTime) - new Date(a.dateTime))
      .map(m => `<div class="meeting-card">
        <div class="meeting-card-header">
          <div>
            <div class="meeting-student">${escHtml(student.name)}</div>
            <div class="meeting-datetime">${escHtml(formatDateTime(m.dateTime))}</div>
          </div>
          <span class="badge ${getStatusClass(m.status)}">${m.status}</span>
        </div>
        <div class="meeting-agenda">${escHtml(m.agenda)}</div>
        <div class="meeting-booked-by">Booked by: ${m.bookedBy === state.currentUser.id ? 'You' : 'Student'}</div>
      </div>`).join('');
  }

  const content = document.getElementById('ps-student-detail-content');
  content.innerHTML = html;

  // Book meeting buttons
  content.querySelectorAll('#detail-book-btn, #detail-book-btn2').forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedStudentId = studentId;
      navigateTo('ps-book-meeting');
    });
  });
}

/* ---- PS Book Meeting ---- */
function renderPSBookMeeting() {
  const u = state.currentUser;
  const myStudents = getMyStudents(u.id);

  // Repopulate student dropdown
  const select = document.getElementById('ps-meeting-student');
  select.innerHTML = '<option value="">Choose a student...</option>';
  myStudents.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.id;
    opt.textContent = s.name;
    select.appendChild(opt);
  });

  // Pre-select if navigated from at-risk flow
  if (state.selectedStudentId) {
    select.value = state.selectedStudentId;
  }

  const today = new Date().toISOString().split('T')[0];
  document.getElementById('ps-meeting-date').min = today;
  document.getElementById('ps-meeting-date').value = '';
  document.getElementById('ps-meeting-time').value = '';
  document.getElementById('ps-meeting-agenda').value = '';

  ['ps-meeting-student-error','ps-meeting-date-error','ps-meeting-time-error','ps-meeting-agenda-error'].forEach(id => {
    document.getElementById(id).textContent = '';
  });

  const success = document.getElementById('ps-meeting-success');
  if (success) success.remove();
  document.getElementById('ps-meeting-form').classList.remove('hidden');
}

/* ---- PS Manage Meetings ---- */
function renderPSManageMeetings() {
  const u = state.currentUser;
  const myMeetings = getSupervisorMeetings(u.id)
    .sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));

  document.getElementById('ps-meetings-count').textContent = `${myMeetings.length} total meeting${myMeetings.length !== 1 ? 's' : ''}`;

  const scheduled = myMeetings.filter(m => m.status === 'Scheduled');
  const past      = myMeetings.filter(m => m.status !== 'Scheduled');

  document.getElementById('ps-meetings-scheduled').innerHTML = scheduled.length
    ? `<div class="sub-heading">SCHEDULED (${scheduled.length})</div>` + scheduled.map(m => psMeetingCardHtml(m, true)).join('')
    : '';

  document.getElementById('ps-meetings-past').innerHTML = past.length
    ? `<div class="sub-heading">PAST (${past.length})</div>` + past.map(m => psMeetingCardHtml(m, false)).join('')
    : '';

  if (!myMeetings.length) {
    document.getElementById('ps-meetings-scheduled').innerHTML =
      `<div class="empty-state"><div class="empty-state-icon">📅</div><div class="empty-state-text">No meetings yet.</div></div>`;
  }

  // Attach action button handlers
  document.querySelectorAll('[data-complete]').forEach(btn => {
    btn.addEventListener('click', () => handleMeetingComplete(btn.dataset.complete));
  });
  document.querySelectorAll('[data-cancel]').forEach(btn => {
    btn.addEventListener('click', () => handleMeetingCancel(btn.dataset.cancel));
  });
}

function psMeetingCardHtml(m, showActions) {
  const student = findUser(m.studentId);
  const bookedByPS = m.bookedBy === state.currentUser.id;
  const actions = showActions && m.status === 'Scheduled'
    ? `<div class="meeting-actions">
        <button class="btn btn-success btn-sm" data-complete="${m.id}">✓ Mark Completed</button>
        <button class="btn btn-outline btn-sm" data-cancel="${m.id}">✕ Cancel</button>
      </div>`
    : '';

  return `<div class="meeting-card">
    <div class="meeting-card-header">
      <div>
        <div class="meeting-student">${student ? escHtml(student.name) : 'Unknown'}</div>
        <div class="meeting-datetime">${escHtml(formatDateTime(m.dateTime))}</div>
      </div>
      <span class="badge ${getStatusClass(m.status)}">${m.status}</span>
    </div>
    <div class="meeting-agenda">${escHtml(m.agenda)}</div>
    <div class="meeting-booked-by">Booked by: ${bookedByPS ? 'You' : 'Student'}</div>
    ${actions}
  </div>`;
}

function handleMeetingComplete(meetingId) {
  showModal({
    title: 'Mark as Completed?',
    body: 'Are you sure you want to mark this meeting as completed?',
    actions: [
      { label: 'Cancel', className: 'btn-outline', onClick: () => {} },
      { label: 'Mark Completed', className: 'btn-success', onClick: () => {
        updateMeetingStatus(meetingId, 'Completed');
        showToast('Meeting marked as completed', 'success');
        renderPSManageMeetings();
      }},
    ]
  });
}

function handleMeetingCancel(meetingId) {
  showModal({
    title: 'Cancel Meeting?',
    body: 'Are you sure you want to cancel this meeting? This action cannot be undone.',
    actions: [
      { label: 'Keep Meeting', className: 'btn-outline', onClick: () => {} },
      { label: 'Cancel Meeting', className: 'btn-danger', onClick: () => {
        updateMeetingStatus(meetingId, 'Cancelled');
        showToast('Meeting cancelled', 'error');
        renderPSManageMeetings();
      }},
    ]
  });
}

function updateMeetingStatus(meetingId, status) {
  const idx = state.meetings.findIndex(m => m.id === meetingId);
  if (idx !== -1) {
    state.meetings[idx] = { ...state.meetings[idx], status };
    saveMeetings(state.meetings);
  }
}

/* ---- ST Dashboard ---- */
function renderSTDashboard() {
  const u = state.currentUser;
  document.getElementById('st-welcome-name').textContent = `Welcome back, ${u.name.replace('Dr. ', '')}`;

  const allStudents = state.users.filter(u => u.role === 'student');
  const allPS       = state.users.filter(u => u.role === 'ps');
  const atRiskCount = allStudents.filter(s => isAtRisk(s.id)).length;
  const noReports   = allStudents.filter(s => getStudentReports(s.id).length === 0).length;

  document.getElementById('st-stats').innerHTML = [
    { label: 'Total Students',      value: allStudents.length },
    { label: 'At Risk',             value: atRiskCount, red: atRiskCount > 0 },
    { label: 'No Reports',          value: noReports, amber: noReports > 0 },
    { label: 'Personal Supervisors',value: allPS.length },
  ].map(s => `<div class="stat-card"><div class="stat-label">${s.label}</div>
    <div class="stat-value ${s.red ? 'red' : s.amber ? 'amber' : ''}">${s.value}</div></div>`).join('');

  const badge = document.getElementById('st-at-risk-badge');
  if (atRiskCount > 0) {
    badge.className = 'at-risk-badge';
    badge.innerHTML = `⚠ ${atRiskCount} at risk`;
  } else {
    badge.className = 'hidden';
  }
}

/* ---- ST All Students ---- */
function renderSTAllStudents() {
  const allStudents = state.users.filter(u => u.role === 'student');

  const studentData = allStudents.map(s => {
    const ps       = findUser(s.assignedPSId);
    const reports  = getStudentReports(s.id);
    const meetings = getStudentMeetings(s.id);
    const avgWb = avg(reports.map(r => r.wellbeing));
    const avgPg = avg(reports.map(r => r.progress));
    const latestW = reports.length ? reports[0].wellbeing : null;
    const latestP = reports.length ? reports[0].progress  : null;

    let status, statusClass;
    if (!reports.length) {
      status = 'NO REPORTS'; statusClass = 'badge-amber';
    } else if (latestW !== null && latestW <= 2) {
      status = 'LOW WELLBEING'; statusClass = 'badge-red';
    } else if (latestP !== null && latestP <= 2) {
      status = 'LOW PROGRESS'; statusClass = 'badge-orange';
    } else {
      status = 'OK'; statusClass = 'badge-green';
    }

    return { s, ps, reports, meetings, avgWb, avgPg, status, statusClass };
  });

  const atRisk    = studentData.filter(d => d.status === 'LOW WELLBEING').length;
  const noReports = studentData.filter(d => d.status === 'NO REPORTS').length;

  document.getElementById('st-all-stats').innerHTML = [
    { label: 'Total Students', value: allStudents.length },
    { label: 'At Risk',        value: atRisk,    red: atRisk > 0 },
    { label: 'No Reports',     value: noReports, amber: noReports > 0 },
  ].map(s => `<div class="stat-card"><div class="stat-label">${s.label}</div>
    <div class="stat-value ${s.red ? 'red' : s.amber ? 'amber' : ''}">${s.value}</div></div>`).join('');

  document.getElementById('st-students-tbody').innerHTML = studentData.map(({ s, ps, reports, meetings, avgWb, avgPg, status, statusClass }) => {
    const hasWarning = status === 'LOW WELLBEING' || status === 'LOW PROGRESS';
    return `<tr>
      <td><div class="cell-name">${escHtml(s.name)}</div></td>
      <td><div style="font-size:12px;color:var(--gray-500)">${ps ? escHtml(ps.name) : 'Unassigned'}</div></td>
      <td class="text-center">${reports.length ? `<span class="badge ${getWellbeingClass(avgWb)}">${avgWb}</span>` : '<span class="text-muted">—</span>'}</td>
      <td class="text-center">${reports.length ? `<strong>${avgPg}</strong>` : '<span class="text-muted">—</span>'}</td>
      <td class="text-center">${meetings.length}</td>
      <td class="text-center"><span class="badge ${statusClass}">${hasWarning ? '⚠ ' : ''}${status}</span></td>
    </tr>`;
  }).join('');
}

/* ---- ST PS Summary ---- */
function renderSTPSSummary() {
  const allPS = state.users.filter(u => u.role === 'ps');

  const html = allPS.map(ps => {
    const psStudents = getMyStudents(ps.id);
    const psMeetings = getSupervisorMeetings(ps.id);
    const completed  = psMeetings.filter(m => m.status === 'Completed').length;
    const scheduled  = psMeetings.filter(m => m.status === 'Scheduled').length;

    const atRiskData = psStudents.map(s => {
      const reports = getStudentReports(s.id);
      if (!reports.length) return null;
      const latest = reports[0];
      if (latest.wellbeing > 2) return null;

      const reportDate = new Date(latest.dateTime);
      const meetingAfter = psMeetings.find(m =>
        m.studentId === s.id && new Date(m.dateTime) > reportDate
      );
      const responseTime = meetingAfter
        ? Math.round((new Date(meetingAfter.dateTime) - reportDate) / (1000*60*60*24))
        : null;

      return { student: s, latestW: latest.wellbeing, reportDate: latest.dateTime, meetingBooked: !!meetingAfter, meetingDate: meetingAfter?.dateTime, responseTime };
    }).filter(Boolean);

    const statsHtml = [
      { label: 'Students',       value: psStudents.length },
      { label: 'Total Meetings', value: psMeetings.length },
      { label: 'Completed',      value: completed },
      { label: 'At Risk',        value: atRiskData.length, red: atRiskData.length > 0 },
    ].map(s => `<div class="ps-summary-stat">
      <div class="ps-summary-stat-label">${s.label}</div>
      <div class="ps-summary-stat-value ${s.red ? 'red' : ''}">${s.value}</div>
    </div>`).join('');

    const riskRowsHtml = atRiskData.length === 0
      ? '<div class="text-muted" style="font-style:italic">No students flagged</div>'
      : atRiskData.map(item => `
        <div class="risk-student-row">
          <div>
            <div class="risk-student-name">${escHtml(item.student.name)}</div>
            <div class="risk-student-wb">Latest wellbeing: <strong>${item.latestW} (${getWellbeingLabel(item.latestW)})</strong></div>
            <div class="risk-student-date">Last report: ${formatDateShort(item.reportDate)}</div>
          </div>
          <div>
            ${item.meetingBooked
              ? `<div class="risk-response-ok">✓ Meeting booked</div>
                 <div class="risk-response-detail">${formatDateShort(item.meetingDate)}</div>
                 ${item.responseTime !== null ? `<div class="risk-response-detail">Response: ${item.responseTime} days</div>` : ''}`
              : `<div class="risk-response-bad">✕ No meeting booked</div>`
            }
          </div>
        </div>`).join('');

    return `<div class="ps-summary-card">
      <div class="ps-summary-header">
        <div class="ps-summary-name">${escHtml(ps.name)}</div>
        <div class="ps-summary-email">${escHtml(ps.email)}</div>
        <div class="ps-summary-stats">${statsHtml}</div>
      </div>
      <div class="ps-summary-risk-section">
        <div class="ps-summary-risk-title">⚠ AT-RISK STUDENT RESPONSES</div>
        ${riskRowsHtml}
      </div>
    </div>`;
  }).join('');

  document.getElementById('st-ps-summary-list').innerHTML = html;
}

/* =========================================================
   9. FORMS & SUBMISSIONS
   ========================================================= */

/* ---- Report Form ---- */
function initReportForm() {
  const form = document.getElementById('report-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (ratingState.wellbeing === null) {
      document.getElementById('wellbeing-error').textContent = 'Please select a wellbeing rating';
      return;
    }
    if (ratingState.progress === null) {
      document.getElementById('progress-error').textContent = 'Please select a progress rating';
      return;
    }
    document.getElementById('wellbeing-error').textContent = '';
    document.getElementById('progress-error').textContent = '';

    const comments = document.getElementById('report-comments').value.trim();
    const report = {
      id: 'R' + Date.now(),
      studentId: state.currentUser.id,
      dateTime: new Date().toISOString(),
      wellbeing: ratingState.wellbeing,
      progress:  ratingState.progress,
      comments,
    };

    state.reports.push(report);
    saveReports(state.reports);
    showToast('Self-report submitted successfully!', 'success');

    // Show success card
    form.classList.add('hidden');
    const successHtml = `<div id="report-success" class="success-card">
      <div class="success-icon">✅</div>
      <div class="success-title">Report Submitted</div>
      <div class="success-desc">Your self-report has been recorded. Your Personal Supervisor will be able to see this.</div>
      <div class="success-summary">
        <div><span class="summary-key">Wellbeing: </span><span class="summary-val">${report.wellbeing} — ${getWellbeingLabel(report.wellbeing)}</span></div>
        <div><span class="summary-key">Progress: </span><span class="summary-val">${report.progress} — ${getProgressLabel(report.progress)}</span></div>
        ${comments ? `<div style="margin-top:8px;color:var(--gray-600)">${escHtml(comments)}</div>` : ''}
      </div>
      <div class="success-actions">
        <button class="btn btn-outline" id="submit-another-btn">Submit Another</button>
        <button class="btn btn-primary" id="back-to-dashboard-btn">Back to Dashboard</button>
      </div>
    </div>`;

    form.insertAdjacentHTML('afterend', successHtml);
    // Reset rating state
    ratingState.wellbeing = null;
    ratingState.progress  = null;

    document.getElementById('submit-another-btn').addEventListener('click', () => {
      document.getElementById('report-success').remove();
      form.classList.remove('hidden');
      form.querySelectorAll('.rating-btn').forEach(b => { b.classList.remove('selected'); const c = b.querySelector('.rating-check'); if(c) c.remove(); });
      document.getElementById('report-comments').value = '';
      document.getElementById('report-submit-btn').disabled = true;
      ratingState.wellbeing = null;
      ratingState.progress  = null;
    });

    document.getElementById('back-to-dashboard-btn').addEventListener('click', () => navigateTo('student-dashboard'));
  });
}

/* ---- Student Book Meeting Form ---- */
function initStudentMeetingForm() {
  const form = document.getElementById('student-meeting-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    const date   = document.getElementById('student-meeting-date').value;
    const time   = document.getElementById('student-meeting-time').value;
    const agenda = document.getElementById('student-meeting-agenda').value.trim();

    if (!date) { document.getElementById('student-meeting-date-error').textContent = 'Please select a date'; valid = false; }
    else { document.getElementById('student-meeting-date-error').textContent = ''; }

    if (!time) { document.getElementById('student-meeting-time-error').textContent = 'Please select a time'; valid = false; }
    else { document.getElementById('student-meeting-time-error').textContent = ''; }

    if (!agenda) { document.getElementById('student-meeting-agenda-error').textContent = 'Please enter an agenda'; valid = false; }
    else { document.getElementById('student-meeting-agenda-error').textContent = ''; }

    if (!valid) return;

    const u = state.currentUser;
    const meeting = {
      id: 'M' + Date.now(),
      studentId: u.id,
      supervisorId: u.assignedPSId,
      dateTime: `${date}T${time}`,
      agenda,
      status: 'Scheduled',
      bookedBy: u.id,
    };

    state.meetings.push(meeting);
    saveMeetings(state.meetings);
    showToast('Meeting booked successfully!', 'success');

    const ps = findUser(u.assignedPSId);
    form.classList.add('hidden');
    const successHtml = `<div id="student-meeting-success" class="success-card">
      <div class="success-icon">📅</div>
      <div class="success-title">Meeting Booked</div>
      <div class="success-desc">Your meeting with ${ps ? escHtml(ps.name) : 'your supervisor'} has been scheduled.</div>
      <div class="success-summary">
        <div><span class="summary-key">Supervisor: </span><span class="summary-val">${ps ? escHtml(ps.name) : 'N/A'}</span></div>
        <div><span class="summary-key">When: </span><span class="summary-val">${escHtml(formatDateTime(meeting.dateTime))}</span></div>
        <div><span class="summary-key">Agenda: </span><span class="summary-val">${escHtml(agenda)}</span></div>
      </div>
      <div class="success-actions">
        <button class="btn btn-outline" id="book-another-btn">Book Another</button>
        <button class="btn btn-primary" id="view-meetings-btn">View Meetings</button>
      </div>
    </div>`;
    form.insertAdjacentHTML('afterend', successHtml);

    document.getElementById('book-another-btn').addEventListener('click', () => {
      document.getElementById('student-meeting-success').remove();
      form.classList.remove('hidden');
      form.reset();
    });
    document.getElementById('view-meetings-btn').addEventListener('click', () => navigateTo('student-view-meetings'));
  });
}

/* ---- PS Book Meeting Form ---- */
function initPSMeetingForm() {
  const form = document.getElementById('ps-meeting-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    const studentId = document.getElementById('ps-meeting-student').value;
    const date      = document.getElementById('ps-meeting-date').value;
    const time      = document.getElementById('ps-meeting-time').value;
    const agenda    = document.getElementById('ps-meeting-agenda').value.trim();

    if (!studentId) { document.getElementById('ps-meeting-student-error').textContent = 'Please select a student'; valid = false; }
    else { document.getElementById('ps-meeting-student-error').textContent = ''; }
    if (!date) { document.getElementById('ps-meeting-date-error').textContent = 'Please select a date'; valid = false; }
    else { document.getElementById('ps-meeting-date-error').textContent = ''; }
    if (!time) { document.getElementById('ps-meeting-time-error').textContent = 'Please select a time'; valid = false; }
    else { document.getElementById('ps-meeting-time-error').textContent = ''; }
    if (!agenda) { document.getElementById('ps-meeting-agenda-error').textContent = 'Please enter an agenda'; valid = false; }
    else { document.getElementById('ps-meeting-agenda-error').textContent = ''; }

    if (!valid) return;

    const meeting = {
      id: 'M' + Date.now(),
      studentId,
      supervisorId: state.currentUser.id,
      dateTime: `${date}T${time}`,
      agenda,
      status: 'Scheduled',
      bookedBy: state.currentUser.id,
    };

    state.meetings.push(meeting);
    saveMeetings(state.meetings);
    state.selectedStudentId = null;
    showToast('Meeting booked successfully!', 'success');

    const student = findUser(studentId);
    form.classList.add('hidden');
    const successHtml = `<div id="ps-meeting-success" class="success-card">
      <div class="success-icon">📅</div>
      <div class="success-title">Meeting Booked</div>
      <div class="success-desc">Meeting with ${student ? escHtml(student.name) : 'student'} has been scheduled.</div>
      <div class="success-summary">
        <div><span class="summary-key">Student: </span><span class="summary-val">${student ? escHtml(student.name) : 'N/A'}</span></div>
        <div><span class="summary-key">When: </span><span class="summary-val">${escHtml(formatDateTime(meeting.dateTime))}</span></div>
        <div><span class="summary-key">Agenda: </span><span class="summary-val">${escHtml(agenda)}</span></div>
      </div>
      <div class="success-actions">
        <button class="btn btn-outline" id="ps-book-another-btn">Book Another</button>
        <button class="btn btn-primary" id="ps-view-meetings-btn">View Meetings</button>
      </div>
    </div>`;
    form.insertAdjacentHTML('afterend', successHtml);

    document.getElementById('ps-book-another-btn').addEventListener('click', () => {
      document.getElementById('ps-meeting-success').remove();
      form.classList.remove('hidden');
      form.reset();
      document.getElementById('ps-meeting-student').innerHTML = '<option value="">Choose a student...</option>';
      getMyStudents(state.currentUser.id).forEach(s => {
        const opt = document.createElement('option');
        opt.value = s.id; opt.textContent = s.name;
        document.getElementById('ps-meeting-student').appendChild(opt);
      });
    });
    document.getElementById('ps-view-meetings-btn').addEventListener('click', () => navigateTo('ps-manage-meetings'));
  });
}

/* =========================================================
   10. AUTHENTICATION
   ========================================================= */

function login(email, password) {
  const user = state.users.find(u =>
    u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );
  return user || null;
}

function setCurrentUser(user) {
  state.currentUser = user;
  saveSession(user.id);
  showAuthLayout(user);
}

function showAuthLayout(user) {
  document.getElementById('page-login').classList.remove('active');
  document.getElementById('page-login').classList.add('hidden');
  document.getElementById('layout-auth').classList.remove('hidden');

  buildSidebar(user);

  // Navigate to the user's dashboard
  const dashboardPage = user.role === 'student' ? 'student-dashboard'
    : user.role === 'ps' ? 'ps-dashboard' : 'st-dashboard';
  navigateTo(dashboardPage);
}

function buildSidebar(user) {
  // User info
  const roleLabels = { student: 'Student', ps: 'Personal Supervisor', st: 'Senior Tutor' };
  document.getElementById('sidebar-user').innerHTML = `
    <div class="user-name">${escHtml(user.name)}</div>
    <div class="user-role">${roleLabels[user.role]}</div>`;

  // Nav items for role
  const pages = ROLE_PAGES[user.role] || [];
  const navEl = document.getElementById('sidebar-nav');
  navEl.innerHTML = '';

  pages.forEach(pageId => {
    const info = PAGE_NAV[pageId];
    if (!info) return;
    const btn = document.createElement('button');
    btn.className = 'nav-btn';
    btn.dataset.page = pageId;
    btn.innerHTML = `<span class="nav-icon">${info.icon}</span><span>${info.label}</span>`;
    btn.addEventListener('click', () => navigateTo(pageId));
    navEl.appendChild(btn);
  });
}

function logout() {
  state.currentUser = null;
  state.selectedStudentId = null;
  clearSession();

  document.getElementById('layout-auth').classList.add('hidden');
  document.getElementById('page-login').classList.remove('hidden');
  document.getElementById('page-login').classList.add('active');
  document.getElementById('login-email').value = '';
  document.getElementById('login-password').value = '';
  document.getElementById('login-general-error').textContent = '';

  // Reset all page-inner divs
  document.querySelectorAll('.page-inner').forEach(el => el.classList.add('hidden'));
}

/* =========================================================
   11. LOGIN PAGE INTERACTIONS
   ========================================================= */

function initLoginPage() {
  const form     = document.getElementById('login-form');
  const emailEl  = document.getElementById('login-email');
  const passEl   = document.getElementById('login-password');
  const errEmail = document.getElementById('login-email-error');
  const errPass  = document.getElementById('login-password-error');
  const errGen   = document.getElementById('login-general-error');

  form.addEventListener('submit', e => {
    e.preventDefault();
    errEmail.textContent = '';
    errPass.textContent  = '';
    errGen.textContent   = '';

    const email    = emailEl.value.trim();
    const password = passEl.value;

    let valid = true;
    if (!email) { errEmail.textContent = 'Email is required'; valid = false; }
    if (!password) { errPass.textContent = 'Password is required'; valid = false; }
    if (!valid) return;

    const user = login(email, password);
    if (!user) {
      errGen.textContent = 'Invalid email or password. Please try again.';
      return;
    }

    setCurrentUser(user);
  });

  // Demo credential fill
  document.querySelectorAll('[data-demo]').forEach(item => {
    item.addEventListener('click', () => {
      const demos = {
        student: { email: 'george.spurrier@uni.ac.uk', pass: 'pass123' },
        ps:      { email: 'xinhui.ma@uni.ac.uk',       pass: 'pass123' },
        st:      { email: 'john.whelan@uni.ac.uk',      pass: 'pass123' },
      };
      const d = demos[item.dataset.demo];
      if (d) { emailEl.value = d.email; passEl.value = d.pass; }
    });
  });
}

/* =========================================================
   12. GLOBAL EVENT LISTENERS
   ========================================================= */

function initGlobalListeners() {
  // Logout
  document.getElementById('logout-btn').addEventListener('click', () => {
    showModal({
      title: 'Sign Out',
      body: 'Are you sure you want to sign out?',
      actions: [
        { label: 'Cancel', className: 'btn-outline', onClick: () => {} },
        { label: 'Sign Out', className: 'btn-primary', onClick: logout },
      ]
    });
  });

  // Modal overlay click to dismiss
  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) hideModal();
  });

  // Data-nav buttons (on action cards)
  document.addEventListener('click', e => {
    const nav = e.target.closest('[data-nav]');
    if (nav && !e.target.closest('[data-no-nav]')) {
      navigateTo(nav.dataset.nav);
    }
  });

  // PS Student details select
  document.getElementById('ps-student-select').addEventListener('change', e => {
    state.selectedStudentId = e.target.value || null;
    renderStudentDetail(e.target.value);
  });
}

/* =========================================================
   13. BOOT
   ========================================================= */

function boot() {
  initState();
  initLoginPage();
  initReportForm();
  initStudentMeetingForm();
  initPSMeetingForm();
  initGlobalListeners();

  // Restore session
  const savedId = getSavedSession();
  if (savedId) {
    const user = state.users.find(u => u.id === savedId);
    if (user) {
      setCurrentUser(user);
      return;
    }
  }

  // Show login
  document.getElementById('page-login').classList.add('active');
}

document.addEventListener('DOMContentLoaded', boot);
