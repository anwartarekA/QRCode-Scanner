let form = document.getElementById("generate_form");
let url = document.querySelector(".url");
let size = document.getElementById("size");
let QR_place = document.getElementById("qrcode");

let generate_QRCode = (e) => {
    e.preventDefault();
    if (url.value == "") {
        window.alert("please enter the url");
    }
    else {
        document.getElementById("qrcode").innerHTML = "";
        show_spinner_loading();
        setTimeout(() => {
            hide_spinner_loading();
            /* Create the QRCode first after 30 millseconds */

            setTimeout(()=>{
             gererator_QRCode(url, size);
            },30);
            /* get the url of the QRCode and pass it to savecode function after 50 millseconds */

            setTimeout(()=>{
                save_QRCode(QR_place.querySelector('img').src);
                QR_place.querySelector('img').style.cssText=`width:calc(calc((${(size.value/100) * 100}/100)*10%) + 20px);`
            },50)
        }, 1000);        
    }   
}
/* genrate QRCode from library QRCode */

let gererator_QRCode = (url, size) => {
  let obj =  new QRCode(QR_place, {
        text: url.value,
        width: size.value,
        height: size.value,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
    })
    url.value = "";
}
form.addEventListener('submit', generate_QRCode);

/* generate spinner */

let show_spinner_loading = () => {
    document.querySelector(".spinner").style.display = 'block';
    document.querySelector('.loading').style.display = 'block';
}
/* hide the spinner */
let hide_spinner_loading = () => {
    document.querySelector(".spinner").style.display = 'none';
    document.querySelector('.loading').style.display = 'none';
}
/* create the function to download the QRCode link */
const save_QRCode = (saveURL)=>{
    const link = document.createElement('a');
    link.className = 'save_link';
    link.href = saveURL;
    link.style.cssText=`width:calc(calc((${(size.value/100) * 100}/100)*10%) + 20px);`
    link.download = 'QRCode';
    link.innerHTML = "Save QRCode";
    document.getElementById("qrcode").appendChild(link);
}