function fakeServerFilterResponse (props, data) {
  const resultProductData = data.filter (a => {
    let hitDates = a.datesRange || {};
    hitDates = Object.keys (hitDates);
    hitDates = hitDates.map (function (date) {
      return new Date (date);
    });

    let hitDateMatches = hitDates.filter (function (date) {
      return date >= props.start.startDate && date <= props.end.endDate;
    });
    return hitDateMatches.length > 0;
  });

  if (resultProductData.length > 0) {
    return resultProductData;
  }
}

const fetchApi = (props, url) => {
  fetch (`./data.json`).then (res => res.json ()).then (data => {
    props.fetchData (fakeServerFilterResponse (props, data));
  });
};

export default fetchApi;
