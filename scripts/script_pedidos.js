const url = 'https://apirestful-loja-03f61481ea62.herokuapp.com/orders';
var html = "";
axios.get(url)
  .then(function (response) {
    const data = response.data;
    data.sort((a, b) => a.id - b.id);
    for (order in data) {
      const orderData = data[order]
      html +=
        `
    <tr>
      <td>${orderData.id}</td>
      <td>${orderData.moment}</td>
      <td>${orderData.orderStatus}</td>
      <td>${orderData.client}</td>
      <td><img src="${orderData.items}"></td>
      <td>${orderData.payment}</td>
      <td>${orderData.total}</td>
    </tr>
    `
    }
    document.getElementById('tabela').innerHTML = html
  })
  .catch(function (error) {
    console.error(error);
  })
