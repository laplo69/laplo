import { useEffect, useState } from "react";
import "./App.css";
import icon from "./icon.png";
import Menu from "./Components/menu";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [images, setImages] = useState([]);
  const [randomizedData, setRandomizedData] = useState([]);

  useEffect(() => {
    // const images = {};
    // function importAll(r) {
    //   r.keys().forEach((key) => (images[key] = r(key)));
    // }

    // importAll(require.context("./images", false, /\.(png|jpe?g|svg)$/));

    // const imageArray = Object.keys(images).map((key) => ({
    //   id: parseInt(key.replace("./", "").replace(".jpg", "")),
    //   src: images[key].default || images[key],
    // }));
    // console.log(imageArray);
    // setImages(imageArray);
    // const shuffled = [...imageArray].sort(() => Math.random() - 0.5);
    // setRandomizedData(shuffled);

    const imageFiles = [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "9.jpg",
      "10.jpg",
      "11.jpg",
      "12.jpg",
      "13.jpg",
      "14.jpg",
      "15.jpg",
      "16.jpg",
      "17.jpg",
      "18.jpg",
      "19.jpg",
      "20.jpg",
      "21.jpg",
      "22.jpg",
      "23.jpg",
      "24.jpg",
      "25.jpg",
      "26.jpg",
      "27.jpg",
      "28.jpg",
      "29.jpg",
      "30.jpg",
      "31.jpg",
      "32.jpg",
      "33.jpg",
      "34.jpg",
      "35.jpg",
      "36.jpg",
      "37.jpg",
      "38.jpg",
      "39.jpg",
      "40.jpg",
      "41.jpg",
      "42.jpg",
      "43.jpg",
      "44.jpg",
      "45.jpg",
      "46.jpg",
      "47.jpg",
      "48.jpg",
      "49.jpg",
      "50.jpg",
      "51.jpg",
      "52.jpg",
      "53.jpg",
      "54.jpg",
      "55.jpg",
      "56.jpg",
      "57.jpg",
      "58.jpg",
      "59.jpg",
      "60.jpg",
      "61.jpg",
      "62.jpg",
      "63.jpg",
      "64.jpg",
      "65.jpg",
      "66.jpg",
      "67.jpg",
      "68.jpg",
      "69.jpg",
      "70.jpg",
      "71.jpg",
      "72.jpg",
    ];

    const imageArray = imageFiles.map((fileName) => ({
      id: parseInt(fileName.replace(".jpg", "")),
      src: `https://laplo69.com/images/${fileName}`,
    }));

    setImages(imageArray);
    const shuffled = [...imageArray].sort(() => Math.random() - 0.5);
    setRandomizedData(shuffled);

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

  const handleRandom = () => {
    const shuffled = [...images].sort(() => Math.random() - 0.5);
    setRandomizedData(shuffled);
    scrollToTop();
  };

  const handleNewest = () => {
    const sortedImages = [...images].sort((a, b) => b.id - a.id);
    setRandomizedData(sortedImages);
    scrollToTop();
  };

  const handleOldest = () => {
    const sortedImages = [...images].sort((a, b) => a.id - b.id);
    setRandomizedData(sortedImages);
    scrollToTop();
  };

  const handleFavorite = () => {
    // const sortedByFavorite = [...data].sort((a, b) => b.likes - a.likes);
    // setData(sortedByFavorite);
  };

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
      <div
        style={{
          display: "grid",
          justifyItems: "center",
          gap: 10,
          width: "100%",
          maxWidth: 500,
        }}
      >
        <Menu
          onRandom={handleRandom}
          onNewest={handleNewest}
          onOldest={handleOldest}
          onFavorite={handleFavorite}
        />
        {randomizedData.map(
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
            {/* <BiSolidArrowToTop size={30} /> */}
            <img src={icon} style={{ width: 40, height: 40 }}></img>
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
