Date.prototype.formatDate = function(format){

let arrMonth = ["January", "Fabuary", "March", "April", "May", "June", "July", 
                "August", "September", "October", "November", "Desember"];

let	options = 	{
	    YYYY : this.getFullYear(),
		YY   : String(this.getFullYear()).substring(2),
		MM   : this.getMonth() + 1,
		MMMM : arrMonth[this.getMonth()],
		DD   : this.getDate(), 
		HH   : (String(this.getHours()).length > 1 ? this.getHours() : "0" + this.getHours()),
		mm   : (String(this.getMinutes()).length > 1 ? this.getMinutes() : "0" + this.getMinutes()), 
		ss   : (String(this.getSeconds()).length > 1 ? this.getSeconds() : "0" + this.getSeconds()),
};

let delimiter1 = "-";

let delimiter2 = " ";

let delimiter3 = ":";

let maxPos = 0;

let formatString = "";
let component = "";
console.log(format);
	for (let i = 0; i < format.length; i++){
		ind1 = format.indexOf(delimiter1, i);

		ind2 = format.indexOf(delimiter2, i);

		ind3 = format.indexOf(delimiter3, i);

		let arrIndex = [ind1, ind2, ind3];
		let arrClear = arrIndex.filter(item => item > 0 );
		//console.log(arrClear);
		if (arrClear.length <= 0) {
			minPos = format.length;
			component = format.substring(i);
		} else {
			minPos = Math.min.apply(null, arrClear);
			component = format.substring(i, minPos);
		}

		//console.log(component);
		if (!(component in options)) {console.log("No valid component:" + component); return "Error...";}

		formatString = formatString + options[component] + (minPos > 0 ? format.substr(minPos,1) : "");
		//console.log(formatString);

		i = minPos;
	}

return console.log(formatString); 
}

var today = new Date();

console.log(today);

today.formatDate("YYYY-MMMM-DD HH:mm:ss");
today.formatDate("YYYY-MM-DD HH:mm:ss");//("YYYY-MMMM-DD HH:mm:ss");
today.formatDate("YYYY-MM-DD HH:mm");
today.formatDate("YYYY-MM-DD HH");
today.formatDate("MM-DD HH:mm:ss");
today.formatDate("DD HH mm:ss");
today.formatDate("YY MMMM");
today.formatDate("YYMMMM");
