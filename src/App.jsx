import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './components/AllRoutes';
import store from './redux/store';
import './styles/App.css';

function App() {
    return (
        // <AuthProvider>
        <Provider store={store}>
            <BrowserRouter>
                <AllRoutes />
            </BrowserRouter>
        </Provider>
        // </AuthProvider>
    );
}

export default App;
