
function walkDog(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dogwalk = true;
            if(dogwalk){
                resolve("you walk the dog 🦮");
            }
            else{
                reject('you did walk the dog');
            }
        }, 1500);
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const cleankitchen = true;
            if(cleankitchen){
                resolve("you clean the kitchen 🧹");
            }
            else{
                reject('you did clean the kitchen');
            }
            
        }, 2500);
    });
}

function takeOutTrash(){
    // setTimeout(()=>{
    //     console.log("you takeout  the trash ♺");
    //     callback();
    // }, 500);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const takeouttrash = true;
            if(takeouttrash){
                resolve("you takeout the trash ♺");
            }
            else{
                reject('you did takeout the trash');
            }
        }, 500);
    });
}

// walkDog(());
// walkDog().then(value => {console.log(value); return cleanKitchen()})
//          .then(value => {console.log(value); return takeOutTrash()})
//          .then(value => {console.log(value); console.log("You finished all the chores!")})
//          .then(error => console.error(error));

async function doChores(){
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
    
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    
        console.log("You finished all the chores!");
    }
    catch(error){
        console.error(error);
    }

}

doChores();