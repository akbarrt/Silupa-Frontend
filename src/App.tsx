import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppShell } from './components/AppShell';
import { Dashboard } from './pages/Dashboard';
import { Inventory } from './pages/Inventory';
import { Distribution } from './pages/Distribution';
import { Reports } from './pages/Reports';
import { Settings } from './pages/Settings';
import { About } from './pages/About';
import { HowItWorks } from './pages/HowItWorks';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppShell />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="distribution" element={<Distribution />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
          <Route path="about" element={<About />} />
          <Route path="how-it-works" element={<HowItWorks />} />
        </Route>
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
