import React, {Component} from 'react';
import './App.css';

import Header from './components/Header';
import ItemList from './components/ItemList';




class App extends Component {
  render (){
      return(
        <div className='App'>
            <Header 
            title="Don't Worry Bb Happy"
            />

            <div className='User-Section'>
               <ItemList
                name='Pañales Huggies Recien Nacido' 
                date='40 unidades' 
                description='$850' 
                img="https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/2871582_f.jpg"/>
               <ItemList
                name='Esterilizador y Calentador' 
                date='Apto Mamaderas, tetinas y pezoneras' 
                description='$3500' 
                img="https://www.farmacialeloir.com.ar/img/articulos/2020/09/tc_1aspen_esterilizador_calentador_de_mamaderas_electrico_2.jpg"/>
              <ItemList
                name='Practicuna Colecho' 
                date='Hasta 10kg' 
                description='$15800' 
                img="https://i2.wp.com/elultimokoala.com/blog/wp-content/uploads/2020/10/minicuna-colecho-shnuggle-7.jpg?resize=512%2C512&ssl=1"/>
            </div>
        </div>
      )}
}

export default App;
