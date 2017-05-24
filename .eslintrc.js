module.exports = {
	"root": true,
	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "script",
		"ecmaFeatures": {
			"globalReturn": true
		}
	},
	"env": {
		"es6": true,
		"node": true
	},
	"globals": {},
	"extends": "eslint:recommended",
	"rules": {
		"no-cond-assign": ["error", "except-parens"],
		"no-console": "off",
		"no-control-regex": "off",
		"no-empty": ["error", {
			"allowEmptyCatch": true
		}],
		"no-inner-declarations": ["error", "functions"],
		"valid-jsdoc": "off",

		"array-callback-return": "error",
		"block-scoped-var": "error",
		"comma-dangle": ["error", "always-multiline"],
		"complexity": "off",
		"consistent-return": "off",
		"curly": ["error", "multi-line", "consistent"],
		"default-case": "off",
		"dot-location": ["error", "property"],
		"dot-notation": "off",
		"eqeqeq": "error",
		"guard-for-in": "off",
		"no-caller": "error",
		"no-case-declarations": "off",
		"no-div-regex": "error",
		"no-else-return": "off",
		"no-labels": ["error", {
			"allowLoop": true,
			"allowSwitch": true
		}],
		"no-eval": "off",
		"no-implied-eval": "error",
		"no-extend-native": "error",
		"no-extra-bind": "warn",
		"no-extra-label": "error",
		"no-extra-parens": "off",
		"no-floating-decimal": "error",
		"no-implicit-coercion": "off",
		"no-invalid-this": "off",
		"no-iterator": "error",
		"no-lone-blocks": "off",
		"no-loop-func": "off",
		"no-magic-numbers": "off",
		"no-multi-spaces": "warn",
		"no-multi-str": "error",
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-new": "error",
		"no-octal-escape": "error",
		"no-param-reassign": "off",
		"no-proto": "error",
		"no-return-assign": ["error", "except-parens"],
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-throw-literal": "error",
		"no-unmodified-loop-condition": "error",
		"no-unused-expressions": "error",
		"no-useless-call": "error",
		"no-useless-concat": "off",
		"no-void": "off",
		"no-warning-comments": "off",
		"no-with": "error",
		"radix": ["warn", "as-needed"],
		"vars-on-top": "off",
		"wrap-iife": ["error", "inside"],
		"yoda": "off",

		"strict": ["error", "global"],

		"init-declarations": "off",
		"no-catch-shadow": "off",
		"no-label-var": "error",
		"no-restricted-globals": ["error", "Proxy", "Reflect", "Symbol", "WeakSet"],
		"no-shadow-restricted-names": "error",
		"no-shadow": "off",
		"no-undef-init": "warn",
		"no-undef": ["error", {
			"typeof": true
		}],
		"no-undefined": "off",
		"no-unused-vars": ["warn", {
			"args": "none"
		}],
		"no-use-before-define": ["error", {
			"functions": false,
			"classes": false
		}],

		"callback-return": [2, ["callback", "cb", "done"]],
		"no-mixed-requires": "error",
		"no-new-require": "error",
		"no-path-concat": "off",
		"no-process-env": "off",
		"no-process-exit": "off",
		"no-restricted-modules": ["error", "moment", "request", "sugar"],
		"no-sync": "off",

		"array-bracket-spacing": ["error", "never"],
		"block-spacing": "off",
		"brace-style": ["error", "1tbs", {
			"allowSingleLine": true
		}],
		"camelcase": "off",
		"comma-spacing": ["error", {
			"before": false,
			"after": true
		}],
		"comma-style": ["error", "last"],
		"computed-property-spacing": ["error", "never"],
		"consistent-this": "off",
		"func-names": "off",
		"func-style": "off",
		"id-length": "off",
		"id-match": "off",
		"indent": ["error", "tab"],
		"key-spacing": "off",
		"lines-around-comment": "off",
		"max-nested-callbacks": "off",
		"max-statements-per-line": "off",
		"new-cap": ["error", {
			"newIsCap": true,
			"capIsNew": false
		}],
		"new-parens": "error",
		"newline-after-var": "off",
		"newline-before-return": "off",
		"no-array-constructor": "error",
		"no-continue": "off",
		"no-inline-comments": "off",
		"no-lonely-if": "off",
		"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
		"no-multiple-empty-lines": ["error", {
			"max": 2,
			"maxEOF": 1
		}],
		"no-negated-condition": "off",
		"no-nested-ternary": "off",
		"no-new-object": "error",
		"no-spaced-func": "error",
		"no-ternary": "off",
		"no-trailing-spaces": "error",
		"no-underscore-dangle": "off",
		"no-unneeded-ternary": "error",
		"object-curly-spacing": ["error", "never"],
		"one-var": "off",
		"operator-assignment": "off",
		"operator-linebreak": ["error", "after"],
		"padded-blocks": ["error", "never"],
		"quote-props": "off",
		"quotes": "off",
		"require-jsdoc": "off",
		"semi-spacing": ["error", {
			"before": false,
			"after": true
		}],
		"semi": ["error", "always"],
		"sort-vars": "off",
		"keyword-spacing": ["error", {
			"before": true,
			"after": true
		}],
		"space-before-blocks": ["error", "always"],
		"space-before-function-paren": ["error", {
			"anonymous": "always",
			"named": "never"
		}],
		"space-in-parens": ["error", "never"],
		"space-infix-ops": "error",
		"space-unary-ops": ["error", {
			"words": true,
			"nonwords": false
		}],
		"wrap-regex": "off",

		"arrow-parens": ["error", "as-needed"],
		"arrow-spacing": ["error", {
			"before": true,
			"after": true
		}],
		"no-confusing-arrow": "off",
		"no-useless-computed-key": "error",
		"no-useless-rename": "error",
		"no-var": "error",
		"prefer-arrow-callback": "off",
		"rest-spread-spacing": ["error", "never"],
		"template-curly-spacing": ["error", "never"],
		"no-restricted-syntax": ["error", "WithStatement"]
	}
};