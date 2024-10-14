// seleziono gli elementi dal DOM

const sideBar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');

// aggancio un ascoltatore di eventi al pulsante che apre la sidebar

toggleBtn.addEventListener('click', () => {
    // aggiungo/tolgo la classe che fa apparire la sidebar
    sideBar.classList.toggle('show-sidebar');
});