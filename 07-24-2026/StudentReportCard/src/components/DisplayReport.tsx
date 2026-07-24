type DisplayReportProps = {
  name: string;
  marks: number;
};

function DisplayReport({ name, marks }: DisplayReportProps) {
  if (name === "") {
    return <p>Please enter student details.</p>;
  }

  return (
    <div>
      <h2>Report</h2>

      <p>Name: {name}</p>
      <p>Marks: {marks}</p>

      {marks >= 50 ? (
        <h3 style={{ color: "green" }}>Result: PASS</h3>
      ) : (
        <h3 style={{ color: "red" }}>Result: FAIL</h3>
      )}
    </div>
  );
}

export default DisplayReport;