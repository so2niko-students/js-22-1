const pow0 = (x, n) => {
    if(n == 0){
        return 1;
    }

    let p = x;
    for(let i = 2; i <= n; i++){
        p = p * x;
    }

    return p;
}

const pow = (base, exponent) => exponent == 0 ? 1 : base * pow(base, --exponent);

console.log(pow(2, 1) == 2, 'pow(2, 1) == 2');
console.log(pow(-2, 1) == -2, 'pow(-2, 1) == -2');
console.log(pow(2, 2) == 4, 'pow(2, 2) == 4');
console.log(pow(2, 3) == 8, 'pow(2, 3) == 8');
console.log(pow(3, 2) == 9, 'pow(3, 2) == 9');
console.log(pow(3, 3) == 27, 'pow(3, 3) == 27');
console.log(pow(10, 0) == 1, 'pow(10, 0) == 1');
console.log(pow(-3, 3) == -27, 'pow(-3, 3) == -27');
// console.time('rec');
// console.log(pow(2, 10455));
// console.timeEnd('rec');

// console.time('loop');
// console.log(pow0(2, 100000));
// console.timeEnd('loop');

const tree = {
    n : 22,
    children : [
        {
            n : 33, 
            children : [
                {
                    n : 923,
                    children : []
                },
                {
                    n : 77, 
                    children : []
                }
            ]
        },
        {
            n : 5345,
            children : [
                {
                    n : 93,
                    children : [
                        {
                            n : 7,
                            children : []
                        },
                        {
                            n : 409,
                            children : [
                                {
                                    n : 91, 
                                    children : []
                                },
                                {
                                    n : 177,
                                    children : []
                                },
                                {
                                    n : 523,
                                    children : []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

function treeAn(el){
    console.log(el.n);
    if(el.children.length == 0){
        return el.n;
    }

    return el.n + el.children.reduce((acc, ch) => acc + treeAn(ch), 0);
}

const trAn = el => el.children.length ? el.n + el.children.reduce((acc, ch) => acc + trAn(ch), 0) : el.n;

console.log('summ of tree: ', trAn(tree));