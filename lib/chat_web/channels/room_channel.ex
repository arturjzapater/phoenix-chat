defmodule ChatWeb.RoomChannel do
  use ChatWeb, :channel
  alias ChatWeb.Presence

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
    {:ok, _} = Presence.track(socket, socket.assigns.user, %{
      online_at: inspect(System.system_time(:millisecond))
    })
    broadcast!(socket, "user_joined", %{
      message: "New user joined",
      user: socket.assigns.user,
      user_list: Presence.list(socket) |> Map.keys()
    })
    {:noreply, socket}
  end

  def terminate(_reason, socket) do
    broadcast!(socket, "user_left", %{
      message: "User left",
      user: socket.assigns.user,
      user_list: remove_from_list(socket)
    })
  end

  defp remove_from_list(socket) do
    socket
    |> Presence.list()
    |> Map.delete(socket.assigns.user)
    |> Map.keys()
  end
end
