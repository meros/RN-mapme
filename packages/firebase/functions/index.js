const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.copyCoordsToGroups = functions.database
  .ref("/{userId}/lastKnownPosition/location/coords")
  .onWrite(event => {
    const original = event.data.val();

    console.log(
      "Copying user coords to group 123",
      event.params.userId,
      original
    );

    return event.data.ref.root
      .child("groups/123/" + event.params.userId)
      .set(original);
  });
