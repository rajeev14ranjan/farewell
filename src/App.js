import Home from "./Home";
import "./App.css";

function App() {
  //removing logo of hosting website.
  (function removeLogo() {
    setTimeout(() => {
      const aElt = document.querySelectorAll("a");
      for (let i = 0; i < aElt.length; i++) {
        if (aElt[i].title.includes("Hosted on free")) {
          aElt[i].remove();
          break;
        }
      }
    }, 100);
  })();

  return (
    <div className="app">
      <Home />
    </div>
  );
}

export default App;
