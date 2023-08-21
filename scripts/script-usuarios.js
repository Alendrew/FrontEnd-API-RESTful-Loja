const editButtons = document.querySelectorAll('.edit-button');

editButtons.forEach(button => {
  button.addEventListener('click', function() {
    const row = this.parentNode.parentNode; 
    const id = row.cells[0].textContent; 
    const name = row.cells[1].textContent; 
    const email = row.cells[2].textContent; 
    const celular = row.cells[3].textContent; 
    const senha = row.cells[4].textContent;

    // Preencha os campos do formulário com os dados da linha
    document.getElementById('edit-name').value = name;
    document.getElementById('edit-email').value = email;
    document.getElementById('edit-telefone').value = name;
    document.getElementById('edit-senha').value = email;
  });
});