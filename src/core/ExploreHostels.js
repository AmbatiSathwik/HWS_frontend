import React from "react";
import ExplorePage from "./explore/ExplorePage";
import Base from "./Base";

export default function ExploreHostels() {
  return (
    <Base title="Hostels">
      <div>
        <ExplorePage option={0} />
      </div>
    </Base>
  );
}
