import React, { useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Hostels from "../Hostels";
import Messpages from "../../mess/messpage";

let hostels = Array(
  "ahostel",
  "bhostel",
  "chostel",
  "dhostel",
  "ehostel",
  "fhostel",
  "pg1hostel"
);
let mess = Array(
  "amess",
  "bmess",
  "cmess",
  "dmess",
  "emess",
  "fmess",
  "gmess",
  "pg1mess",
  "lhmess"
);

export default function ExplorePage({ option }) {
  let array = [];
  if (option === 1) {
    array = mess;
  } else {
    array = hostels;
  }

  const [verticalActive, setVerticalActive] = useState(array[0]);

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };

  return (
    <>
      <div>
        {array.map((x, index) => {
          console.log(x);
        })}
      </div>
      <MDBRow>
        <MDBCol size="2" className="vertical-tab-style">
          <MDBTabs className="flex-column text-center">
            {array.map((x, index) => {
              return (
                <MDBTabsItem key={index}>
                  <MDBTabsLink
                    onClick={() => handleVerticalClick(x)}
                    active={verticalActive === x}
                  >
                    {x.toUpperCase()}
                  </MDBTabsLink>
                </MDBTabsItem>
              );
            })}
          </MDBTabs>
        </MDBCol>
        <MDBCol size="10">
          <MDBTabsContent>
            {array.map((x, index) => {
              return (
                <div>
                  {verticalActive === x && (
                    <MDBTabs show={verticalActive === x}>
                      {option === 0 && <Hostels name={x} />}
                      {option === 1 && <Messpages name={x} />}
                    </MDBTabs>
                  )}
                </div>
              );
            })}
          </MDBTabsContent>
        </MDBCol>
      </MDBRow>
    </>
  );
}
