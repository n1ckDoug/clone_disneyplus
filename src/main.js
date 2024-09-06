document.addEventListener('DOMContentLoaded', function () {
    // Mudar abas
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (btn) {

            // Pega o nome da data-tab-button que foi clicado
            const abaAlvo = btn.target.dataset.tabButton

            // Para conseguir adicionar a classe no elemento certo
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)

            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            btn.target.classList.add('shows__tabs__button--is-active');
        });
    }
    // Fim Mudar abas

    // Section Question
    const question = document.querySelectorAll('[data-faq-question]');

    for (let i = 0; i < question.length; i++) {
        question[i].addEventListener('click', abreOuFechaResposta);
    }
    // End Section Question

    // Fazer barra aparecer depois de determinada altura
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight; // Pegando a altura da seção

    window.addEventListener('scroll', function () {
        const posicaoAtual = window.scrollY // Altura do scroll

        // Se altura do scroll for menor que a da seção oculta elemenstos
        if (posicaoAtual < alturaHero) {
            oculataElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }

    });
    // Fim

});

//Função para oculatar elementos do header
function oculataElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hiden');
}
//Fim

//Função para exibir elementos do header
function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hiden');
}
//Fim

// Função para remover o botão ativo
function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

// Função para esconder as abas
function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

// Função para abrir ou fechar resposta

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__items--is-open';

    // elemento.target.parentNode --> Vai pegar o pai do elemento
    const elementoPai = elemento.target.parentNode;
    elementoPai.classList.toggle(classe);
}