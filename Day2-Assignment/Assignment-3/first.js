var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1 // january starts from 0
var yy = today.getFullYear();
if (dd < 10) {
    dd = "0" + dd;
}
if (mm < 10) {
    mm = "0" + mm;
}
document.write("mm-dd-yyyy Format<br>");
today = mm + '-' + dd + '-' + yy;
document.write(today + "<br><br>");
document.write("mm/dd/yyyy Format<br>");
today = mm + '/' + dd + '/' + yy;
document.write(today + "<br><br>");
document.write("dd-mm-yyyy Format<br>");
today = dd + '-' + mm + '-' + yy;
document.write(today + "<br><br>");
document.write("dd/mm/yyyy Format<br>");
today = dd + '/' + mm + '/' + yy;
document.write(today);
