import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://wedding-one-graphql.ibnusyadzali.com/',
    cache: new InMemoryCache(),
});

export default client