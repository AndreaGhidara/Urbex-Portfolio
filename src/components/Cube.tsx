import { Photo } from "../types/types";
import { motion } from "framer-motion"



const Cube = ({ id, image }: Photo) => {

    const showModal = () => {
        const modal = document.getElementById('my_modal_3');
        modal.showModal()
    }

    return (
        // <div className="w-full h-screen relative top-0 z-10 overflow-hidden">
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
        >
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.5 }}
                transition={{ duration: 0.5 }}
                className="h-[150px] rounded-xl relative z-10">
                <img className={`w-full h-full object-cover rounded-xl  ${Number(id) % 2 === 0 ? "hover:-rotate-2" : "hover:rotate-2"}`} src={image} alt="" />
                <button className="btn absolute top-0 right-0 bg-transparent text-white border-none hover:text-2xl hover:bg-transparent" onClick={showModal}>[ ]</button>
                <dialog id="my_modal_3" className="modal">
                    <div className="w-full h-full flex justify-center items-center">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <img src={image} alt={`${id}`} />
                    </div>
                </dialog>
            </motion.div>
        </motion.div>
        // </div>
    )
}

export default Cube