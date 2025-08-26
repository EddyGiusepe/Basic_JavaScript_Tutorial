// =============================================
//  MY FIRST JAVASCRIPT - FUNÇÕES ESPECÍFICAS
// =============================================

console.log("📚 === MY FIRST JAVASCRIPT ===");
console.log("🎯 Scripts específicos carregados!");

// =============================================
//  EXEMPLO 1: DATA E HORA
// =============================================
function showDateTime() {
    const now = new Date();
    const demo = document.getElementById('demo');
    
    // Formatar data em português
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    
    const formattedDate = now.toLocaleDateString('pt-BR', options);
    
    demo.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 1.2em; margin-bottom: 10px;">📅 ${formattedDate}</div>
            <div style="font-size: 0.9em; color: #666;">⏰ Atualizado em tempo real!</div>
        </div>
    `;
    
    // Adicionar efeito visual
    demo.classList.add('active');
    setTimeout(() => demo.classList.remove('active'), 1000);
    
    console.log("🕐 Data atualizada:", formattedDate);
}

// =============================================
//  EXEMPLO 2: MENSAGENS PERSONALIZADAS
// =============================================
function showPersonalizedMessage() {
    const messages = [
        {
            text: "🎉 Parabéns! Você está aprendendo JavaScript!",
            color: "#e74c3c"
        },
        {
            text: "⚡ JavaScript é a linguagem da web!",
            color: "#f39c12"
        },
        {
            text: "🚀 Você está no caminho certo para ser dev!",
            color: "#3498db"
        },
        {
            text: "💻 Coding is fun and powerful!",
            color: "#9b59b6"
        },
        {
            text: "🌟 Continue assim, você vai longe!",
            color: "#2ecc71"
        },
        {
            text: "🔥 JavaScript pode fazer qualquer coisa!",
            color: "#e67e22"
        },
        {
            text: "💡 Cada linha de código é um aprendizado!",
            color: "#1abc9c"
        }
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const messageElement = document.getElementById('message');
    
    // Efeito de aparição
    messageElement.style.opacity = '0';
    messageElement.style.transform = 'translateY(-10px)';
    
    setTimeout(() => {
        messageElement.innerHTML = `
            <div style="text-align: center; color: ${randomMessage.color};">
                <div style="font-size: 1.1em; margin-bottom: 5px;">${randomMessage.text}</div>
                <div style="font-size: 0.8em; color: #666;">💬 Mensagem ${messages.indexOf(randomMessage) + 1} de ${messages.length}</div>
            </div>
        `;
        
        messageElement.style.opacity = '1';
        messageElement.style.transform = 'translateY(0)';
        messageElement.classList.add('active');
        
        setTimeout(() => messageElement.classList.remove('active'), 1000);
    }, 100);
    
    console.log("📝 Mensagem exibida:", randomMessage.text);
}

// =============================================
//  EXEMPLO 3: MUDANÇA DE COR ANIMADA
// =============================================
function changeStyle() {
    const colors = [
        { bg: '#e74c3c', name: 'Vermelho' },
        { bg: '#3498db', name: 'Azul' },
        { bg: '#2ecc71', name: 'Verde' },
        { bg: '#f39c12', name: 'Laranja' },
        { bg: '#9b59b6', name: 'Roxo' },
        { bg: '#1abc9c', name: 'Turquesa' },
        { bg: '#e67e22', name: 'Laranja Escuro' },
        { bg: '#34495e', name: 'Cinza Azulado' }
    ];
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const box = document.getElementById('colorBox');
    
    // Adicionar classe de animação
    box.classList.add('animate-color');
    
    // Aplicar nova cor após animação começar
    setTimeout(() => {
        box.style.backgroundColor = randomColor.bg;
        box.style.borderColor = randomColor.bg;
        box.title = `Cor atual: ${randomColor.name}`;
    }, 300);
    
    // Remover classe de animação
    setTimeout(() => {
        box.classList.remove('animate-color');
    }, 600);
    
    console.log("🎨 Cor alterada para:", randomColor.name, randomColor.bg);
}

// =============================================
//  EXEMPLO 4: CALCULADORA SIMPLES
// =============================================
function calculateNumbers() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const operation = document.getElementById('operation').value;
    const result = document.getElementById('calculation');
    
    // Validar números
    if (isNaN(num1) || isNaN(num2)) {
        result.innerHTML = `
            <div style="text-align: center; color: #e74c3c;">
                ❌ Por favor, digite números válidos!
            </div>
        `;
        return;
    }
    
    let calculation;
    let symbol;
    
    switch(operation) {
        case 'add':
            calculation = num1 + num2;
            symbol = '+';
            break;
        case 'subtract':
            calculation = num1 - num2;
            symbol = '-';
            break;
        case 'multiply':
            calculation = num1 * num2;
            symbol = '×';
            break;
        case 'divide':
            if (num2 === 0) {
                result.innerHTML = `
                    <div style="text-align: center; color: #e74c3c;">
                        ⚠️ Não é possível dividir por zero!
                    </div>
                `;
                return;
            }
            calculation = num1 / num2;
            symbol = '÷';
            break;
        default:
            calculation = 0;
            symbol = '?';
    }
    
    // Formatar resultado
    const formattedResult = Number.isInteger(calculation) ? 
        calculation : calculation.toFixed(2);
    
    result.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 1.2em; margin-bottom: 10px;">
                🧮 ${num1} ${symbol} ${num2} = <strong>${formattedResult}</strong>
            </div>
            <div style="font-size: 0.9em; color: #666;">
                ✅ Cálculo realizado com sucesso!
            </div>
        </div>
    `;
    
    // Efeito visual
    result.classList.add('active');
    setTimeout(() => result.classList.remove('active'), 1000);
    
    console.log(`🧮 Cálculo: ${num1} ${symbol} ${num2} = ${formattedResult}`);
}

