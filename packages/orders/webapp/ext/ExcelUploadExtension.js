/***
@controller Name:sap.suite.ui.generic.template.ObjectPage.view.Details,
*@viewId:nw.epm.refapps.st.prod.manage::sap.suite.ui.generic.template.ObjectPage.view.Details::SEPMRA_C_PD_Product
*/
sap.ui.define([
    'sap/ui/core/mvc/ControllerExtension'
],
function (
    ControllerExtension
) {
    "use strict";
    return ControllerExtension.extend("cc.excelUpload.ExcelUpload", {
        // this section allows to extend lifecycle hooks or override public methods of the base controller
        override: {
            //  /**
            //   * Called when a controller is instantiated and its View controls (if available) are already created.
            //   * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
            //   * @memberOf customer.acme.manage.products.ObjectPage.js
            //   */
            onInit: function () {
                console.log("TESTSETSETSET")
            }
        },
    });
});