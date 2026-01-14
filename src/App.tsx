import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminConsole from './pages/AdminConsole';
import InvestmentPage from './pages/InvestmentPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import ProductDetailPage from './pages/ProductDetailPage';
import NotFound from './NotFound';
import { ContentProvider } from './contexts/ContentContext';
import './globals.css';
function App() {
  return (
    <ContentProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/investment" element={<InvestmentPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/admin" element={<AdminConsole />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ContentProvider>
  );
}
export default App;