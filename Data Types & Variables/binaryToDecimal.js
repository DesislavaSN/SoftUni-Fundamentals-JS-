// A function that reads an 8-bit binary number and converts it to a decimal.
// formula: (00001001)₂ = (0 × 2⁷) + (0 × 2⁶) + (0 × 2⁵) + (0 × 2⁴) + (1 × 2³) + (0 × 2²) + (0 × 2¹) + (1 × 2⁰) = (9)₁₀


function binaryToDecimal(binaryNum){
    let sum = 0;
    let binaryLength = binaryNum.length;
    for(let i = 0; i < binaryNum.length; i++){
        sum += Number((binaryNum[i] * Math.pow(2,binaryLength - i - 1)));
    }
    console.log(sum);
}
