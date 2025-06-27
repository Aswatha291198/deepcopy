const originalObj = {
    name: 'John',
    details: {
        age: 25,
        hobbies: ['Reading', 'Cycling']
    },
    arr:[
        {
            version:5

        }
    ],
    greet() {
        console.log(`Hi, my name is also hedfhdfhdfhfh${this.name}.`);
    }
}

function deepClone(param) {
    // Base case. 
    if(param === null ||typeof  param!=='object'){
        return param
    }
    if(param instanceof Array){
        let copy=[]
        for(let i =0;i<param.length;i++){
            copy[i]=deepClone(param[i])
        }
        return copy
    }
    if(param instanceof Function){
        return param.bind({})
    }
    if(param instanceof Object){
        let copy={}
        for(let key in param){
            if(param.hasOwnProperty(key)){
                copy[key]=deepClone(param[key])
            }
        }
        return copy
    }
}

const clonedObj = deepClone(originalObj);
clonedObj.arr[0]=6

console.log(originalObj.arr[0], + "og");
console.log(clonedObj);

