import logo from './logo.svg';
import './App.css';

import MainVideoPage from './pages/MainVideoPage';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label>Youtube-React</label>
        <Search/>
      </header>
      <main>
        <MainVideoPage/>
      </main>
      <footer className="footer">
        Código escrito por Bernardo Carvalho - kregimor@gmail.com
      </footer>
    </div>
  );
}

export default App;
