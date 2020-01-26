const willCleanRoom = new Promise((resolve, reject) => {


            let cleanRoom = false;
            if (cleanRoom) {
                resolve('room is clean');
            } else {
                reject('room is not clean');
            }
        } 

);


const removeGarbage = new Promise((resolve, reject) => {
    let garbageRemoved = false;
    if (garbageRemoved) {
        resolve('Rubbish removed');
    } else {
        reject('Rubbish not removed');
    }
});

const getReward = new Promise((resolve, reject) => {
    let ellegible = false;
    if (ellegible) {
        resolve('Got a reward!');
    } else {
        reject(':( no reward for you');
    }
});

/*
Promises are event based, the callbacks passed into then, catch and finally will run when the
promise returns.
*/

willCleanRoom.then((resolveStatus) => {
    console.log(resolveStatus);
    return removeGarbage;
    })
    .then((resolveStatus2) => {
            console.log(resolveStatus2);
            return getReward;
        })
    .then((resolveStatus3) => {
            console.log(resolveStatus3);
        })
    .catch((rejectStatus) => {
        console.log(rejectStatus);
        })