/**
 * Student Support Portal — Vanilla JS SPA
 * Based on data.ts from the Figma Hi-Fi Prototype
 */

'use strict';

/* =========================================================
   1. SEED DATA
   ========================================================= */

const SEED_USERS = [
  { id: 'S001', name: 'George Spurrier', email: 'george.spurrier@hull.ac.uk', password: 'pass123', role: 'student' },
];

const SUPERVISOR_ASSIGNMENTS = {
  S001: { name: 'Dr. Xinhui Ma',   email: 'xinhui.ma@hull.ac.uk',   avatar: '🧑‍🏫' },

  default: { name: 'Personal Supervisor', email: 'support@hull.ac.uk', avatar: '👥' },
};

const SEED_REPORTS = [
  { id: 'R001', studentId: 'S001', dateTime: '2024-03-18T14:30', wellbeing: 2, progress: 3, comments: 'Struggling to keep up with coursework this week. Feeling anxious about the upcoming deadline.' },
  { id: 'R002', studentId: 'S001', dateTime: '2024-03-11T10:15', wellbeing: 3, progress: 3, comments: 'Managing workload but finding it challenging.' },
  { id: 'R003', studentId: 'S001', dateTime: '2024-03-04T09:00', wellbeing: 3, progress: 4, comments: 'Good week overall.' },
  { id: 'R004', studentId: 'S001', dateTime: '2024-02-26T11:45', wellbeing: 4, progress: 4, comments: '' },
  { id: 'R005', studentId: 'S001', dateTime: '2024-02-19T16:00', wellbeing: 2, progress: 2, comments: 'Really behind on assignment. Need help.' },
];

const SEED_MEETINGS = []; // Intentionally empty; students can create meetings as needed

/* =========================================================
   2. IN-MEMORY SESSION DATA
   ========================================================= */

function loadData() {
  return {
    reports: [...SEED_REPORTS],
    meetings: [...SEED_MEETINGS],
  };
}

// Persistence is intentionally disabled; these are no-ops to keep call sites simple.
function saveReports()  {}
function saveMeetings() {}
function clearSession() {}

/* =========================================================
   3. APP STATE
   ========================================================= */

const state = {
  currentUser: null,
  users: SEED_USERS,
  reports: [],
  meetings: [],
  currentPage: null,
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

function getSupervisorForStudent(studentId) {
  return SUPERVISOR_ASSIGNMENTS[studentId] || SUPERVISOR_ASSIGNMENTS.default;
}

function getStudentReports(studentId) {
  return state.reports
    .filter(r => r.studentId === studentId)
    .sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));
}

function getStudentMeetings(studentId) {
  return state.meetings.filter(m => m.studentId === studentId);
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
};

const ROLE_PAGES = {
  student: ['student-dashboard','student-submit-report','student-view-reports','student-book-meeting','student-view-meetings'],
};

function navigateTo(pageId) {
  if (!PAGE_NAV[pageId]) {
    console.warn(`Unknown pageId "${pageId}", redirecting to student-dashboard`);
    pageId = 'student-dashboard';
  }
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
  }
}

function supervisorCardHtml(supervisor, { compact = false } = {}) {
  const cls = compact ? 'supervisor-card compact' : 'supervisor-card';
  return `<div class="${cls}">
    <div class="supervisor-avatar">${escHtml(supervisor.avatar || '👥')}</div>
    <div class="supervisor-details">
      <div class="supervisor-label">${compact ? 'Personal Supervisor' : 'Your Personal Supervisor'}</div>
      <div class="supervisor-name">${escHtml(supervisor.name)}</div>
      <div class="supervisor-email">${escHtml(supervisor.email)}</div>
    </div>
  </div>`;
}

