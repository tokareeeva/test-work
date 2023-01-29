import pencil from "../../components/img/pencil.svg";
import tableimg from "../img/tableimg.svg"
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
          <img src={pencil} atl=""/>
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
    <div class="skrol">
    <table>
      <thead>
        <tr>
          <td>
            <input type="checkbox"></input>
          </td>
          <td></td>
          <td class="tabletop">Составной код<img src={tableimg} alt=""/></td>
          <td class="tabletop">Линия бизнеса<img src={tableimg} alt=""/></td>
          <td class="tabletop">LOB<img src={tableimg} alt=""/></td>
          <td class="tabletop">Линейка услуг<img src={tableimg} alt=""/></td>
          <td class="tabletop">SRV.LINE<img src={tableimg} alt=""/></td>
          <td class="tabletop">Услуга<img src={tableimg} alt=""/></td>
          <td class="tabletop">SRV<img src={tableimg} alt=""/></td>
          <td class="tabletop">Элемент услуги<img src={tableimg} alt=""/></td>
          <td class="tabletop">SRV.EL<img src={tableimg} alt=""/></td>
          <td class="tabletop">Тариф<img src={tableimg} alt=""/></td>
          <td class="tabletop">TARRIF<img src={tableimg} alt=""/></td>
          <td class="tabletop">Эл. тарификации<img src={tableimg} alt=""/></td>
          <td class="tabletop">Ед. тарификации</td>
          <td class="tabletop">Тип тарифа<img src={tableimg} alt=""/></td>
          <td class="tabletop">Перерасчет<img src={tableimg} alt=""/></td>
        </tr>
      </thead>
      <tbody>{res}</tbody>
    </table>
    </div>
  );
}
export { Table };