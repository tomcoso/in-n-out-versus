import "../style/table.scss";

const Table = (props) => {
  const versus = props.versus;
  console.log(versus);

  return (
    <table cellSpacing="0px">
      <colgroup>
        <col id="info-col" />
        <col id="in-n-out-col" />
        <col id="versus-col" />
      </colgroup>
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">IN-N-OUT</th>
          <th scope="col">
            <select onChange={props.change} value={versus.name}>
              <option>Burger King</option>
              <option>Mc Donald's</option>
            </select>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">info</th>
          <td>info in-n-out</td>
          <td>info {versus}</td>
        </tr>
        <tr>
          <th scope="row">info</th>
          <td>info in-n-out</td>
          <td>info {versus}</td>
        </tr>
        <tr>
          <th scope="row">info</th>
          <td>info in-n-out</td>
          <td>info {versus}</td>
        </tr>
        <tr>
          <th scope="row">info</th>
          <td>info in-n-out</td>
          <td>info {versus}</td>
        </tr>
        <tr>
          <th scope="row">info</th>
          <td>info in-n-out</td>
          <td>info {versus}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
