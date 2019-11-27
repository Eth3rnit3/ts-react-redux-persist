import { persistStore } from 'redux-persist';
import store from './index';

export default persistStore(store);