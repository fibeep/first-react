// src/POPOSList.js
import data from "/Users/salocohen/dev/courses/FEW/first-react/sfpopos/src/sfpopos-data.json";
import POPOSSpace from "../POPOSSpace/POPOSSpace.js";
import "./POPOSList.css";

function POPOSList() {
const spaces = data.map(( { title, address, images, hours }, i) => {
  return (
    <POPOSSpace
      id = {i}
      key={title}
      name={title}
      address={address}
      image={images[0]}
      hours={hours}
    />
  )
});

  return <div className="POPOSList">{spaces}</div>;
}

export default POPOSList;
