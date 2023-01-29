import logo from '../components/img/logo.svg'
const Main = () => {
  return (
    <>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body class="dftest">
          <form class="reg" action="/second">
            <div class="imgcontainer">
              <img class="logo-text"src={logo} alt="Логотип"></img> 
            </div>
            <div class="container">
              <input
                type="text"
                placeholder="Электронная почта"
                name="uname"
                required
              />
              <input type="password" placeholder="Пароль" name="psw" required />
              <button type="submit">Войти</button>
            </div>
          </form>
        </body>
      </html>
    </>
  );
};
export { Main };
