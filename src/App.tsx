import React, { useEffect, useState } from 'react';
import CommonTable from './components/tables/CommonTable';
import { EmployeeTurnScreen } from './screens/EmployeeTurn';
import { Provider } from 'react-redux';
import { store } from './store/store';
import MenuNavigation from './components/navbar/MenuNavigation';
import { RootRouter } from './routes';

function App() {

  const [isOpen, setOpen] = useState(false);
  const [isSent, setSent] = useState(false);
  const [fromMain, setFromMain] = useState<string | null>(null);


 

  return (
    <Provider store={store}>
      <div className="flex flex-col h-screen">
        {/* <MenuNavigation/>
        <EmployeeTurnScreen /> */}
        <RootRouter />
      </div>
    </Provider>
  );
}

export default App;
