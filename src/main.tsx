import { createRoot } from 'react-dom/client';
import App from './App';

createRoot((document.getElementById('root') as HTMLElement) || null).render(
  <>
    <App />
  </>
);
