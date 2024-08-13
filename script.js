document.addEventListener('DOMContentLoaded', () => {
    // Draggable Notes
    const notes = document.querySelectorAll('.note');

    notes.forEach(note => {
        const startDragging = (e) => {
            e.preventDefault();
            const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
            const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
            
            let shiftX = clientX - note.getBoundingClientRect().left;
            let shiftY = clientY - note.getBoundingClientRect().top;

            function moveAt(pageX, pageY) {
                note.style.left = pageX - shiftX + 'px';
                note.style.top = pageY - shiftY + 'px';
            }

            moveAt(clientX, clientY);

            function onMove(event) {
                const clientX = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
                const clientY = event.type === 'touchmove' ? event.touches[0].clientY : event.clientY;
                moveAt(clientX, clientY);
            }

            document.addEventListener('mousemove', onMove);
            document.addEventListener('touchmove', onMove);

            function stopDragging() {
                document.removeEventListener('mousemove', onMove);
                document.removeEventListener('touchmove', onMove);
                document.removeEventListener('mouseup', stopDragging);
                document.removeEventListener('touchend', stopDragging);
            }

            document.addEventListener('mouseup', stopDragging);
            document.addEventListener('touchend', stopDragging);
        };

        note.addEventListener('mousedown', startDragging);
        note.addEventListener('touchstart', startDragging);
        
        note.ondragstart = () => false; 
    });

  
    const heartsContainer = document.getElementById('hearts-container');

    for (let i = 0; i < 20; i++) { 
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heartsContainer.appendChild(heart);
    }

    setTimeout(() => {
        heartsContainer.classList.add('hide-hearts');
    }, 5000); 
});
