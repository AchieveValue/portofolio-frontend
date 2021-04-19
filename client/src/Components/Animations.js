const parent = {
    hidden: {
        opacity: 0,
    }, 
    show: {
        opacity: 1,
        transition: {
            delay: 2,
            duration: 0.5,
            ease: "easeOut",
        }
    },
    exit: {
        opacity: 0,
    }
}

export default parent;