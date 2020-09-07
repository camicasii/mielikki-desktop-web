import React from 'react'
import Tabla from './Tabla'
import Title from './TitleApp'

export default function ContainerApp() {
    return (
        
            <div className="header-container">         
          <div className="col-cami-img">
          <img src="https://res.cloudinary.com/camicasii/image/upload/v1599329528/mielikki/logo512.0_m8a6yq.png" alt=""/>
          </div>          
        <Title/>
        <Tabla/>
        </div>        
        

    )
}
