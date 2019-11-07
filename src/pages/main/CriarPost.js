import React from "react";
import '../../App.css';

export default ({ close, fileSelected }) => (
  <div className="modal">
    <a className="close" onClick={close}>
      &times;
    </a>
    <div className="header"> Criar Post </div>
    <div className="content">
      {" "}
      {/* FORMULARIO DAS POSTAGEMS */}
      <form>
        <input type="file" onChange={fileSelected} />
        <br></br><br></br>
        <label>Descrição:</label>
        <textarea id="descricao" name="descricao" rows="7" cols="70">
        </textarea>
        <input type="submit" onClick={this.fileUploadHandler} value="Enviar" className="en" />
      </form>
    </div>
  </div>
);