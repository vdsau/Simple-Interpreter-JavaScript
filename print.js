(function () {
	
		function resized (){
			var t = screen.width/2 + "px";
            var h = screen.height / 4 + "px";
            document.getElementById("inputField").style.width = t;
			document.getElementById("inputField").style.margin = "20px auto auto auto";
            
			document.getElementById("program").style.width = t;
            document.getElementById("program").style.height = h;
		}
        document.body.onload = resized;
		document.body.onresize = resized;
    })();

function Draw() {
	var perekl= false;
    function createCell(text, index) {
        return "<td"+((index!=undefined)?" class="+index:"")+">" + text + "</td>";
    }
 
	function checkClass (stclass){
		var chars=	[{"className":"KeyWord","symbols":["int","do","while","if","then","cin","cout"]},
					{"className":"Identif", "symbols":["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]},
					{"className":"Numbers", "symbols":["0","1","2","3","4","5","6","7","8","9"]},
					{"className":"SysOpr", "symbols":["{","}","[","]", ";", "—", "<<", ">>", "(", ")"]},
					{"className":"LogOpr", "symbols":["&&","||","!"]},
					{"className":"ArithOpr", "symbols":["+","-","/", "*", "^", "%", "--", "="]},
					{"className":"CompOpr", "symbols":["<=",">=","==", "<", ">", "!="]}
						];
		//var rs= "ERROR";
		var rs=(perekl)?"ComText":"ERROR";
		var temp1= "";
		for (var j = 0; j < chars.length; j++)
	   {
		   for (var u = 0; u < chars[j].symbols.length; u++)
		   {
				if (stclass==="—"){
					perekl= !perekl;
					
					var rs= "SysOpr";
					//alert (tyre);
					break;
				}
				
					var temp= chars[j].symbols[u];  
					
						if (rs!="ComText")
						{
							//alert (perekl);

							/////////////
							if (stclass==temp){
								rs=chars[j].className; 
								break;
							}
							else if (rs==="ERROR"){
								temp1= stclass.charAt(0);
								var sym = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
									if ( sym.indexOf( temp1 ) != -1 ){
											rs="Identif";
										break;
									}
									var num = ["0","1","2","3","4","5","6","7","8","9"];
									 if ( num.indexOf( temp1 ) != -1 ){
										rs="Numbers";
										break;
									}
							}
						}								
						   ///////////////							   
		   }
	   }
	   return rs;
	}
	
	this.drawLexemTable = function(lexemes){
		let row;
        let tbody= document.getElementById("tbodyLexem");
        tbody.innerHTML = "";
		for (let j = 0; j < lexemes.length; j++) {
            row = document.createElement("tr");
            var index ="'lexemsVals "+j+"_"+3+"'";
			
            var tempRow = createCell(j) + createCell(lexemes[j].line) + createCell(lexemes[j].lexemCode) + createCell(lexemes[j].val,index) + createCell(checkClass(lexemes[j].val));

            row.innerHTML = tempRow;
			tbody.appendChild(row);
		}
	},
	
	this.drawIDNTable = function(idns){
		let row;
        let tbody=document.getElementById("tbodyIDN");
        tbody.innerHTML = "";
		
		for (let j = 0; j < idns.length; j++) {
            row = document.createElement("tr");
				
				
            var tempRow = createCell(idns[j].idnCode) + createCell(idns[j].val) + createCell((idns[j].type===undefined)?"var":idns[j].type);

            row.innerHTML = tempRow;
			tbody.appendChild(row);
		}
	},
	this.drawConTable = function(cons){
		let row;
        let tbody=document.getElementById("tbodyCON");
        tbody.innerHTML = "";
		for (let j = 0; j < idns.length; j++) {
			
            row = document.createElement("tr");

            var tempRow = createCell(cons[j].conCode) + createCell(cons[j].val);

            row.innerHTML = tempRow;
			tbody.appendChild(row);
		}
	}
}