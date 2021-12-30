import "./App.css";
import UserContextProvider from "./context/UserContext";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <AppRouter />
      </UserContextProvider>
    </div>
  );
}

export default App;
