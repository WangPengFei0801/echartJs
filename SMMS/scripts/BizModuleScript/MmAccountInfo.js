/***********************************
 * @文件描述：与短信设置相关的js
 *************************************/
////本方法不能删除，也不能修改，因为此函数作为调用函数，并且有可能被覆盖////
function doOnload(){
  doOnload_Super();
//请不要在此写任何业务逻辑
}

////本方法不能删除，也不能修改，因为此函数作为调用函数，并且有可能被覆盖////
function doChange(obj){
  doChange_Super(obj);
//请不要在此写任何业务逻辑
}
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

function doOnload_Super(){
////////对于所有操作，页面加载时要执行的代码在此完成//////////
	//var unitPrice = document.getElementById("detailId_UNITPRICE").value;
//	var accountBalance = document.getElementById("detailId_ACCOUNTBALANCE").value;
//	if(unitPrice != "" && unitPrice != null && accountBalance != "" && accountBalance != null){
//		setFieldValue("SMSNUMBER",moneyToFloat(accountBalance)/moneyToFloat(unitPrice));
//	}
}

function doChange_Super(obj){
////////对于所有操作，页面元素发生改变是要执行的代码在此完成//////////
//	if(obj.name == 'UNITPRICE' || obj.name == 'ACCOUNTBALANCE'){
//		var unitPrice = document.getElementById("detailId_UNITPRICE").value;
//		var accountBalance = document.getElementById("detailId_ACCOUNTBALANCE").value;
//		if(unitPrice != "" && unitPrice != null && accountBalance != "" && accountBalance != null){
//			setFieldValue("SMSNUMBER",moneyToFloat(accountBalance)/moneyToFloat(unitPrice));
//		}
//	}
}

 