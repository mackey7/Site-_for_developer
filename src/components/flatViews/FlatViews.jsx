import React, { Component } from 'react';
import './FlatViews.scss';

import Plan from './Plan.jsx';
import Buttons from './Buttons.jsx';
import DateView from './DateView.jsx';

class FlatViews extends Component {
    constructor() {
        super();
        this.state = {
            flats: [
                {
                    imge: '../../images/apartment_projections_img.png',
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
                },
                {
                    imge: '../../images/apartment_projections_img.png',
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
                },
                {
                    imge: '../../images/apartment_projections_img.png',
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
                },
                {
                    imge: '../../images/apartment_projections_img.png',
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
                }
            ]
        }


    }
    render() {
        return (
            <section className="flatViews">
                <div className='flatViews-container'>

                    <Plan />
                    <div className="flatViews__right">
                        <Buttons />
                        <DateView />
                    </div>
                </div>
            </section>
        )
    }
}
export default FlatViews;