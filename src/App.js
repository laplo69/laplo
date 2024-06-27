import logo from "./logo.svg";
import "./App.css";
import data from "./data.json";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "grid",
        justifyItems: "center",
        gap: 10,
        width: "100%",
      }}
    >
      {data.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt="image.id"
          style={{ width: "100%", maxWidth: 500 }}
        />
      ))}
    </div>
  );
}

export default App;