// =============================================
//  INICIALIZAÇÃO E EVENTOS
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ Página carregada com sucesso!");
    
    // Atualizar data automaticamente a cada segundo
    setInterval(showDateTime, 1000);
    
    // Mostrar data inicial
    showDateTime();
    
    // Event listeners para tecla Enter nos inputs
    const numberInputs = document.querySelectorAll('input[type="number"]');
    numberInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculateNumbers();
            }
        });
    });
    
    // Mensagem de boas-vindas
    console.log("💡 === DICAS DE USO ===");
    console.log("🔄 A data se atualiza automaticamente a cada segundo");
    console.log("⌨️ Pressione Enter nos campos de número para calcular");
    console.log("🖱️ Clique na caixa colorida para mudar a cor");
    console.log("📱 A página é responsiva para mobile");
    
    // Easter egg - clique na caixa de cor
    document.getElementById('colorBox').addEventListener('click', changeStyle);
});

// =============================================
//  FUNÇÕES UTILITÁRIAS
// =============================================

// Função para limpar todos os resultados
function clearAll() {
    document.getElementById('demo').innerHTML = '';
    document.getElementById('message').innerHTML = '';
    document.getElementById('calculation').innerHTML = '';
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
    document.getElementById('operation').selectedIndex = 0;
    
    console.log("🧹 Todos os campos foram limpos!");
}

// Função para mostrar info sobre JavaScript
function showJSInfo() {
    const info = `
        <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #667eea, #764ba2); color: white; border-radius: 10px; margin: 10px 0;">
            <h4>🚀 Sobre JavaScript</h4>
            <p>JavaScript é uma linguagem de programação criada em 1995 por Brendan Eich.</p>
            <p>É a linguagem oficial da web e pode ser usada no front-end e back-end!</p>
            <small>✨ Esta demonstração foi criada com JavaScript puro!</small>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', info);
    
    setTimeout(() => {
        document.querySelector('div[style*="667eea"]').remove();
    }, 5000);
}

// =============================================
//  MENSAGEM FINAL
// =============================================
console.log("🎯 Explore os exemplos e divirta-se aprendendo JavaScript!");
console.log("🌟 Lembre-se: prática é a chave do aprendizado!");
