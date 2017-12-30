class Result extends Base {
    constructor() {
        super();
    }

    init(config){
      this.questionIds=config.questionIds;
      this.score=config.score;
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