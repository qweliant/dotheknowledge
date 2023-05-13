defmodule MatchstickFactory do
  def boxes(count) do
    map = %{big: 0, medium: 0, small: 0, remaining_matchsticks: 0}
    big = fn count -> count > 50 || count == 50 end
    medium = fn count -> count > 20 || count == 20 end
    small = fn count -> count > 5 || count == 5 end

    cond do
      big.(count) ->
        IO.inspect(Map.update(map, :big, 0, fn value -> value + div(count, 50) end))
        boxes(rem(count, 50))

      medium.(count) ->
        IO.inspect(Map.update(map, :medium, 0, fn value -> value + div(count, 20) end))
        boxes(rem(count, 20))

      small.(count) ->
        IO.inspect(Map.update(map, :small, 0, fn value -> value + div(count, 5) end))
        boxes(rem(count, 5))

      count < 5 ->
        IO.inspect(Map.update(map, :remaining_matchsticks, 0, fn value -> value + count end))
        {:ok, map}
    end
  end
end

# equation that returns the whole number and remainder recoursively
# eg. numbers = fn value -> div(value, 50), rem(value, 50)end
