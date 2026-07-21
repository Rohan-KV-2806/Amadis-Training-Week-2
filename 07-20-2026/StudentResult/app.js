
function calculate_grade(){
  const name = document.getElementsByName("name")[0].value;
  const eng = Number(document.getElementsByName("english")[0].value);
  const maths = Number(document.getElementsByName("maths")[0].value);
  const sci = Number(document.getElementsByName("science")[0].value);
  const soc = Number(document.getElementsByName("social")[0].value);
  const lang = Number(document.getElementsByName("language")[0].value);
  let total = eng + maths + sci + soc + lang;
  let avg = total / 5;
  let grade;
  if (avg >= 90) grade = "A";
  else if (avg >= 80) grade = "B";
  else if (avg >= 70) grade = "C";
  else if (avg >= 60) grade = "D";
  else grade = "F";
  let remark;
  switch (grade) {
    case "A": remark = "Excellent"; break;
    case "B": remark = "Good"; break;
    case "C": remark = "Average"; break;
    case "D": remark = "Below Average"; break;
    case "F": remark = "Need Improvement"; break;
    default: remark = "Invalid";
  }
  document.getElementById("result").innerHTML =
    "Student: " + name + "<br>" +
    "Marks: " + total + "<br>" +
    "Grade: " + grade;
}