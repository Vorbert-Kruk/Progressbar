HTMLElement.prototype.setVariable = function(variableName, newValue) {
    this.style.setProperty(`--${variableName}`, newValue);
};

const getRandomPercentage = () => `${Math.floor(Math.random() * 100)}%`;

const progressBarFills = document.querySelectorAll('.bar-container .progress-bar .fill');
progressBarFills.forEach(fill => {
    const currentPercentage = getRandomPercentage();
    fill.setVariable('fill', currentPercentage);
    fill.setAttribute('data-fill', currentPercentage.substring(0, currentPercentage.indexOf('%')));
});