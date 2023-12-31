import FirstPhoto from "./FirstPhoto"

const Hero = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-5 flex justify-center items-center text-center">
                <h3>L’ arte di strada a volte accessibile, a volte inaccessibile,<br /> ho difficilmente raggiungibile, a volte si trova in luoghi abbandonati,<br /> altre volte, sotto gli occhi di tutti.</h3>
            </div>
            <div className="flex justify-center">
                <FirstPhoto />
            </div>
        </div>
    )
}

export default Hero