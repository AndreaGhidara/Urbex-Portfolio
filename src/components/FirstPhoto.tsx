import { useState } from "react";
import Cube from "./Cube";
import { Link } from "react-router-dom";


const FirstPhoto = () => {


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState([
        {
            id: 0,
            image: "urbex/onePiece.jpg"
        },
        {
            id: 1,
            image: "urbex/onePiece.jpg"
        },
        {
            id: 2,
            image: "urbex/onePiece.jpg"
        },
        {
            id: 3,
            image: "urbex/onePiece.jpg"
        },
        {
            id: 4,
            image: "urbex/onePiece.jpg"
        },
        {
            id: 5,
            image: "urbex/onePiece.jpg"
        },
        {
            id: 6,
            image: "urbex/onePiece.jpg"
        },
        {
            id: 7,
            image: "urbex/onePiece.jpg"
        },
        {
            id: 8,
            image: "urbex/onePiece.jpg"
        },
    ])

    return (
        <div className=" max-h-[600px] overflow-auto">
            <div className="w-full flex flex-col lg:flex-row lg:justify-start lg:flex-wrap flex-wrap gap-2 justify-between p-3">
                {items.map((item, index) => (
                    <div key={index}>
                        <Cube id={item.id} image={item.image} />
                    </div>
                ))}
                <div className="flex items-end">
                    <Link to={"/gallery"}>
                        <button className="btn btn-primary">
                            <p >See All</p>
                        </button>
                    </Link>
                </div>


            </div>

        </div>
    )
}

export default FirstPhoto;