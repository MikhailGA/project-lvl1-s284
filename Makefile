install: 
	npm install

start_parity:
	npm run babel-node -- src/bin/brain-even.js

start_calc:
	npm run babel-node -- src/bin/brain-calc.js

start_gcd:
	npm run babel-node -- src/bin/brain-gcd.js

start_balance:
	npm run babel-node -- src/bin/brain-balance.js

start_progression:
	npm run babel-node -- src/bin/brain-progression.js

start_prime:
	npm run babel-node -- src/bin/brain-prime.js

publish:
	npm publish

lint:
	eslint src/
	
fix:
	eslint src/ --fix

build:
	npm run build
