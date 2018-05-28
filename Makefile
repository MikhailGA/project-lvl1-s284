install: 
	npm install

run:
	node src/bin/brain-games.js

start:
	npm run babel-node -- src/bin/brain-games.js

publish:
	npm publish