const fs = require('fs');

let content = fs.readFileSync('src/SalesPage.tsx', 'utf8');

// Update Stark Button to Black with White text
content = content.replace(
  'className="w-full md:w-auto px-8 py-4 rounded-xl bg-green-500 hover:bg-green-400 text-gray-900 font-black text-sm uppercase flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:scale-105"',
  'className="w-full md:w-auto px-8 py-4 rounded-xl bg-black hover:bg-gray-900 text-white font-black text-sm uppercase flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:scale-105"'
);

// Update plan descriptions to be text-black or text-gray-900 instead of text-gray-600
content = content.replace(/text-gray-600 text-xs mb-4/g, 'text-gray-900 text-sm mb-4 font-medium');

// Update main plan titles to be text-black
content = content.replace(/text-gray-900/g, 'text-black');

fs.writeFileSync('src/SalesPage.tsx', content);
