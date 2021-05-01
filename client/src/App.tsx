import * as React from 'react';

import Heading from 'components/Heading';

import './index.css';
import List from 'components/List';

const App = () => {
  const [users, setUsers] = React.useState([]);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`${process.env.API_URL}/users`)
        .then(res => res.json());

      setUsers(res);
    }

    const fetchProducts = async () => {
      const res = await fetch(`${process.env.API_URL}/`)
        .then(res => res.json());

      setProducts(res);
    }

    // fetch data from server
    fetchUsers();
    fetchProducts();
  }, []);

  return (
    <div>
      <Heading>Greetings!</Heading>
      <List
        title="Products"
        data={products}
      />
      <List
        title="Users"
        data={users}
      />
    </div>
  );
}

export default App;
