import { useQuery } from "@tanstack/react-query";
import { getTodosQuery } from "./queries/todoQueries";

function App() {
  // const [{ data: todo1 }, { data: todo2, isPending: isTodo2Pending }, query3] =
  //   useQueries({
  //     queries: [getTodosQuery(), getTodosQuery(), getTodosQuery()],
  //   });

  const {
    data: todos,
    isPending,
    isError,
    refetch,
  } = useQuery(getTodosQuery());

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching todos</div>;
  }

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos?.slice(0, 5).map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
            </span>
          </li>
        ))}
      </ul>

      <button onClick={() => refetch()}>Refetch</button>
    </div>
  );
}

export default App;
