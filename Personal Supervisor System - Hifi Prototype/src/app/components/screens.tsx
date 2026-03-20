// Main Menu / Login Screen
export function MainMenuScreen() {
  return (
    <div className="-m-4 min-h-[400px] bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 border-b-2 border-blue-700 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded"></div>
            <div className="text-sm font-bold text-white">Personal Supervisor System</div>
          </div>
          <div className="flex gap-4 text-xs text-white">
            <div>Help</div>
            <div>Contact</div>
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="bg-blue-50 px-6 py-12 border-b border-gray-300">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-xl font-bold text-gray-900 mb-3">Welcome to the Personal Supervisor System</h1>
          <p className="text-sm text-gray-700 mb-6">Monitor student wellbeing and academic engagement</p>
          <div className="bg-white border-2 border-gray-300 rounded-lg p-4 max-w-md mx-auto">
            <div className="text-xs font-semibold text-gray-700 mb-2">LOGIN</div>
            <div className="space-y-2">
              <input type="text" placeholder="Email" className="w-full border border-gray-300 rounded px-3 py-2 text-xs" />
              <input type="password" placeholder="Password" className="w-full border border-gray-300 rounded px-3 py-2 text-xs" />
              <button className="w-full bg-blue-600 text-white py-2 rounded text-xs font-semibold">Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Login Screen
export function LoginScreen() {
  return (
    <div className="-m-4 min-h-[400px] bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 border-b-2 border-blue-700 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded"></div>
            <div className="text-sm font-bold text-white">Personal Supervisor System</div>
          </div>
        </div>
      </div>
      
      {/* Login Form */}
      <div className="px-6 py-12">
        <div className="max-w-sm mx-auto bg-white border-2 border-gray-300 rounded-lg p-6">
          <h2 className="text-base font-bold text-gray-900 mb-4">Sign In</h2>
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
              <input type="email" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Password</label>
              <input type="password" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" />
            </div>
            <button className="w-full bg-blue-600 text-white py-2.5 rounded text-sm font-semibold">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Student Menu / Dashboard
export function StudentMenuScreen() {
  return (
    <div className="-m-4 min-h-[400px] bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 border-b-2 border-blue-700 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded"></div>
            <div className="text-sm font-bold text-white">Personal Supervisor System</div>
          </div>
          <div className="flex items-center gap-4 text-xs text-white">
            <div>George Spurrier</div>
            <div>Logout</div>
          </div>
        </div>
      </div>
      
      {/* Welcome Banner */}
      <div className="bg-blue-50 px-6 py-8 border-b border-gray-300">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-lg font-bold text-gray-900 mb-2">Hi GEORGE, welcome to your dashboard</h1>
          <p className="text-sm text-gray-700">Submit self-reports, book meetings, and track your progress</p>
        </div>
      </div>
      
      {/* Cards Grid */}
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-blue-600 rounded"></div>
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-2">Submit Self-Report</h3>
            <p className="text-xs text-gray-600">Rate your wellbeing and academic progress</p>
          </div>
          
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-2">View My Reports</h3>
            <p className="text-xs text-gray-600">See your submission history and averages</p>
          </div>
          
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-blue-600 rounded-full"></div>
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-2">Book Meeting</h3>
            <p className="text-xs text-gray-600">Schedule time with your Personal Supervisor</p>
          </div>
          
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
              <div className="w-6 h-6 bg-blue-600 rounded-sm"></div>
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-2">My Meetings</h3>
            <p className="text-xs text-gray-600">View upcoming and past meetings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Submit Self-Report Screen
export function SubmitReportScreen() {
  return (
    <div className="-m-4 min-h-[400px] bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 border-b-2 border-blue-700 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-white text-sm">←</div>
            <div className="text-sm font-bold text-white">Submit Self-Report</div>
          </div>
          <div className="text-xs text-white">George Spurrier</div>
        </div>
      </div>
      
      {/* Form */}
      <div className="px-6 py-8">
        <div className="max-w-lg mx-auto bg-white border-2 border-gray-300 rounded-lg p-6">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-3">Wellbeing Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div
                    key={num}
                    className={`flex-1 aspect-square border-2 rounded flex items-center justify-center text-sm font-bold ${
                      num === 2 ? 'border-blue-600 bg-blue-50' : 'border-gray-300'
                    }`}
                  >
                    {num}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>Very Poor</span>
                <span>Excellent</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-3">Academic Progress</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div
                    key={num}
                    className={`flex-1 aspect-square border-2 rounded flex items-center justify-center text-sm font-bold ${
                      num === 3 ? 'border-blue-600 bg-blue-50' : 'border-gray-300'
                    }`}
                  >
                    {num}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>Very Behind</span>
                <span>Far Ahead</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Comments (Optional)</label>
              <textarea className="w-full border-2 border-gray-300 rounded px-3 py-2 text-sm" rows={3}></textarea>
            </div>
            
            <button className="w-full bg-blue-600 text-white py-3 rounded text-sm font-bold">
              Submit Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// View My Reports Screen
export function ViewReportsScreen() {
  return (
    <div className="-m-4 min-h-[400px] bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 border-b-2 border-blue-700 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-white text-sm">←</div>
            <div className="text-sm font-bold text-white">My Reports</div>
          </div>
          <div className="text-xs text-white">George Spurrier</div>
        </div>
      </div>
      
      {/* Content */}
      <div className="px-6 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white border-2 border-gray-300 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">5</div>
              <div className="text-xs text-gray-600 mt-1">Total Reports</div>
            </div>
            <div className="bg-white border-2 border-gray-300 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">2.8</div>
              <div className="text-xs text-gray-600 mt-1">Avg Wellbeing</div>
            </div>
            <div className="bg-white border-2 border-gray-300 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">3.2</div>
              <div className="text-xs text-gray-600 mt-1">Avg Progress</div>
            </div>
          </div>
          
          {/* Reports List */}
          <div className="space-y-3">
            <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="text-xs text-gray-600">18 March 2024, 14:30</div>
                <div className="flex gap-2">
                  <div className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">W: 2</div>
                  <div className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">P: 3</div>
                </div>
              </div>
              <div className="text-sm text-gray-900">Behind on assignment...</div>
            </div>
            
            <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="text-xs text-gray-600">11 March 2024, 10:15</div>
                <div className="flex gap-2">
                  <div className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">W: 3</div>
                  <div className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">P: 3</div>
                </div>
              </div>
              <div className="text-sm text-gray-900">Managing workload</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Book Meeting (Student) Screen
export function BookMeetingStudentScreen() {
  return (
    <div className="-m-4 min-h-[400px] bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 border-b-2 border-blue-700 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-white text-sm">←</div>
            <div className="text-sm font-bold text-white">Book Meeting</div>
          </div>
          <div className="text-xs text-white">George Spurrier</div>
        </div>
      </div>
      
      {/* Form */}
      <div className="px-6 py-8">
        <div className="max-w-lg mx-auto">
          {/* PS Info Card */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-6">
            <div className="text-xs font-bold text-blue-900 mb-2">YOUR PERSONAL SUPERVISOR</div>
            <div className="text-sm font-bold text-gray-900">Dr. Xinhui Ma</div>
            <div className="text-xs text-gray-600">xinhui.ma@example.com</div>
          </div>
          
          {/* Form Fields */}
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-900 mb-2">Meeting Date</label>
                <input type="date" className="w-full border-2 border-gray-300 rounded px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-900 mb-2">Meeting Time</label>
                <input type="time" className="w-full border-2 border-gray-300 rounded px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-900 mb-2">Agenda</label>
                <textarea className="w-full border-2 border-gray-300 rounded px-3 py-2 text-sm" rows={3}></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded text-sm font-bold">
                Book Meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// View My Meetings (Student) Screen
export function ViewMeetingsStudentScreen() {
  return (
    <div className="-m-4 min-h-[400px] bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 border-b-2 border-blue-700 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-white text-sm">←</div>
            <div className="text-sm font-bold text-white">My Meetings</div>
          </div>
          <div className="text-xs text-white">George Spurrier</div>
        </div>
      </div>
      
      {/* Content */}
      <div className="px-6 py-8">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="bg-white border-2 border-blue-600 rounded-lg p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="text-sm font-bold text-gray-900">Dr. Xinhui Ma</div>
                <div className="text-xs text-gray-600 mt-1">22 March 2024 at 14:00</div>
              </div>
              <div className="px-2 py-1 bg-blue-600 text-white text-xs font-bold rounded">SCHEDULED</div>
            </div>
            <div className="text-sm text-gray-900 mb-2">Discuss coursework support</div>
            <div className="text-xs text-gray-600">Booked by: You</div>
          </div>
          
          <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="text-sm font-bold text-gray-900">Dr. Xinhui Ma</div>
                <div className="text-xs text-gray-600 mt-1">15 March 2024 at 10:00</div>
              </div>
              <div className="px-2 py-1 bg-gray-200 text-gray-900 text-xs font-bold rounded">COMPLETED</div>
            </div>
            <div className="text-sm text-gray-900 mb-2">Wellbeing check-in</div>
            <div className="text-xs text-gray-600">Booked by: Supervisor</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Personal Supervisor Menu / Dashboard
export function PSMenuScreen() {
  return (
    <div className="-m-4 min-h-[400px] bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 border-b-2 border-blue-700 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded"></div>
            <div className="text-sm font-bold text-white">Personal Supervisor System</div>
          </div>
          <div className="flex items-center gap-4 text-xs text-white">
            <div>Dr. Xinhui Ma</div>
            <div>Logout</div>
          </div>
        </div>
      </div>
      
      {/* Welcome Banner */}
      <div className="bg-blue-50 px-6 py-8 border-b border-gray-300">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-lg font-bold text-gray-900 mb-2">Hi DR. MA, welcome to your dashboard</h1>
          <p className="text-sm text-gray-700">Monitor your students and manage meetings</p>
        </div>
      </div>
      
      {/* Cards Grid */}
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-3"></div>
            <h3 className="text-sm font-bold text-gray-900 mb-2">My Students</h3>
            <p className="text-xs text-gray-600">View dashboard with wellbeing alerts</p>
          </div>
          
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-3"></div>
            <h3 className="text-sm font-bold text-gray-900 mb-2">Student Details</h3>
            <p className="text-xs text-gray-600">View individual reports and history</p>
          </div>
          
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-3"></div>
            <h3 className="text-sm font-bold text-gray-900 mb-2">Book Meeting</h3>
            <p className="text-xs text-gray-600">Schedule meeting with a student</p>
          </div>
          
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-3"></div>
            <h3 className="text-sm font-bold text-gray-900 mb-2">My Meetings</h3>
            <p className="text-xs text-gray-600">View and update meeting status</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// View All My Students Screen (PS Dashboard)
export function ViewAllStudentsScreen() {
  return (
    <div className="-m-4 min-h-[400px] bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 border-b-2 border-blue-700 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-white text-sm">←</div>
            <div className="text-sm font-bold text-white">My Students Dashboard</div>
          </div>
          <div className="text-xs text-white">Dr. Xinhui Ma</div>
        </div>
      </div>
      
      {/* Content */}
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Table */}
          <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden mb-6">
            <table className="w-full text-xs">
              <thead className="bg-gray-100 border-b-2 border-gray-300">
                <tr>
                  <th className="text-left px-4 py-3 font-bold text-gray-900">STUDENT</th>
                  <th className="text-center px-2 py-3 font-bold text-gray-900">REPORTS</th>
                  <th className="text-center px-2 py-3 font-bold text-gray-900">AVG W</th>
                  <th className="text-center px-2 py-3 font-bold text-gray-900">AVG P</th>
                  <th className="text-center px-2 py-3 font-bold text-gray-900">MEETINGS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="px-4 py-3">
                    <div className="font-bold text-gray-900">George Spurrier</div>
                    <div className="text-gray-600">george.spurrier@example.com</div>
                  </td>
                  <td className="text-center px-2 py-3">5</td>
                  <td className="text-center px-2 py-3 font-bold">2.8</td>
                  <td className="text-center px-2 py-3 font-bold">3.2</td>
                  <td className="text-center px-2 py-3">3</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="px-4 py-3">
                    <div className="font-bold text-gray-900">Tom Brown</div>
                    <div className="text-gray-600">tom.brown@example.com</div>
                  </td>
                  <td className="text-center px-2 py-3">8</td>
                  <td className="text-center px-2 py-3 font-bold">4.2</td>
                  <td className="text-center px-2 py-3 font-bold">4.5</td>
                  <td className="text-center px-2 py-3">2</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <div className="font-bold text-gray-900">Emma Wilson</div>
                    <div className="text-gray-600">emma.wilson@example.com</div>
                  </td>
                  <td className="text-center px-2 py-3">0</td>
                  <td className="text-center px-2 py-3 text-gray-400">N/A</td>
                  <td className="text-center px-2 py-3 text-gray-400">N/A</td>
                  <td className="text-center px-2 py-3">1</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Alert Section */}
          <div className="bg-white border-2 border-gray-900 rounded-lg p-5">
            <div className="text-sm font-bold text-gray-900 mb-4">⚠ LOW WELLBEING ALERTS</div>
            <div className="bg-gray-50 border-2 border-gray-300 rounded p-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-sm font-bold text-gray-900">George Spurrier</div>
                  <div className="text-xs text-gray-600 mt-1">Latest wellbeing: 2 (Poor)</div>
                  <div className="text-xs text-gray-600">Reported: 18 March 2024, 14:30</div>
                </div>
                <button className="px-3 py-1.5 bg-gray-900 text-white text-xs font-bold rounded">
                  Book Meeting
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// View Student Details Screen
export function ViewStudentDetailsScreen() {
  return (
    <div className="-m-4 min-h-[400px] bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 border-b-2 border-blue-700 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-white text-sm">←</div>
            <div className="text-sm font-bold text-white">Student Details</div>
          </div>
          <div className="text-xs text-white">Dr. Xinhui Ma</div>
        </div>
      </div>
      
      {/* Content */}
      <div className="px-6 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Student Info */}
          <div className="bg-white border-2 border-gray-300 rounded-lg p-5 mb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-base font-bold text-gray-900">George Spurrier</h3>
                <div className="text-xs text-gray-600 mt-1">george.spurrier@example.com</div>
              </div>
              <button className="px-4 py-2 bg-gray-900 text-white text-xs font-bold rounded">
                Book Meeting
              </button>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              <div>
                <div className="text-xs text-gray-600">Reports</div>
                <div className="text-xl font-bold text-gray-900">5</div>
              </div>
              <div>
                <div className="text-xs text-gray-600">Avg Wellbeing</div>
                <div className="text-xl font-bold text-gray-900">2.8</div>
              </div>
              <div>
                <div className="text-xs text-gray-600">Avg Progress</div>
                <div className="text-xl font-bold text-gray-900">3.2</div>
              </div>
              <div>
                <div className="text-xs text-gray-600">Meetings</div>
                <div className="text-xl font-bold text-gray-900">3</div>
              </div>
            </div>
          </div>
          
          {/* Reports */}
          <div className="mb-3">
            <div className="text-sm font-bold text-gray-900">RECENT REPORTS</div>
          </div>
          <div className="space-y-3">
            <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="text-xs text-gray-600">18 March 2024, 14:30</div>
                <div className="flex gap-2">
                  <div className="px-2 py-1 bg-gray-200 text-xs font-bold">W: 2</div>
                  <div className="px-2 py-1 bg-gray-200 text-xs font-bold">P: 3</div>
                </div>
              </div>
              <div className="text-sm text-gray-900">Behind on assignment...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Book Meeting (PS) Screen
export function BookMeetingPSScreen() {
  return (
    <div className="-m-4 min-h-[400px] bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 border-b-2 border-blue-700 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-white text-sm">←</div>
            <div className="text-sm font-bold text-white">Book Meeting</div>
          </div>
          <div className="text-xs text-white">Dr. Xinhui Ma</div>
        </div>
      </div>
      
      {/* Form */}
      <div className="px-6 py-8">
        <div className="max-w-lg mx-auto bg-white border-2 border-gray-300 rounded-lg p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-900 mb-2">SELECT STUDENT</label>
              <select className="w-full border-2 border-gray-300 rounded px-3 py-2 text-sm">
                <option>George Spurrier</option>
                <option>Tom Brown</option>
                <option>Emma Wilson</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-900 mb-2">MEETING DATE</label>
              <input type="date" className="w-full border-2 border-gray-300 rounded px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-900 mb-2">MEETING TIME</label>
              <input type="time" className="w-full border-2 border-gray-300 rounded px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-900 mb-2">AGENDA</label>
              <textarea className="w-full border-2 border-gray-300 rounded px-3 py-2 text-sm" rows={3}></textarea>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded text-sm font-bold">
              Book Meeting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Update Meeting Status Screen
export function UpdateMeetingStatusScreen() {
  return (
    <div className="-m-4 min-h-[400px] bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 border-b-2 border-blue-700 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-white text-sm">←</div>
            <div className="text-sm font-bold text-white">Update Meeting Status</div>
          </div>
          <div className="text-xs text-white">Dr. Xinhui Ma</div>
        </div>
      </div>
      
      {/* Content */}
      <div className="px-6 py-8">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-5">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="text-sm font-bold text-gray-900">George Spurrier</div>
                <div className="text-xs text-gray-600 mt-1">25 March 2024 at 11:00</div>
                <div className="text-xs text-gray-900 mt-2">Wellbeing check-in</div>
              </div>
              <div className="px-2 py-1 bg-gray-900 text-white text-xs font-bold">SCHEDULED</div>
            </div>
            
            <div className="border-t-2 border-gray-300 pt-4">
              <div className="text-xs font-bold text-gray-900 mb-3">UPDATE STATUS</div>
              <div className="flex gap-3">
                <button className="flex-1 px-4 py-2 bg-gray-900 text-white text-xs font-bold rounded">
                  Mark Completed
                </button>
                <button className="flex-1 px-4 py-2 border-2 border-gray-900 text-gray-900 text-xs font-bold rounded">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Senior Tutor Menu / Dashboard
export function STMenuScreen() {
  return (
    <div className="-m-4 min-h-[400px] bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 border-b-2 border-blue-700 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded"></div>
            <div className="text-sm font-bold text-white">Personal Supervisor System</div>
          </div>
          <div className="flex items-center gap-4 text-xs text-white">
            <div>Dr. John Whelan</div>
            <div>Logout</div>
          </div>
        </div>
      </div>
      
      {/* Welcome Banner */}
      <div className="bg-blue-50 px-6 py-8 border-b border-gray-300">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-lg font-bold text-gray-900 mb-2">Hi DR. WHELAN, welcome to your dashboard</h1>
          <p className="text-sm text-gray-700">Department-wide oversight and PS engagement monitoring</p>
        </div>
      </div>
      
      {/* Cards Grid */}
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-3"></div>
            <h3 className="text-sm font-bold text-gray-900 mb-2">All Students Overview</h3>
            <p className="text-xs text-gray-600">Department-wide student status</p>
          </div>
          
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-3"></div>
            <h3 className="text-sm font-bold text-gray-900 mb-2">Student Details</h3>
            <p className="text-xs text-gray-600">Individual student information</p>
          </div>
          
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-3"></div>
            <h3 className="text-sm font-bold text-gray-900 mb-2">PS Interaction Summary</h3>
            <p className="text-xs text-gray-600">Supervisor engagement metrics</p>
          </div>
          
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-3"></div>
            <h3 className="text-sm font-bold text-gray-900 mb-2">All Meetings</h3>
            <p className="text-xs text-gray-600">Department meeting overview</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// All Students Overview Screen
export function AllStudentsOverviewScreen() {
  return (
    <div className="-m-4 min-h-[400px] bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 border-b-2 border-blue-700 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-white text-sm">←</div>
            <div className="text-sm font-bold text-white">All Students Overview</div>
          </div>
          <div className="text-xs text-white">Dr. John Whelan</div>
        </div>
      </div>
      
      {/* Content */}
      <div className="px-6 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white border-2 border-gray-300 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">5</div>
              <div className="text-xs text-gray-600 mt-1">Total Students</div>
            </div>
            <div className="bg-white border-2 border-gray-300 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">2</div>
              <div className="text-xs text-gray-600 mt-1">At Risk</div>
            </div>
            <div className="bg-white border-2 border-gray-300 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">1</div>
              <div className="text-xs text-gray-600 mt-1">No Reports</div>
            </div>
          </div>
          
          {/* Table */}
          <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
            <table className="w-full text-xs">
              <thead className="bg-gray-100 border-b-2 border-gray-300">
                <tr>
                  <th className="text-left px-4 py-3 font-bold text-gray-900">STUDENT</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-900">SUPERVISOR</th>
                  <th className="text-center px-2 py-3 font-bold text-gray-900">W</th>
                  <th className="text-center px-2 py-3 font-bold text-gray-900">P</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-900">STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="px-4 py-3">
                    <div className="font-bold text-gray-900">George Spurrier</div>
                  </td>
                  <td className="px-4 py-3 text-gray-600">Dr. Ma</td>
                  <td className="text-center px-2 py-3 font-bold">2.8</td>
                  <td className="text-center px-2 py-3 font-bold">3.2</td>
                  <td className="px-4 py-3 font-bold">⚠ LOW WELLBEING</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="px-4 py-3">
                    <div className="font-bold text-gray-900">Tom Brown</div>
                  </td>
                  <td className="px-4 py-3 text-gray-600">Dr. Ma</td>
                  <td className="text-center px-2 py-3 font-bold">4.2</td>
                  <td className="text-center px-2 py-3 font-bold">4.5</td>
                  <td className="px-4 py-3 font-bold">✓ OK</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="px-4 py-3">
                    <div className="font-bold text-gray-900">Emma Wilson</div>
                  </td>
                  <td className="px-4 py-3 text-gray-600">Dr. Ma</td>
                  <td className="text-center px-2 py-3 text-gray-400">-</td>
                  <td className="text-center px-2 py-3 text-gray-400">-</td>
                  <td className="px-4 py-3 font-bold">⚠ NO REPORTS</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// PS Interaction Summary Screen
export function PSInteractionSummaryScreen() {
  return (
    <div className="-m-4 min-h-[400px] bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 border-b-2 border-blue-700 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-white text-sm">←</div>
            <div className="text-sm font-bold text-white">PS Interaction Summary</div>
          </div>
          <div className="text-xs text-white">Dr. John Whelan</div>
        </div>
      </div>
      
      {/* Content */}
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Dr. Anderson */}
          <div className="bg-white border-2 border-gray-300 rounded-lg p-5">
            <div className="mb-4">
              <div className="text-base font-bold text-gray-900">Dr. Xinhui Ma</div>
              <div className="text-xs text-gray-600">Personal Supervisor</div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div>
                <div className="text-xs text-gray-600">Students</div>
                <div className="text-xl font-bold text-gray-900">3</div>
              </div>
              <div>
                <div className="text-xs text-gray-600">Total Meetings</div>
                <div className="text-xl font-bold text-gray-900">6</div>
              </div>
              <div>
                <div className="text-xs text-gray-600">Completed</div>
                <div className="text-xl font-bold text-gray-900">3</div>
              </div>
              <div>
                <div className="text-xs text-gray-600">At Risk</div>
                <div className="text-xl font-bold text-gray-900">1</div>
              </div>
            </div>
            
            <div className="border-t-2 border-gray-300 pt-4">
              <div className="text-xs font-bold text-gray-900 mb-3">AT-RISK STUDENT RESPONSES</div>
              <div className="bg-gray-50 border-2 border-gray-300 rounded p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-sm font-bold text-gray-900">George Spurrier</div>
                    <div className="text-xs text-gray-600 mt-1">Latest wellbeing: 2 (Poor)</div>
                    <div className="text-xs text-gray-600">Last report: 18 March 2024</div>
                    <div className="text-xs font-bold text-gray-900 mt-2">✓ Meeting booked: 25 March 2024</div>
                    <div className="text-xs text-gray-600">Response time: 7 days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dr. Smith */}
          <div className="bg-white border-2 border-gray-300 rounded-lg p-5">
            <div className="mb-4">
              <div className="text-base font-bold text-gray-900">Dr. Emily Smith</div>
              <div className="text-xs text-gray-600">Personal Supervisor</div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div>
                <div className="text-xs text-gray-600">Students</div>
                <div className="text-xl font-bold text-gray-900">2</div>
              </div>
              <div>
                <div className="text-xs text-gray-600">Total Meetings</div>
                <div className="text-xl font-bold text-gray-900">4</div>
              </div>
              <div>
                <div className="text-xs text-gray-600">Completed</div>
                <div className="text-xl font-bold text-gray-900">2</div>
              </div>
              <div>
                <div className="text-xs text-gray-600">At Risk</div>
                <div className="text-xl font-bold text-gray-900">0</div>
              </div>
            </div>
            
            <div className="border-t-2 border-gray-300 pt-4">
              <div className="text-xs font-bold text-gray-900 mb-3">AT-RISK STUDENT RESPONSES</div>
              <div className="text-xs text-gray-600 italic">No students flagged</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}