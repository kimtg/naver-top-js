function getText(strURL)
{
    var strResult;
    
    try
    {
        // Create the WinHTTPRequest ActiveX Object.
        var WinHttpReq = new ActiveXObject(
                                  "WinHttp.WinHttpRequest.5.1");
        
        //  Create an HTTP request.
        var temp = WinHttpReq.Open("GET", strURL, false);

        //  Send the HTTP request.
        WinHttpReq.Send();
        
        //  Retrieve the response text.
        strResult = WinHttpReq.ResponseText;
    }
    catch (objError)
    {
        strResult = objError + "\n"
        strResult += "WinHTTP returned error: " + 
            (objError.number & 0xFFFF).toString() + "\n\n";
        strResult += objError.description;
    }
    
    //  Return the response text.
    return strResult;
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
