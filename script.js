var count = 0;
var a = 1;
var outCount = [1];
let listRes = document.getElementById("result");

while(count <= 20){
  outCount.push(a);
  a += outCount[count];
  count++;
};

outCount.shift();

function createList(outCount) {
for (var f = 0; f < outCount.length; f++) {
  var itemZ = outCount[f];
  var listItem = document.createElement("LI");
  listItem.textContent = itemZ;
  listRes.appendChild(listItem);
  }
};

createList(outCount);
