const ADDBUTTON = document.getElementById("btnToAddToMap");
const DISPLAYBUTTON = document.getElementById("btnDisplayMap");
let job = new Map();

ADDBUTTON.onclick = function() {
  const name = document.getElementById("name");
  const task = document.getElementById("tasks");
  job.set(tasks.value, name.value);
  name.value = "";
  tasks.value = "";
};

console.log(job);

DISPLAYBUTTON.onclick = function() {
  let out = "";
  for (let x of job.entries()) {
    out += x[0] + ": " + x[1];
    out += "<br/>";
  }
  document.getElementById("result").innerHTML = out;
};
