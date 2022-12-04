sap.ui.define(["sap/ui/core/mvc/Controller"],
    function (Controller) {
        "use strict";
        return {
            /**
             * Create Dialog to Upload Excel and open it
             * @param {*} oEvent 
             */
            openExcelUploadDialog: async function (oEvent) {

                this._view.setBusyIndicatorDelay(0)
                // this._view.setBusy(true)
                if (!this.excelUpload) {
                    const ownerComponent = this.getEditFlow().getView().getController().getAppComponent()
                    // this.excelUpload = await ownerComponent.createComponent({
                    //     usage: "simpleCustomerSelectionWithoutButton",
                    //     async: false,
                    //     componentData: {
                    //         context: this,
                    //         columns: ["product_ID", "quantity", "title", "price"],
                    //         mandatoryFields: ["product_ID", "quantity"],
                    //         excelFileName: "Test.xlsx",
                    //         excelFileName2: "test2"
                    //     },
                    //     settings: {
                    //         context: this,
                    //         columns: ["product_ID", "quantity", "title", "price"],
                    //         mandatoryFields: ["product_ID", "quantity"],
                    //         excelFileName: "Test.xlsx",
                    //         excelFileName2: "test2"
                    //     }
                    // });
                    this.excelUpload = await sap.ui.getCore().createComponent({
                        name: "thirdparty.customControl.excelUpload",
                        async: false,
                        componentData: {
                            context: this,
                            columns: ["product_ID", "quantity", "title", "price"],
                            mandatoryFields: ["product_ID", "quantity"],
                            excelFileName: "Test.xlsx"
                        }
                    });
                    this.excelUpload.attachCheckBeforeRead(function(oEvent) {
                        console.log(oEvent)
                    }, this)
                    this.excelUpload.attachCheckBeforeRead(function(oEvent) {
                        console.log(oEvent)
                    }, this)
                }
                this.excelUpload.openExcelUploadDialog()
                this._view.setBusy(false)
            }
        };
    });
