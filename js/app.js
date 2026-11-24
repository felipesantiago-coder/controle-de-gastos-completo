// Controle de Gastos
// Nesta versão: os gastos agora são salvos no navegador (localStorage).

var CHAVE_STORAGE = 'gastos-controle';

var gastos = [];

var form = document.getElementById('form-gasto');
var listaGastos = document.getElementById('lista-gastos');
var listaVazia = document.getElementById('lista-vazia');

var nomesCategorias = {
  alimentacao: 'Alimentação',
  transporte: 'Transporte',
  lazer: 'Lazer',
  saude: 'Saúde',
  outros: 'Outros'
};

form.addEventListener('submit', function (evento) {
  evento.preventDefault();

  var descricao = document.getElementById('descricao').value.trim();
  var valor = parseFloat(document.getElementById('valor').value);
  var data = document.getElementById('data').value;
  var categoria = document.getElementById('categoria').value;

  // Validações simples antes de aceitar o gasto
  if (descricao === '') {
    alert('Escreva uma descrição para o gasto.');
    return;
  }
  if (isNaN(valor) || valor <= 0) {
    alert('O valor precisa ser maior que zero.');
    return;
  }
  if (data === '') {
    alert('Escolha a data do gasto.');
    return;
  }

  gastos.push({
    id: Date.now(),
    descricao: descricao,
    valor: valor,
    data: data,
    categoria: categoria
  });

  salvarGastos();
  renderizarLista();
  form.reset();
});

// Salva a lista no navegador
function salvarGastos() {
  localStorage.setItem(CHAVE_STORAGE, JSON.stringify(gastos));
}

// Carrega a lista salva quando a página abre
function carregarGastos() {
  var salvo = localStorage.getItem(CHAVE_STORAGE);

  if (salvo !== null) {
    try {
      gastos = JSON.parse(salvo);
    } catch (erro) {
      // Se o conteúdo salvo estiver corrompido, começa com a lista vazia
      gastos = [];
    }
  }
}

function renderizarLista() {
  listaGastos.innerHTML = '';

  // Ordena do gasto mais recente para o mais antigo
  var ordenados = gastos.slice().sort(function (a, b) {
    return b.data.localeCompare(a.data) || b.id - a.id;
  });

  ordenados.forEach(function (gasto) {
    var item = document.createElement('li');

    var info = document.createElement('div');
    info.className = 'item-info';

    var titulo = document.createElement('span');
    titulo.className = 'item-descricao';
    titulo.textContent = gasto.descricao;

    var detalhe = document.createElement('span');
    detalhe.className = 'item-detalhe';
    detalhe.textContent = formatarData(gasto.data) + ' · ' + nomesCategorias[gasto.categoria];

    info.appendChild(titulo);
    info.appendChild(document.createElement('br'));
    info.appendChild(detalhe);

    var valor = document.createElement('span');
    valor.className = 'item-valor';
    valor.textContent = formatarValor(gasto.valor);

    item.appendChild(info);
    item.appendChild(valor);
    listaGastos.appendChild(item);
  });

  listaVazia.style.display = gastos.length === 0 ? 'block' : 'none';
}

function formatarValor(valor) {
  return 'R$ ' + valor.toFixed(2).replace('.', ',');
}

function formatarData(data) {
  var partes = data.split('-');
  return partes[2] + '/' + partes[1] + '/' + partes[0];
}

// Carrega o que já foi salvo e mostra na tela
carregarGastos();
renderizarLista();
