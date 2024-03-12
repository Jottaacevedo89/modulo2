document.addEventListener('DOMContentLoaded', function() {
    const addContactButton = document.getElementById('addContactButton');
    const addContactModal = document.getElementById('addContactModal');

    addContactButton.addEventListener('click', () => {
        addContactModal.style.display = 'block';
    });

    addContactModal.addEventListener('click', (event) => {
        if (event.target === addContactModal) {
            addContactModal.style.display = 'none';
        }
    });
});



