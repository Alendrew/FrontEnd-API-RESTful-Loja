const url = 'https://apirestful-loja-03f61481ea62.herokuapp.com/categories';
var html = "";
const headers = new Headers();
headers.append('Content-Type', 'application/json');
fetch(url)
  .then(response => response.json())
  .then(data => {
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
    }
    document.getElementById('tabela').innerHTML = html
  })
  .catch(error => {
    console.error('Erro:', error);
  });
