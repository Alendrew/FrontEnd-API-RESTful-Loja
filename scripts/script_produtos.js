const url = 'https://apirestful-loja-03f61481ea62.herokuapp.com/products';
var html = "";
axios.get(url)
  .then(function (response) {
    const data = response.data;
    data.sort((a, b) => a.id - b.id);
    console.log(data);
    for (product in data) {
      const productData = data[product]
      html +=
        `
    <tr>
      <td>${productData.id}</td>
      <td>${productData.name}</td>
      <td>${productData.description}</td>
      <td>${productData.price}</td>
      <td><img src="${productData.imgUrl}"></td>
      <td>${productData.categories}</td>
    </tr>
    `
    }
    document.getElementById('tabela').innerHTML = html
  })
  .catch(function (error) {
    console.error(error);
  })

