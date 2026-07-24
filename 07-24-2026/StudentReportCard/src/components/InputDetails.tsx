type InputDetailsProps = {
  name: string;
  marks: number;
  onNameChange: (value: string) => void;
  onMarksChange: (value: number) => void;
};

function InputDetails({
  name,
  marks,
  onNameChange,
  onMarksChange,
}: InputDetailsProps) {
  return (
    <div>
      <h2>Student Details</h2>

      <label>Name</label>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
      />

      <br />
      <br />

      <label>Marks</label>
      <br />
      <input
        type="number"
        value={marks}
        onChange={(e) => onMarksChange(Number(e.target.value))}
      />
    </div>
  );
}

export default InputDetails;