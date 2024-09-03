document.addEventListener("DOMContentLoaded", function() {
    const habilidades = [
        { nome: "Comunicação", descricao: "Desenvolver a habilidade de comunicação é fundamental para CS e CX. Aqui estão algumas dicas..." },
        { nome: "Empatia", descricao: "A empatia permite que você entenda e compartilhe os sentimentos dos outros. Para desenvolvê-la..." },
        { nome: "Gestão de Tempo", descricao: "A gestão eficaz do tempo é essencial para o sucesso em CS e CX. Aqui estão algumas estratégias..." },
        { nome: "Resolução de Conflitos", descricao: "A capacidade de resolver conflitos é crucial. Aprenda como melhorar essa habilidade com as seguintes técnicas..." },
        { nome: "Pensamento Crítico", descricao: "O pensamento crítico ajuda a resolver problemas complexos. Para aprimorar essa habilidade, você pode..." },
    ];

    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search-input");
    const resultadosPesquisa = document.getElementById("flow-resultados-pesquisa");
    const habilidadeLinks = document.querySelectorAll(".habilidade-link");

    function buscarHabilidade(termo) {
        resultadosPesquisa.innerHTML = ''; // Limpa os resultados anteriores
        const resultados = habilidades.filter(habilidade => habilidade.nome.toLowerCase().includes(termo.toLowerCase()));
        
        if (resultados.length > 0) {
            resultados.forEach(habilidade => {
                const itemResultado = document.createElement('div');
                itemResultado.classList.add('item-resultado');
                
                itemResultado.innerHTML = `
                    <h2>${habilidade.nome}</h2>
                    <p class="descricao-meta">${habilidade.descricao.substring(0, 100)}...</p>
                    <a href="descricao.html?habilidade=${habilidade.nome}">Leia mais</a>
                `;
                
                resultadosPesquisa.appendChild(itemResultado);
            });
        } else {
            resultadosPesquisa.innerHTML = '<p>Nenhuma habilidade encontrada com esse termo.</p>';
        }

        resultadosPesquisa.style.display = 'block';
    }

    searchButton.addEventListener("click", () => {
        const termo = searchInput.value.trim();
        if (termo) {
            buscarHabilidade(termo);
        }
    });

    habilidadeLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const termo = link.textContent.trim();
            buscarHabilidade(termo);
        });
    });
});
