
var monthCurrent= new Date().getMonth
    const isSpring=monthCurrent<=5 && monthCurrent>=2
    function recommandation(){
        return(
        (isSpring? <div> c'est du printemps rempotez le 🌻</div> 
        : <div> c'est pas le moment!</div>)
        )  
    }

    export default recommandation
       