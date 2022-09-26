import logo from '../assets/img/2.jpeg'

const Contacts=()=>{
    return(
        <div className="contact"> 
            <img src={logo} alt="" />
            <h2>Natalia Pogosova</h2>
            <a style={{color:'white'}} href="https://www.linkedin.com/in/natallia-pahosava/">My Linkedin</a>
            <a href = "mailto: natalliapahosava@gmail.com">Send Email</a>
            <a href="tel:123-456-7890">cell phone:347-265-8082</a>
        </div>
    )
}
export default Contacts