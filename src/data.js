import tour1 from "./images/tour-1.jpeg"
import tour2 from "./images/tour-2.jpeg"
import tour3 from "./images/tour-3.jpeg"

export const pageLinks = [
    {id: 1, href: "#home", text: "Home"},
    {id: 2, href: "#about", text: "About"},
    {id: 3, href: "#services", text: "Services"},
    {id: 4, href: "#tours", text: "Tours"},
]
export const socialLinks = [
    {id: 1, href: "https://www.facebook.com", iconClassName: "fab fa-facebook"},
    {id: 2, href: "https://www.twitter.com", iconClassName: "fab fa-twitter"},
    {id: 3, href: "https://www.squarespace.com", iconClassName: "fab fa-squarespace"},
]

export const servicesData = [
    {
        id: 1,
        serviceTitle: "Saving Money",
        paragraphText: "How to save money",
    },
    {
        id: 2,
        serviceTitle: "Endless Hiking",
        paragraphText: "Paragraph about Endless Hiking",
    },
    {
        id: 3,
        serviceTitle: "Amazing Comfort",
        paragraphText: "Loving Life",
    },

]


export const toursData = [
    {
        id: 1,
        imageSrc: tour1,
        date: "August 26th, 2020",
        title: "Tibet Adventure",
        paragraphText: "Example Paragraph",
        location: "China",
        duration: "6 Days",
        cost: "$2100",
    },
    {
        id: 2,
        imageSrc: tour2,
        date: "October 10th, 2020",
        title: "Best Of Java",
        paragraphText: "Example Paragraph",
        location: "Indonesia",
        duration: "11 Days",
        cost: "$1400",
    },
    {
        id: 3,
        imageSrc: tour3,
        date: "September 15th, 2020",
        title: "Exploring Hong Kong",
        paragraphText: "Example Paragraph",
        location: "Hong Kong",
        duration: "8 Days",
        cost: "$5000",
    },
]


















