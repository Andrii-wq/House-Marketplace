import React from 'react'
import { Link } from 'react-router-dom'
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpeg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpeg'


function Explore() {
    return (
        <div className='explore'>
            <header className='pageHeader'>Explore</header>
            <main className=''>
                {/* Slider */}
                <p className='exploreCategoryHeading'>Categories</p>
                <div className='exploreCategories'>
                    <Link to='/category/rent'>
                        <img src={rentCategoryImage} alt='rent' className='exploreCategoryImg' />
                        <p className='exploreCategoryName'>Places for rent</p>
                    </Link>
                    <Link to='/category/sale'>
                        <img src={sellCategoryImage} alt='sell' className='exploreCategoryImg' />
                        <p className='exploreCategoryName'>Places for sell</p>
                    </Link>
                </div>
            </main>
        </div>
    )
}

export default Explore