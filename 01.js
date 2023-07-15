let numbers = "";
while (numbers.length < 3) {
    let num = Math.floor(Math.random ()*9);
    if (numbers.includes(num) === false) {
        numbers = numbers.concat(num);
    }
}

let numB = 0;
let numS = 0;
let count = 0;
let answer = 0;


console.log('컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!');

while (answer !== numbers) {
    count++;
    answer = prompt(`${count}번째 시도 : `);
    let arrNum = [...numbers];
    let arrAnswer = [...answer];
    for (let i = 0; i < numbers.length; i++){ 
        for (let j = 0; j < answer.length;j++) {
            if (arrAnswer[j] === arrNum[i] && i === j) {
                numS++;
            } else if (arrAnswer[j] === arrNum[i] && i !== j){
                numB++;
            }
        }
    console.log(`${numB}B${numS}S`);
    }
}
console.log(`${count}번만에 맞히셨습니다.`);
console.log('게임을 종료합니다.');





    






