function myFunction(object) {
    var text = "";
    var x;
    for (x in object) {
      text += x + ",";
    }
    return text;
  }
  myFunction({ name: "David Rayy", sclass: "VI", rollno: 12 });