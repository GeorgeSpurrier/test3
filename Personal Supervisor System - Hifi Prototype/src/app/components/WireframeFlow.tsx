import { ConsoleFrame } from './ConsoleFrame';
import {
  MainMenuScreen,
  StudentMenuScreen,
  SubmitReportScreen,
  ViewReportsScreen,
  BookMeetingStudentScreen,
  ViewMeetingsStudentScreen,
  PSMenuScreen,
  ViewAllStudentsScreen,
  ViewStudentDetailsScreen,
  BookMeetingPSScreen,
  UpdateMeetingStatusScreen,
  STMenuScreen,
  AllStudentsOverviewScreen,
  PSInteractionSummaryScreen,
} from './screens';

interface ScreenDef {
  id: string;
  title: string;
  content: React.ReactNode;
}

const CELL_W = 260;
const CELL_H = 480;
const GAP_X = 80;
const GAP_Y = 60;

// Compute x/y of a cell center-top
function cellX(col: number) {
  return col * (CELL_W + GAP_X);
}
function cellY(row: number) {
  return row * (CELL_H + GAP_Y);
}

// Row definitions
const row0: ScreenDef[] = [
  { id: '000', title: 'Main Menu / Login', content: <MainMenuScreen /> },
  { id: '001', title: 'Student Menu', content: <StudentMenuScreen /> },
  { id: '002', title: 'Submit Self-Report', content: <SubmitReportScreen /> },
  { id: '003', title: 'View My Reports', content: <ViewReportsScreen /> },
  { id: '004', title: 'Book Meeting (Student)', content: <BookMeetingStudentScreen /> },
  { id: '005', title: 'View My Meetings', content: <ViewMeetingsStudentScreen /> },
];

const row1: ScreenDef[] = [
  { id: '100', title: 'Main Menu / Login', content: <MainMenuScreen /> },
  { id: '101', title: 'PS Menu', content: <PSMenuScreen /> },
  { id: '102', title: 'View All My Students', content: <ViewAllStudentsScreen /> },
  { id: '103', title: 'View Student Details', content: <ViewStudentDetailsScreen /> },
  { id: '104', title: 'Book Meeting (PS)', content: <BookMeetingPSScreen /> },
  { id: '105', title: 'Update Meeting Status', content: <UpdateMeetingStatusScreen /> },
];

const row2: ScreenDef[] = [
  { id: '200', title: 'Main Menu / Login', content: <MainMenuScreen /> },
  { id: '201', title: 'Senior Tutor Menu', content: <STMenuScreen /> },
  { id: '202', title: 'All Students Overview', content: <AllStudentsOverviewScreen /> },
  { id: '203', title: 'PS Interaction Summary', content: <PSInteractionSummaryScreen /> },
];

const allRows = [row0, row1, row2];
const maxCols = Math.max(...allRows.map((r) => r.length));
const totalW = maxCols * CELL_W + (maxCols - 1) * GAP_X;
const totalH = allRows.length * CELL_H + (allRows.length - 1) * GAP_Y + 40;

// Connector lines
interface Line {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

function buildConnectors(): Line[] {
  const lines: Line[] = [];

  // Horizontal connectors within each row
  allRows.forEach((row, ri) => {
    for (let ci = 0; ci < row.length - 1; ci++) {
      const x1 = cellX(ci) + CELL_W;
      const y1 = cellY(ri) + CELL_H / 2;
      const x2 = cellX(ci + 1);
      const y2 = y1;
      lines.push({ x1, y1, x2, y2 });
    }
  });

  // Vertical connectors: from screen 000 down to 100 and 200
  // Left edge of col 0, connecting rows
  const xVert = cellX(0) + CELL_W / 2 - CELL_W / 2 - 20; // left side
  for (let ri = 0; ri < allRows.length - 1; ri++) {
    const y1 = cellY(ri) + CELL_H;
    const y2 = cellY(ri + 1) + CELL_H / 2;
    const x1 = cellX(0) - 20;
    // L-shaped: go down from bottom-left of top screen, then right to left edge of bottom screen
    lines.push({ x1, y1: cellY(ri) + CELL_H / 2, x2: x1, y2 });
    lines.push({ x1, y1: y2, x2: cellX(0), y2 });
  }

  return lines;
}

const connectors = buildConnectors();

function ScreenCard({ screen }: { screen: ScreenDef }) {
  return (
    <div className="flex flex-col" style={{ width: CELL_W }}>
      <div className="mb-1.5">
        <span className="text-[11px] font-mono text-gray-400">{screen.id}</span>
      </div>
      <div className="border border-gray-300 rounded-lg bg-white shadow-sm overflow-hidden" style={{ height: CELL_H - 40 }}>
        <div className="transform origin-top-left scale-[0.55] overflow-hidden" style={{ width: CELL_W / 0.55, height: (CELL_H - 40) / 0.55 }}>
          <div className="bg-white">
            {screen.content}
          </div>
        </div>
      </div>
      <div className="mt-1.5 text-xs text-gray-700 text-center">{screen.title}</div>
    </div>
  );
}

export function WireframeFlow() {
  return (
    <div className="overflow-auto">
      <div className="relative" style={{ width: totalW + 40, height: totalH, marginLeft: 30 }}>
        {/* SVG connectors */}
        <svg
          className="absolute inset-0 pointer-events-none"
          width={totalW + 40}
          height={totalH}
          style={{ zIndex: 0 }}
        >
          {connectors.map((line, i) => (
            <line
              key={i}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="#9ca3af"
              strokeWidth="1.5"
            />
          ))}
          {/* Arrow heads on horizontal connectors */}
          {allRows.map((row, ri) =>
            row.slice(0, -1).map((_, ci) => {
              const x = cellX(ci + 1) - 2;
              const y = cellY(ri) + CELL_H / 2;
              return (
                <polygon
                  key={`arrow-${ri}-${ci}`}
                  points={`${x},${y} ${x - 8},${y - 4} ${x - 8},${y + 4}`}
                  fill="#9ca3af"
                />
              );
            })
          )}
          {/* Arrow heads on vertical-to-horizontal connectors */}
          {[1, 2].map((ri) => {
            const x = cellX(0) - 2;
            const y = cellY(ri) + CELL_H / 2;
            return (
              <polygon
                key={`varrow-${ri}`}
                points={`${x + 2},${y} ${x - 6},${y - 4} ${x - 6},${y + 4}`}
                fill="#9ca3af"
              />
            );
          })}
          {/* Row labels */}
          {[
            { label: 'Student Flow', row: 0 },
            { label: 'Personal Supervisor Flow', row: 1 },
            { label: 'Senior Tutor Flow', row: 2 },
          ].map(({ label, row }) => (
            <text
              key={label}
              x={cellX(0) - 25}
              y={cellY(row) + 14}
              fill="#6b7280"
              fontSize="11"
              fontWeight="600"
              textAnchor="end"
              transform={`rotate(-90, ${cellX(0) - 25}, ${cellY(row) + 14})`}
            >
              {label}
            </text>
          ))}
        </svg>

        {/* Screen cards */}
        {allRows.map((row, ri) =>
          row.map((screen, ci) => (
            <div
              key={screen.id}
              className="absolute"
              style={{
                left: cellX(ci),
                top: cellY(ri),
                zIndex: 1,
              }}
            >
              <ScreenCard screen={screen} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
