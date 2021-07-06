function myFunction(object) {
    var text = 0;
    for (var x in object) {
      text += 1;
    }
    return text;
  }
  myFunction({ name: "David Rayy", sclass: "VI", rollno: 12 });
  