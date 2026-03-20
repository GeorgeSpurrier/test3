import { createBrowserRouter } from 'react-router';

import { RootLayout } from './components/hifi/RootLayout';
import { Layout } from './components/hifi/Layout';
import { LoginPage } from './components/hifi/LoginPage';
import { StudentDashboard } from './components/hifi/student/StudentDashboard';
import { SubmitReport } from './components/hifi/student/SubmitReport';
import { ViewReports } from './components/hifi/student/ViewReports';
import { BookMeeting } from './components/hifi/student/BookMeeting';
import { ViewMeetings } from './components/hifi/student/ViewMeetings';
import { PSDashboard } from './components/hifi/ps/PSDashboard';
import { MyStudents } from './components/hifi/ps/MyStudents';
import { StudentDetails } from './components/hifi/ps/StudentDetails';
import { PSBookMeeting } from './components/hifi/ps/PSBookMeeting';
import { ManageMeetings } from './components/hifi/ps/ManageMeetings';
import { STDashboard } from './components/hifi/st/STDashboard';
import { AllStudents } from './components/hifi/st/AllStudents';
import { PSSummary } from './components/hifi/st/PSSummary';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: LoginPage },
      {
        path: 'student',
        Component: Layout,
        children: [
          { index: true, Component: StudentDashboard },
          { path: 'submit-report', Component: SubmitReport },
          { path: 'my-reports', Component: ViewReports },
          { path: 'book-meeting', Component: BookMeeting },
          { path: 'my-meetings', Component: ViewMeetings },
        ],
      },
      {
        path: 'ps',
        Component: Layout,
        children: [
          { index: true, Component: PSDashboard },
          { path: 'my-students', Component: MyStudents },
          { path: 'student-details', Component: StudentDetails },
          { path: 'book-meeting', Component: PSBookMeeting },
          { path: 'meetings', Component: ManageMeetings },
        ],
      },
      {
        path: 'st',
        Component: Layout,
        children: [
          { index: true, Component: STDashboard },
          { path: 'all-students', Component: AllStudents },
          { path: 'ps-summary', Component: PSSummary },
        ],
      },
    ],
  },
]);
