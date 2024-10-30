/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i96tw1atnhy6uyi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ehkxmvq2",
    "name": "content",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i96tw1atnhy6uyi")

  // remove
  collection.schema.removeField("ehkxmvq2")

  return dao.saveCollection(collection)
})
