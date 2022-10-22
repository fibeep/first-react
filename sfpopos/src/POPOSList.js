// src/POPOSList.js

import POPOSSpace from "./POPOSSpace";
import "./POPOSList.css";


function POPOSList() {
  return (
    <div className="POPOSList">
      <POPOSSpace
        name="50 California Street"
        address="50 California St."
        image="50-california-st.jpg"
      />
      <POPOSSpace name="100-pine" address="100-pine" image="100-pine.jpg" />{" "}
      <POPOSSpace name="101" address="101" image="101-california.jpg" />{" "}
      <POPOSSpace
        name="50 California Street"
        address="50 California St."
        image="50-california-st.jpg"
      />{" "}
      <POPOSSpace
        name="50 California Street"
        address="50 California St."
        image="50-california-st.jpg"
      />
      <POPOSSpace
        name="50 California Street"
        address="50 California St."
        image="50-california-st.jpg"
      />
    </div>
  );
}

export default POPOSList;
