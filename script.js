var factList = [
  "Exposure to discrimination can lead to internalized prejudices.", 
  "Discimination can be seen in education becuase sometimes it creates negative stereotypes about minority groups.", "Discrimination affects peoples opprotunities and their well-being."
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
