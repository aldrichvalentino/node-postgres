import * as React from 'react';

import Heading from 'components/Heading';

import './index.css';
import List from 'components/List';

const App = () => {
  const [users, setUsers] = React.useState([]);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    // TODO: move api to .env
    const fetchUsers = async () => {
      const res = await fetch('http://localhost:3000/users')
        .then(res => res.json());

      setUsers(res);
    }

    const fetchProducts = async () => {
      const res = await fetch('http://localhost:3000/')
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
