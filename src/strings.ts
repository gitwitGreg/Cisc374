/**
 * Given a string, return a new string where "not " has been added to the
 * front. However, if the string already begins with "not", return the
 * string unchanged.
 */
export function notString(str: string): string {
    if (str.includes("not")){
        return str;
    }
    else{
        const newStr = "not" + str;
        return newStr;
    }
}

/**
 * Given a string, take the last char and return a new string with the last char
 * added at the front and back, so 'cat' yields 'tcatt' The original string will be
 * length 1 or more.z
 */
export function backAround(str: string): string {
    const splits = str.split('');
    const charNeed = splits[-1];
    const newStr = charNeed + str + charNeed;
    return newStr;
}

/**
 * We'll say that a "triple" in a string is a char appearing three times in a row.
 * Return the number of triples in the given string. The triples may overlap.
 */
export function countTriple(str: string): number {
    let count = 0;
    for (let i = 0; i < countTriple.length; i++){
        for (let j = 1; j < countTriple.length;j++){
            if(countTriple[j] === countTriple[i]){
                if (countTriple[j+1] === countTriple[j]){
                    count = count++;
                }
            }
        }

    }
    return count;
}