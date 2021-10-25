//dati da esporre
const fileUrl = 'https://raw.githubusercontent.com/Xericon/xericon.github.io/main/dati.txt'

//dati salvati
var pos = [];
var neg = [];

//hamburger

$(document).ready(function() {
  $('.menu__icon').click(function(){
    $('body').toggleClass('menu_shown');
  });
});


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
		

// 		document.getElementById("PV").innerHTML = perVit()+"%";
// 		document.getElementById("QM").innerHTML = quotaMedia();
// 		document.getElementById("AP").innerHTML = attPass();
// 		
// 		document.getElementById("PV2").innerHTML = perVit()+"%";
// 		document.getElementById("QM2").innerHTML = quotaMedia();
// 		document.getElementById("AP2").innerHTML = attPass();
// 		
// 		document.getElementById("PV3").innerHTML = perVit()+"%";
// 		document.getElementById("QM3").innerHTML = quotaMedia();
// 		document.getElementById("AP3").innerHTML = attPass();
	}
	
	log();
	
}
main();


//grafico




window.onload = function() {
new Chart(document.getElementById("grafico"), {
  type: 'line',
  data: {
    labels: [0,1,2,3,4,5,6,7,8,9],
    datasets: [{ 
        data: [-50,11,19,16,10,11,33,21,73,28],
        label: "Pengwin",

        borderColor: "#00FF00",
        fill: true
      }, { 
        data: [12,90,9,42,43,65,97,4,5,10],
        label: "BoomBet",
        borderColor: "#dc143c",
        fill: true
      }, { 
         data: [11,35,41,52,65,8,97,16,60,40],
        label: "Sbanca",
        borderColor: "#00ffff",
        fill: true
      }
    ]
  },

  options: {
    title: {
      display: true,
      text: 'Statistiche Comparate:',
      fontSize: 20,
		fontColor: "black"
    }
  }
});
}

        $(function () {/*from   w ww .  ja va2 s  . c o  m*/
            var ctx = document.getElementById("grafico2").getContext('2d');
            var data = {
                datasets: [{
                    data: [10, 20, 30],
                    backgroundColor: [
                        '#3c8dbc',
                        '#f56954',
                        '#f39c12',
                    ],
                }],
                labels: [
                    'Request',
                    'Layanan',
                    'Problem'
                ]
            };
            var myDoughnutChart = new Chart(ctx, {
                type: 'doughnut',
                data: data,
                options: {
                    responsive: false,
                    maintainAspectRatio: false,
                    legend: {
                        position: 'bottom',
                        labels: {
                            boxWidth: 12
                        }
                    }
                }
            });
            var ctx_2 = document.getElementById("layanan_subbagian").getContext('2d');
            var data_2 = {
                datasets: [{
                    data: [10, 20, 30],
                    backgroundColor: [
                        '#3c8dbc',
                        '#f56954',
                        '#f39c12',
                    ],
                }],
                labels: [
                    'Request',
                    'Layanan',
                    'Problem'
                ]
            };
            var myDoughnutChart_2 = new Chart(ctx_2, {
                type: 'doughnut',
                data: data_2,
                options: {
                    responsive: false,
                    maintainAspectRatio: false,
                    legend: {
                        position: 'bottom',
                        labels: {
                            boxWidth: 12
                        }
                    }
                }
            });
        });
    

