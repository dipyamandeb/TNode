console.log('Within the math.js file');
PI = 3.1415;
console.log(PI);
module.exports.PI = PI;

function area(radius){
    return PI * radius *radius;
}

console.log("Area of circle = " +area(2));
module.exports.calArea = area;




// module{
//         exports:{
//             PI:PI,
//             calArea : area
//         }

// };