import './App.css'
import Nav from './Nav.jsx'
import Cards from './Cards.jsx'
import obj from'./DataCards.js'

function App() {
  const data = obj.map((item)=>{
    return(
      <Cards 
        // img = {item.img}
        // star = {item.star}
        // rating = {item.rating}
        // gray = {item.gray}
        // title = {item.title}
        // rate = {item.rate}
        key = {item.id}
        // items = {item}
        {...item}
    />
    )
  })

  return (
    <>
      <Nav />
      <div className='grid-image'>
        <img src="/grid-image-removebg.png" alt="grid-image" />
      </div>
      <h1>Online Experiences</h1>
      <div className='des-text'>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
      <div className='group-cards'>
        {/* <Cards 
            img = '/firstImage.jpg'
            star = 'starIcon.png'
            rating = '5.0'
            gray = '(6) • USA'
            title = 'Life lessons with Katie Zaferes'
            rate = 'From $136'
        />
        <Cards 
            img = 'secondImage.jpg'
            star = 'starIcon.png'
            rating = '5.0'
            gray = '(30) • USA'
            title = 'Learn wedding photography'
            rate = 'From $125'
        />
        <Cards 
            img = 'thirdImage.jpg'
            star = 'starIcon.png'
            rating = '4.8'
            gray = '(2) • USA'
            title = 'Group Mountain Biking'
            rate = 'From $50'
        /> */}
        {data}
      </div>
    </>
  )
}

export default App
