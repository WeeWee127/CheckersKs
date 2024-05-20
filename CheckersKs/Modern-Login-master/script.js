document.getElementById('new-game').addEventListener('click', function() {
    // Відкриття локального файлу за допомогою URL схеми file://
    window.location.href = 'file:///C:/Users/poteb/CheckersKs/Checkers.html';
});

document.getElementById('settings').addEventListener('click', function() {
    alert('Opening settings...');
    // Тут можна додати логіку для відкриття налаштувань
});

document.getElementById('exit').addEventListener('click', function() {
    // Перенаправлення до локального файлу за допомогою URL схеми file://
    window.location.href = 'file:///C:/Users/poteb/CheckersKs/Modern-Login-master/index.html';
});
