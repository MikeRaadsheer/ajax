function showHint2(str) {
    if (str.length == 0) {
        document.getElementById("txtHint2").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint2").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET", "gethint2.php?w=" + str, true);
        xmlhttp.send();
    }
}