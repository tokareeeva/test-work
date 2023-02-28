import pencil from "../../components/img/pencil.svg";
import tableimg from "../img/tableimg.svg";
import "./table.css";
import { From_server } from "../mock_backend";
function Table() {
  let res = From_server.map(function (item) {
    return (
      <tr key={item}>
        <td>
          <input type="checkbox"></input>
        </td>
        <td>
          <img src={pencil} atl="" />
        </td>
        <td>{item.code}</td>
        <td>{item.business}</td>
        <td>{item.lob}</td>
        <td>{item.liveservice}</td>
        <td>{item.srvlive}</td>
        <td>{item.service}</td>
        <td>{item.srv}</td>
        <td>{item.elmservice}</td>
        <td>{item.srlel}</td>
        <td>{item.tarif}</td>
        <td>{item.tarrif}</td>
        <td>{item.eltarif}</td>
        <td>{item.edtarif}</td>
        <td>{item.typetarif}</td>
        <td>{item.recalculation}</td>
      </tr>
    );
  });

  return (
    <>
      <div>
        {" "}
        <thead>
          <tr>
            <td class="tabletooop">
              <input type="checkbox"></input>
            </td>
            <td></td>
            <td class="tabletoop">
              Составной код
              <img src={tableimg} alt="" />
            </td>
            <td class="tabletoop">
              Линия бизнеса
              <img src={tableimg} alt="" />
            </td>
            <td class="tabletoop">
              LOB
              <img src={tableimg} alt="" />
            </td>
            <td class="tabletoop">
              Линейка услуг
              <img src={tableimg} alt="" />
            </td>
            <td class="tabletoop">
              SRV.LINE
              <img src={tableimg} alt="" />
            </td>
            <td class="tabletoop">
              Услуга
              <img src={tableimg} alt="" />
            </td>
            <td class="tabletoop">
              SRV
              <img src={tableimg} alt="" />
            </td>
            <td class="tabletoop">
              Элемент услуги
              <img src={tableimg} alt="" />
            </td>
            <td class="tabletoop">
              SRV.EL
              <img src={tableimg} alt="" />
            </td>
            <td class="tabletoop">
              Тариф
              <img src={tableimg} alt="" />
            </td>
            <td class="tabletoop">
              TARRIF
              <img src={tableimg} alt="" />
            </td>
            <td class="tabletoop">
              Эл. тарификации
              <img src={tableimg} alt="" />
            </td>
            <td class="tabletoop">Ед. тарификации</td>
            <td class="tabletoop">
              Тип тарифа
              <img src={tableimg} alt="" />
            </td>
            <td class="tabletoop">
              Перерасчет
              <img src={tableimg} alt="" />
            </td>
          </tr>
        </thead>
      </div>
      <div class="skrol">
        <table>
          <tbody>{res}</tbody>
        </table>
      </div>
    </>
  );
}
export { Table };
