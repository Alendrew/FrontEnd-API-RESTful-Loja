const url = 'https://apirestful-loja-03f61481ea62.herokuapp.com/users';
const url_pedidos = 'https://apirestful-loja-03f61481ea62.herokuapp.com/products'
var html = "";
// Get all users
axios.get(url)
  .then(function (response) {
    const data = response.data;
    data.sort((a, b) => a.id - b.id);
    for (user in data) {
      const userData = data[user];
      html +=
        `
          <tr>
            <td>${userData.id}</td>
            <td>${userData.name}</td>
            <td>${userData.email}</td>
            <td>${userData.phone}</td>
            <td class="td-button" data-bs-toggle="modal" data-bs-target="#popUpEditar" onclick="edit_user(this)"><button class="edit-button"></button></td>
            <td class="td-button"><button class="delete-button" onclick="delete_user(this)"></button></td>
          </tr>
        `
    }
    document.getElementById('tabela').innerHTML = html
  })
  .catch(function (error) {
    console.error(error);
  })

// Update User
function update() {

  let edit_id = document.getElementById('edit_id').value;

  let edit_name = document.getElementById('edit_name').value;
  let edit_email = document.getElementById('edit_email').value;
  let edit_telefone = document.getElementById('edit_telefone').value;
  axios.put(`${url}/${edit_id}`, {
    name: edit_name,
    email: edit_email,
    phone: edit_telefone
  })
    .then(function (response) {
      alert('Usuário atualizado com sucesso!');
      location.reload()
    })
    .catch(function (error) {
      alert(`Erro: ${error}`)
    });
}


// Reset form
function reset(){
  document.getElementById('name').value = "";
  document.getElementById('email').value = "";
  document.getElementById('telefone').value = 0;

  document.getElementById('edit_name').value = "";
  document.getElementById('edit_email').value = "";
  document.getElementById('edit_telefone').value = 0;
}
// Update User
function create() {

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let telefone = document.getElementById('telefone').value;
  axios.post(url, {
    name: name,
    email: email,
    phone: telefone
  })
    .then(function (response) {
      alert('Usuário criado com sucesso!');
      reset();
      location.reload()
    })
    .catch(function (error) {
      alert(`Erro: ${error}`)
    });
}

// Delete User
function delete_user(element) {

  let $delete_row = $(element).closest("tr");
  let $delete_id = $delete_row.find("td:nth-child(1)").text();

  axios.delete(`${url}/${$delete_id}`, {
  })
    .then(function (response) {
      alert('Usuário deletado com sucesso!');
      location.reload()
    })
    .catch(function (error) {
      alert("Erro: Usuário não pode ser deletado pois possue pedidos")
    });
}


// Edit User
function edit_user(element) {
  reset();
  let $delete_row = $(element).closest("tr");

  document.getElementById('edit_id').value = $delete_row.find("td:nth-child(1)").text();
  document.getElementById('edit_name').value = $delete_row.find("td:nth-child(2)").text();
  document.getElementById('edit_email').value = $delete_row.find("td:nth-child(3)").text();
  document.getElementById('edit_telefone').value = $delete_row.find("td:nth-child(4)").text();
}

