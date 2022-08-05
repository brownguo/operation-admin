import IndexRouter from "./router/IndexRouter";
import {Provider} from "react-redux";
import store from "./redux/store";
import './App.css';

//第一步先引入store，用redux里的Provider包一下。
function App() {
  return (
        <Provider store={store}>
            <IndexRouter></IndexRouter>
        </Provider>
  );
}

export default App;
