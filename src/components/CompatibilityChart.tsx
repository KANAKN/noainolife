import React from 'react';
import { CompatibilityEntry } from '../types';

interface CompatibilityChartProps {
  compatibility: CompatibilityEntry[];
  typeColor: string;
}

const getSearchUrl = (type: string) => {
  const hashtag = `#私は${type}AIタイプ診断`;
  return `https://x.com/search?q=${encodeURIComponent(hashtag)}`;
};

const StarDisplay: React.FC<{ stars: 3 | 2 | null }> = ({ stars }) => {
  if (stars === null) return <span className="text-gray-400 text-lg tracking-widest">？？？</span>;
  return (
    <span className="text-lg tracking-widest">
      {'★'.repeat(stars)}
      {'☆'.repeat(3 - stars)}
    </span>
  );
};

const CompatibilityChart: React.FC<CompatibilityChartProps> = ({ compatibility, typeColor }) => {
  const hasUnknown = compatibility.some((e) => e.stars === null);

  return (
    <div className="p-8">
      <div className="space-y-3">
        {compatibility.map((entry) => (
          <div
            key={entry.type}
            className="rounded-lg p-4"
            style={{ backgroundColor: `${typeColor}10`, border: `1px solid ${typeColor}30` }}
          >
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-3">
                <StarDisplay stars={entry.stars} />
                <span className="font-bold text-gray-800">{entry.type}</span>
              </div>
              {entry.stars !== null && (
                <a
                  href={getSearchUrl(entry.type)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-3 py-1 rounded-full text-white flex items-center gap-1 hover:opacity-80 transition-opacity whitespace-nowrap"
                  style={{ backgroundColor: typeColor }}
                >
                  {entry.type}の人を探す ↗
                </a>
              )}
            </div>
            {entry.description && (
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{entry.description}</p>
            )}
          </div>
        ))}
      </div>
      {hasUnknown && (
        <p className="mt-3 text-xs text-gray-400 text-center">
          ？ = AIで相性を測るのが一番難しいタイプ。それがエスケーパー型らしさかも。
        </p>
      )}
    </div>
  );
};

export default CompatibilityChart;
