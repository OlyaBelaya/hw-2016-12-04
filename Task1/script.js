Date.prototype.formatDate = function(format){

let arrMonth = ["January", "Fabuary", "March", "April", "May", "June", "July", 
                "August", "September", "October", "November", "Desember"];

let	options = 	{
	    YYYY : this.getFullYear(),
	    MMMM : arrMonth[this.getMonth()],
		YY   : String(this.getFullYear()).substring(2),
		MM   : this.getMonth() + 1,
		DD   : this.getDate(), 
		HH   : (String(this.getHours()).length > 1 ? this.getHours() : "0" + this.getHours()),
		mm   : (String(this.getMinutes()).length > 1 ? this.getMinutes() : "0" + this.getMinutes()), 
		ss   : (String(this.getSeconds()).length > 1 ? this.getSeconds() : "0" + this.getSeconds()),
};

let formatString = format;

console.log(format);

for (let key in options) {
	formatString = formatString.replace(key, options[key]);
}

return console.log(formatString); 
}

var today = new Date();

console.log(today);

today.formatDate("YYYY-MMMM-DD HH:mm:ss");
today.formatDate("YYYY/MMMM/DD HH:mm:ss");
today.formatDate("YYYY-MM-DD HH:mm:ss");
today.formatDate("YYYY-MM-DD HH:mm");
today.formatDate("YYYY_MM_DD HH&mm");
today.formatDate("YYYY-MM-DD HH");
today.formatDate("MM-DD HH:mm:ss");
today.formatDate("DD HH mm:ss");
today.formatDate("YY MMMM");
today.formatDate("YYMMMM");
