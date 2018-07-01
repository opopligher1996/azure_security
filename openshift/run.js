autoRun();
var fso = new ActiveXObject("Scripting.FileSystemObject");
var a = fso.CreateTextFile("record\testfile.txt", true);

function autoRun(){
	getData();
	setTimeout(function(){
		autoRun();
	}, 300000);
}

function getData(){
	for(var i=1;i<18;i++)
	{
		getTotalWin(i);
	}
}

function getTotalWin(RaceNo){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {

				var parser = new DOMParser();
				var xmlDoc = parser.parseFromString(xhttp.responseText,"text/xml");
				var TotalWin = 0;
				//var TotalWin = 1000000;
				var obj = $.parseJSON(xhttp.responseText);
				obj.inv.forEach(i => i.pool=="WIN"?TotalWin=i.value:null);
				getWin(RaceNo,TotalWin);
			}
	};
	xhttp.open("GET", "http://bet.hkjc.com/racing/getJSON.aspx?type=pooltot&date=2018-07-01&venue=ST&raceno="+RaceNo, true);
	xhttp.send();
}

function getWin(RaceNo,TotalWin){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					console.log("ready = "+RaceNo+" and "+TotalWin);
					var parser = new DOMParser();
					var xmlDoc = parser.parseFromString(xhttp.responseText,"text/xml");
					var date = new Date();
					var split = xhttp.responseText.split(";");
					for(var i=1;i<split.length;i++){
					//for(var i=0;i<10;i++){
						var Odd = split[i].split("=")[1];
						console.log("Race = "+RaceNo+"  "+"TotalWin = "+TotalWin);
						//$('#xml_table').append("<tr class="+RaceNo+"_"+i+"><th class='d'>14:00</th><th class='d'>"+RaceNo+"</th><th class='d'>"+(i/1+1)+"</th><th class='d'>"+(i+1)*10+"</th><th class='d'>"+TotalWin/(i+1)*10*0.8+"</th><th class='d'>"+TotalWin+"</th></tr>");
						$('#xml_table').append("<tr class="+RaceNo+"_"+i+"><th class='d'>"+date.getHours()+":"+date.getMinutes()+"</th><th class='d'>"+RaceNo+"</th><th class='d'>"+i+"</th><th class='d'>"+Odd+"</th><th class='d'>"+TotalWin/Odd*0.8+"</th><th class='d'>"+TotalWin+"</th></tr>");
						a.WriteLine("This is a test.");
						a.Close();
					}

					$('#xml_table').append("<tr><font color='red'><th>This</th><th>is</th><th>a</th><th>gay</th><th>website</th><th>!</th></font></tr>");
				}
		};
		xhttp.open("GET", "http://bet.hkjc.com/racing/getJSON.aspx?type=WIN&date=2018-07-01&venue=ST&raceno="+RaceNo, true);
		xhttp.send();
}
