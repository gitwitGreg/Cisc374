/**
 * Given an array of ints, return a new array length 2 containing the first
 * and last elements from the original array. If the list is empty, return
 * an empty list.
 */
export function makeEnds(nums: Array<number>): Array<number> {
    if(nums.length === 0){
        return [];
    }
    else{
        let newArr = [nums[0], nums[-1]]
        return newArr;
    }
}

/**
 * We'll say that a 1 immediately followed by a 3 in an array is an "unlucky" 1.
 * Return true if the given array contains an unlucky 1 in the first 2 or last 2
 * positions in the array.
 */
export function unlucky1(nums: Array<number>): boolean {
    let i = 0;
    for(i; i < nums.length; i++){
        if(nums[i]== 0 || nums[i] == nums.length -2){
            if(nums[i+1] == 3){
                 return true;
            }
        }
    }
    return false;
}

/**
 * Return an array that is "left shifted" by one -- so {6, 2, 5, 3}
 * returns {2, 5, 3, 6}. You may modify and return the given array,
 * or return a new array.
 */
export function shiftLeft(nums: Array<number>): Array<number> {
    return [];
}