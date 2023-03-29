const meeting = (rooms, chairs) => {
    if(chairs <= 0) return 'Game On';

    const result = [];
    let chairsNeed = chairs;
    for(let i = 0; i < rooms.length && chairsNeed > 0; i += 1){
        const [people, chairsInRoom] = rooms[i];
        const chairsFree = chairsInRoom > people.length ? chairsInRoom - people.length : 0;
        const resultChair = chairsFree >= chairsNeed ? chairsNeed : chairsFree;
        chairsNeed -= resultChair;   
        result.push(resultChair);
    }

    return chairsNeed ? 'Not enough!' : result;
}

console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4)?.join('') == '013');
console.log(meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5)?.join('') ==  '00122');
console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0) == 'Game On');
console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 5) == 'Not enough!');