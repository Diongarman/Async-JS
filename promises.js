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

});

/*
Promises are event based, the callbacks passed into then, catch and finally will run when the
promise returns.
*/

willCleanRoom.then().catch().finally()