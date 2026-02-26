// dashboard.js - Dashboard interactivity

import { animatedCounter } from './utils.js';

window.addEventListener('DOMContentLoaded', () => {
  // Animated stat cards
  document.querySelectorAll('.stat-value').forEach(card => {
    const end = parseInt(card.dataset.value, 10);
    animatedCounter(card, 0, end, 1200);
  });
});
