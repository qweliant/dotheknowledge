# 2
prompt = fn prompt ->
  IO.gets("#{prompt}")
end

distance_prompt = prompt.("Whats the distance youve traveled??? ")
{distance, _} = Integer.parse(distance_prompt)

time_prompt = prompt.("About many hours was that? ")
{time, _} = Integer.parse(time_prompt)

avg_velocity = fn d, t -> (d - 0) / t end
velocity = avg_velocity.(distance, time)

IO.inspect(
  {:ok,
   "You've fallen #{distance} km off a cliff for approx. #{time} hrs making this a fast trip to the bottom. In fact, your going #{velocity} KM/hr"}
)
