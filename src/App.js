import "./App.css";
import React, { useState } from "react";
import { Button } from "reactstrap";
import jsPDF from "jspdf";
import logo2 from "../src/image/a.png";
import logo3 from "../src/image/b.png";
import logo4 from "../src/image/d.png";
import logo5 from "../src/image/ab.png";

import MyFont from "../src/font/MyFont.TTF";

function App() {
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [input6, setInput6] = useState("");
  const [input7, setInput7] = useState("");
  const [input8, setInput8] = useState("");
  const [input9, setInput9] = useState("");
  const [input10, setInput10] = useState("");
  const [input11, setInput11] = useState("");
  const [input12, setInput12] = useState("");
  const [input13, setInput13] = useState("");
  const [input14, setInput14] = useState("");

  const onChange = (e) => {
    setInput(e.currentTarget.value);
    console.log(input);
  };
  const onChange2 = (e) => {
    setInput2(e.currentTarget.value);
    console.log(input2);
  };
  const onChange3 = (e) => {
    setInput3(e.currentTarget.value);
    console.log(input3);
  };
  const onChange4 = (e) => {
    setInput4(e.currentTarget.value);
    console.log(input4);
  };

  const onChange5 = (e) => {
    setInput5(e.currentTarget.value);
    console.log(input5);
  };
  const onChange6 = (e) => {
    setInput6(e.currentTarget.value);
    console.log(input6);
  };
  const onChange7 = (e) => {
    setInput7(e.currentTarget.value);
    console.log(input7);
  };
  const onChange8 = (e) => {
    setInput8(e.currentTarget.value);
    console.log(input8);
  };
  const onChange9 = (e) => {
    setInput9(e.currentTarget.value);
    console.log(input9);
  };

  const pdfGenerate = () => {
    const doc = new jsPDF("p", "px", "a4");
    doc.addImage(logo2, "PNG", 35, 10, 60, 60);
    doc.setFontSize(27);
    doc.setFont("Helvertica", "bold");
    doc.setTextColor("#696969");
    doc.text(33, 100, "Your reservation is confirmed");
    doc.setFontSize(23);
    doc.setTextColor("#363636");

    doc.text(310, 100, `#${input}`);
    doc.setFontSize(17);
    doc.setTextColor("#5f5f5f");
    doc.setFont("Helvertica", "normal");
    doc.text(35, 120, "You are exploring Miami...");
    doc.addImage(logo5, "PNG", 375, 395, 40, 40);

    doc.addImage(logo3, "PNG", 30, 130, 390, 250);

    doc.setFontSize(20);
    doc.setFont("Roman", "bolditalic");
    doc.text(35, 410, "Cozy SF Loft in Heart of City");
    doc.setFont("Helvertica", "bolditalic");
    doc.setFont("times", "bold");
    doc.setTextColor("gray");
    doc.text(35, 430, `Entire home/apt by ${input2}`);
    doc.setDrawColor("gray");
    doc.line(14, 450, 430, 450);

    // doc.setFont("courier", "bold"); güzel durdu
    doc.setFont("times", "bold");
    doc.setFontSize(17);
    doc.setTextColor("gray");
    doc.text(35, 480, `${input3}`);
    doc.text(35, 500, `${input4}`);
    doc.text(415, 480, `${input7}`, { align: "right" });
    doc.text(415, 500, `${input8}`, { align: "right" });
    doc.setFontSize(15);

    doc.text(415, 520, `${input6}`, { align: "right" });
    doc.text(35, 520, `${input5}`);

    doc.save("upisle.pdf");
  };
  return (
    <div>
      <div>
        <text>Reservation Code:</text>
        <input type="text" onChange={onChange} />
      </div>
      <div>
        <text>Customer Name:</text>
        <input type="text" onChange={onChange2} />
      </div>
      <div>
        <text>Start Day:</text>
        <input type="text" onChange={onChange3} />
      </div>
      <div>
        <text>Finish Day:</text>
        <input type="text" onChange={onChange7} />
      </div>
      <div>
        <text>Start Date:</text>
        <input type="text" onChange={onChange4} />
      </div>
      <div>
        <text>Finish Date:</text>
        <input type="text" onChange={onChange8} />
      </div>
      <div>
        <text>CheckIn Time:</text>
        <input type="text" onChange={onChange5} />
      </div>
      <div>
        <text>CheckOut Time:</text>
        <input type="text" onChange={onChange6} />
      </div>

      <h1>hamza</h1>
      <Button onClick={pdfGenerate}>DownloadPDF</Button>
    </div>
  );
}

export default App;
