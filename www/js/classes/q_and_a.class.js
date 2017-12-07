class QandA extends Base{
    constructor(obj) {
        super();
        this.id = obj.id;
        this.question = obj.q;
        this.a1 = obj.a[0];
        this.a2 = obj.a[1];
        this.score = -1;
    }

}