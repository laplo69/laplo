import { useEffect, useState } from "react";
import "./App.css";
import t from "./t.json";
import { BiSolidArrowToTop } from "react-icons/bi";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Vô hiệu hóa chuột phải và tổ hợp phím xem mã nguồn
    document.addEventListener("contextmenu", (event) => event.preventDefault());
    document.onkeydown = function (e) {
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && e.keyCode === "I".charCodeAt(0)) || // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.keyCode === "J".charCodeAt(0)) || // Ctrl+Shift+J
        (e.ctrlKey && e.keyCode === "U".charCodeAt(0)) // Ctrl+U
      ) {
        return false;
      }
    };

    return () => {
      // Dọn dẹp khi component bị unmount
      document.removeEventListener("contextmenu", (event) =>
        event.preventDefault()
      );
      document.onkeydown = null;
    };
  }, []);

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add scroll event listener
  window.addEventListener("scroll", handleScroll);

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
      {isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <BiSolidArrowToTop size={30} />
        </button>
      )}
    </div>
  );
}

export default App;
