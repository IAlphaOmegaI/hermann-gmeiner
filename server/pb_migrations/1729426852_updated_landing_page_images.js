/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9hdiww4n48wkkpc")

  collection.name = "landing_page_resources"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9hdiww4n48wkkpc")

  collection.name = "landing_page_images"

  return dao.saveCollection(collection)
})
