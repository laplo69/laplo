import "./App.css";
import t from "./t.json";

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
      {t.map(
        (image) =>
          image.src !== "" && (
            <img
              key={image.id}
              src={image.src}
              alt="image.id"
              style={{ width: "100%", maxWidth: 500 }}
            />
          )
      )}
    </div>
  );
}

export default App;
