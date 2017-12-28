class QandA extends Base {
    constructor() {
        super();
    }

    init(config){
        this.id = config.id;
        this.q = config.q;
        this.a1 = config.a[0];
        this.a2 = config.a[1];
        this.score=-1;
        this.source=null;
    }
    capitalA(a) {
        let A = a.split("");
        let bigA = A[0].toUpperCase();
        A.shift();
        A.unshift(bigA);
        return A.join("");
        
    }

    getA1(){
        return this.capitalA(this.a1);
    }

    getA2(){
        return this.capitalA(this.a2);
    }

    isFinished(){
        return this.score == -1? 'warning':'success';
    }

    template() {
        return `
            <li class="page-item">
            <a class="page-link text-${this.isFinished()}" qid="${this.id}" href="#">${this.id}</a>
            </li>
            `;
      }
    

}