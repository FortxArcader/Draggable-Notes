document.querySelectorAll('.note').forEach(note => {
    note.addEventListener('mousedown', function(e) {
        const rect = note.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        function onMouseMove(e) {
            note.style.left = e.clientX - offsetX + 'px';
            note.style.top = e.clientY - offsetY + 'px';
        }

        document.addEventListener('mousemove', onMouseMove);

        note.addEventListener('mouseup', function() {
            document.removeEventListener('mousemove', onMouseMove);
        }, { once: true });
    });

    note.ondragstart = () => false;  // Prevent default drag behavior
});
