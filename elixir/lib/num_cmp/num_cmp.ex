defmodule NumberCompare do
  def greater(one, two) do
    check(one >= two, one, two)
  end

  # check always return one or two
  defp check(true, one, _), do: one
  defp check(false, _, two), do: two

end
