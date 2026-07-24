import { useState } from "react";
import InputDetails from "./components/InputDetails";
import DisplayReport from "./components/DisplayReport";

function App() {
  const [name, setName] = useState("");
  const [marks, setMarks] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Report Card</h1>

      <InputDetails
        name={name}
        marks={marks}
        onNameChange={setName}
        onMarksChange={setMarks}
      />

      <hr />

      <DisplayReport
        name={name}
        marks={marks}
      />
    </div>
  );
}

export default App;