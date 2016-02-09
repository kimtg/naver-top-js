function getText(strURL)
{
  var req = new ActiveXObject("WinHttp.WinHttpRequest.5.1");
  req.Open("GET", strURL, false);
  req.Send();
  return req.ResponseText;
}

function list_naver() {
  var s = getText("http://www.naver.com");
  var re = /<option value=\".+\">.+: (.+)<\/option>/g;
  var r = [];
  var m;
  while (m = re.exec(s)) {
    r.push(m[1]);
  }
  return r;
}

WScript.Echo(list_naver().join(", ") + "\n");
