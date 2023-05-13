# 1
defmodule GroceryTracker.Grocery do
  defstruct item: "", count: 0, price: 0
end

groceries = [
  %GroceryTracker.Grocery{item: "bread slices", count: 10, price: 0.10},
  %GroceryTracker.Grocery{item: "milk", count: 3, price: 2.00},
  %GroceryTracker.Grocery{item: "cake", count: 1, price: 15.00}
]

total = Enum.sum(Enum.map(groceries, fn x -> x.price * x.count end))

IO.puts("The total is $#{total}0")

defmodule  do
  def input(str) do
    str
    |> String.reverse
    |>
  end
end
