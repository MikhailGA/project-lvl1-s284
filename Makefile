install: 
	npm install

start_parity:
	npm run babel-node -- src/bin/brain-even.js

start_calc:
	npm run babel-node -- src/bin/brain-calc.js

start_gcd:
	npm run babel-node -- src/bin/brain-gcd.js

publish:
	npm publish

lint:
	eslint src/
	
fix:
	eslint src/ --fix

build:
	npm run build
