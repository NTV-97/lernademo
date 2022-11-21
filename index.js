import {AppRegistry} from 'react-native';
import App from './packages/AppAll/App';
import {name as appName} from './packages/AppAll/app.json';

import AppOne from './packages/AppOne/src/App';
import AppTwo from './packages/AppTwo/src/App';
import {name as appNameOne} from './packages/AppOne/app.json';
import {name as appNameTwo} from './packages/AppTwo/app.json';

AppRegistry.registerConfig([
  {
    appKey: appName,
    component: () => App,
  },
  {
    appKey: appNameOne,
    component: () => AppOne,
  },
  {
    appKey: appNameTwo,
    component: () => AppTwo,
  },
]);