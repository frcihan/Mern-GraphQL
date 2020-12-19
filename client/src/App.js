import "./App.css";
import AppRouter from "./Router/Router";
import AuthContextProvider from "./context/AuthContext";
import { Layout } from "antd";
import { ToastContainer } from "react-toastify";

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});


function App() {
  return (
    <ApolloProvider client={client}>
      <AuthContextProvider>
        <Layout className="layout">
          <AppRouter />
          <ToastContainer />
        </Layout>
      </AuthContextProvider>
    </ApolloProvider>
  );
}

export default App;
