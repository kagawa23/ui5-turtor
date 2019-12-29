sap.ui.jsfragment("sap.ui.demo.walkthrough.view.Dialog", {  // this View file is called Address.view.js
   
   //  getControllerName: function() {
   //     return "sap.ui.demo.walkthrough.controller.Dialog";     // the Controller lives in Address.controller.js
   //  },
 
    createContent: function(oController) {
      var oDialog = new sap.m.Dialog({icon:"sap-icon://popup-window"
      ,title:"Dialog Opened"
      ,content:[new sap.m.Text({text:"Easier Web Development"})]
      ,endButton:new sap.m.Button({text:"OK"
      ,press:function(){
        oDialog.close();
        }})
    });
    return oDialog;
    }
 
 });