// var orm = require("../config/orm.js");

// var burgers = {
//   all: function(cb) {
//       console.log("Burgers");
//     orm.all("burgers", function(res) {
//         console.log(res);
//       cb(res);
//     });
//   },

//   create: function(name, cb) {
//     orm.create("burgers", [
//       "burger_name", "devoured"
//     ], [
//       name, false
//     ], cb);
//   },
//   update: function(id, cb) {
//     var condition = "id=" + id;
//     orm.update("burgers", {
//       devoured: true
//     }, condition, cb);
//   }
// };

// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burgers = {
  all: async () => {
    const result = await orm.all("burgers");

    return result;
  },

  // The variables cols and vals are arrays.
  create: async (cols, vals) => {
    const result = await orm.create("burgers", cols, vals);

    return result;
  },

  update: async (objColVals, condition) => {
    const result = await orm.update("burgers", objColVals, condition);

    return result;
  },

  delete: async (condition) => {
    const result = await orm.delete("burgers", condition);

    return result;
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burgers;

