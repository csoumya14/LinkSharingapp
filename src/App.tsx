import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ThemeWrapper from './theme/ThemeWrapper';
import { NavBar } from './components/Organisms/NavBar/NavBar';

const App = () => {
  return (
    <ThemeWrapper>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/add-links" />} />
          <Route path="/add-links" element={''} />
          <Route path="/profile" element={''} />
          <Route path="/preview" element={''} />
        </Routes>
      </Router>
    </ThemeWrapper>
  );
};

export default App;
