function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);

    function gradientMove(event) {
        const gradientBoxWidthv = event.target.clientWidth;
        const positionOfTheMouse = event.offsetX / (gradientBoxWidthv - 1);
        const percentage = Math.trunc(positionOfTheMouse * 100);
        document.getElementById('result').textContent = percentage + '%';

    }

    function gradientOut() {
        document.getElementById('result').textContent = '';
    }
}