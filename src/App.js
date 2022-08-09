import { Routes, Route } from "react-router-dom";
import { People } from "./components/content/People";
import { Home } from "./components/content/Home";
import "./App.css";
import { NavigationBar } from "./NavigationBar";
import { Person } from "./components/content/Person";
import Advice from "./components/content/Advice";
import { BrowserRouter } from "react-router-dom";
import { persons } from "../src/data/personaj";
import { Habit } from "./components/content/Habit";
import { Train } from "./components/content/Train";
function App() {
  return (
    <BrowserRouter>
      <NavigationBar />

      <div
        className="background px-3"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        <Routes>
          <Route exact path="/person/:id" element={<Person />} />
          <Route
            exact
            path="/train/:id"
            element={<Train persons={persons} />}
          />
          <Route exact path="/" element={<Home />} />

          <Route exact path="/people" element={<People />} />
          <Route exact path="/advice" element={<Advice />} />
          <Route exact path="/habit" element={<Habit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
