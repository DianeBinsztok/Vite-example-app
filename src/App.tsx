import './App.css'
import ApplicationsList from './components/ApplicationsList'
import ListComponent from './components/ListComponent';

function App() {

  let myItems = [
    {
        title:"Testeur de matelas",
        company:"LaBoite",
        city:"Okinawa",
        contract:"CDI",
        status:"À relancer"
    },
    {
        title:"Goûteur de desserts",
        company:"TheCompany",
        city:"Bordeaux",
        contract:"CDD",
        status:"En cours"
    },
    {
        title:"Câlineur de chiots",
        company:"Trucmuche",
        city:"Valence",
        contract:"CDI",
        status:"En cours"
    }
  ];
  let testItems = ["Pomme","Poire","Mangue","Framboise","Banane"];
  const handleOnSelectItem = (item:string) => {console.log(item)};
  return (
    <>
    <h1>Mon appli en React:</h1>
    <ApplicationsList 
    heading="Liste des candidatures en cours:"
    items = {myItems}
    />
    <ListComponent items = {testItems} onSelectItem = {handleOnSelectItem}/>
    </>
  )
}

export default App
