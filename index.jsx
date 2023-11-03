import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from "./components/Main"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Toggle from "./components/Toggles/Toggle"

function App() {
  return (
    <>
      <Toggle>
        <NavBar />
        <Main />
        <Footer />
      </Toggle>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
