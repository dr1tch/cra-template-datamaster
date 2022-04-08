module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx, html}"],
    theme: {
        extend: {
            colors: {
                "green-primary": "#048864",
                "black-darker": "#272C2F",
            },
        },
        fontFamily: {
            inter: "Inter, sans-serif",
            manrope: "Manrope, sans-serif",
            roboto: "Roboto, sans-serif",
            dmsans: "DM Sans, sans-serif",
            grotesk: "Space Grotesk, sans-serif",
            ubuntu: "Ubuntu, sans-serif",
            exo: "Exo, sans-serif",
        },
    },
    plugins: [],
    variants: {
        extend: {
            display: ["group-hover"],
        },
    },
};