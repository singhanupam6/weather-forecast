//Complete the Weather API Backend part using openweathermap api
let temp=0; 
function city(){
    var city1 = document.getElementById("search-box").value;
    console.log(city1);
    let urlstr="https://api.openweathermap.org/data/2.5/weather?q={C},IN&appid=03360acf2b7a3fe919ecf636eefaf35b"
    let resstr=urlstr.replace("{C}",city1);
    console.log(resstr);
    axios.get(resstr)
    .then(res=>{
        console.log(res);
        document.getElementById("error").style.display="none";
        document.getElementById("city").innerHTML="<h2>"+res.data.name+","+res.data.sys.country+"</h2>";
        document.getElementById("date").innerHTML="<h3>"+new Date().toDateString()+"</h2>";
        document.getElementById("temp").innerHTML=Math.round(res.data.main.temp-273)+" °c";
        temp=Math.round(res.data.main.temp-273);
        console.log(temp);
        document.getElementById("weather").innerHTML=res.data.weather[0].description;
        let min = Math.round(res.data.main.temp_min-273);
        document.getElementById("hi-low").innerHTML=Math.round(res.data.main.temp_max-273)+"°c /"+min+" °c";
    })
    .catch(err=>{
        document.getElementById("error").style.display="block";
        document.getElementById("error").innerHTML="Error: Kindly Enter any Indian Country's City Name without any spell errors."; 
    });
};