# defmodule TaskList do
#   @file_name "task_list.md"
#   def add(task_name) do
#     task = "[ ] " <> task_name <> "\n"
#     File.write(@file_name, task, [:append])
#   end

#   def show_list do
#     File.read(@file_name)
#   end
# end

## using imports from File
defmodule Tasks.TaskList do
  import File, only: [write: 3, read: 1]

  @file_name "task_lis.md"

  def add(task_name) do
    task = "* " <> task_name <> " \n"
    write(@file_name, task, [:append])
  end

  def show_list do
    read(@file_name)
  end
end
