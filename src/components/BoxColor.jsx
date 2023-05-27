function BoxColor({r, g, b}) {
    const divStyle = {
        "backgroundColor": `rgb(${r=240}, ${g=240}, ${b=240})`
    }
    return(
        <div style={divStyle}>
            rgb({r},{g},{b})
        </div>
    )
}
export default BoxColor 