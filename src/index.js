/* Чтобы работал препроцессор JSX нам необходим React, поэтому его всегда импортируем */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

/* Если элемент имеет многострочную структуру, его необходимо обернуть в круглые скобки */
/* Компоненты - блоки пользовательского интерфейса, которые могут иметь собственное поведение (компоненты - это функции) (названия с большой буквы) */
/* Мы не может помещать объект внутрь React элементов */

/* Разбиваем на компоненты */
const Header = () => {
  const scr = '<script>alert("Error!")</script>';
  return <h2>Hello world!</h2>
  // return <h2>{scr}</h2>
}

const Field = () => {
  const holder = "Enter here";
  const styledField = {
    width: '300px'
  }
  // return <input type="text" placeholder="Type here" />
  return <input 
        style={styledField}
        type="text" 
        placeholder={holder}
        autoComplete=""
        className="first"
        htmlFor="" />
}

const Btn = () => {
  const text ="Log in";
  const logged = true;
  const res = () => {
    return "Log in, please"
  }
  const p = <p>Log in</p>
  // return <button>{text}</button>
  // return <button>{res()}</button>
  // return <button>{p}</button>
  // return <button>{3 + 4}</button>
  /* Если залогинился, то ничего не произойдёт, если нет, то вылезет сообщение о просьбе залогиниться */
  return <button>{logged ? "Enter" : text}</button>
}

/* Объединяем всё в одно приложение */
const App = () => {
  return (
    <div>
      <Header/>
      <Field/>
      <Btn/>
    </div>
  )
}

// const elem = React.createElement('h2', null, "Hello world!!");

ReactDOM.render(<App/>, document.getElementById('root'));
