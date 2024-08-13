document.addEventListener('DOMContentLoaded', () => {
    // Draggable Notes
    const notes = document.querySelectorAll('.note');

    notes.forEach(note => {
        note.addEventListener('mousedown', (e) => {
            let shiftX = e.clientX - note.getBoundingClientRect().left;
            let shiftY = e.clientY - note.getBoundingClientRect().top;

            function moveAt(pageX, pageY) {
                note.style.left = pageX - shiftX + 'px';
                note.style.top = pageY - shiftY + 'px';
            }

            moveAt(e.pageX, e.pageY);

            function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);
            }

            document.addEventListener('mousemove', onMouseMove);

            note.addEventListener('mouseup', () => {
                document.removeEventListener('mousemove', onMouseMove);
            });

            note.addEventListener('mouseleave', () => {
                document.removeEventListener('mousemove', onMouseMove);
            });

            note.ondragstart = () => false;
        });
    });

    // Heart Falling Animation
    const heartsContainer = document.getElementById('hearts-container');

    for (let i = 0; i < 20; i++) { // You can adjust the number of hearts
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heartsContainer.appendChild(heart);
    }

    setTimeout(() => {
        heartsContainer.classList.add('hide-hearts');
    }, 5000); // Remove hearts after 5 seconds
});