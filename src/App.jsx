
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from 'virtual:generated-pages-react';

const App = () => {
  const routing = useRoutes(routes);
  return (
    <div>
      {routing}
    </div>
  );
};

export default App;
