const willCleanRoom = new Promise((resolve, reject) => {


            let cleanRoom = true;
            if (cleanRoom) {
                resolve('room is clean');
            } else {
                reject('room is not clean');
            }
        } 

);


const removeGarbage = new Promise((resolve, reject) => {
    let garbageRemoved = true;
    if (garbageRemoved) {
        resolve('Rubbish removed');
    } else {
        reject('Rubbish not removed');
    }
});

const getReward = new Promise((resolve, reject) => {
    let ellegible = true;
    if (ellegible) {
        resolve('Got a reward!');
    } else {
        reject(':( no reward for you');
    }
});

Promise.all([willCleanRoom, removeGarbage, getReward]).then((messages) => {
    console.log(messages)
});
