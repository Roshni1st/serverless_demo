import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

import * as swaggerUi from 'swagger-ui-dist';
import fs from 'fs';

interface SwaggerHandlerEvent extends APIGatewayProxyEvent {}

const swaggerJson = JSON.parse(fs.readFileSync('swagger.json', 'utf8'));

const html = `
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

export const swaggerHandler = async (event: SwaggerHandlerEvent): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/html' },
    body: html
  };
};
