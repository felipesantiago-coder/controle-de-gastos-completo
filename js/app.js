// Controle de Gastos
// Nesta versão: além de remover, dá para editar um gasto pelo mesmo formulário.

var CHAVE_STORAGE = 'gastos-controle';

var gastos = [];

var form = document.getElementById('form-gasto');
var listaGastos = document.getElementById('lista-gastos');
var listaVazia = document.getElementById('lista-vazia');

// Campos guardados em variáveis para facilitar na edição
var campoDescricao = document.getElementById('descricao');
var campoValor = document.getElementById('valor');
var campoData = document.getElementById('data');
var campoCategoria = document.getElementById('categoria');
var botaoForm = document.getElementById('botao-form');
var botaoCancelar = document.getElementById('botao-cancelar');

// Guarda o id do gasto que está sendo editado (null = é um gasto novo)
var idEditando = null;

var nomesCategorias = {
  alimentacao: 'Alimentação',
  transporte: 'Transporte',
  lazer: 'Lazer',
  saude: 'Saúde',
  outros: 'Outros'
};

form.addEventListener('submit', function (evento) {
  evento.preventDefault();

  var descricao = campoDescricao.value.trim();
  var valor = parseFloat(campoValor.value);
  var data = campoData.value;
  var categoria = campoCategoria.value;

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

  if (idEditando !== null) {
    // Está editando um gasto que já existe
    var gasto = gastos.find(function (g) {
      return g.id === idEditando;
    });
    if (gasto) {
      gasto.descricao = descricao;
      gasto.valor = valor;
      gasto.data = data;
      gasto.categoria = categoria;
    }
    cancelarEdicao();
  } else {
    // É um gasto novo
    gastos.push({
      id: Date.now(),
      descricao: descricao,
      valor: valor,
      data: data,
      categoria: categoria
    });
  }

  salvarGastos();
  renderizarLista();
});

// Preenche o formulário com o gasto escolhido
function iniciarEdicao(id) {
  var gasto = gastos.find(function (g) {
    return g.id === id;
  });
  if (!gasto) {
    return;
  }

  idEditando = id;
  campoDescricao.value = gasto.descricao;
  campoValor.value = gasto.valor;
  campoData.value = gasto.data;
  campoCategoria.value = gasto.categoria;

  botaoForm.textContent = 'Salvar alterações';
  botaoCancelar.classList.remove('oculto');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Devolve o formulário ao modo de gasto novo
function cancelarEdicao() {
  idEditando = null;
  form.reset();
  botaoForm.textContent = 'Adicionar gasto';
  botaoCancelar.classList.add('oculto');
}

botaoCancelar.addEventListener('click', cancelarEdicao);

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

// Remove um gasto pelo id, depois de pedir confirmação
function removerGasto(id) {
  gastos = gastos.filter(function (g) {
    return g.id !== id;
  });
  salvarGastos();
  renderizarLista();
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

    var botaoEditar = document.createElement('button');
    botaoEditar.className = 'mini';
    botaoEditar.textContent = 'Editar';
    botaoEditar.addEventListener('click', function () {
      iniciarEdicao(gasto.id);
    });

    var botaoRemover = document.createElement('button');
    botaoRemover.className = 'mini remover';
    botaoRemover.textContent = 'Remover';
    botaoRemover.addEventListener('click', function () {
      if (confirm('Remover o gasto "' + gasto.descricao + '"?')) {
        removerGasto(gasto.id);
      }
    });

    item.appendChild(info);
    item.appendChild(valor);
    item.appendChild(botaoEditar);
    item.appendChild(botaoRemover);
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
