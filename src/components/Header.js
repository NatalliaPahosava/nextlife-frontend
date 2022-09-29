const Header = () => {
  return (
    <div className='header'>
      <ul>
        <a href='/'>
          <img
            width='100px'
            src='https://freesvg.org/img/1661256469diamond-heart.png'
            alt=''
          />
        </a>
        <h1>NextLive</h1>
        <li>
          <a href='/'>About</a>
        </li>
        <li>
          <a href='/all'>All Items</a>
        </li>
        <li>
          <a href='/men'>Men</a>
        </li>
        <li>
          <a href='/women'>Women</a>
        </li>
        <li>
          <a href='/kids-item'>Kids </a>
        </li>
        <li>
          <a href='/pets'>Pets </a>
        </li>
        <li>
          <a href='/furniture'>Furniture</a>
        </li>
        <li>
          <a href='/electronics'>Electronics</a>
        </li>
        <li>
          <a href='/add-item'>Add Item</a>
        </li>
        <li>
          <a href='/contacts'>Contacts</a>
        </li>
      </ul>
    </div>
  )
}

export default Header