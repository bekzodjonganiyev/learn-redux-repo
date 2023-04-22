import { useState } from "react";
import { Provider } from "react-redux";

import "./App.css";

import CakeCnatiner from "./components/CakeCnatiner";
import HooksCakeContainer from "./components/HooksCakeContainer";

import store from "./redux/store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeCnatiner />
      </div>
    </Provider>
  );
}

export default App;
