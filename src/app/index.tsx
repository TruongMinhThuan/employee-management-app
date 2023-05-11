import { Provider } from 'react-redux';
import { store } from './store/store';
import RootRouter from './routes/RootRouter';

function App() {
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
