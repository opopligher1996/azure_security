function download(){
	var rows = [document.getElementsByClassName('dataset')[0].getElementsByClassName('d').length/6][6];
	var csvContent = "data:text/csv;charset=utf-8,";
	for(var i=0;i<document.getElementsByClassName('dataset').length;i++)
	{
		csvContent = csvContent+document.getElementsByClassName('dataset')[i].getElementsByClassName('d')[0].innerHTML;
		csvContent = csvContent+','+document.getElementsByClassName('dataset')[i].getElementsByClassName('d')[1].innerHTML;
		csvContent = csvContent+','+document.getElementsByClassName('dataset')[i].getElementsByClassName('d')[2].innerHTML;
		csvContent = csvContent+','+document.getElementsByClassName('dataset')[i].getElementsByClassName('d')[3].innerHTML;
		csvContent = csvContent+','+ document.getElementsByClassName('dataset')[i].getElementsByClassName('d')[4].innerHTML;
		csvContent = csvContent+','+document.getElementsByClassName('dataset')[i].getElementsByClassName('d')[5].innerHTML;
		csvContent = csvContent+ "\r\n";
		//console.log(document.getElementsByClassName('d')[i]);
	}
	var encodedUri = encodeURI(csvContent);
	window.open(encodedUri);
}
