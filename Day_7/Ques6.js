var library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    {
      title: "Mockingjay: The Final Book of The Hunger Games",
      author: "Suzanne Collins",
      libraryID: 3245,
    },
  ];
  library.sort(function (obj1, obj2) {
    return obj1["libraryID"] - obj2["libraryID"];
  });