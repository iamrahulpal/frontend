import "./App.css";
import { useGetForYouPostQuery } from "./features/postApiSlice";

function App() {
  const { data, isLoading, isError } = useGetForYouPostQuery();
  console.log("🚀 ~ data:", data);
  return (
    <>
      {data.map((post, index) => (
        <div key={index}>
          <hr />
          <div>{post.post}</div>
          <div>{post.tags}</div>
        </div>
      ))}
    </>
  );
}

export default App;
