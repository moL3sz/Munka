import Syndey from "./sydney.jpg"
import House1 from "./house1.jpg"
import House2 from "./house2.jpg"
import House3 from "./house3.jpg"
import House4 from "./house4.jpg"


import Modern1 from "./modern1.jpg"
import Modern2 from "./modern2.jpg"
import Modern3 from "./modern3.jpg"



export type image = {
    path: string,
    descr: string,
    year: number
    location: string
}
export type imageLight = {
    path: string
}
export type paths = {
    paths: Array<image>
};


export const imagePaths: paths = {
    paths: [
        {
            path: Syndey,
            descr: "Opera House",
            year: 2015,
            location: "Syndey"
        },
        {
            path: House1,
            descr: "House of Beauty",
            year: 2018,
            location: "Alban"
        },

        {
            path: House2,
            descr: "Besten Haus",
            year: 2019,
            location: "Glasgow"
        },
        {
            path: House3,
            descr: "Caiman Hell",
            year: 2014,
            location: "Afrika"
        },
        {
            path: House4,
            descr: "Ein Sehr toll",
            year: 2012,
            location: "München"
        }
    ]
}

export const learnMoreImages: Array<imageLight> = [
    {
        path: Modern1
    },{
        path: Modern2
    }, {
        path: Modern3
    }
]