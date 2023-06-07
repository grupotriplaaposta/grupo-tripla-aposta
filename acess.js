function pegaval(event){
    event.preventDefault();
    var senha  = "TRIPLATESTE";
    var acesso = document.getElementById("acess").value;

    var senhasValidas = ["231912", "295649", "643632", "869122", "246810"];

    // Verificar se a senha está na lista de senhas válidas
    if (senhasValidas.includes(acesso)) {
        var url = "table.html";
        window.location.href = url;
        return true; // Senha válida
    } else {
        alert("Senha incorreta!");
        return false; // Senha inválida
    };

}

function mostrarSenha(){
    var inputPass = document.getElementById('acess')
    var btnShowPass = document.getElementById('btn-senha')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    }else{
        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('bi-eye-slash-fill','bi-eye-fill')
    };
}

function recarregarRetangulos() {
    window.location.reload();
  }

function changeColor(){
}

const rectangles = document.querySelectorAll('.rectangle div');

// Adiciona um evento de clique a cada retângulo
rectangles.forEach(rectangle => {
  rectangle.addEventListener('click', function() {
    // Verifica a cor atual do retângulo
    const currentColor = this.style.backgroundColor;
    
    if (currentColor === 'rgb(0, 255, 127)') {
      this.style.backgroundColor = 'white'; // cor padrão
    } else {
      this.style.backgroundColor = 'rgb(0, 255, 127)';
    }
  });
});
