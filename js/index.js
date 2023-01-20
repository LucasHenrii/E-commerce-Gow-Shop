const body = document.querySelector('body');

const main = document.createElement('main');
body.appendChild(main);

const section = document.createElement('section');
main.appendChild(section);
section.setAttribute('class', 'container');

const div_cards = document.createElement('div');
section.appendChild(div_cards);
div_cards.setAttribute('class', 'div-cards');

const ul_cards = document.createElement('ul');
div_cards.appendChild(ul_cards);
ul_cards.setAttribute('class', 'ul-cards');

const ul_header = document.querySelector('.ul-header');
ul_header.addEventListener('click', function (e) {
    let arr = data.filter(item => {
        return item.tag[0] === e.target.innerText

    });
    if (e.target.innerText === 'Todos') {
        renderizaItens(data);
    } else {
        renderizaItens(arr);
    }
})

const aside = document.createElement('aside');
section.appendChild(aside);

const div_aside = document.createElement('div');
div_aside.setAttribute('class', 'div-input');
aside.appendChild(div_aside);

const input_aside = document.createElement('input');
input_aside.setAttribute('class', 'input-aside');
input_aside.placeholder = '  Digite aqui sua pesquisa'
div_aside.appendChild(input_aside);

const btn_aside = document.createElement('button');
btn_aside.innerText = 'Pesquisar'
btn_aside.setAttribute('class', 'btn-pesquisar');
div_aside.appendChild(btn_aside);

btn_aside.addEventListener('click', function () {
    let arrPesquisa = data.filter(arrPesq => {
        return arrPesq.nameItem.toLowerCase() === input_aside.value.toLowerCase()
    })
    if (input_aside.value === '') {
        renderizaItens(data)
    } else {
        renderizaItens(arrPesquisa);
        input_aside.value = '';
    }
})
input_aside.addEventListener('keyup', function (e) {
    
    let arrPesquisa = data.filter(product => {
        const productExists = product.nameItem.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
        
        return productExists
        
    })
    renderizaItens(arrPesquisa)
})

const div_aside_text = document.createElement('div');
div_aside_text.setAttribute('class', 'text-box');
aside.appendChild(div_aside_text);

const h3_aside = document.createElement('h3');
h3_aside.innerText = 'Carrinho de Compras'
div_aside_text.appendChild(h3_aside);

const div_carrinho = document.createElement('div');
div_carrinho.setAttribute('class', 'box');
aside.appendChild(div_carrinho);

const h2_aside = document.createElement('h2');
h2_aside.innerText = 'Carrinho Vázio'
div_carrinho.appendChild(h2_aside);

const p_aside = document.createElement('p');
p_aside.innerText = 'Adicione Itens'
div_carrinho.appendChild(p_aside);

const div_carrinho_itens = document.createElement('div');
aside.appendChild(div_carrinho_itens);

const div_total = document.createElement('div');
aside.appendChild(div_total);

const ul_carrinho_itens = document.createElement('ul');
div_carrinho_itens.appendChild(ul_carrinho_itens);

let div_qtd_itens = document.createElement('div');
div_total.appendChild(div_qtd_itens);

let p_qtd_itens = document.createElement('p');
div_qtd_itens.appendChild(p_qtd_itens);


let span_qtd_itens = document.createElement('span');
div_qtd_itens.appendChild(span_qtd_itens);

let div_preco_total = document.createElement('div');
div_total.appendChild(div_preco_total);

let p_total = document.createElement('p');
div_preco_total.appendChild(p_total);

let span_total = document.createElement('span');
div_preco_total.appendChild(span_total);


let cont = 0;
let sum = 0;

function renderizaItens(arr) {
    ul_cards.innerText = '';

    for (let i = 0; i < arr.length; i++) {
        criarCard(arr[i])
    }
}
renderizaItens(data);

