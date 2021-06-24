import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import CreateUser from './components/CreateUser';
import ListOfUsers from './components/ListOfUsers';
import ChangePassword from './components/ChangePassword';

function App() {
  // connecting fontend with our backend
  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache()
  })

  return (
    <>
    <ApolloProvider client={client}>
      <CreateUser />
      <ListOfUsers />
      <ChangePassword />
    </ApolloProvider>
    </>
  );
}

export default App;
