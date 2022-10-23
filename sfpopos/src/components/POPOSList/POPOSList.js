// src/POPOSList.js
import data from "/Users/salocohen/dev/courses/FEW/first-react/sfpopos/src/sfpopos-data.json";
import POPOSSpace from "../POPOSSpace/POPOSSpace.js";
import "./POPOSList.css";
import { useState } from "react";

function POPOSList() {
  const [query, setQuery] = useState("");
  const spaces = data
    .filter(
      (obj) =>
        obj.title.toLowerCase().includes(query) ||
        obj.address.toLowerCase().includes(query)
    )
    .map(({ title, address, images, hours }, i) => {
      //const spaces = data.map(({ title, address, images, hours }, i) => {
      return (
        <div className="POPOSLIST">
          <POPOSSpace
            id={i}
            key={title}
            name={title}
            address={address}
            image={images[0]}
            hours={hours}
          />
        </div>
      );
    });

  return (
    <div className="POPOSList">
			<form>
				<input
					value={query}
					placeholder="search"
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
			{spaces}
    </div>
  )
}

export default POPOSList;
