import { useState } from "react";
import { Modal } from "../modal/modal";
import { Addmodal } from "../addmodal/addmodal";
import settingslogo from "../img/settingslogo.svg";
import "./settings.css";
import arhiv from"../img/arhiv.svg"
const Settings = () => {
  const [modalActive, setModalActive] = useState(false);
  const [addmodalActive, setAddmodalActive] = useState(false);
  return (
    <>
      <div class="options">
        <form>
          <input class="search" placeholder="    Поиск...                                                 🔍" type="search"></input>
        </form>
   
        <div class="settings">
          <button onClick={() => setModalActive(true)} class="first-button">
            <img src={settingslogo}/>
            Настроить
          </button>  
             <img src={arhiv}/>
             <input type="checkbox" checked/>
             <p>Архивные</p></div>
          <div class="helpsecond">
            <button onClick={() => setAddmodalActive(true)} class="second-button">
              + Добавить услугу
            </button>
          
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
      <Addmodal active={addmodalActive} setActive={setAddmodalActive} />
    </>
  );
};
export { Settings };