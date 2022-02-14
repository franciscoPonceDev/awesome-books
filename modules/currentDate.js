import { DateTime } from '../node_modules/luxon/src/luxon.js';

const now = DateTime.now().toString();
document.getElementById('date').innerHTML = now;