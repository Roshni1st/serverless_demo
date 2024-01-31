"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// functions/swagger.handler.ts
var swagger_handler_exports = {};
__export(swagger_handler_exports, {
  swaggerHandler: () => swaggerHandler
});
module.exports = __toCommonJS(swagger_handler_exports);
var import_fs = __toESM(require("fs"));
var swaggerJson = JSON.parse(import_fs.default.readFileSync("swagger.json", "utf8"));
var html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <link rel="stylesheet" type="text/css" href="https://unpkg.com/swagger-ui-dist@3/swagger-ui.css">
    </head>
    <body>
      <div id="swagger"></div>
      <script src="https://unpkg.com/swagger-ui-dist@3/swagger-ui-bundle.js"></script>
      <script>
        SwaggerUIBundle({
          dom_id: '#swagger',
          spec: ${JSON.stringify(swaggerJson)},
          presets: [SwaggerUIBundle.presets.apis],
          url: "http://localhost:3000/swagger.json"  // Add a comma here
        });
      </script>
    </body>
  </html>`;
var swaggerHandler = async (event) => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: html
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  swaggerHandler
});
