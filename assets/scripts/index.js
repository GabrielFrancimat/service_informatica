// Inicializa os ícones
lucide.createIcons();

// Fundo animado
const bgCode = `function init() { return "Success"; }`;
const bgContainer = document.getElementById('bg-code-container');

if (bgContainer) {
    for (let i = 0; i < 20; i++) {
        const span = document.createElement('div');
        span.textContent = bgCode;
        bgContainer.appendChild(span);
    }
}