import './App.css';
import Button from './components/Button';

function App() {

  return (
  /*Si la valeur de la prop color ne figure pas parmi les choix définis dans Button, la prop prendra sa valeur pas défaut ("normal")*/
    <Button color="warning">
      Cliquez-moi!
    </Button>
  )
}

export default App
