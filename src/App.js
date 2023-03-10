import { Fragment, useState } from 'react';
import Meals from './components/Meals/Meals';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';

function App() {
  const [cartView, setCartView] = useState(false);

  const showCartHandler = () => {
    setCartView(true);
  };

  const hideCartHandler = () => {
    setCartView(false);
  }


  return (
    <Fragment>
      {cartView && <Cart onClose={ hideCartHandler } />}
      <Header onShowCart={showCartHandler}  />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
