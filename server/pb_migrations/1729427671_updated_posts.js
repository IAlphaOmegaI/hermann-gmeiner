/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i96tw1atnhy6uyi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n58taoai",
    "name": "tags",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "j6uqarkxd66w8sk",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ieo2haev",
    "name": "timeToReadInMinutes",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i96tw1atnhy6uyi")

  // remove
  collection.schema.removeField("n58taoai")

  // remove
  collection.schema.removeField("ieo2haev")

  return dao.saveCollection(collection)
})
