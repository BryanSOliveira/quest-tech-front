import Header from './components/Header';
import Home from './components/Home';
import Modal from './components/Modal';

import './index.css';

function App() {
 
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Modal id="user-account" />
    </>
  )
}

export default App;
