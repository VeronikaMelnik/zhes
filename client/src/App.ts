import './App.css';


function App() {

  const app = document.getElementById("app");
  const p = document.createElement("p");
  p.textContent = "WORKING";

  return (
    app?.appendChild(p)
  );
}

export default App;
