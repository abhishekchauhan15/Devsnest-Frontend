function myFunction(object) {
    //   console.log(object)
    var text = "";
    var x;
    for (x in object) {
      text += object[x] + " ,";
      //     console.log(object[x])
    }
    return text;
  }
  var library = [
    { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
    { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
    {
      author: "Suzanne Collins",
      title: "Mockingjay: The Final Book of The Hunger Games",
      readingStatus: false,
    },
  ];
  for (var x in library) {
    console.log(myFunction(library[x]));
  }
  