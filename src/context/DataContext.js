import { createContext, useState } from 'react';

export const DataContext = createContext();

const DataContextProvider = (component) => {
    const child = component.children;
    // return <h3>Testing team</h3>;
    const userdata = [{
        name: 'Super Man',
        age: '345',
        comics: 'DC Universe',
        rating: '4 / 5'
    },{
        name: 'Iron Man',
        age: '74',
        comics: 'Marvel Universe',
        rating: '5 / 5'
    }];

    const [FilmsType, updateFilmsType] = useState('Hollywood');

    const updateFilmsTypeHandler = (fmtype) => {
        updateFilmsType(fmtype);
    }

    return (
        <DataContext.Provider value={{userdata, FilmsType, updateFilmsTypeHandler}}>
            {child}
        </DataContext.Provider>
    );
};

export default DataContextProvider;