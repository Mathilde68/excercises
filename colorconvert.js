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

    const RGB= R+ "," + G + "," + B;
    console.log(RGB);
    body.style.backgroundColor = "rgb(" + RGB + ")";
    
}

hexToRGB("#c0ffee");
