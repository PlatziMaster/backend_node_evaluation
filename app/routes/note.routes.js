module.exports = app => {
  const notes = require("../controllers/note.controller.js");

  // create new
  app.post("/notes", notes.create);

  // Retrieve all
  app.get("/notes", notes.findAll);

  // Retrieve a single item by ID
  app.get("notes/:noteId", notes.findOne);

  // Update an item with ID
  app.put("/notes/:noteId", notes.update);

  // Delete an intem by ID
  app.delete("notes/:noteId", notes.delete);
};
