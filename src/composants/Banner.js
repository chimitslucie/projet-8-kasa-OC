function Banner({title = false, image}) {
    return (
        <div className="banner">
            <img className='banner_img' src={image} alt='banner' />
            {title && <h1 className='banner_title'>{title}</h1>}
        </div>
    )
}

export default Banner;