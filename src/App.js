import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
import { render } from "react-dom";
import { StrictMode, useState } from "react";
import ThemeContext from "./ThemeContext";
import SearchParams from "./SearchParams";

const App = () => {
  const theme = useState("darkblue");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <div>
          <BrowserRouter>
            <header>
              <Link to="/">Adopt Me!</Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
