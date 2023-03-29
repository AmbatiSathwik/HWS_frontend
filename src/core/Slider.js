import { Carousel } from "react-carousel-minimal";

function App() {
  const data = [
    {
      image:
        "https://drive.google.com/uc?export=view&id=1lVEYFT0xaYf5rDWBYEaBDbJ0klhIEpL4",
    },
    {
      image:
        "https://drive.google.com/uc?export=view&id=1g2tiLjZ5UTGSZ-VOBweSQMrIiSVkQtLV",
      caption: "A-Hostel",
    },
    {
      image:
        "https://drive.google.com/uc?export=view&id=1bei2rywheZdYJTd7z0DKyLaSnByymFzi",
      caption: "B-Hostel",
    },
    {
      image:
        "https://drive.google.com/uc?export=view&id=1ccLSmtbAVpe160lzTwPOnz9d7MYb0izc",
      caption: "C-Hostel",
    },
    {
      image:
        "https://drive.google.com/uc?export=view&id=1d8wZ2Xe1RbieTr1EmJHpUl2cMf1LQOBF",
      caption: "D-Hostel",
    },
    {
      image:
        "https://drive.google.com/uc?export=view&id=1dlPdSHHiew8JeAzx8XFJzvwcAED3dxqQ",
      caption: "E-Hostel",
    },
    {
      image:
        "https://drive.google.com/uc?export=view&id=1e0mGC0cWEwKEUKejp21WiSRx3ETKCm3c",

      caption: "F-Hostel",
    },
    {
      image:
        "https://drive.google.com/uc?export=view&id=1uBabfxVaB1mNBmiKkwIfESN8B00JGsg7",
      caption: "G-Hostel",
    },
    {
      image:
        "https://drive.google.com/uc?export=view&id=1eWfYGIloovAsragz86K7n284r5AG-yvZ",
      caption: "PG-1 Hostel",
    },
    {
      image:
        "https://drive.google.com/uc?export=view&id=1f5JgrVsKHz0SbOI8BsI0926dlp2aZH4Q",

      caption: "PG-2 Hostel ",
    },
    {
      image:
        "https://drive.google.com/uc?export=view&id=1uBabfxVaB1mNBmiKkwIfESN8B00JGsg7",
      caption: "MBH-1 Hostel ",
    },
    {
      image:
        "https://drive.google.com/uc?export=view&id=1u6kSEopoXppWGaVFEac2TzOPL6XaXqRY",

      caption: "MBH-2 Hostel",
    },
    {
      image:
        "https://drive.google.com/uc?export=view&id=1uBabfxVaB1mNBmiKkwIfESN8B00JGsg7",
      caption: "Ladies Hostel ",
    },
    {
      image:
        "https://drive.google.com/uc?export=view&id=1uBabfxVaB1mNBmiKkwIfESN8B00JGsg7",
      caption: "MBA Hostel ",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="App">
      <Carousel
        data={data}
        time={1000}
        width="100%"
        height="60vh"
        captionStyle={captionStyle}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideImageFit="cover"
        style={{
          textAlign: "center",
          maxWidth: "100%",
          maxHeight: "500px",
        }}
      />
    </div>
  );
}

export default App;
