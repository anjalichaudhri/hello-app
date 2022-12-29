/**
 * 
 */
export const getPostData = (id: any) => {
    if(id == "one")
    return {
        id: 1,
        title: "one"
    };
    else
    return {
        id: 2,
        title: "any"
    } 
}

export const getAllIds = () => {
    return [{
        params: {
            id: "one"
        }
    },
    {
        params: {
            id: "any"
        }
    },
] 
}