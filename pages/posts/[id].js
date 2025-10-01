export default function Post({ post }) {
  return (
    <div>
      <h1>Post {post.id}</h1>
      <p>{post.title}</p>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // dummy data — replace with real API
  const post = { id: params.id, title: `Post ${params.id} title` };
  return { props: { post } };
}
