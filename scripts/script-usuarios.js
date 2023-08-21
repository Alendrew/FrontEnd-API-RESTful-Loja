const url = 'https://apirestful-loja-03f61481ea62.herokuapp.com/users';
var html = "";
const headers = new Headers();
headers.append('Content-Type', 'application/json');
fetch(url)
  .then(response => response.json())
  .then(data => {
    data.sort((a, b) => a.id - b.id);
    for (user in data) {
      const userData = data[user]
      html +=
        `
    <tr>
      <td>${userData.id}</td>
      <td>${userData.name}</td>
      <td>${userData.email}</td>
      <td>${userData.phone}</td>
      <td class="td-button" data-bs-toggle="modal" data-bs-target="#popUpEditar"><button class="edit-button"></button></td>
      <td class="td-button"><button class="delete-button" onclick="delete_user(this)"></button></td>
    </tr>
    `
    }
    document.getElementById('tabela').innerHTML = html
  })
  .catch(error => {
    console.error('Erro:', error);
  });

async function update() {
  try {
    let edit_id = document.getElementById('edit_id').value;
    let edit_name = document.getElementById('edit_name').value;
    let edit_email = document.getElementById('edit_email').value;
    let edit_telefone = document.getElementById('edit_telefone').value;
    const response = await fetch(`${url}/${edit_id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(
        {
          "name": edit_name,
          "email": edit_email,
          "phone": edit_telefone,
        }
      )
    });

    if (response.ok) {
      alert('Usuário atualizado com sucesso!');
      location.reload()
    } else {
      alert('Erro ao atualizar Usuário.');
    }
  } catch (error) {
    console.error('Erro:', error);
  }
}
async function create() {
  try {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(
        {
          "name": name,
          "email": email,
          "phone": telefone,
        }
      )
    });

    if (response.ok) {
      alert('Usuário criado com sucesso!');
      location.reload()
    } else {
      alert('Erro ao criar Usuário.');
    }
  } catch (error) {
    console.error('Erro:', error);
  }
}

async function delete_user(element) {
  try {
    var $delete_row = $(element).closest("tr");
    var $delete_id = $delete_row.find("td:nth-child(1)").text();
    const delete_response = fetch(`${url}/${$delete_id}`, {
      method: 'DELETE',
      headers: headers
    });

    if (delete_response.ok) {
      alert('Usuário deletado com sucesso!');
      location.reload()
    } else {
      alert('Erro ao deletar Usuário possue pedidos.');
    }
  } catch (error) {
    console.error('Erro:', error);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const editButtons = document.querySelectorAll('.edit-button');

  editButtons.forEach(button => {
    button.addEventListener('click', function () {
      const row = this.parentNode.parentNode;
      const id_tabela = row.cells[0].textContent;
      const name_tabela = row.cells[1].textContent;
      const email_tabela = row.cells[2].textContent;
      const celular_tabela = row.cells[3].textContent;
      const senha_tabela = row.cells[4].textContent;

      document.getElementById('edit_id').value = id_tabela;
      document.getElementById('edit_name').value = name_tabela;
      document.getElementById('edit_email').value = email_tabela;
      document.getElementById('edit_telefone').value = celular_tabela;
      document.getElementById('edit_senha').value = senha_tabela;
    });
  });
});
