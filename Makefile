install: 
	npm install

start:
	npm run babel-node -- src/bin/brain-even.js

publish:
	npm publish

lint:
	eslint src/bin/brain-games.js