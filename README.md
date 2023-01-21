## Backend Interview

To set up the project create a postgres database of your own choosing and add the values shown in the .env.example to an env file.
After doing that make sure you have npm and nodejs installed then you can go ahead and run npm install to install all the necessary dependencies. After that you're good to go and here's some commands for running the app and API endpoints to create and view data you can get familiar with.
## API Endpoints
# Post Endpoints
### *User*
localhost:3000/sign-up (signs up the user)

### *Wallet*
localhost:3000/:userId/create-wallet (create a user wallet)


# Get Endpoints
### *User*
localhost:3000/:id (shows a single  user)

### Wallet*
localhost:3000/:userId/wallet-profile (display all users wallets, total balance and wallet balances)
localhost:3000/:userId/wallets/:walletId (display a single wallet and it's balance and transactions)

### *Transactions*
localhost:3000/transactions/:walletId (create transactions whether income or expense and update to particular wallet)

## Description
[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov