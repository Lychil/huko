export const colors = {
    main: "rgba(255, 85, 85, 1);",
    placeholder: "rgba(200, 200, 200, 1)",
    accent: "rgba(110, 110, 110, 1);",
    overlay: "rgba(220, 220, 220, 0.7)",
    details: "rgba(200, 200, 200, 1)",

    blackTotal: "rgba(0, 0, 0, 1)",
    whiteTotal: "rgba(255, 255, 255, 1)",
    whiteTransparent: "rgba(255, 255, 255, 0.5)",
    transparent: "rgba(0, 0, 0, 0)"
}

export const font = {
    sizes: {
        title: "20px",
        main: "16px",
        small: "14px",
        extraSmall: "12px",
    },

    weights: {
        medium: 500,
        semiBold: 600,
        bold: 700
    }
}

export const border = {
    styles: {
        mainSmall: `1px solid ${colors.main}`,
        input: `1px solid ${colors.accent}`,
        inputFocus: `1px solid ${colors.main}`,
        textareaDefaukt: `1px solid ${colors.accent}`,
        whiteSmall: `1px solid ${colors.whiteTotal}`,
        transparent: `1px solid ${colors.transparent}`,
    },

    radius: {
        circle: "50%",
        medium: "20px",
        extraSmall: "5px"
    },
}

export const shadow = {
    default: "0px 0px 8px 0px rgba(34, 60, 80, 0.2)"
}

export const transition = {
    fast: 'all 0.3s ease-in-out'
}
