class QandA extends Base{
    constructor(question) {
        super();
        this.id = question.id;
        this.q = question.q;
        this.a1 = question.a[0];
        this.a2 = question.a[1];
        this.score = -1;
    }

}