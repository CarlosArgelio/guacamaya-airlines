import { GuacamayaProvider } from "./context";
import { Home } from "./pages";

function App() {
  return (
    <>
      <GuacamayaProvider>
        <Home />
      </GuacamayaProvider>
    </>
  );
}

export default App;
