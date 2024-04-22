import { useEffect } from 'react';
import AppRoutes from './AppRoutes';
import Header from './components/Header/Header';
import axios from 'axios';

function App() {

  

  //useEffect(() => {
  //  try {
  //  const getData = async () => {
  //  const { data } = await axios.get('http://localhost:8080/test');
  //  console.log(data);
  //  }; 
  //  getData();
  //} catch (error) {
  //  console.log(error.response.data);
  //}
  //},[]);

  return (
    <>
    <Header/>
    <AppRoutes/>
    </>
  );
}

export default App;
