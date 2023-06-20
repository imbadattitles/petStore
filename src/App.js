import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { pages } from './pages/routes';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header/>
        <Routes>
              {pages.map(route => 
                <Route 
                  exact={route.exact} 
                  path={route.path} 
                  element={route.component}
                  key={route.path}
                />
              )}
            </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
