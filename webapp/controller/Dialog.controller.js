sap.ui.define([
	"sap/ui/base/ManagedObject",
	"sap/ui/core/Fragment"
], function (BaseObject, Fragment) {
    "use strict";

    return BaseObject.extend("sap.ui.demo.walkthrough.controller.Dialog", {
        constructor: function (oView) {
            this._oView = oView;
        },
        exit: function(){
            this._oView = undefined
        },
        open:function(){
            var oView = this._oView;

			// create dialog lazily
			if (!oView.byId("helloDialog")) {
				var oFragmentController = {
					onCloseDialog : function () {
						oView.byId("helloDialog").close();
					}
				};
				// load asynchronous XML fragment
				Fragment.load({
					id: oView.getId(),
					name: "sap.ui.demo.walkthrough.view.Dialog",
                    controller: oFragmentController,
                    type: "JS"
				}).then(function (oDialog) {
					// connect dialog to the root view of this component (models, lifecycle)
					oView.addDependent(oDialog);
					oDialog.open();
				});
			} else {
				oView.byId("helloDialog").open();
			}
        }
    });
});