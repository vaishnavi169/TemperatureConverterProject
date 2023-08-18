let celsius=document.getElementById('celsius');
let farenheit=document.getElementById('farenheit');
let kelvin=document.getElementById('kelvin');

celsius.oninput=function()
{
    let f=(parseFloat(celsius.value)*9)/5+32;
    farenheit.value=parseFloat(f.toFixed(2));
    let k=(parseFloat(celsius.value)+273.15);
    kelvin.value=parseFloat(k.toFixed(2));
}
farenheit.oninput=function()
{
    let c=((parseFloat(farenheit.value)-32)*5)/9;
    celsius.value=parseFloat(c.toFixed(2));
    let k=(parseFloat(farenheit.value)-32)*5/9+273.15;
    kelvin.value=parseFloat(k.toFixed(2));
}
kelvin.oninput=function()
{
    let f=(parseFloat(kelvin.value)-273.15)*9/5+32;
    farenheit.value=parseFloat(f.toFixed(2));
    let c = (parseFloat(kelvin.value) - 273.15);
            celsius.value = parseFloat(c.toFixed(2));
      
}
