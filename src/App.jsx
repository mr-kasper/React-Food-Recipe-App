import { Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Details from './pages/Details';

function App() {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route index path="/React-Food-Recipe-App/" element={<Home />} />
          <Route
            path="/React-Food-Recipe-App/favorites"
            element={<Favorites />}
          />
          <Route
            path="/React-Food-Recipe-App/recipe-item/:id"
            element={<Details />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
