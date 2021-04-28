const parent = {
    hidden: {
        opacity: 0,
    }, 
    show: {
        opacity: 1,
        transition: {
            delay: 1.8,
            duration: 0.3,
            ease: "easeOut",
            when: 'beforeChildren'
        }
    },
    exit: {
        opacity: 0,
    }
}

export default parent;