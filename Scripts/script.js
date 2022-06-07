
function display() {
    var myWindow = window.open("", "", "width=900,height=1050"),
        images = document.getElementsByName("image"),
        text = document.getElementById("textarea");
    myWindow.focus();
    for (var i = 0; i < images.length; i++) {
        if (images[i].checked)
            myWindow.document.write('<img src=' + images[i].value + ' style="width: 500px; height: 500px; display:block; margin: auto; " ><br>');
    }
    myWindow.document.write(text.value, "<br><br>");
    text.value = "";
    myWindow.document.write('<input type="button" value="Close Preview" onclick="self.close()" style= "display:block; margin: auto; width: 140px; height: 40px; border: 2px; border-radius: 2px; color: wheat; background-color: cadetblue;" />');
}