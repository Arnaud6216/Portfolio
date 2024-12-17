import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Book from "./pages/Book/Book";
import { Provider } from "./services/context";

function App() {
  return (
    <>
    <Provider >
      <Navbar />
      <Book />
      </Provider>
    </>
  );
}

export default App;
