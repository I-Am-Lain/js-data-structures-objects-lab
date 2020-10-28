// Write your solution in this file!


const driver = {}

function updateDriverWithKeyAndValue(d, k, v) {
    let myObj = {}
    Object.assign(myObj, d)
    
    myObj[k] = v

    return myObj
}

function destructivelyUpdateDriverWithKeyAndValue(d, k, v) {
    d[k] = v

    return d
}

function deleteFromDriverByKey(d, k){
    let myObj = {}
    Object.assign(myObj, d)
    
    delete myObj[k]

    return myObj
}

function destructivelyDeleteFromDriverByKey(d, k){
    delete d[k]

    return d
}