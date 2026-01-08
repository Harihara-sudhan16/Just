// Toggle profile dropdown
function toggleDropdown() {
    const drop = document.getElementById("dropdown");
    drop.style.display = drop.style.display === "block" ? "none" : "block";
}

// Chart.js Weekly Attendance
const ctx = document.getElementById('attendanceChart').getContext('2d');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{
            label: 'Attendance',
            data: [70, 85, 78, 90, 82, 95],
            borderColor: '#3b6fdc',
            backgroundColor: 'rgba(59,111,220,0.15)',
            fill: true,
            tension: 0.4,
            pointRadius: 4
        }]
    },
    options: {
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
