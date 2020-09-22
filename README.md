# Phoenix Chat

A web chat application. The back end is written in Elixir/Phoenix and the front end in Redux and React.

## Prerequisites

- Elixir >= 1.10.4
- Erlang >= 23.0.3
- Node >= 13.0

## Set Up

Clone the project and install its dependencies

```bash
git clone git@github.com:arturjzapater/phoenix-chat.git
cd phoenix-chat
mix deps.get
cd assets && npm i
```

Start the application

```bash
mix phx.server
```

The app will be served on [localhost:4000](http://localhost:4000)
