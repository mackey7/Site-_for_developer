import { SWITCH_VIEW } from '../actions/actions-type/actions-type';
import { flatViewsDate } from '../api/flatViewsDate'

const initState = {
    flatViewsDate: flatViewsDate,
    singleFlatViewsDate: [{
        id: "pal",
        image: 'https://i.ibb.co/VqSPh8n/apartment-projections-img.png',
        room1: {
            id: 1,
            name: "salon z aneksem kuchannym",
            powierzchnia: 25.50
        },
        room2: {
            id: 2,
            name: "łazienka",
            powierzchnia: 6.33
        },
        room3: {
            id: 3,
            name: "pokój",
            powierzchnia: 12.05
        },
        room4: {
            id: 4,
            name: "pokój",
            powierzchnia: 9.53
        },
        room5: {
            id: 5,
            name: "garderoba",
            powierzchnia: 1.62
        },
        room6: {
            id: 6,
            name: "hol",
            powierzchnia: 5.50
        },
        room7: {
            id: 7,
            name: "przedpokój",
            powierzchnia: 3.79
        },
    }]

}

const flatViewsReducer = (state = initState, action) => {
    switch (action.type) {
        case SWITCH_VIEW: {
            const newSingleFlatViewsDate = state.flatViewsDate.find(item => action.payload === item.id);
            return {
                ...state, singleFlatViewsDate: [newSingleFlatViewsDate]
            };

        }

        default:
            return state;

    }
}
export default flatViewsReducer