function criarCard(item) {
    let li_cards = document.createElement('li');
    li_cards.setAttribute('class', 'li-cards');
    ul_cards.appendChild(li_cards);

    let img_cards = document.createElement('img');
    li_cards.appendChild(img_cards);
    img_cards.setAttribute('class', 'img-cards');
    img_cards.src = item.img

    let div_li = document.createElement('div');
    div_li.setAttribute('class', 'div-li');
    li_cards.appendChild(div_li)

    let small_li = document.createElement('small');
    div_li.appendChild(small_li);
    small_li.innerText = item.tag

    let h3_li = document.createElement('h3');
    div_li.appendChild(h3_li);
    h3_li.innerText = item.nameItem

    let p_li = document.createElement('p');
    div_li.appendChild(p_li);
    p_li.innerText = item.description

    let span_li = document.createElement('span');
    span_li.setAttribute('class', 'span-card');
    div_li.appendChild(span_li);
    span_li.innerText = `R$ ${item.value.toFixed(2)}`

    let button_li = document.createElement('button');
    button_li.setAttribute('class', 'btn-card');
    div_li.appendChild(button_li);
    button_li.innerText = item.addCart


    button_li.addEventListener('click', function () {
        div_carrinho.remove()
        div_carrinho_itens.setAttribute('class', 'div-carrinho-itens');
        div_total.setAttribute('class', 'div-total');
        ul_carrinho_itens.setAttribute('class', 'ul-carrinho-itens');

        let li_carrinho_itens = document.createElement('li');
        li_carrinho_itens.setAttribute('class', 'li-carrinho-itens');
        ul_carrinho_itens.appendChild(li_carrinho_itens);

        let img_carrinho_itens = document.createElement('img');
        img_carrinho_itens.setAttribute('class', 'img-carrinho-itens');
        img_carrinho_itens.src = item.img
        li_carrinho_itens.appendChild(img_carrinho_itens);

        let p_carrinho_itens = document.createElement('p');
        p_carrinho_itens.setAttribute('class', 'p-carrinho-itens');
        p_carrinho_itens.innerText = item.nameItem
        li_carrinho_itens.appendChild(p_carrinho_itens);

        let div_itens_add = document.createElement('div');
        div_itens_add.setAttribute('class', 'div-itens-add');
        li_carrinho_itens.appendChild(div_itens_add);

        let span_carrinho_itens = document.createElement('span');
        span_carrinho_itens.setAttribute('class', 'span-carrinho-itens');
        span_carrinho_itens.innerText = `R$ ${item.value.toFixed(2)}`
        div_itens_add.appendChild(span_carrinho_itens);

        let img_btn = document.createElement('img');
        img_btn.setAttribute('class', 'btn-img');
        img_btn.src = 'https://cdn-icons-png.flaticon.com/512/18/18297.png'

        let btn_carrinho_itens = document.createElement('button');
        btn_carrinho_itens.setAttribute('class', 'btn-carrinho-itens');
        btn_carrinho_itens.appendChild(img_btn);
        div_itens_add.appendChild(btn_carrinho_itens);

        div_qtd_itens.setAttribute('class', 'div-qtd-itens');
        div_preco_total.setAttribute('class', 'div-preco-total');

        p_qtd_itens.innerText = 'Quantidade:'
        p_total.innerText = 'Total:'
        cont++
        sum += item.value
        span_qtd_itens.innerText = cont
        span_total.innerText = `R$ ${sum.toFixed(2)}`

        btn_carrinho_itens.addEventListener('click', function () {
            li_carrinho_itens.remove();
            cont--
            sum -= item.value
            span_qtd_itens.innerText = cont
            span_total.innerText = `R$ ${sum.toFixed(2)}`

            if (cont == 0) {
                div_carrinho_itens.remove();
                div_total.remove();

                aside.appendChild(div_carrinho);
            }
        })
    })
        button_li.addEventListener('click', function () {
        div_carrinho.remove()

        aside.appendChild(div_carrinho_itens);
        aside.appendChild(div_total);
    })
}