const willCleanRoom = new Promise((resolve, reject) => {


    setTimeout(
        () => {
            let cleanRoom = true;
            if (cleanRoom) {
                resolve('room is clean');
            } else {
                reject('room is not clean');
            }
        } ,3000);

    }
)

const removeGarbage = new Promise((resolve, reject) => {

    setTimeout(
        
        () => {
            let garbageRemoved = true;
            if (garbageRemoved) {
                resolve('Rubbish removed');
            } else {
                reject('Rubbish not removed');
            }

        }, 3001)


});

const getReward = new Promise((resolve, reject) => {

    setTimeout(() => {
        let ellegible = true;
        if (ellegible) {
            resolve('Got a reward!');
        } else {
            reject(':( no reward for you');
        }

    }, 2999)


});

Promise.race([willCleanRoom, removeGarbage, getReward]).then((messages) => {
    console.log(messages)
}).catch(messages => {
    console.log(messages)
});
