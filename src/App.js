import "./App.css";

import { StoreProvider, createStore } from "easy-peasy";

import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import model from "./model";

const store = createStore(model);
const App = () => {
  return (
    <StoreProvider store={store}>
      <div className="container">
        <Todos />
        <AddTodo />
      </div>
    </StoreProvider>
  );
};

export default App;
