import { useEffect } from 'react';

// Extend the Window interface to add the `hj` property and the `_hjSettings` object
declare global {
  interface Window {
    hj?: {
      (event: string, data?: Record<string, unknown>): void; // Use `unknown` instead of `any`
      q?: Array<[string, Record<string, unknown>?]>; // Use `unknown` instead of `any`
    };
    _hjSettings?: { hjid: number; hjsv: number };
  }
}

const HotjarTracking = () => {
  useEffect(() => {
    (function(h: Window, o: Document, t: string, j: string) {
      h.hj = h.hj || function (event: string, data?: Record<string, unknown>) {
        (h.hj!.q = h.hj!.q || []).push([event, data]);
      };
      h._hjSettings = { hjid: 5184105, hjsv: 6 };

      const headElement = o.getElementsByTagName('head')[0];
      const scriptElement = o.createElement('script');
      scriptElement.async = true;
      scriptElement.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;

      if (headElement) {
        headElement.appendChild(scriptElement);
      }
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
  }, []);

  return null;
};

export default HotjarTracking;
