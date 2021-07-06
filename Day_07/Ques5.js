function myFunction(object) {
    var volume = (22 / 7) * object.radius ** 2 * object.height;
    console.log(volume.toFixed(4));
  }
  myFunction({ radius: 10, height: 15 });