const footerDate = document.getElementById('year');

function getDate() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  today = dd + '/' + mm + '/' + yyyy;
  return {
    today,
    day: dd,
    month: mm,
    year: yyyy,
  };
}

const date = getDate();

footerDate.innerText = date.year;
