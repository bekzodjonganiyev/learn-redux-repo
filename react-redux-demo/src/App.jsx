import { useState } from "react";
import { Provider } from "react-redux";

import "./App.css";

import CakeCnatiner from "./components/CakeCnatiner";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import ItemContainer from "./components/ItemContainer";
import UserConatiner from "./components/UserConatiner";

import store from "./redux/store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <div className="App">
        {/* <ItemContainer cake />
        <ItemContainer />
        <HooksCakeContainer />
        <CakeCnatiner />
        <IceCreamContainer /> */}
        <UserConatiner />
      </div>
    </Provider>
  );
}

export default App;
