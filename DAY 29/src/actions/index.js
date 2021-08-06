const change_city = (city) => {
  return { type: "change_city", payload: city };
};

const change_data = (city) => {
  return (dispatch) => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=decd753b07014de186b155610213007&q=${city}&aqi=no`
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log("aagya data:", data);
        dispatch({
          type: "change_data",
          payload: data,
        });
      })
      .catch((e) => {
        return city;
      });
  };
};

const toogle_theme = { type: "toogle_theme" };

export { change_city, change_data, toogle_theme };
