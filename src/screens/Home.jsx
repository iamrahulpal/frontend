import { useGetForYouPostQuery } from "../features/postApiSlice";

function Home() {
  const { data, isLoading, isError } = useGetForYouPostQuery();

  return (
    <>
      {isLoading ? (
        <div>No data available.</div>
      ) : isError ? (
        <div>No data available.</div>
      ) : (
        data.map((post, index) => (
          <div key={index}>
            <hr />
            <div>{post.post}</div>
            <div>{post.tags}</div>
          </div>
        ))
      )}
    </>
  );
}

export default Home;
