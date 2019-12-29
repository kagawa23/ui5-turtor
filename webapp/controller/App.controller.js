sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "./Dialog.controller"
 ], function (Controller, MessageToast,JSONModel,Dialog) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        onInit : function () {
            // set data model on view
            var oData = {
               recipient : {
                  name : "World"
               }
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
            this.dialog = new Dialog(this.getView())
         },
         openDialog:function(){
            this.dialog.open();
         },
        onShowHello : function () {
            // show a native JavaScript alert
            MessageToast.show("Hello World");
         },
         onChange: function(event){
            const source = event.getSource();
            if(source.getValue() === ''){
               source.setValueState(sap.ui.core.ValueState.Error); 
            }else{
               source.setValueState(sap.ui.core.ValueState.None); 
            }
         }
    });
 });