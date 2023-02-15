function countdown(c){
    console.clear();
    console.log(c.count);
    c.count--;
    if(c.count <= 0) c.count = 10;
}

// setInterval(countdown, 1000, { count : 10 });


console.profile('for-loop');
console.time('for');
for(let i = 10; i > 0; i--){
    console.info('FOR: ', i);
}
console.timeEnd('for');
console.profileEnd('for-loop');
console.log('(·○●°º✭✰)');

const loader = {
    dom : document.querySelector('.loader'),
    log : function(text){
        this.dom.innerText = text;
    }
}

// function render2Frames(settings){
//     let symb = settings.isTrue ? settings.frame1 : settings.frame2;
//     settings.isTrue = !settings.isTrue;
//     loader.log(symb);
// }

const sauran = {
    i : 0,
    frames : ['(●)', '(○)']
};

const sphincter = {
    i : 0,
    frames : ['+', '×']
};

const mailBox = {
    i : 0,
    frames : ['📪', '📫']
};

const squares = {
    i : 0,
    frames : ['▧', '▨']
};

// setInterval(render2Frames, 500, squares);

const barLoader = {
    i : 0,
    frames : [
        '[----]',
        '[=---]',
        '[-=--]',
        '[--=-]',
        '[---=]'
    ]
};

const throughTallGrass = {
    i : 0,
    frames : [
        '{/////}',
        '{~////}',
        '{/~///}',
        '{//~//}',
        '{///~/}',
        '{////~}'
    ]
};

const hecticCompass = {
    i : 0,
    frames : [
        '⬅',
        '↖',
        '⬆',
        '↗',
        '➡',
        '➘',
        '⬇',
        '↙'
    ]
};

function renderNFrames(settings){
    const symb = settings.frames[settings.i];
    settings.i++;
    if(settings.i >= settings.frames.length) settings.i = 0;
    loader.log(symb);
}

setInterval(renderNFrames, 500, hecticCompass);