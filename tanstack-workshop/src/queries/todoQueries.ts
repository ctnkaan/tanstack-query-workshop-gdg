import { queryOptions } from "@tanstack/react-query";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const getTodos = async (): Promise<Todo[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
};

export const getTodosQuery = () => {
  return queryOptions({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
};
