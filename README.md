# Fraxcake Subgraph

Goldsky exposes a GraphQL endpoint to query the events and entities within the Binance Smart Chain and FraxcakeSwap ecosystem.

Currently, there are multiple subgraphs, but additional subgraphs can be added to this repository, following the current architecture.

## Dependencies

- [Graph CLI](https://github.com/graphprotocol/graph-cli)
  - Required to generate and build local GraphQL dependencies.
```shell
yarn global add @graphprotocol/graph-cli
```

- [Goldsky](https://docs.goldsky.com/subgraphs/deploying-subgraphs)
```shell
curl https://goldsky.com | sh
```

## Deployment

For any of the subgraph: `blocks` as `[subgraph]`

1. Run the `cd subgraphs/[subgraph]` command to move to the subgraph directory.

2. Run `NETWORK=holesky yarn template` to prepare code using templates.

3. Run the `yarn codegen` command to prepare the TypeScript sources for the GraphQL (generated/\*).

4. Run the `yarn build` command to build the subgraph, and check compilation errors before deploying.

5. Run `goldsky login`

6. Deploy via `goldsky subgraph deploy <project-name>/<version> --path ./build`.

