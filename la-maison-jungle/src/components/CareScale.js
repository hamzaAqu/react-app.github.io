
//un composant que j'ajoute à SoppingListe qui prend un props en paramètre
function CareScale(props){
    const scaleValue=props.scaleValue;
    const careType=props.careType;
    

    return ( careType==='light'?<div>{scaleValue}🌞</div>: <div>{scaleValue} 🌊 </div>)
   
}
export default CareScale