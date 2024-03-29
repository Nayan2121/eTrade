import React from 'react'
import AllPages from './PAGES/AllPagesComponents/AllPages'
import { Provider } from 'react-redux'
import store from './redux/store'


const App = () => {
  return (
    <>
      <Provider store={store}>
        <AllPages />
      </Provider>
    </>

  )
}

export default App  
