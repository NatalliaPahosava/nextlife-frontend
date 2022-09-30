import logo from '../assets/img/2.jpeg'

const Contacts=()=>{
    return(
        <div className="contact"> 
            <img src={logo} alt="" />
            <h2>Natallia Pahosava</h2>
            <a style={{color:'white'}} href="https://www.linkedin.com/in/natallia-pahosava/">Linkedin.com/in/natallia-pahosava/</a>
            <a href = "mailto: natalliapahosava@gmail.com">Email: natalliapahosava@gmail.com</a>
            <a href="tel:123-456-7890">cell phone:347-265-8082</a>
        </div>
    )
}
export default Contacts