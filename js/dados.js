
const habilidades = [
    { 
        nome: "Comunicação", 
        descricao: "Capacidade de transmitir informações de forma clara e eficaz.", 
        link: "#comunicacao", 
        categoria: "Habilidade Interpessoal", 
        importancia: { 
            vendas: 5, 
            suporte: 4, 
            sucessoCliente: 5, 
            experienciaCliente: 5 
        } 
    },
    { 
        nome: "Empatia", 
        descricao: "Habilidade de entender e compartilhar os sentimentos do cliente.", 
        link: "#empatia", 
        categoria: "Habilidade Interpessoal", 
        importancia: { 
            vendas: 4, 
            suporte: 5, 
            sucessoCliente: 5, 
            experienciaCliente: 5 
        } 
    },
    { 
        nome: "Resolução de Conflitos", 
        descricao: "Capacidade de resolver problemas e desacordos de maneira eficiente.", 
        link: "#resolucao-conflitos", 
        categoria: "Habilidade Interpessoal", 
        importancia: { 
            vendas: 4, 
            suporte: 5, 
            sucessoCliente: 5, 
            experienciaCliente: 4 
        } 
    },
    { 
        nome: "Paciência", 
        descricao: "Ser paciente ao lidar com clientes difíceis ou situações complicadas.", 
        link: "#paciencia", 
        categoria: "Habilidade Interpessoal", 
        importancia: { 
            vendas: 3, 
            suporte: 5, 
            sucessoCliente: 5, 
            experienciaCliente: 4 
        } 
    },
    { 
        nome: "Adaptabilidade", 
        descricao: "Capacidade de se ajustar a mudanças e situações inesperadas.", 
        link: "#adaptabilidade", 
        categoria: "Habilidade Pessoal", 
        importancia: { 
            vendas: 4, 
            suporte: 4, 
            sucessoCliente: 5, 
            experienciaCliente: 5 
        } 
    },
    { 
        nome: "Conhecimento do Produto", 
        descricao: "Domínio profundo sobre os produtos ou serviços oferecidos.", 
        link: "#conhecimento-produto", 
        categoria: "Habilidade Técnica", 
        importancia: { 
            vendas: 5, 
            suporte: 5, 
            sucessoCliente: 5, 
            experienciaCliente: 4 
        } 
    },
    { 
        nome: "Escuta Ativa", 
        descricao: "Capacidade de ouvir atentamente as necessidades do cliente.", 
        link: "#escuta-ativa", 
        categoria: "Habilidade Interpessoal", 
        importancia: { 
            vendas: 5, 
            suporte: 5, 
            sucessoCliente: 5, 
            experienciaCliente: 5 
        } 
    },
    { 
        nome: "Solução de Problemas", 
        descricao: "Habilidade para identificar problemas e propor soluções eficazes.", 
        link: "#solucao-problemas", 
        categoria: "Habilidade Técnica", 
        importancia: { 
            vendas: 4, 
            suporte: 5, 
            sucessoCliente: 5, 
            experienciaCliente: 4 
        } 
    },
    { 
        nome: "Gestão de Tempo", 
        descricao: "Capacidade de gerenciar o tempo de forma eficiente.", 
        link: "#gestao-tempo", 
        categoria: "Habilidade Pessoal", 
        importancia: { 
            vendas: 5, 
            suporte: 4, 
            sucessoCliente: 5, 
            experienciaCliente: 4 
        } 
    },
    { 
        nome: "Proatividade", 
        descricao: "Antecipar as necessidades dos clientes antes que eles as expressem.", 
        link: "#proatividade", 
        categoria: "Habilidade Pessoal", 
        importancia: { 
            vendas: 5, 
            suporte: 4, 
            sucessoCliente: 5, 
            experienciaCliente: 5 
        } 
    },
    { 
        nome: "Trabalho em Equipe", 
        descricao: "Colaborar eficazmente com outros membros da equipe.", 
        link: "#trabalho-equipe", 
        categoria: "Habilidade Interpessoal", 
        importancia: { 
            vendas: 4, 
            suporte: 5, 
            sucessoCliente: 5, 
            experienciaCliente: 5 
        } 
    },
    { 
        nome: "Negociação", 
        descricao: "Habilidade de negociar soluções favoráveis para ambas as partes.", 
        link: "#negociacao", 
        categoria: "Habilidade Interpessoal", 
        importancia: { 
            vendas: 5, 
            suporte: 3, 
            sucessoCliente: 4, 
            experienciaCliente: 4 
        } 
    },
    { 
        nome: "Tomada de Decisão", 
        descricao: "Capacidade de tomar decisões rápidas e informadas.", 
        link: "#tomada-decisao", 
        categoria: "Habilidade Pessoal", 
        importancia: { 
            vendas: 4, 
            suporte: 4, 
            sucessoCliente: 5, 
            experienciaCliente: 5 
        } 
    },
    { 
        nome: "Gerenciamento de Estresse", 
        descricao: "Capacidade de manter a calma sob pressão.", 
        link: "#gerenciamento-estresse", 
        categoria: "Habilidade Pessoal", 
        importancia: { 
            vendas: 3, 
            suporte: 5, 
            sucessoCliente: 5, 
            experienciaCliente: 4 
        } 
    },
    { 
        nome: "Orientação ao Detalhe", 
        descricao: "Atenção aos detalhes para garantir alta qualidade no atendimento.", 
        link: "#orientacao-detalhe", 
        categoria: "Habilidade Técnica", 
        importancia: { 
            vendas: 4, 
            suporte: 5, 
            sucessoCliente: 5, 
            experienciaCliente: 5 
        } 
    },
    { 
        nome: "Feedback Eficaz", 
        descricao: "Capacidade de fornecer e receber feedback construtivo.", 
        link: "#feedback-eficaz", 
        categoria: "Habilidade Interpessoal", 
        importancia: { 
            vendas: 4, 
            suporte: 4, 
            sucessoCliente: 5, 
            experienciaCliente: 5 
        } 
    },
    { 
        nome: "Persuasão", 
        descricao: "Habilidade de influenciar e convencer os clientes.", 
        link: "#persuasao", 
        categoria: "Habilidade Interpessoal", 
        importancia: { 
            vendas: 5, 
            suporte: 3, 
            sucessoCliente: 4, 
            experienciaCliente: 4 
        } 
    },
    { 
        nome: "Foco no Cliente", 
        descricao: "Manter o cliente como prioridade em todas as interações.", 
        link: "#foco-cliente", 
        categoria: "Habilidade Pessoal", 
        importancia: { 
            vendas: 5, 
            suporte: 5, 
            sucessoCliente: 5, 
            experienciaCliente: 5 
        } 
    },
    { 
        nome: "Conhecimento Técnico", 
        descricao: "Entendimento técnico necessário para resolver problemas específicos.", 
        link: "#conhecimento-tecnico", 
        categoria: "Habilidade Técnica", 
        importancia: { 
            vendas: 4, 
            suporte: 5, 
            sucessoCliente: 5, 
            experienciaCliente: 4 
        } 
    },
    { 
        nome: "Automotivação", 
        descricao: "Capacidade de se manter motivado e produtivo sem supervisão constante.", 
        link: "#automotivacao", 
        categoria: "Habilidade Pessoal", 
        importancia: { 
            vendas: 4, 
            suporte: 4, 
            sucessoCliente: 5, 
            experienciaCliente: 5 
        } 
    }
];

export {habilidades};
