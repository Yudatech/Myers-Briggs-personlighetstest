class App extends Base {

    constructor() {
        super();
        this.questions = [];
        this.score = [];
        this.currentQ = 1;
    }

    render(el) {
        // Call parent class method
        super.render(el);
        // Also save the JSON after each render
        JSON._save('score_and_id', { app: this });
    }

    loadQ() {
        return JSON._load('question').then((data) => {
            this.questions = data.questions;
        });
    }



    //Slider
    sliderControl() {
        var slider = document.getElementById("myRange");
        var output = document.getElementById("demo");
        output.innerHTML = slider.value; // Display the default slider value

        // Update the current slider value (each time you drag the slider handle)
        slider.oninput = function () {
            output.innerHTML = this.value;
        }
    }

    click(element, instances) {
        if (element.hasClass('slider')) {
            let slider = $('#myRange').val();
            $('#demo').innerHRML = slider;
        }
        if (element.hasClass('next')) {
            this.currentQ++;
            this.render('main');
        }
        if(element.hasClass('page-link')){
            this.currentQ = element.attr('qid')/1;
            this.render('main');
        }

    }




    template() {
        return `
        <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="card ">
              <h4 class="card-header">Personlighetstest</h4>
              <div class="card-body">
                <h4 class="card-title">
                  <span id="myId">${this.currentQ}</span>
                  <span id="myQuestion">${this.questions[this.currentQ - 1].q}</span>
                  
                </h4>
                <div class="row justify-content-between answers">
                  <div class="col-4" id="a1">
                  ${this.questions[this.currentQ - 1].a[0]}
                  </div>
                  <div class="col-4" id="a2">
                  ${this.questions[this.currentQ - 1].a[1]}
                  </div>
                </div>
                <div id="slidecontainer">
                  <input type="range" min="0" max="11" value="12" class="slider" id="myRange">
                  <br/>
                  <p class="slider_value">Value:
                    <span id="demo"></span>
                  </p>
                  <div class="row">
                    <div class="col-xs-12 col-6">
                      
                      <div class="progress">
                        <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0"
                          aria-valuemax="100"></div>
                      </div>
                
                      <p class="progress_text"></p>
                 
                    </div>
                    <div class="col-xs-12 col-6">
                      <a href="#" class="btn btn-outline-warning float-right next" >Nästa</a>
                    </div>
                  </div>
  
  
  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col align-self-center">
            <ul class="pagination   pagination-sm ">
              
              <li class="page-item">
                <a class="page-link text-success" qid="1" href="#">1</a>
              </li>
              <li class="page-item">
              <a class="page-link text-success" qid="2" href="#">2</a>
            </li>
            <li class="page-item">
            <a class="page-link text-success" qid="3" href="#">3</a>
          </li>
          <li class="page-item">
          <a class="page-link text-success" qid="4" href="#">4</a>
        </li>
        <li class="page-item">
        <a class="page-link text-success" qid="5" href="#">5</a>
      </li>
      <li class="page-item">
      <a class="page-link text-success" qid="6" href="#">6</a>
    </li>
    
             
            </ul>
          </div>
        </div>
  
      </div>
        `;
    }

}