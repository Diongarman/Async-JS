

const doChores = async () => {
    const willCleanRoom = new Promise((resolve, reject) => {


        setTimeout(
            () => {
                let cleanRoom = true;
                if (cleanRoom) {
                    resolve('room is clean');
                } else {
                    reject('room is not clean');
                }
            } ,4000);
    
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
    
            }, 3000)
    
    
    });
    
    const getReward = new Promise((resolve, reject) => {
    
        setTimeout(() => {
            let ellegible = false;
            if (ellegible) {
                resolve('Got a reward!');
            } else {
                reject(':( no reward for you');
            }
    
        }, 2000)
    
    
    });
    /*async-await alows us to implement blocking, 
    so below executes procedurally, that is, in the order declared, 
    despite the setTimeouts being longest for the first await and shortest for the last.
    
    
    */


    try {
        let cleanRoom = await willCleanRoom;
        console.log(cleanRoom);
    } catch(err) {
        console.log(err);
        return;
    }

    try {
        let removedGarbage = await removeGarbage;
        console.log(removedGarbage);
    } catch(err) {
        console.log(err);
        return;
    }

    try {
        let gotReward = await getReward;
        console.log(gotReward);

    } catch (err) {
        console.log(err);
    }

}

doChores();




