const body = document.querySelector("body");





function hexToRGB (hexcolor = "#123456"){
    const rhex = hexcolor.substring(1,3);
    const ghex = hexcolor.substring(3,5);
    const bhex = hexcolor.substring(5,7);
 

    const R = parseInt(rhex,16);
    const G = parseInt(ghex,16);
    const B = parseInt(bhex,16);

  /*   const RGBobject = {
        R : R,
        G : G,
        B : B
    };
 */

    //adds all converted colors to correct format
    const RGB= R+ "," + G + "," + B;
    console.log(RGB);

    //just for funsies, changed the background color of body
    body.style.backgroundColor = "rgb(" + RGB + ")";
    
}

function colorToHex(color){
// this function converts a color from number (rgb) into hex and returns the hex ( if the lenght of hex is 1, an 0 is added in front)
let hex = color.toString(16);
if (hex.length == 1 ){
    hex = "0" + hex;
}
return hex;
}

function rgbToHex (r,g,b){
    //converts each color into hex using the to colortohex function.
  const rhex= colorToHex(r);
  const  ghex= colorToHex(g);
  const  bhex= colorToHex(b);

   //adds all the converted numbers to the correct hex format and logs it
    const hex = `#${rhex}${ghex}${bhex}`;
    console.log(hex);

     //just for funsies, changed the background color of body
    body.style.backgroundColor = hex;

}

hexToRGB("#c0ffee");
rgbToHex (10,92,210);

function cssToRGB(cssColor= "rgb(1,2,3)"){
const firstComma = cssColor.indexOf(",");
const secondComma = cssColor.indexOf(",", firstComma +1);
const lastComma = cssColor.lastIndexOf(",");
const lastParenthesis = cssColor.lastIndexOf(")");

const r = cssColor.substring(4,firstComma).trim();
const g = cssColor.substring(firstComma+1,secondComma).trim();
const b = cssColor.substring(lastComma+1,lastParenthesis).trim();

/* 
console.log(`_${r}_`);
console.log(`_${g}_`);
console.log(`_${b}_`); */

console.log(r);
console.log(g);
console.log(b);



}

cssToRGB("rgb(  92, 2   ,155  )");
