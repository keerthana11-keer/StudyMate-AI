function generatePlan(){

let name=document.getElementById("name").value;
let subjects=document.getElementById("subjects").value;

document.getElementById("result").innerHTML =
`
<h3>Hello ${name} 👋</h3>

<h4>Your AI Study Plan:</h4>

<p>📌 Morning: Study ${subjects}</p>
<p>📌 Afternoon: Practice and revision</p>
<p>📌 Evening: Solve questions</p>

<p>✨ Stay consistent and achieve your goals!</p>
`;
}