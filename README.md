# DDD structure generator

Small code structure generator for DDD generation

# Options:

- path
  By default CLI generate the structure in `./src/modules/<name_of_your_module`

# How to use

1. Build project `npm run build`
1. Run generator `./bin/cli.js generate subscription`

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
