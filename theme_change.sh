#!/bin/bash
FILES="src/SalesPage.tsx src/PricesPage.tsx"

for file in $FILES; do
  # Specific tweaks first
  sed -i 's|text-gray-500 font-normal">/ hora<|text-gray-900 font-black text-xs ml-1">/ hora<|g' "$file"
  sed -i 's|text-cyan-500 uppercase font-bold mt-0.5 tracking-tight">Contrate por hora|text-gray-500 uppercase font-bold mt-0.5 tracking-tight">Contrate por hora|g' "$file"

  # Colors
  sed -i 's/bg-black/bg-white/g' "$file"
  sed -i 's/bg-\[#060911\]/bg-gray-50/g' "$file"
  
  # Text colors
  sed -i 's/text-white/text-gray-900/g' "$file"
  sed -i 's/text-gray-300/text-gray-600/g' "$file"
  sed -i 's/text-gray-400/text-gray-500/g' "$file"
  # skip text-gray-500 to avoid conflicts or just do it if needed
  
  # Borders
  sed -i 's/border-gray-900/border-gray-200/g' "$file"
  sed -i 's/border-gray-800/border-gray-200/g' "$file"
  sed -i 's/border-gray-700/border-gray-300/g' "$file"
  
  # Backgrounds
  sed -i 's/bg-gray-900/bg-gray-100/g' "$file"
  sed -i 's/bg-gray-800/bg-gray-200/g' "$file"
  
  # Cyan -> Blue (Instagram style)
  sed -i 's/text-cyan-400/text-blue-600/g' "$file"
  sed -i 's/text-cyan-300/text-blue-500/g' "$file"
  sed -i 's/text-cyan-200/text-blue-400/g' "$file"
  sed -i 's/text-cyan-100/text-blue-700/g' "$file"
  sed -i 's/bg-cyan-950\/60/bg-blue-50/g' "$file"
  sed -i 's/bg-cyan-950\/80/bg-blue-50/g' "$file"
  sed -i 's/bg-cyan-950\/50/bg-blue-50/g' "$file"
  sed -i 's/bg-cyan-950\/40/bg-blue-50/g' "$file"
  sed -i 's/bg-cyan-900\/60/bg-blue-100/g' "$file"
  sed -i 's/bg-cyan-900\/50/bg-blue-100/g' "$file"
  sed -i 's/bg-cyan-900\/40/bg-blue-100/g' "$file"
  sed -i 's/border-cyan-500\/50/border-blue-200/g' "$file"
  sed -i 's/border-cyan-500\/40/border-blue-200/g' "$file"
  sed -i 's/border-cyan-500\/30/border-blue-200/g' "$file"
  sed -i 's/border-cyan-500\/20/border-blue-200/g' "$file"
  sed -i 's/hover:border-cyan-400/hover:border-blue-300/g' "$file"
  sed -i 's/hover:border-cyan-500\/40/hover:border-blue-300/g' "$file"
  sed -i 's/bg-cyan-500\/10/bg-blue-50/g' "$file"
  
  # Emerald -> Green (Instagram style)
  sed -i 's/text-emerald-400/text-green-600/g' "$file"
  sed -i 's/text-emerald-300/text-green-500/g' "$file"
  sed -i 's/bg-emerald-950\/50/bg-green-50/g' "$file"
  sed -i 's/bg-emerald-950\/40/bg-green-50/g' "$file"
  sed -i 's/border-emerald-500\/40/border-green-200/g' "$file"
  sed -i 's/border-emerald-500\/30/border-green-200/g' "$file"
  sed -i 's/hover:border-emerald-500\/40/hover:border-green-300/g' "$file"
  sed -i 's/hover:border-emerald-400/hover:border-green-300/g' "$file"
  
  # Purple
  sed -i 's/text-purple-400/text-purple-600/g' "$file"
  sed -i 's/bg-purple-950\/50/bg-purple-50/g' "$file"
  sed -i 's/border-purple-500\/40/border-purple-200/g' "$file"
  sed -i 's/bg-purple-500\/10/bg-purple-50/g' "$file"

  # Blue
  sed -i 's/border-blue-500\/30/border-blue-200/g' "$file"
  sed -i 's/bg-blue-950\/40/bg-blue-50/g' "$file"

  # Gradients
  sed -i 's/from-cyan-950\/70/from-blue-50/g' "$file"
  sed -i 's/to-emerald-950\/60/to-green-50/g' "$file"
  sed -i 's/via-\[#060911\]/via-white/g' "$file"
  
  # Remove harsh dark mode text transparent gradients
  sed -i 's/text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-gray-900 to-gray-600/text-gray-900/g' "$file"
  sed -i 's/text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-green-600/text-blue-600/g' "$file"
  
  # Specific buttons that were gradient to black text -> now standard blue or dark
  # "bg-gradient-to-r from-cyan-400 to-emerald-400 text-black" -> "bg-blue-600 text-white"
  sed -i 's/bg-gradient-to-r from-cyan-400 to-emerald-400/bg-blue-600/g' "$file"
  sed -i 's/bg-gradient-to-r from-blue-600 to-emerald-400/bg-blue-600/g' "$file"
  sed -i 's/bg-gradient-to-r from-blue-600 to-green-600/bg-blue-600/g' "$file"
  sed -i 's/hover:from-cyan-300 hover:to-emerald-300/hover:bg-blue-700/g' "$file"
  sed -i 's/hover:from-blue-500 hover:to-green-500/hover:bg-blue-700/g' "$file"
  sed -i 's/text-black/text-white/g' "$file" # DANGER: some black text might be intentional, but mostly in dark mode black text was on bright buttons.
  
  # Let's fix text-white that got messed up (since we want buttons to have text-white now, but the earlier sed changed all text-white to text-gray-900)
  # Actually, the earlier sed `text-white -> text-gray-900` means the buttons now have `text-gray-900`. Let's make primary buttons `text-white`.
  sed -i 's/bg-blue-600 hover:bg-blue-700 text-gray-900/bg-blue-600 hover:bg-blue-700 text-white/g' "$file"
  sed -i 's/bg-blue-600 text-gray-900/bg-blue-600 text-white/g' "$file"
  sed -i 's/bg-gray-900 hover:bg-gray-100 text-gray-600/bg-gray-900 hover:bg-gray-800 text-white/g' "$file"
  sed -i 's/bg-white hover:bg-gray-200 text-white/bg-gray-900 hover:bg-gray-800 text-white/g' "$file"

  # shadows
  sed -i 's/shadow-\[0_0_[^]]*\]/shadow-sm/g' "$file"
  
done
