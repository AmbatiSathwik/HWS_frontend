import { Carousel } from "react-carousel-minimal";

function App() {
  const data = [
    {
      image:
        "/src/assets/images/hosteloffice.jpg",
      caption: "Welcome to NITC HOSTELS",
    },
    {
      image:
        "/src/assets/images/ahostel1.png",
      caption: "A-Hostel",
    },
    {
      image:
        "/src/assets/images/bhostel.jpg",
      caption: "B-Hostel",
    },
    {
      image:
        "/src/assets/images/chostel.jpg",
      caption: "C-Hostel",
    },
    {
      image:
        "/src/assets/images/dhostel.jpg",
      caption: "D-Hostel",
    },
    {
      image:
        "/src/assets/images/ehostel.jpg",
      caption: "E-Hostel",
    },
    {
      image:
        "/src/assets/images/fhostel.jpg",
      caption: "F-Hostel",
    },
    {
      image:
        "/src/assets/images/ghostel.jpg",
      caption: "G-Hostel",
    },
    {
      image:
        "/src/assets/images/pg1hostel.jpg",
      caption: "PG-1 Hostel",
    },
    {
      image:
        "/src/assets/images/pg2hostel.jpg",
      caption: "PG-2 Hostel ",
    },
    {
      image:
        "/src/assets/images/mbh1.png",
      caption: "MBH-1 Hostel ",
    },
    {
      image:
        "/src/assets/images/mbh2.png",
      caption: "MBH-2 Hostel",
    },
    {
      image:
        "/src/assets/images/ladies.jpg",
      caption: "Ladies Hostel ",
    },
    {
      image:
        "/src/assets/images/mba.png",
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
        captionPosition="center"
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
