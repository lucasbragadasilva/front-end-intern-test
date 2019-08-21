// Adicionamos nosso código dentro de uma função anônima para evitar
// variáveis globais.
(function() {
  // Elemento principal do formulário
  const contactForm = document.getElementById('contact');

  // Campos do formulário
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // "addEventListener" instrui o navegador a executar uma função sempre
  // que um evento específico acontece. Nesse caso, a função abaixo será
  // executada toda vez que o botão de envio for pressionado.
  contactForm.addEventListener('submit', function() {
    // A propriedade "value" contém o valor atual de um input ou textarea
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const messageValue = messageInput.value;

    // A propriedade "length" contém o tamanho (em caracteres) de uma
    // uma string. Toda string contém essa propriedade.
    const nameLength = nameValue.length;
    const emailLength = emailValue.length;
    const messageLength = messageValue.length;

    //Validação
      if(nameLength === 0){
        window.alert('Por favor, preencha o campo nome!');
        document.getElementById('name').focus();
      } else if(emailLength === 0) {
        window.alert('Por favor, preencha o campo email!');
        document.getElementById('email').focus();
      } else if(messageLength === 0) {
        window.alert('Por favor, preencha o campo mensagem!');
        document.getElementById('message').focus();
      } else {
        window.alert(
          `Nome: ${nameValue} (${nameLength} caracteres)
Email: ${emailValue} (${emailLength} caracteres)
Mensagem: ${messageValue} (${messageLength} caracteres)`      
          );
      }
    

    // "window" é um objeto global que representa a janela (ou aba) do
    // navegador que está executando o código do seu site. O método
    // "alert" simplesmente mostra um aviso para o usuário contendo a
    // mensagem provida.
   

    // Altere e complete essa função para validar os campos do formulário
    // de acordo com as especificações do teste. Boa sorte!
  });
})();
