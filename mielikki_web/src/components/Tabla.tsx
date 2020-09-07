import React from 'react'





export default function Tabla() { 

function getUrl(e:React.MouseEvent,param:string) {
  e.preventDefault()
  window.open(`${process.env.REACT_APP_URL}?token=${param}`)
}

    return (
        <div className="col-cami-button" >          
        <div className="card ">
          <table className="container" >
        <thead>
          <tr>
              <th>Plataforma</th>
              <th colSpan={2}  className="center">Arquitectura </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            
            <td>
Instalador Windows (.msi)</td>

<td
onClick={(e)=>{
  //@ts-ignore
  getUrl(e,process.env.REACT_APP_NAME_WIN_32)}}
    className="center dowload">32-bit</td>
<td
onClick={(e)=>{
  //@ts-ignore
  getUrl(e,process.env.REACT_APP_NAME_WIN_64)}}
   className="center dowload">64-bit</td>
          
          </tr>
          <tr>            
            <td>
            AppImage Linux (x64) </td>
            <td 
            onClick={(e)=>{
              //@ts-ignore
              getUrl(e,process.env.REACT_APP_NAME_LINUX_APP_IMAGE)}}
              colSpan={2} className="center dowload">64-bit</td>     
          </tr>
          <tr>
          <td>deb Linux (x64)</td>
          <td
          onClick={(e)=>{
            //@ts-ignore
            getUrl(e,process.env.REACT_APP_NAME_LINUX_DEB)}}
            colSpan={2} className="center dowload">64-bit</td>
          </tr>

          <tr>
          <td>Source</td>
          <td
          onClick={(e)=>{
            //@ts-ignore
            getUrl(e,process.env.REACT_APP_REPO)}}
            colSpan={2} className="center dowload">Github</td>
          </tr>          
        </tbody>
      </table>
      </div>
          </div>
        
    )
}
