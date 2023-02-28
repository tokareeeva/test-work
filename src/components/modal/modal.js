import "./modal.css";
import up from "../img/up.svg";
import down from "../img/down.svg";
import updown from "../img/updown.svg";
const Modal = ({ active, setActive }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal-content active" : "modal-content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <span class="close">&times;</span>
        </div>
        <h1 class="textt">Отображение колонок</h1>
        <div class="texxt">
          <input type="checkbox" defaultChecked />
          Все
        </div>
        <div class="decoration-line"></div>

        <ol class="text">
          <li>
            <div>
              <input type="checkbox" defaultChecked />
              Составной код
            </div>
            <div>
              <img src={up} />
              <img src={down} />
              <img src={updown} />
            </div>
          </li>
          <li>
            <div>
              <input type="checkbox" defaultChecked />
              Линия бизнеса
            </div>
            <div>
              <img src={up} />
              <img src={down} />
              <img src={updown} />
            </div>
          </li>
          <li>
            <div>
              <input type="checkbox" defaultChecked />
              LOB
            </div>
            <div>
              <img src={up} />
              <img src={down} />
              <img src={updown} />
            </div>
          </li>
          <li>
            <div>
              <input type="checkbox" defaultChecked />
              Линейка услуг
            </div>
            <div>
              <img src={up} />
              <img src={down} />
              <img src={updown} />
            </div>
          </li>
          <li>
            <div>
              <input type="checkbox" defaultChecked />
              SRV.LINE
            </div>
            <div>
              <img src={up} />
              <img src={down} />
              <img src={updown} />
            </div>
          </li>
          <li>
            <div>
              <input type="checkbox" defaultChecked />
              Услуга
            </div>
            <div>
              <img src={up} />
              <img src={down} />
              <img src={updown} />
            </div>
          </li>
          <li>
            <div>
              <input type="checkbox" defaultChecked />
              SRV
            </div>
            <div>
              <img src={up} />
              <img src={down} />
              <img src={updown} />
            </div>
          </li>
          <li>
            <div>
              <input type="checkbox" defaultChecked />
              Элемент услуги
            </div>
            <div>
              <img src={up} />
              <img src={down} />
              <img src={updown} />
            </div>
          </li>
          <li>
            <div>
              <input type="checkbox" defaultChecked />
              SRV.EL
            </div>
            <div>
              <img src={up} />
              <img src={down} />
              <img src={updown} />
            </div>
          </li>
          <li>
            <div>
              <input type="checkbox" defaultChecked />
              Тариф
            </div>
            <div>
              <img src={up} />
              <img src={down} />
              <img src={updown} />
            </div>
          </li>
          <li>
            <div>
              <input type="checkbox" defaultChecked />
              TARRIF
            </div>
            <div>
              <img src={up} />
              <img src={down} />
              <img src={updown} />
            </div>
          </li>
          <li>
            <div>
              <input type="checkbox" defaultChecked />
              Эл. тарификации
            </div>
            <div>
              <img src={up} />
              <img src={down} />
              <img src={updown} />
            </div>
          </li>
          <li>
            <div>
              <input type="checkbox" defaultChecked />
              Ед. тарификации
            </div>
            <div>
              <img src={up} />
              <img src={down} />
              <img src={updown} />
            </div>
          </li>
          <li>
            <div>
              <input type="checkbox" defaultChecked />
              Тип тарифа
            </div>
            <div>
              <img src={up} />
              <img src={down} />
              <img src={updown} />
            </div>
          </li>
          <li>
            <div>
              <input type="checkbox" defaultChecked />
              Перерасчет
            </div>
            <div>
              <img src={up} />
              <img src={down} />
              <img src={updown} />
            </div>
          </li>
        </ol>

        <div class="decoration-line"></div>
        <ul class="choice">
          <li>
            {" "}
            <button class="no">Сбросить</button>
          </li>
          <li>
            <button class="yes">Применить</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export { Modal };
