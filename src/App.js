 
import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from './utlis/appStore';

function App() {
  return (
    <div className="scrollbar-hide md:scrollbar-default">
      <Provider store={appStore} >
         <Body/>
      </Provider>
    
    </div>
  );
}

export default App;
