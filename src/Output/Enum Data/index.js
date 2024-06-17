"use strict";
var requestData;
(function (requestData) {
    requestData[requestData["id1"] = 0] = "id1";
    requestData[requestData["id2"] = 1] = "id2";
    requestData[requestData["id3"] = 2] = "id3";
    requestData[requestData["id4"] = 100] = "id4";
    requestData[requestData["id5"] = 101] = "id5";
    requestData[requestData["id6"] = 102] = "id6";
    requestData["createDate"] = "Create Data";
    requestData["getData"] = "Get Data";
    requestData["updateData"] = "Update Data";
    requestData["deleteData"] = "Delete Data";
})(requestData || (requestData = {}));
console.log(requestData);
console.log(requestData.getData);
