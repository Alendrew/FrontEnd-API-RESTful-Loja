const url = 'https://apirestful-loja-03f61481ea62.herokuapp.com/categories';
var html = "";
axios.get(url)
  .then(function (response) {
    const data = response.data;
    data.sort((a, b) => a.id - b.id);
    for (categorie in data) {
      const categorieData = data[categorie]
      html +=
        `
    <tr>
      <td>${categorieData.id}</td>
      <td>${categorieData.name}</td>
    </tr>
    `
      document.getElementById('tabela').innerHTML = html
    }
  })
  .catch(function (error) {
    console.error(error);
  })
