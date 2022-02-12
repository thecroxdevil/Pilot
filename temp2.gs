function variable() {
  sheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1HTweKIVfLQEe4M28aOediTT6bbG2U6R6dd0AXnKnXiU/edit?pli=1#gid=0");
sheetname = sheet.getSheetByName("Sheet1");
data = sheetname.getDataRange().getValues();
lastR = sheetname.getLastRow();
esheet = SpreadsheetApp.getActiveSpreadsheet();
esheetname = esheet.getSheetByName("Sheet1");
Uidno = esheetname.getRange(2,2).getValues();
dss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/10H8hBYEc0FE313gYuujOBkWcvLtODDV5Meq8MDfA3Dw/edit#gid=0");
sn = dss.getSheets().map(function(x) {return x.getName();});
list = dss.getSheetByName(sn[0]).getRange('E3:E10').getValues();

return { data, lastR,esheet,list,sn}
}


function temp3(){
  recheck();
  dropdown();
}

function recheck(){
  const response = variable();
  let data = response.data;
  let lastR = response.lastR;
  Logger.log(lastR)
  for (var i=lastR-1; i>-1; i--){
        if (data[i][1] == Uidno){
          p = i;
          //var location = data[p][0];
          //var hp = data[p][4];
          //var rpm = data[p][6];
          //var flg = data[p][8];
          Logger.log(data[p][0]);
          Logger.log(data[p][1]);
          Logger.log(data[p][3]);
          return;

        }
  }
  return
}

function dropdown(){
  const response = variable();
  let esheet = response.esheet;
  let list= response.list;
  Logger.log(response.sn)
  var rangeRule = SpreadsheetApp.newDataValidation().requireValueInList(list);
  esheet.getRange("E11").setDataValidation(rangeRule);
}

