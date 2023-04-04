import React, { useState } from "react";
import Image1 from "../assets/Apple.jpg";
import Image2 from "../assets/banana.webp";
import Image3 from "../assets/AppleBananaShake.jpeg";
import Image4 from "../assets/strawberry.webp";
// reusable Dropdown Component
function Dropdown(props) {
  const handleOptionChange = (event) => {
    props.setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select value={props.selectedOption} onChange={handleOptionChange}>
        {props.options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function Home() {
  const Left1DDl = ["Apple", "Strawberry"];
  const Left1DD2 = ["Banana", "Apple"];
  const RightDDL = ["AppleBananashake", "StrawberryShake"];
  const [selectedOption, setSelectedOption] = useState(initialValue(Left1DDl));
  const [selectedOption2, setSelectedOption2] = useState(
    initialValue(Left1DD2)
    );
  const [selectedOption3, setSelectedOption3] = useState(
    initialValue(RightDDL)
    );
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  const [count3, setCount3] = useState(1);
  
  function initialValue(array) {
    return array[0];
  }

// Function to loop through Image
  function generateImage(imageUrl, n) {
    const imageArray = [];
    for (let i = 0; i < n; i++) {
      imageArray.push(
        <img
          src={imageUrl}
          alt={`Image ${i + 1}`}
          key={i}
          style={{ height: "100px", width: "100px" }}
        />
      );
    }
    return imageArray;
  }

  // reusable Count button
  function Buttons(props) {
    const handleButtonClick = (num) => {
      props.setValue(num);
      console.log(num);
    };

    const elementsArray = [];

    for (let i = 1; i <= props.buttons; i++) {
      elementsArray.push(<div key={i}> {i}</div>);
    }

    return (
      <div>
        {elementsArray.map((option, i) => (
          <button key={i} onClick={() => handleButtonClick(i + 1)}>
            {option}
          </button>
        ))}
      </div>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
        margin: "0px !important ",
      }}
    >
      <div style={{ padding:"20px", border: "1px solid #333" }}>
        Left side
        <div style={{ display: "flex" }}>
          <div>left side 1</div>
          <div>
            <Dropdown
              options={Left1DDl}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div>Count: </div>
          <Buttons buttons="4" setValue={setCount1} />
        </div>
        <div style={{fontSize: "30px"}}> + </div>
        <div style={{ display: "flex" }}>
          <div>left side 1</div>
          <div>
            <Dropdown
              options={Left1DD2}
              selectedOption={selectedOption2}
              setSelectedOption={setSelectedOption2}
            />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div>Count: </div>
          <Buttons buttons="4" setValue={setCount2} />
        </div>
        <hr />
        <div style={{ display: "flex" }}>
          <div>left side 1</div>
          <div>
            <Dropdown
              options={RightDDL}
              selectedOption={selectedOption3}
              setSelectedOption={setSelectedOption3}
            />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div>Count: </div>
          <Buttons buttons="4" setValue={setCount3} />
        </div>
      </div>
      <div style={{ display: "flex", marginTop: "10vh" }}>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "25vw",
            textAlign: "center",
          }}
        >
          {selectedOption === "Apple" ?  generateImage(Image1, count1) : generateImage(Image4, count1) }
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "25vw",
            textAlign: "center",
          }}
        >
          {selectedOption2 === "Banana" ?  generateImage(Image2, count2) : generateImage(Image1, count2) }
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "25vw",
            textAlign: "center",
          }}
        >
          {generateImage(Image3, count3)}
        </div>
      </div>
    </div>
  );
}
export default Home;
