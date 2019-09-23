const myStateData = {

    infoPage:
        [
            {name: 'Max', age: 33, id: 0},
            {name: 'Roman', age: 29, id: 1},
            {name: 'Helen', age: 25, id: 2}
        ],
    infoText: 'new text',

}

export const methods = {
    addTextToState:
        (item) => {
            let newPost = {
                id: 3,
                name: item,
                age: 0
            };
            console.log(newPost);
            myStateData.infoPage.push(newPost);

        },
    updateTextValue:
        (text)=> {
            myStateData.infoText = text;
        }
}




export default myStateData;