/* ---- Student Dashboard ---- */
function renderStudentDashboard() {
  const u = state.currentUser;
  document.getElementById('student-welcome-name').textContent = `Welcome back, ${u.name.split(' ')[0]}`;

  const supervisor = getSupervisorForStudent(u.id);
  document.getElementById('student-supervisor-card').innerHTML = supervisorCardHtml(supervisor);

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

  const supervisor = getSupervisorForStudent(state.currentUser.id);
  document.getElementById('student-booking-ps').innerHTML = supervisorCardHtml(supervisor, { compact: true });

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
  document.getElementById('student-meetings-scheduled').innerHTML = scheduled.length
    ? `<div class="sub-heading">Upcoming (${scheduled.length})</div>` + scheduled.map(m => studentMeetingCardHtml(m)).join('')
    : '';

  document.getElementById('student-meetings-past').innerHTML = past.length
    ? `<div class="sub-heading">Past (${past.length})</div>` + past.map(m => studentMeetingCardHtml(m)).join('')
    : '';

  if (!meetings.length) {
    document.getElementById('student-meetings-scheduled').innerHTML =
      `<div class="empty-state"><div class="empty-state-icon">📅</div><div class="empty-state-text">No meetings yet. Book a meeting to stay on track!</div></div>`;
  }
}

function studentMeetingCardHtml(m) {
  const supervisor = getSupervisorForStudent(m.studentId);
  return `<div class="meeting-card">
    <div class="meeting-card-header">
      <div>
        <div class="meeting-student">Meeting</div>
        <div class="meeting-datetime">${escHtml(formatDateTime(m.dateTime))}</div>
      </div>
      <span class="badge ${getStatusClass(m.status)}">${m.status}</span>
    </div>
    <div class="meeting-agenda">${escHtml(m.agenda)}</div>
    <div class="meeting-booked-by">Booked by: ${m.bookedBy === state.currentUser.id ? 'You' : 'Staff'}</div>
    <div class="meeting-supervisor">
      <span class="label">Personal Supervisor: </span>
      <span class="name">${escHtml(supervisor.name)}</span>
      <span class="email">(${escHtml(supervisor.email)})</span>
    </div>
  </div>`;
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
      <div class="success-desc">Your self-report has been recorded.</div>
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
      dateTime: `${date}T${time}`,
      agenda,
      status: 'Scheduled',
      bookedBy: u.id,
    };

    state.meetings.push(meeting);
    saveMeetings(state.meetings);
    showToast('Meeting booked successfully!', 'success');

    form.classList.add('hidden');
    const successHtml = `<div id="student-meeting-success" class="success-card">
      <div class="success-icon">📅</div>
      <div class="success-title">Meeting Booked</div>
      <div class="success-desc">Your meeting has been scheduled.</div>
      <div class="success-summary">
        <div><span class="summary-key">When: </span><span class="summary-val">${escHtml(formatDateTime(meeting.dateTime))}</span></div>
        <div><span class="summary-key">Agenda: </span><span class="summary-val">${escHtml(agenda)}</span></div>
        <div><span class="summary-key">Status: </span><span class="summary-val">${escHtml(meeting.status)}</span></div>
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

/* =========================================================
   10. AUTHENTICATION
   ========================================================= */

function login(email, password) {
  const user = state.users.find(u =>
    u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );
  return user && user.role === 'student' ? user : null;
}

function setCurrentUser(user) {
  state.currentUser = user;
  showAuthLayout(user);
}

function showAuthLayout(user) {
  document.getElementById('page-login').classList.remove('active');
  document.getElementById('page-login').classList.add('hidden');
  document.getElementById('layout-auth').classList.remove('hidden');

  buildSidebar(user);

  // Navigate to the student's dashboard (only supported role)
  navigateTo('student-dashboard');
}

function buildSidebar(user) {
  // User info
  const roleLabels = { student: 'Student' };
  document.getElementById('sidebar-user').innerHTML = `
    <div class="user-name">${escHtml(user.name)}</div>
    <div class="user-role">${roleLabels[user.role] || 'Student'}</div>`;

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
        student: { email: 'george.spurrier@hull.ac.uk', pass: 'pass123' },
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
}

/* =========================================================
   13. BOOT
   ========================================================= */

function boot() {
  initState();
  initLoginPage();
  initReportForm();
  initStudentMeetingForm();
  initGlobalListeners();

  // Clear any legacy saved sessions so the app always starts at login
  clearSession();

  // Show login
  document.getElementById('page-login').classList.add('active');
}

document.addEventListener('DOMContentLoaded', boot);
