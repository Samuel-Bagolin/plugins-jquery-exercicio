$(document).ready(function(){
    // Inicializa o Slick Carousel
    $("#carousel-imagens").slick({
        autoplay: true,  // Ativa autoplay
        arrows: false    // Esconde as setas de navegação
    });

    // Aplica máscaras aos campos
    $("#telefone").mask("(00) 00000-0000");
    $("#cpf").mask("000.000.000-00", {reverse: true});
    $("#cep").mask("00000-000");

    // Inicializa a validação do formulário
    $("#contact-form").validate({
        // Define as regras de validação
        rules: {
            nome: { // Corrigido para 'nome' (era 'name' no código anterior)
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            telefone: { // Corrigido para 'telefone' (era 'phone')
                required: true
                // A validação do formato da máscara já ajuda aqui
            },
            cpf: {
                required: true // Tornando CPF obrigatório como no exemplo do usuário
                // Uma validação de CPF mais robusta exigiria uma função customizada
            },
            endereco: { // Nova regra
                required: true
            },
            cep: { // Nova regra
                required: true
            }
            // Removido 'message' pois não existe mais no formulário atualizado
        },
        // Define as mensagens de erro (usará messages_pt_BR.min.js por padrão)
        messages: {
            nome: {
                required: "Por favor, digite seu nome completo",
                minlength: "Seu nome deve ter pelo menos 3 caracteres"
            },
            email: {
                required: "Por favor, digite seu e-mail",
                email: "Por favor, digite um endereço de e-mail válido"
            },
            telefone: {
                required: "Por favor, digite seu telefone"
            },
            cpf: {
                required: "Por favor, digite seu CPF"
            },
            endereco: {
                required: "Por favor, digite seu endereço completo"
            },
            cep: {
                required: "Por favor, digite seu CEP"
            }
        },
        // Função para lidar com o envio do formulário após a validação
        submitHandler: function(form) {
            alert("Formulário enviado com sucesso! Compra (simulada) finalizada.");
            // Aqui você poderia adicionar código para enviar os dados do formulário
            // via AJAX, por exemplo.
            // form.submit(); // Descomente para permitir o envio padrão do formulário
            form.reset(); // Limpa o formulário após o envio (opcional)
        },
        // Adiciona tratamento para destacar campos inválidos (opcional, mas boa prática)
        errorPlacement: function(error, element) {
            error.insertAfter(element);
        },
        highlight: function(element) {
            $(element).closest(".form-group, .form-campo").addClass("error");
        },
        unhighlight: function(element) {
            $(element).closest(".form-group, .form-campo").removeClass("error");
        }
    });
});
