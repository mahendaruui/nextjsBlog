import Layout from "../../components/Layout";
import { useRouter } from "next/router";

interface UserProps {
  dataUsers: Array<any>;
}

export default function Users(props: UserProps) {
  const { dataUsers } = props;
  const router = useRouter();
  return (
    <Layout pageTitle="UserPage">
      <div className="grid grid-cols-3 gab-4">
        {dataUsers.map((user) => {
          return (
            <div
              className="p-3 bg-gray-100 m-2 cursor-pointer"
              key={user.id}
              onClick={() => router.push(`/users/${user.id}`)}
            >
              <p> Username : {user.username}</p>
              <p> Nama : {user.name}</p>
              <p> Email : {user.email}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  if (!dataUsers) {
    return {
      notFound: true,
    };
  }
  return {
    props: { dataUsers },
  };
}
