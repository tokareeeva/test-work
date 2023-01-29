import "./header.css"
import avatar from "../img/avatar.svg"
const Header = () => {
  return(
  <>
    <header>
    <nav>
      <ul class='navigation'>
        <li><a class="logo-main" href="/Second">DemoPort</a></li>
        <li class="test"><a href="/Second">Классификатор услуг</a></li>
        <li class="test"><a href="#">Архив услуг</a></li>
        <li class="test"><a href="#">Пользователи</a></li>
        <li class="test"><a href="#">Администрирование</a></li>
      </ul>
      <ul class='user-setings'>
          <li><div class="user-logo"> <img class='user-logo1' src={avatar}/> </div></li>
          <li> Иванов Иван </li>
          <ul>
            <li><a href="#">Профиль</a></li>
          <li><form action="/"><a href="/">Выйти</a>  </form></li>
          </ul>
      </ul>
     
    </nav>
    <div class="decoration-line"></div>
  </header>

</>
  
);
};
export { Header };