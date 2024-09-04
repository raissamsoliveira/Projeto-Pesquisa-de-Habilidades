import { habilidades } from './dados.js'; 

// Função para exibir o título com efeito de digitação
function digitarTitulo(titulo, elemento, index = 0) {
    if (index < titulo.length) {
        elemento.textContent += titulo.charAt(index);
        setTimeout(() => digitarTitulo(titulo, elemento, index + 1), 90); // Ajuste o tempo de digitação conforme necessário
    }
}

// Função para buscar e exibir habilidades com base no termo pesquisado
function buscarHabilidade(termo, habilidades, resultadosPesquisa) {
    resultadosPesquisa.innerHTML = ''; // Limpa os resultados anteriores
    const resultados = habilidades.filter(habilidade =>
        habilidade.nome.toLowerCase().includes(termo.toLowerCase())
    );

    if (resultados.length > 0) {
        resultados.forEach(habilidade => {
            const itemResultado = document.createElement('div');
            itemResultado.classList.add('item-resultado');
            itemResultado.innerHTML = `
                <h2>${habilidade.nome}</h2>
                <p>${habilidade.descricao}</p>
                <p><strong>Categoria:</strong> ${habilidade.categoria}</p>
                <a href="descricao.html?habilidade=${habilidade.nome}">Leia mais</a>
                </div>
            `;
            resultadosPesquisa.appendChild(itemResultado);
        });
    } else {
        resultadosPesquisa.innerHTML = '<p>Nenhuma habilidade encontrada com esse termo.</p>';
    }

    // Exibir a seção de resultados da pesquisa
    resultadosPesquisa.style.display = 'block';
}

// Função principal que é executada quando o DOM é carregado
document.addEventListener("DOMContentLoaded", function() {
    // Elementos da página
    const h1Element = document.querySelector("header h1");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const resultadosPesquisa = document.getElementById("flow-resultados-pesquisa");
    const resultadosPesquisaOriginal = document.getElementById("resultados-pesquisa");
    const habilidadeLinks = document.querySelectorAll(".habilidade-link");

    // Exibe o título com efeito de digitação
    if (h1Element) {
        digitarTitulo("MULTIVERSO DE HABILIDADES", h1Element);
    } else {
        console.error("Elemento <h1> não encontrado.");
    }

    // Evento para buscar habilidades ao pressionar a tecla Enter
    searchInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Previne a ação padrão do Enter (como submissão de formulário)
            searchButton.click();    // Aciona o clique no botão de pesquisa
        }
    });

    // Evento para buscar habilidades ao clicar no botão de pesquisa
    searchButton.addEventListener("click", () => {
        const termo = searchInput.value.trim();
        if (termo) {
            // Oculta a seção de resultados de pesquisa original
            resultadosPesquisaOriginal.style.display = 'none';

            buscarHabilidade(termo, habilidades, resultadosPesquisa);
        }
    });

    // Evento para buscar habilidades ao clicar em links de habilidades
    habilidadeLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const termo = link.textContent.trim();
            buscarHabilidade(termo, habilidades, resultadosPesquisa);
        });
    });
});
