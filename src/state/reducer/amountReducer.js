const  data = (data= 0, action) => {
    if (action.type === "deposit"){
        return data + action.payload
    } else if (action.type === "withdraw"){
        if (data > 0) {
            return data - action.payload
        } else {
            return data
        }
    } else {
        return data
    }
}

export default data