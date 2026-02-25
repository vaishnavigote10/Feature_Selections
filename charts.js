// charts.js - Chart.js integration

// Chart.js must be included via CDN in dashboard.html

window.addEventListener('DOMContentLoaded', () => {
  if (window.Chart) {
    const ctx = document.getElementById('dashboardChart')?.getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['A', 'B', 'C', 'D'],
          datasets: [{
            label: 'Sample Data',
            data: [12, 19, 3, 5],
            backgroundColor: [
              '#4f8cff', '#ffb86c', '#23d997', '#23272f'
            ],
            borderRadius: 12,
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: 'top',
            }
          }
        }
      });
    }
  }
});
