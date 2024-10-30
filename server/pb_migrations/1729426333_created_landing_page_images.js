/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "9hdiww4n48wkkpc",
    "created": "2024-10-20 12:12:13.649Z",
    "updated": "2024-10-20 12:12:13.649Z",
    "name": "landing_page_images",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kkqdl1yi",
        "name": "photo",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9hdiww4n48wkkpc");

  return dao.deleteCollection(collection);
})
