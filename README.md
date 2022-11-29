# Test Setup for `ui5-cc-excelupload`

## Description

This setup is for testing the ui5 module `ui5-cc-excelupload`.  
Template was is the [ui5-community/hacking-away-sampleapp](https://github.com/ui5-community/hacking-away-sampleapp). 

## Project setup

Currently there is one CAP App to serve the ODataV2 and ODataV4 Service at `/packages/server`.  
The template for this Service was the sample at the [SAP-samples/cloud-cap-samples](https://github.com/SAP-samples/cloud-cap-samples/tree/main/orders) repo. 

Two Fiori Element App consuming the services: `/packages/orders` (OData V4) and `/packages/ordersV2` (OData V2).  
These Apps are generated with Fiori Tools.

## Requirements

[npm](https://www.npmjs.com/) for dependency management.

## Preparation

Use `npm` to install the dependencies:

```sh
npm i
```

## Run the App

First clone the repo  [marianfoo/ui5-cc-excelUpload](https://github.com/marianfoo/ui5-cc-excelUpload) and make that locally available.
```sh
git clone https://github.com/marianfoo/ui5-cc-excelUpload
cd ui5-cc-excelUpload
npm link
```


Execute the following command to run the app locally for development in watch mode (the browser reloads the app automatically when there are changes in the source code):

```sh
cd .\packages\server\
npm run watch
cd .\packages\orders\
npm link ui5-cc-excelupload
npm start
cd .\packages\ordersv2\
npm link ui5-cc-excelupload
npm start
```


## License

This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSE) file.
