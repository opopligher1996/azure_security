function search(){
	var result = '<table id="result_table" border="1" width="100%"><tr><th> Time </th><th> Race No </th><th> No </th><th> Win_Odds </th><th> Win </th><th> AllWin </th></tr>';
	for(var i = 0;i<document.getElementsByClassName('hourse_checkbox').length;i++)
	{
		if(document.getElementsByClassName('hourse_checkbox')[i].checked)
		{
			for(var j = 0;j<document.getElementsByClassName('race_checkbox').length;j++)
			{
				if(document.getElementsByClassName('race_checkbox')[j].checked)
				{
					for(var k = 0;k<document.getElementsByClassName((j+1)+'_'+(i+1)).length;k++)
					{
						result = result + '<tr class="dataset">'+document.getElementsByClassName((j+1)+'_'+(i+1))[k].innerHTML+'</tr>';
					}
				}
			}
		}
	}
	document.getElementById("search_result").innerHTML=result;
}
