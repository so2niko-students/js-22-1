function getRandomArray(length = 10, min = 0, max = 10){
    if(min > max){//10, 3
        // const temp = min;
        // min = max;
        // max = temp;

    //деструктуруюче присвоєння
    //  min = 3, max = 10 <=  [3, 10]           
        [min, max] = [max, min];
    }

    let rArr = [];

    for(let i = 0; i < length; i += 1){
        rArr[i] = random(min, max);
    }

    return rArr;
}

function random(from, to){
    return Math.floor(Math.random() * (to - from + 1) + from);
}

