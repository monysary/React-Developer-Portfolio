import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";

function App() {
  return (
    <div className="bg-[#2C3039]">
      <Header>
        <Nav />
      </Header>
      <Home />
    </div>
  );
}

export default App;
