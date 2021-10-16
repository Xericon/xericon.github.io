//dati da esporre
const fileUrl = 'https://raw.githubusercontent.com/Xericon/xericon.github.io/main/dati.txt'
//array per grafico x 
var x = ["V","F","V","F","V","F","V","V","V","F"];
//array per grafico y 
var y = [86,114,106,106,107,111,133,221,783,2478];

var pos = [];
var neg = [];

async function dataFetch(){
	let data = await fetch(fileUrl)
    	.then((response) => response.text())
    	.then(data => {
        	return data;
    	})
    	.catch(error => {
        	console.error(error);
    	});

	var fields = data.split(' ');

	for(let i = 0; i < fields.length; i++){
		var a = fields[i];
	
		if(a.slice(-1)=="V"){
			pos.push(a.slice(0, -1))
		} else {
			neg.push(a.slice(0, -1))
		}
	}
	console.log(pos)
	console.log(neg)
	
	//calcolo percentuale vittoria
	var PV = pos.length/(pos.length+neg.length)*100;
	PV = Math.round(PV)
	console.log("PercentualeVittoria= "+PV+"%");
	document.getElementById("PV").innerHTML = PV;
	
	//calcolo quota media
	var pos2 = pos.map((i) => Number(i));
	for (b = 0; b < pos2.length; b++) {   
		//console.log(pos2[b])
	
   		var sumPos = sumPos + pos2[b];  
    
    	//console.log(sumPos);
    }
	console.log("Somma positivi= "+ sumPos)
	console.log("QuotaMedia= "+PV);
	//document.getElementById("QM").innerHTML = QM;
}




function graph(xx, yy, id, nome){
	var ctx = document.getElementById(id);
	var myChart = new Chart(ctx, {
	  type: 'line',
	  data: {
	    labels: xx,
	    datasets: [
	      { 
	        data: yy, 
	        label: nome,
	        borderColor: "#3e95cd",
	        fill: false
	      }
	    ]
	  }
	});
}

function main(){
	dataFetch();
	graph(x, y, "grafico", "Pengwin");
}

main();



//console.log(fields);


//console.log(num.slice(-1));
//console.log(num.slice(0, -1));

//console.log(fields.length);



// function prova1(){
// 	let dat =  fetch(fileUrl)
//     .then((response) => response.text())
//     .then(data => {
//         return data;
//     });
//     var stringArray = data.split(/(\s+)/);
// 	console.log(data)
// 	document.getElementById("PV").innerHTML = stringArray[8]
// }