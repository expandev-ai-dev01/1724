import { getErrorMessageClassName } from './variants';
import type { ErrorMessageProps } from './types';

export const ErrorMessage = ({
  title = 'Error',
  message,
  onRetry,
  onBack,
  variant = 'default',
}: ErrorMessageProps) => {
  return (
    <div className={getErrorMessageClassName({ variant })}>
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{message}</p>
        <div className="flex gap-2 justify-center">
          {onRetry && (
            <button
              onClick={onRetry}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          )}
          {onBack && (
            <button
              onClick={onBack}
              className="px-4 py-2 bg-gray-200 text-gray-900 rounded-md hover:bg-gray-300 transition-colors"
            >
              Go Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
