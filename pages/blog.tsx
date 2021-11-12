import Layout from '../components/Layout'

interface Blog {
  id: number;
  title: string;
  body: string;
}

interface BlogProps {
  dataBlog: Blog[]
}
export default function Blog(props: BlogProps) {
  const { dataBlog } = props
  return (
    <Layout pageTitle="BlogPage">
      {dataBlog.map((blog) => {
        return (
          <div key={blog.id} className="bg-gray-300 my-5 p-5">
            <h3 className="font-bold">{blog.title}</h3>
            <p>{blog.body}</p>
          </div>
        )
      })}
    </Layout>
  )
}

export async function getServerSideProps() {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const dataBlog = await res.json()
  return {
    props: {
      dataBlog,
    }
  }
}
