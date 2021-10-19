//dati da esporre
const fileUrl = 'https://raw.githubusercontent.com/Xericon/xericon.github.io/main/dati.txt'
//array per grafico x 
var x = ["V","F","V","F","V","F","V","V","V","F"];
//array per grafico y 
var y = [86,114,106,106,107,111,133,221,783,2478];


//dati salvati
var pos = [];
var neg = [];


async function main(){
	//prendere dati da file txt
	let data = await fetch(fileUrl)
    	.then((response) => response.text())
    	.then(data => {
        	return data;
    	})
    	.catch(error => {
        	console.error(error);
    	});
	var fields = data.split(' ');
	
	//inserire dati in array ordinati
	for(let i = 0; i < fields.length; i++){
		var a = fields[i];
	
		if(a.slice(-1)=="V"){
			pos.push(a.slice(0, -1));
		} else {
			neg.push(a.slice(0, -1));
		}
	}
	
	//log array
	console.log("-".repeat(50));
	console.log("check-pos= "+pos);
	console.log("check-neg= "+neg);
	
	
	//calcolo percentuale vittoria:
	function perVit(){
		var PV = pos.length/(pos.length+neg.length)*100;
		return Math.round(PV);
	}
	
	//calcolo quota media:
	function quotaMedia(){
		function add(accumulator, a) {
    		return accumulator + a;
		}
		const sumPos = pos.map((i) => Number(i)).reduce(add,0);
		return sumPos/pos.length;
	}
	
	//calcolo attivo passivo
	function attPass(){
		const bgt = 50;
		tot = 0;
		for(i=0; i < pos.length; i++){
			tot = tot + (bgt/pos[i]);
		}
		for(i=0; i < neg.length; i++){
			tot = tot + (bgt/neg[i]);
		}

		var ap = bgt*pos.length-tot
		return ap.toString().substr(0, ap.toString().length - 12)+"$";
	}
	
	function log(){
		console.log("-".repeat(50));
		console.log("PercentualeVittoria= "+perVit()+"%");
		console.log("QuotaMedia= "+quotaMedia());
		console.log("Attivo/Passivo= "+attPass());
		console.log("-".repeat(50));
		
		//console.log(attPass())
				
		//document.getElementById("QM").innerHTML = QM;
		document.getElementById("PV").innerHTML = perVit()+"%";
		document.getElementById("QM").innerHTML = quotaMedia();
		document.getElementById("AP").innerHTML = attPass();
	}
	
	log();
	
}
main();
//graph(x, y, "grafico", "penguin");

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

window.onload = function() {
new Chart(document.getElementById("grafico"), {
  type: 'line',
  data: {
    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
    datasets: [{ 
        data: [86,114,106,106,107,111,133,221,783,2478],
        label: "Pengwin",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [282,350,411,502,635,809,947,1402,3700,5267],
        label: "Tizi01",
        borderColor: "#8e5ea2",
        fill: false
      }, { 
        data: [168,170,178,190,203,276,408,547,675,734],
        label: "Tizi02",
        borderColor: "#3cba9f",
        fill: false
      }, { 
        data: [40,20,10,16,24,38,74,167,508,784],
        label: "Tizi03",
        borderColor: "#e8c3b9",
        fill: false
      }, { 
        data: [6,3,2,2,7,26,82,172,312,433],
        label: "Tizi04",
        borderColor: "#c45850",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Statistiche Comparate:'
    }
  }
});
}

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