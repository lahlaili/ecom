import './TopItem.css'
import img from '../img/new.jpg'
import img2 from '../img/mockup-t-shirt-hanger-held-by-hand-flat-background_125540-1472.jpg'
// import img3 from '../img/respect-typography-t-shirt-design_136545-497.jpg'


const TopItem = () => {
    return (
        <div className='top-item-section'>
            <div className='top-item-container'>
                 <img src={img} alt='' />
        
                <div className='top-item-container-text'>
                    <h1>Discover Our Best-Selling Products for Fashionable Clothing and Accessories </h1>
                    <p>
                        Explore our collection of high-quality clothing and Accessories, carefully curated for style and affordability.
                    </p>
                    <ul>
                        <li>Trendy Dresses for Every Occasion</li>  
                        <li>Stylish Handbags to Complete Your Look</li>
                        <li>Fashionable Accessoiries for a Personalized Touch</li>
                    </ul>
                </div>
            </div>
            <div className='top-item-container'>
                <div className='top-item-container-text'>
                    <h1>Stay Fashionable with the Latest Trends </h1>
                    <p>
                        Explore our collection of trendy clothing and Accessories for men and women. Stay ahead of the fashion curve with our handpicked selection.
                    </p>
                    <ul>
                        <li>Shop the Fashion Trends for Men</li>
                        <li>Discover Stylish Women's Clothing and Accessoiries</li>
                        <li>Upgrade Your Wardrobe with Fashionable Pieces</li>
                    </ul>
                </div>
                <img src={img2} alt='' />

            </div>
        </div>
  )
}

export default TopItem