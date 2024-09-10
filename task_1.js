/*
    Find the lowest number in the array below.
    const heights2 = [167, 190, 120, 165, 137];
*/

function lowestNumber(heights){

    let min = heights[0];
    for(const height of heights){
        if(height < min){
            min = height;
        }
    }
    return min;
}

const heights = [167, 190, 120, 165, 137];
const lowestHeight = lowestNumber(heights);
console.log(lowestHeight);