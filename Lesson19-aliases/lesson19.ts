type myType = number | string | object | boolean
function addNumberOfString2(a:myType, b:number |string) {
    if(typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if(typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings')
}
