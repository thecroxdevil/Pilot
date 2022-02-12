




function onEdit(){
    
      var sheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1g4_EQV9ggpolM5yUURc63liHuRDecGqNssM0kZLxodg/edit#gid=1133154074");
      var esheet = SpreadsheetApp.getActiveSpreadsheet();

      //var msheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1HTweKIVfLQEe4M28aOediTT6bbG2U6R6dd0AXnKnXiU/edit#gid=0");

    //ui = SpreadsheetApp.getUi();
      var sheetname = sheet.getSheetByName("Sheet3");
      var esheetname = esheet.getSheetByName("Sheet1");
      var data = sheetname.getDataRange().getValues();
      var Uidno = esheetname.getRange(2,2).getValues();
      

      for (var i=0; i<data.length; i++){
        if (data[i][1] == Uidno){
          p = i;
          var location = data[p][0];
          var hp = data[p][4];
          var rpm = data[p][6];
          var flg = data[p][8];
        }
      }
        esheetname.getRange(4,2).setValue(hp);
        esheetname.getRange(5,2).setValue(rpm);
        esheetname.getRange(4,7).setValue(flg)
      
      
      
      
      
      
      var res = esheetname.getRange(14,2).getValues();
      var sym = "Ω";
      var res34 = res.toString();
      Logger.log(res34[1])
      if (esheetname.getRange(14,2).getValues() !=""){
        var te= res.toString().split("");
        if(te[te.length-1] == sym){

        }
        else{
          q = res+sym;
          esheetname.getRange(14 ,2).setValue(q);

        }
      }



}

function submit(){
  var sheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1g4_EQV9ggpolM5yUURc63liHuRDecGqNssM0kZLxodg/edit#gid=1133154074");
  var sheetname = sheet.getSheetByName("Sheet3");
  var data = sheetname.getDataRange().getValues();



  var esheet = SpreadsheetApp.getActiveSpreadsheet();
  var esheetname = esheet.getSheetByName("Sheet1");
  var Uidno = esheetname.getRange(2,2).getValues();
  var d1 = esheetname.getRange("D11").getValues();

  for (var i=0; i<data.length; i++){
        if (data[i][1] == Uidno){
          p = i;
          var location = data[p][0];
          var hp = data[p][4];
          var rpm = data[p][6];
          var flg = data[p][8];
        }
      }





   var sheet1 = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1HTweKIVfLQEe4M28aOediTT6bbG2U6R6dd0AXnKnXiU/edit#gid=0");
   var ss = sheet1.getSheetByName("Sheet1");
   var srno = sheet1.getDataRange().getValues();
   var lastRow = ss.getLastRow();
   var lastcolumn = ss.getLastColumn();
   var d4 = esheetname.getRange("D:D").getValues();
   Logger.log(lastRow)
   Logger.log(d2)
   //ss.getRange(lastRow).setvalue(data[p][4],data[p][6],data[p][8]);
   ss.appendRow([lastRow, data[p][1], data[p][4],data[p][6],data[p][8],d4[10].toString(),d4[11].toString()]);

    esheetname.getRange(4,2).clearContent();
    esheetname.getRange(5,2).clearContent();
    esheetname.getRange(4,7).clearContent();
    esheetname.getRange(14,2).clearContent();



  var msheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1HTweKIVfLQEe4M28aOediTT6bbG2U6R6dd0AXnKnXiU/edit#gid=0");
  var d2 = msheet.getLastRow();
  Logger.log(d2);
  //esheetname.getRange(15,4).setValue(d2[0][0]);

}


  function con( url="https://docs.google.com/spreadsheets/d/1czG9GNje1WbqCC9vvKlYaXpl1-dX-5wTNG3L4CmCPsc/edit#gid=0" ){
  var html = HtmlService.createHtmlOutput('<html><script>'
  +'window.close = function(){window.setTimeout(function(){google.script.host.close()},9)};'
  +'var a = document.createElement("a"); a.href="'+url+'"; a.target="_blank";'
  +'if(document.createEvent){'
  +'  var event=document.createEvent("MouseEvents");'
  +'  if(navigator.userAgent.toLowerCase().indexOf("firefox")>-1){window.document.body.append(a)}'                          
  +'  event.initEvent("click",true,true); a.dispatchEvent(event);'
  +'}else{ a.click() }'
  +'close();'
  +'</script>'
  // Offer URL as clickable link in case above code fails.
  +'<body style="word-break:break-word;font-family:sans-serif;">Failed to open automatically. <a href="'+url+'" target="_blank" onclick="window.close()">Click here to proceed</a>.</body>'
  +'<script>google.script.host.setHeight(40);google.script.host.setWidth(410)</script>'
  +'</html>')
  .setWidth( 90 ).setHeight( 1 );
  SpreadsheetApp.getUi().showModalDialog( html, "Opening ..." );
}

   
    
//var esheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1-0yA4cWYwngb5DeGcyual3MJvuwgLTpGpnA1fN6Zc1I/edit#gid=0");
  //var esheetname = esheet.getSheetByName("Sheet1");
  //var res = esheetname.getRange(12,2).getValues();
  //var sym = "Ω";
  //res1 = res;
  //if (res != res+sym){
    //  p = res + sym;
  //}
  
//function onChange(){
  //var esheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1-0yA4cWYwngb5DeGcyual3MJvuwgLTpGpnA1fN6Zc1I/edit#gid=0");
  //var esheetname = esheet.getSheetByName("Sheet1");
  //esheetname.getRange(12,2).setValue(p);
  //p = p-sym;
//}
