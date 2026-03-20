import { ConsoleFrame } from './ConsoleFrame';
import { wireframeScreens } from './wireframeScreens';

export function WireframeGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {wireframeScreens.map((screen, index) => (
        <div key={index} className="flex flex-col">
          <div className="mb-2">
            <div className="text-xs font-mono text-gray-500 mb-1">{screen.id}</div>
            <h3 className="font-semibold text-gray-900">{screen.title}</h3>
            <p className="text-xs text-gray-600">{screen.description}</p>
          </div>
          <ConsoleFrame>
            {screen.content}
          </ConsoleFrame>
        </div>
      ))}
    </div>
  );
}
