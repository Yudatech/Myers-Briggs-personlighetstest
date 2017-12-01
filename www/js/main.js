
//Slider
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
}

//btn-next => ID++
//default ID=1
//connect question to ID


class qPage {
  constructor(id, q, a1, a2) {
    this.id = id;
    this.q = q;
    this.a1 = a1;
    this.a2 = a2;
  }
  showQ(id){
    let i=0;
    for(let question in questions){
        $('#myID').append(`${questions.id}`);        
        $('#myQuestion').append(`${questions.q}`);
        $('#a1').append(`${a[0]}`);
        $('#a1').append(`${a[1]}`);
      }
      i++;
    }  
  }

$.getJSON('/json/question.json', )


