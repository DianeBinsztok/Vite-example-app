import './App.css'
import Message from './components/Message';

function App() {

  /*J'utilise Message comme une double balise avec du contenu enfant*/
  return (
    <Message>
        <h1>Ceci est un test</h1>
        <p>L'enfant du composant Message est à présent composé d'éléments HTML</p> 
        <p>Son type n'est donc plus <strong>'string'</strong> mais <strong>un noeud du DOM</strong></p>
    </Message>
  )
}

export default App
