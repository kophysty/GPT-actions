openapi: 3.1.0
info:
  title: Notion API
  version: '1.0'
servers:
  - url: https://api.notion.com
paths:
  /v1/pages/<page_id>:
    get:
      summary: Get Page
      operationId: getPage
      parameters:
        - name: page_id
          in: path
          required: true
          schema:
            type: string
          example: d3e01861c69448c5b11111e3cdd803cb
        - name: Notion-Version
          in: header
          required: true
          schema:
            type: string
            example: "2022-06-28"
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
                properties:
                  object:
                    type: string
                  id:
                    type: string
                  created_time:
                    type: string
                  last_edited_time:
                    type: string
                  properties:
                    type: object
  /v1/blocks/{block_id}/children:
    patch:
      summary: Append block children
      operationId: appendBlockChildren
      parameters:
        - name: block_id
          in: path
          required: true
          schema:
            type: string
          example: d3e01861c69448c5b11111e3cdd803cb
        - name: Notion-Version
          in: header
          required: true
          schema:
            type: string
            example: "2022-06-28"
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                children:
                  type: array
                  items:
                    type: object
                    properties:
                      object:
                        type: string
                        example: "block"
                      type:
                        type: string
                        example: "paragraph"
                      paragraph:
                        type: object
                        properties:
                          rich_text:
                            type: array
                            items:
                              type: object
                              properties:
                                type:
                                  type: string
                                  example: "text"
                                text:
                                  type: object
                                  properties:
                                    content:
                                      type: string
                                      example: "This is a new text block"
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
                properties:
                  object:
                    type: string
                  id:
                    type: string
components:
  schemas: {}
  securitySchemes:
    ApiKeyAuth:
      type: apiKey
      in: header
      name: Authorization
security:
  - ApiKeyAuth: []
