class QandA extends Base {
    constructor(question) {
        super();
        this.id = question.id;
        this.q = question.q;
        this.a1 = question.a[0];
        this.a2 = question.a[1];
        this.score = -1;
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

    template() {
        return `
        <li class="page-item">
        <a class="page-link text-success" qid="${this.id}" href="#">${this.id}</a>
        </li>
        `;
    }
    

}