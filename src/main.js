document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(btn){
            
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
});

function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}