export const loadState = () => {
    try{
        const stateFromLocal = localStorage.getItem('state');
        if (stateFromLocal === null){
            return undefined;
        } else {
            return JSON.parse(stateFromLocal);
        }
    } catch (err){
        return undefined;
    }
}

export const saveState = (state) => {
    try{
        const stateStringify = JSON.stringify(state);
        localStorage.setItem('state', stateStringify);
    } catch (err){
        console.log(err);
    }
}