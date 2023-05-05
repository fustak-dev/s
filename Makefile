help: ## Show this help message
	@echo 'usage: make [target] <type> <name>'
	@echo
	@echo 'Targets:'
	@egrep '^(.+)\:\ ##\ (.+)' ${MAKEFILE_LIST} | column -t -c 2 -s ':#'

bundle : ## Create production bundle
	rm -rf dist || exit $? ; \
	node ./esbuild.js || exit $? ; \

format : ## Enforces a consistent style by parsing your code and re-printing it
	pnpx prettier --write "./src/**/*.js" "./tests/**/*.js" "./examples/**/*.js" ;\

test : ## Execute tests
	TEST=true node tests.js || exit $? ;\

test-watch : test ## Execute tests on watch mode
	npx chokidar-cli "**/*.js" -c "make test" || exit $? ;\

# catch anything and do nothing
%:
	@:
