import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://weddingonegraphql.habibiefaried.com/',
  cache: new InMemoryCache(),
});

//   console.log(client);
export default client