const circle = document.querySelector('.progress-ring__circle'),
      radius = circle.r.baseVal.value,
      circumference = 2 * Math.PI * radius,
      input = document.querySelector('.percent');

input.addEventListener('change', function() {
    setProgress(input.value);
});

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
    const offet = circumference - percent / 100 * circumference;

    circle.style.strokeDashoffset = offset;
}