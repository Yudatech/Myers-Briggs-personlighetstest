let result;

JSON._load('type.json')
  .then((data) => {
    result = data.result;
    document.getElementById("showResult").innerHTML = result;
  })

