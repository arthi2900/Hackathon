document.body.style.backgroundColor = 
"LightGray";
var page=document.createElement('h1');
page.innerText="Nationalize API";
page.style.display="flex";
page.style.justifyContent="center";
var content=document.createElement('p');
document.body.append(page);

var countrynameInput=document.createElement('input');
countrynameInput.style.marginLeft="400px";
countrynameInput.setAttribute('id','search');
countrynameInput.setAttribute('class','cname');
countrynameInput.setAttribute('type','search');
countrynameInput.setAttribute('name','cname');
var btn=document.createElement('input');
btn.setAttribute('name','submit');
btn.setAttribute('type','submit');
btn.setAttribute('value','submit');
btn.onclick = getdata;
document.body.append(countrynameInput,btn);
async function getdata(){
let res=await fetch('https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json')
let result= await res.json();
console.log(result);
try {
var name=result.name;
wd(name);
} 
catch (error) {
console.log("invalid country");
}
}
var tb1=document.createElement('table');
tb1.style.border="3px solid black";
tb1.style.bordercollapse="collapse";
tb1.style.fontsize="200px";
tb1.style.marginTop="100px";
tb1.style.marginLeft="250px";
tb1.style.width="50%";
tb1.style.height="50px";
var thead=document.createElement("thead");
var thr=document.createElement("tr");
var th1=document.createElement("th");
th1.innerText="Country Name";
var th2=document.createElement("th");
th2.innerText="country id";
var th3=document.createElement("th");
th3.innerText="probability";
thr.append(th1,th2,th3);
thead.append(thr);
var tbody=document.createElement("tbody");


async function wd(name){
try   { let name=document.getElementById("search").value;
console.log(name);
let res=await fetch(`https://api.nationalize.io/?name=${name}`);

let data=await res.json();
console.log(data);
var countryname=data.country;

for(var i=0;i<countryname.length;i++){
var countryname1=data.name;
var tbr=document.createElement("tr");
var tbc1=document.createElement("td");
var tbc2=document.createElement("td");
var tbc3=document.createElement("td");
var countrynameid=countryname[i].country_id;
var countryprobatity=countryname[i].probability;
tbc1.innerText=`${countryname1}`;
tbc2.innerText=`${countrynameid}`;
tbc3.innerText=` ${countryprobatity}`;
tbr.append(tbc1,tbc2,tbc3);
tbody.append(tbr);
tb1.append(thead,tbody);
document.body.append(tb1);

}
}
catch(error){
console.log(error);
}
}
getdata();