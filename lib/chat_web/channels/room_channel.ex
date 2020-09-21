defmodule ChatWeb.RoomChannel do
  use ChatWeb, :channel

  def join("room:lobby", %{"params" => %{"user" => user}}, socket) do
    send(self(), :after_join)
    {:ok, assign(socket, user: user)}
  end

  def handle_in("new_user", _payload, socket) do
    broadcast!(socket, "user_joined", %{message: "New user joined", user: socket.assigns.user})
    {:noreply, socket}
  end

  def handle_in("new_message", %{"message" => message}, socket) do
    broadcast!(socket, "new_message", %{message: message, user: socket.assigns.user})
    {:noreply, socket}
  end

  def handle_info(:after_join, socket) do
    broadcast!(socket, "user_joined", %{message: "New user joined", user: socket.assigns.user})
    {:noreply, socket}
  end

  def terminate(_reason, socket) do
    broadcast!(socket, "user_left", %{message: "User left", user: socket.assigns.user})
  end
end
