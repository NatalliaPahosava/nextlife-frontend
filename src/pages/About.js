const About = () => {
  return (
    <div className='about'>
      <h1>NextLive</h1>
      <h2>What unnecessary for you,can be used somebody else</h2>
      <h3>If You want to share click on the button Add</h3>
       <a href="/add-item"><button className="add-btn">Add</button></a>
      <div className="container-about">
      <div className='departments'>
        <div className='department'>
          <h3> <a href="/women">Women</a> </h3>
          <a href="/women"><img width="200px" height="270px" src="https://i.pinimg.com/564x/2d/1d/9f/2d1d9f31252841b4a4af0e4c8900f1d2.jpg" alt="" /></a>
        </div>
        <div className='department'>
          <h3> <a href="/men">Men</a></h3>
          <a href="/men"><img width="200px" src="https://i.pinimg.com/564x/e9/8a/87/e98a87f0c8050b5ba690d09e5c2ab3e8.jpg" alt="" /></a>
        </div>
        <div className='department'>
          <h3> <a href="/kids">Kids</a></h3>
          <a href="/kids-item"><img width="200px"src="https://i.pinimg.com/564x/9b/bf/ae/9bbfaeee7caf0f24909a0f0511608219.jpg" alt="" /></a>
        </div>
      </div>
      <div className='departments'>
        <div className='department'>
          <h3> <a href="/furniture">Furniture</a> </h3>
          <a href="/furniture"><img width="200px" src="https://i.pinimg.com/564x/fc/6a/ad/fc6aadf0846df796590ecc51e03e0376.jpg" alt="" /></a>
        </div>
        <div className='department'>
          <h3> <a href="/electronics">Electronics</a></h3>
          <br />
          <br />
          <br />
          <br />
          <br />
          <a href="/electronics"><img width="200px" src="https://org-spb.ru/sites/default/files/styles/large/public/field/image/tehkikadom-300.jpg" alt="" /></a>
        </div>
        <div className='department'>
          <h3> <a href="/pets">Pets</a></h3>
          <br />
          <a href="/pets"><img width="200px" src="https://i.pinimg.com/564x/5d/9b/d8/5d9bd8b79c818a237750db11b515363d.jpg" alt="" /></a>
        </div>
        </div>
    </div>
  </div>)
}
export default About
