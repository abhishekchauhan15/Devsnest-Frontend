function joiner(params) {
    var first = params.join(",");
    var second = params.join("+");
    return { first, second };
  }
  console.log(joiner(["Red", "Green", "White", "Black"]));