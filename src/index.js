/* Чтобы работал препроцессор JSX нам необходим React, поэтому его всегда импортируем */
import React, {Component} from 'react';
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

// ----------------------------------------------------------------------------------
/* Свойства и состояния компонентов. События в React_Теория */
/* Вместо оболочки <div></div> можно обернуть в <React.Fragment></React.Fragment> или <> */
/* props {name, surname, link} - объект со всеми атрибутами, которые мы передаём. Значения атрибутов, которые были установлены больше менять нельзя! */
/* Элементы компонента (h1, a) менять нельзя, для этого нужно создавать новый компонент */

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 25
    };
    this.nextYear = this.nextYear.bind(this);
    // this.nextYear = () => {
    //   this.setState(state => ({
    //         years: ++state.years
    //       }));
    // };
  }
  nextYear() {
    console.log(1);
    // this.state.years++
    this.setState(state => ({
      years: ++state.years
    }));
  }
  render() {
    const {name, surname, link} = this.props;
    const {years} = this.state;
    return (
      <React.Fragment>
        <button onClick={this.nextYear} >++</button>
        <h1>Моё имя - {name}, фамилия - {surname}, лет = {years}</h1>
        <a href={link}>Мой профиль</a>
      </React.Fragment>
    )  
  }
}

const All = () => {
  return (
    <>
      <WhoAmI name="Дмитрий" surname="Сафронов" link="https://github.com/svsdima" />
      <WhoAmI name="Елена" surname="Сафронова" link="https://github.com/svsdima" />
      <WhoAmI name="Виктория" surname="Сафронова" link="https://github.com/svsdima" />
    </>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));
