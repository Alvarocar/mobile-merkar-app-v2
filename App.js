import Router from '@src/routes/components/router.component';
import {persistor, store} from '@src/store';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {PersistGate} from 'redux-persist/integration/react';

export default function App() {
  return (
    <PaperProvider>
      <Provider store={store}>
        <Router />
      </Provider>
    </PaperProvider>
  );
}
