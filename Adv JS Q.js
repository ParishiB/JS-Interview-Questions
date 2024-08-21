function getKey(obj, path) {
    const keys = path.split('.'); 
    let result = obj;

    for (let key of keys) {
        if (result[key] !== undefined) {
            result = result[key]; 
        } else {
            return undefined; 
        }
    }

    return result; 
}


const obj = {
    a: {
        b: {
            c: [1, 2, 3],
        },
    },
};

console.log(getKey(obj, 'a.b.c'));  
console.log(getKey(obj, 'a.b.c.0')); 
