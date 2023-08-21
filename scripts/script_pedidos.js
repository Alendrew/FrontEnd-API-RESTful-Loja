const url = 'https://apirestful-loja-03f61481ea62.herokuapp.com/orders';
var html = "";
const headers = new Headers();
headers.append('Content-Type', 'application/json');
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
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
  .catch(error => {
    console.error('Erro:', error);
  });
