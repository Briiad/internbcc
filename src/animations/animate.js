export const form_animate = {
    start: {
        x: "100%",
        opacity: 0
    },
    middle: {
        x: 0,
        opacity: 1
    }
};

export const form_module_animate = {
    in: {
        y: "-100vh"
    },
    out: {
        y: 0
    }
};

export const transition = {
    type: "spring",
    stiffness: 50,
    duration: 0.2
}

export const logo = {
    in: {
        pathLength: 0,
        fill : "rgba(0, 0, 0, 0)",
    },
    out: {
        pathLength: 1,
        fill : ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]
    }
}