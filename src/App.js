import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <SearchParams />
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
