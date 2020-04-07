export async function getServerSideProps() {
  return { props: { serverData: "Hello, Next!" } };
}

export default ({ serverData }) => (
  <p>This page depends on some props: {serverData}</p>
);
