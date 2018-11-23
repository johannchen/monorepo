import Link from 'next/link';
import Layout from '../components/Layout';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const booksQuery = gql`
  query books {
    books {
      title
      author
    }
  }
`;
interface IBook {
  title: string;
  author: string;
}
export default () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <Query query={booksQuery}>
      {({ data, loading, error }) => {
        if (loading) {
          return <div>loading</div>;
        }
        if (error) {
          return <div>{error}</div>;
        }
        if (data) {
          const { books } = data;
          return (
            <section>
              <ul>
                {books.map((book: IBook, index: number) => (
                  <li key={index}>
                    {book.title} - {book.author}
                  </li>
                ))}
              </ul>
            </section>
          );
        }
      }}
    </Query>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);
