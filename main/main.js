/**
 * Created by lwj_312 on 17-7-17.
 */
function workshop(answer,inputs) {

    let countA=0;
    let countB=0;
    for(let a of answer.split("")){
        for(let b of inputs.split("")){
            if(a==b){
                if(answer.toString().split("").indexOf(a)==inputs.toString().split("").indexOf(b))
                    countA+=1;
                else countB+=1;
            }
        }
    }
    return `${countA}A${countB}B`;
}

function generator(){
    let answer='';
    let number;
    while(answer.length<4){
        number=parseInt(Math.random()*10);
        if(answer.indexOf(number)==-1){
            answer+=number;
        }
    }

    return answer;
}

let answer=generator();
let inputs='7890';
console.log(answer);
console.log(workshop(answer,inputs));
