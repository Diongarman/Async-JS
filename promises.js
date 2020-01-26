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