# DDD structure generator

Small code structure generator for DDD generation

# Options:

- path
  By default CLI generate the structure in `./src/modules/<name_of_your_module>`

# How to use

1. Build project `npm run build`
1. Run generator `./bin/cli.js generate subscription`

# install from npm

1. npm i generate-code-ddd
1. run `./node_modules/node-ddd-cli/bin/cli.js generate <name_of_your_module>`
1. Crete the `structure file in your root folder like:

```json
{
  "structure": [
    {
      "name": "domain",
      "children": [
        "value-objects",
        "entities",
        "aggregates",
        "events",
        "subscriptions",
        "repositories",
        "services"
      ]
    },
    { "name": "application", "children": ["use-cases"] },
    {
      "name": "infrastructure",
      "children": ["models", "repositories", "mappers"]
    }
  ]
}
```

Structure should looks like below:

```
└── modules
            │
            └── [module-name]
                  │
                  │── domain
                  │     ├── value-objects
                  │     ├── entities
                  │     ├── aggregates
                  │     ├── events
                  │     ├── subscriptions
                  │     ├── repositories
                  │     └── services
                  │
                  ├── application
                  │     └── use-cases
                  │
                  └── infra
                        ├── models
                        ├── repositories
                        └── mappers
```
