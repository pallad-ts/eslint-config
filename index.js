const tseslint = require('typescript-eslint');
const jsdoc = require('eslint-plugin-jsdoc');
const importPlugin = require('eslint-plugin-import');

module.exports = tseslint.config(
    tseslint.configs.base,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: __dirname,
            },
        },
        plugins: {
            'import': importPlugin,
            jsdoc
        },
        rules: {
            "@typescript-eslint/no-empty-interface": "error",
            "@typescript-eslint/triple-slash-reference": "error",
            "@typescript-eslint/prefer-for-of": "error",
            "@typescript-eslint/await-thenable": "error",
            "@typescript-eslint/unbound-method": "off",
            "curly": "error",
            "@typescript-eslint/require-await": "error",
            "no-cond-assign": "error",
            "no-console": [
                "error",
                {
                    "allow": [
                        "log"
                    ]
                }
            ],
            "no-new-wrappers": "error",
            "constructor-super": "error",
            "no-duplicate-case": "error",
            "@typescript-eslint/no-dynamic-delete": "error",
            "no-empty": "error",
            "no-eval": "error",
            "@typescript-eslint/no-for-in-array": "error",
            "no-template-curly-in-string": "error",
            "@typescript-eslint/consistent-type-assertions": "error",
            "no-return-await": "error",
            "no-sparse-arrays": "error",
            "dot-notation": "error",
            "@typescript-eslint/only-throw-error": "error",
            "@typescript-eslint/no-this-alias": "error",
            "no-restricted-syntax": ["error", "WithStatement", {
                "selector": "Literal[raw='null']",
                "message": "Use undefined instead of null"
            }],
            "no-unused-expressions": [
                "error",
                {
                    "allowShortCircuit": true
                }
            ],
            "no-var": "error",
            "@typescript-eslint/no-confusing-void-expression": [
                "error",
                {
                    "ignoreArrowShorthand": true
                }
            ],
            "prefer-object-spread": "error",
            "radix": "error",
            "@typescript-eslint/restrict-plus-operands": "error",
            "eqeqeq": "error",
            "@typescript-eslint/no-useless-constructor": "error",
            "use-isnan": "error",
            "import/no-default-export": "error",
            "@typescript-eslint/array-type": [
                "error",
                {
                    "default": "array-simple"
                }
            ],
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    "selector": "default",
                    "format": [
                        "camelCase"
                    ]
                },
                {
                    "selector": "enum",
                    "format": [
                        "PascalCase"
                    ]
                },
                {
                    "selector": "classProperty",
                    "modifiers": ["static"],
                    "format": ["UPPER_CASE", "camelCase"]
                },
                {
                    "selector": "classProperty",
                    "format": ["camelCase"]
                },
                {
                    "selector": "objectLiteralProperty",
                    "format": ["camelCase", "snake_case", "UPPER_CASE", "PascalCase"]
                },
                {
                    "selector": "enumMember",
                    "format": [
                        "UPPER_CASE"
                    ]
                },
                {
                    "selector": "typeAlias",
                    "leadingUnderscore": "allow",
                    "format": [
                        "PascalCase"
                    ]
                },
                {
                    "selector": "variable",
                    "format": [
                        "camelCase",
                        "UPPER_CASE"
                    ]
                },
                {
                    "selector": [
                        "class",
                        "interface"
                    ],
                    "format": [
                        "PascalCase"
                    ]
                },
                {
                    "selector": "variable",
                    "modifiers": ["exported"],
                    "format": [
                        "UPPER_CASE",
                        "camelCase",
                        "PascalCase"
                    ]
                },
                {
                    "selector": "typeParameter",
                    "format": [
                        "PascalCase"
                    ],
                    "prefix": [
                        "T"
                    ]
                }
            ],
            "@typescript-eslint/consistent-type-definitions": [
                "error",
                "interface"
            ],
            "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
            "jsdoc/no-types": "error",
            "no-undef-init": "error",
            "quote-props": [
                "error",
                "as-needed"
            ],
            "no-else-return": "error",
            "arrow-parens": [
                "error",
                "as-needed"
            ],
            "max-len": [
                "error",
                {
                    "code": 180,
                    "tabWidth": 1
                }
            ]
        }
    }
);
