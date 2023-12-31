import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { privatPages, publicPages } from './pages/routes';
import { useSelector } from 'react-redux';

function App() {
  const isAuth = useSelector(state => state.user.auth)
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header/>
        <Routes>
              {
                isAuth ?
                <>
                {privatPages.map(route => 
                  <Route 
                    exact={route.exact} 
                    path={route.path} 
                    element={route.component}
                    key={route.path}
                  />
                )}
                </>
                :
                <>
                {publicPages.map(route => 
                  <Route 
                    exact={route.exact} 
                    path={route.path} 
                    element={route.component}
                    key={route.path}
                  />
                )}
                </>
              }
            </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
