import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://wedding-one-graphql.ibnusyadzali.com/',
  cache: new InMemoryCache(),
});

//   console.log(client);
export default client