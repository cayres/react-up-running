# limpa ultima versão

rm -rf __deployme

mkdir __deployme

# construção

sh scripts/build.sh

# minificação de JS

sudo uglifyjs bundle.js -o __deployme/bundle.js

# minificação de css

sudo cssshrink bundle.css > __deployme/bundle.css

# cópia de HTML e imagens

sudo cp index.html __deployme/index.html

sudo cp -r images __deployme/images

# pront

date; echo;