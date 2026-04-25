const fs = require('fs');
for (let i = 1; i <=8; i++) {
  const p = `public/resultados${i}.png`;
  try {
    const stat = fs.statSync(p);
    console.log(p, stat.size);
  } catch(e) {
    console.log(p, 'error');
  }
}
