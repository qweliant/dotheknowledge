# 3

tax = fn price -> price * (0.12 + 1) end

price = [1, 2, 3, 4]

IO.inspect Enum.map price, tax
