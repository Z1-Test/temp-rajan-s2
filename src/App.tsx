import { Toaster } from '@/components/ui/sonner';
import Router from '@/router';

function App() {
  return (
    <>
      <Router />
      <Toaster position="top-right" richColors />
    </>
  );
}

export default App;
