class App extends Base {

  constructor() {
    super();
    //this.questions = [];
    this.q_and_a_s = [];
    this.currentQ = 1;
    this.finished = 0;
    this.sumSources=[];
    this.conditions=[];
  }

  render(el) {
    // Call parent class method
    super.render(el);
    // Also save the JSON after each render
    // seems to be a bug in jsonflex that destroys/corrupts the data it is saving
    // workaround for now let cQ etc..
    //let cQ = this.currentQ;
    JSON._save('score_and_id', { app: this });
    //this.currentQ = cQ;
  }


  // load questions from JSON file
  loadQ() {
    return JSON._load('question').then((data) => {
      //this.questions = data.questions;
      for (let question of data.questions) {
        let q_inst = new QandA();
        q_inst.init(question);
        this.q_and_a_s.push(q_inst);
      }

      for (let question of data.questions) {
        let sum_inst = new Result();
        sum_inst.init(sumSources);
        this.sumSources.push(sum_inst);
      }

      for (let resultCondition of data.resultConditions) {
        let condi_inst = new Result();
        condi_inst.init(resultConditions);
        this.conditions.push(condi_inst);
      }


    });
  }



  findQbyID(id) {
    for (let q of this.q_and_a_s) {
      if (id == q.id) {
        return q;
      }
    }
    return null;
  }



  next() {
    let nextID = this.currentQ.id;
    if (nextID < this.q_and_a_s.length) {
      nextID++;
      this.currentQ = this.findQbyID(nextID);
      this.render('main');
    } else if (nextID = this.q_and_a_s.length) {
      console.log('result');
      // this.finished = this.finish();
      //console.log(this.finished);
      // check if all the score are larger than 0;
      // calculate score result according to load from two json files
      // render type results according to score 
      //checkAndResult(); 
    }
  }


  // Pageation
  click(element, instances) {

    if (element.hasClass('next')) {
      let value = $('#myRange').val();
      this.currentQ.score = value / 1;
      this.next();
    }
    if (element.hasClass('page-link')) {
      let id = element.attr('qid') / 1;
      this.currentQ = this.findQbyID(id);
      this.render('main');
    }
  }

  // Slider control
  change(element, instances) {
    if (element.hasClass('slider')) {
      let value = $('#myRange').val();
      this.currentQ.score = value / 1;
      this.render('main');
    }


  }

  groupScore(){
   

  }

  findType(){

  }

  // finish(){
  //   let positive=[];
  //   for(let i=0; i<this.q_and_a_s.length; i++){
  //     if(!this.q_and_a_s[i].score==-1){
  //       positive.push().length;

  //     }
  //   }

  // }


  template() {
    return `
        <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="card ">
              <h4 class="card-header">Personlighetstest</h4>
              <div class="card-body">
                <h4 class="card-title">
                  <span id="myId">${this.currentQ.id}</span>
                  <span id="myQuestion">${this.currentQ.q}</span>
                  
                </h4>
                <div class="row justify-content-between answers">
                  <div class="col-6" id="a1">
                  ${this.currentQ.getA1()}
                  </div>
                  <div class="col-6" id="a2">
                  ${this.currentQ.getA2()}
                  </div>
                </div>
                <div id="slidecontainer">
                  <input type="range" min="0" max="11" value="${this.currentQ.score == -1 ? 6 : this.currentQ.score}" class="slider" id="myRange">
                  <br/>
                  <p class="slider_value">Value: 
                  <span>
                  ${this.currentQ.score == -1 ? 6 : this.currentQ.score}
                </span>
                  </p>
                  <div class="row">
                    <div class="col-xs-12 col-6">
                      
                      <div class="progress">
                        <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: ${this.currentQ.id / this.q_and_a_s.length * 100}%" aria-valuenow="${this.currentQ.id / this.q_and_a_s.length * 100}%" aria-valuemin="0"
                          aria-valuemax="100">${Math.round(this.currentQ.id / this.q_and_a_s.length * 100)}%</div>
                      </div>
                
                      <p class="progress_text"></p>
                 
                    </div>
                    <div class="col-xs-12 col-6">
                      <a href="#" class="btn btn-outline-warning float-right next" >Nästa</a>
                    </div>
                  </div>
                  <div class="row page">

                  <div class="col align-self-center">
                    <ul class="pagination   pagination-sm ">
                    ${this.q_and_a_s.html()}
                    </ul>
                  </div>
                  

                </div>
                <div class="row it">
                     <p class="font-italic">Click "Next" to save your result!</p>
                  </div>
  
  
                </div>
              </div>
            </div>
          </div>
        </div>
       
  
      </div>
        `;
  }

  template2() {
    return `<h1>this is result</h1>`
  }






}







