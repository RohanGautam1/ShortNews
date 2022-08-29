// import React, { Component } from 'react'

// export class NewsItem extends Component {
//     render() {
//         let { title, description, imageUrl, newsUrl, author, date, source } = this.props
//         return (
//             <div className="my-3">
//                 <div className="card">
//                     <span className='position-absolute top-0 translate-midle badge rounded-pill bg-danger' style={{ left: "0%", zIndex: "1" }}>{source}</span>
//                     <img src={!imageUrl ? "https://1382778335.rsc.cdn77.org/wp-content/uploads/2022/08/NASA-Sets-Launch-Coverage-for-Artemis-Mega-Moon-Rocket_-Spacecraft.jpg" : imageUrl} style={{ width: "100%", height: "12rem" }} className="card-img-top" alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title"> {title}</h5>
//                         <p className="card-text">{description}...</p>
//                         <p className='card-text'><small className='text-muted'>By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
//                         <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }




// --------------------------------Function Based Component--------------




import React from 'react'

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props
        return (
            <div className="my-3">
                <div className="card">
                    <span className='position-absolute top-0 translate-midle badge rounded-pill bg-danger' style={{ left: "0%", zIndex: "1" }}>{source}</span>
                    <img src={!imageUrl ? "https://1382778335.rsc.cdn77.org/wp-content/uploads/2022/08/NASA-Sets-Launch-Coverage-for-Artemis-Mega-Moon-Rocket_-Spacecraft.jpg" : imageUrl} style={{ width: "100%", height: "12rem" }} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"> {title}</h5>
                        <p className="card-text">{description}...</p>
                        <p className='card-text'><small className='text-muted'>By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem