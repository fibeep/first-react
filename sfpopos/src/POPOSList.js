// src/POPOSList.js
import data from "./sfpopos-data.json";
import POPOSSpace from "./POPOSSpace";
import "./POPOSList.css";

function POPOSList() {
const spaces = data.map(( { title, address, images } ) => {
  return (
    <POPOSSpace
      name={title}
      address={address}
      image={images[0]}
    />
  )
});

  return <div className="POPOSList">{spaces}</div>;
}

export default POPOSList;
