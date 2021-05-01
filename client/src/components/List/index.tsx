import * as React from 'react';

import './styles.css';

type Item = {
  id: number,
}

type ListProps = {
  title: string,
  data: Array<Item>,
}

const List = ({ title, data }: ListProps): JSX.Element => {
  return (
    <div className="list">
      <h3>{title}</h3>
      {data.map(item => (
        <div key={item.id}>
          {JSON.stringify(item)}
        </div>
      ))}
    </div>
  )
};

export default List;
