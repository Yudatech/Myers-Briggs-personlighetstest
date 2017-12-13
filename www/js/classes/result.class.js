class Result extends Base {
    constructor(sumSources, app) {
        super();
        this.app = app;
        this.sumSources = [];
    }

    // load sumSources from JSON file
  loadSumSources() {
    return JSON._load('question').then((data) => {
      for (let sources of data.sumSources) {
        this.sumSources.push(new Result(sumSources, this));
      }
    });
  }
  calResult() {
    let ieResult = [];
    for (let i of introvertExtrovert.questionIds) {
      ieResult.push(findQbyID(i).score);
    }
    let sumIE=0;
    for (let j of ieResult){
      sumIE= sumIE + ieResult[j];
    }
    return sumIE;
  }


  findQbyID(id) {
    for (let q of this.q_and_a_s) {
      if (id == q.id) {
        return q;
      }
    }
    return null;
  }
}