const loadData = (path) =>
  new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        resolve(JSON.parse(target.response));
      }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
  });

const renderTable = (data, nameTerm) => {
  const tableBody = document.getElementById("table-main");

  if (!tableBody) {
    throw new Error("No table element found");
  }

  let source = data;

  //Check if first_name or last_name includes the search term
  if (nameTerm) {
    source = source.filter(({ first_name, last_name }) => first_name.toLowerCase().includes(nameTerm) 
    || last_name.toLowerCase().includes(nameTerm));
  }

  const rows = source.reduce(
    (acc, { id, first_name, last_name, email,gender,ip_address  }) =>
      acc +
      `<tr id="table-row-${id}"><td>${id}</td><td>${first_name} ${last_name}</td><td>${email}</td>`+
      `<td>${gender}</td><td>${ip_address}</td></tr>`,
    ``
  );
 
  tableBody.innerHTML = rows;
};

loadData(`./people.json`).then((data) => renderTable(data));

const onSubmit = (event) => {
  event.preventDefault();

  const term = event.target.name.value;

  loadData(`./people.json`).then((data) => renderTable(data, term));
};

const onReset = () => {
  loadData(`./people.json`).then((data) => renderTable(data));
};
