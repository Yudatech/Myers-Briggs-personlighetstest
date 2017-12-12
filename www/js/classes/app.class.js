class App extends Base {

  constructor() {
    super();
    //this.questions = [];
    this.q_and_a_s = [];
    this.currentQ = 1;
  }

  render(el) {
    // Call parent class method
    super.render(el);
    // Also save the JSON after each render
    // seems to be a bug in jsonflex that destroys/corrupts the data it is saving
    // workaround for now let cQ etc..
    let cQ = this.currentQ;
    JSON._save('score_and_id', { app: this });
    this.currentQ = cQ;
  }


  // load questions from JSON file
  loadQ() {
    return JSON._load('question').then((data) => {
      //this.questions = data.questions;
      for (let question of data.questions) {
        this.q_and_a_s.push(new QandA(question));
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

  showID() {
    var idList = [];
    for (var i = 0; i < this.q_and_a_s.length; ++i) {
      idList.push(this.q_and_a_s.length[i][id]);
      return idList;
    }
  }


  next() {
    let nextID = this.currentQ.id;
    console.log(nextID, this.currentQ)
    nextID++;
    this.currentQ = this.findQbyID(nextID);
    this.render('main');
  }


  // Pageation
  click(element, instances) {

    if (element.hasClass('next')) {
      let value = $('#myRange').val();
      this.currentQ.score = value;
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
      this.currentQ.score = value;
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
                  <span id="myId">${this.currentQ.id}</span>
                  <span id="myQuestion">${this.currentQ.q}</span>
                  
                </h4>
                <div class="row justify-content-between answers">
                  <div class="col-4" id="a1">
                  ${this.currentQ.a1}
                  </div>
                  <div class="col-4" id="a2">
                  ${this.currentQ.a2}
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
                        <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: ${this.currentQ.id / 24 * 100}%" aria-valuenow="${this.currentQ.id / 24 * 100}" aria-valuemin="0"
                          aria-valuemax="100">${Math.round(this.currentQ.id / 24 * 100)}%</div>
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
              
            <li class="page-item">
            <a class="page-link text-success" qid="7" href="#">7</a>
            </li>
            <li class="page-item">
            <a class="page-link text-success" qid="8" href="#">8</a>
            </li>
            <li class="page-item">
            <a class="page-link text-success" qid="9" href="#">9</a>
            </li>
            <li class="page-item">
            <a class="page-link text-success" qid="10" href="#">10</a>
            </li>
              
            <li class="page-item">
            <a class="page-link text-success" qid="11" href="#">11</a>
            </li>
            <li class="page-item">
            <a class="page-link text-success" qid="12" href="#">12</a>
            </li>
            <li class="page-item">
            <a class="page-link text-success" qid="13" href="#">13</a>
            </li>
            <li class="page-item">
            <a class="page-link text-success" qid="14" href="#">1</a>
            </li>
              

              
              
    
             
            </ul>
          </div>
        </div>
  
      </div>
        `;
  }
  template2() {
    return `
    <li class="page-item">
    <a class="page-link text-success" qid="${this.q_and_a_s.id}" href="#">${this.q_and_a_s.id}</a>
    </li>
    `;
  }



}






