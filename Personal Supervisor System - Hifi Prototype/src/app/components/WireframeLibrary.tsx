import { PhoneFrame } from './PhoneFrame';
import { wireframeScreens } from './wireframeData';

export function WireframeLibrary() {
  return (
    <div className="grid grid-cols-12 gap-4">
      {wireframeScreens.map((screen, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="text-[10px] text-gray-400 mb-1 font-mono">{screen.id}</div>
          <PhoneFrame highlighted={screen.id === '009'}>
            {screen.content}
          </PhoneFrame>
        </div>
      ))}
    </div>
  );
}
