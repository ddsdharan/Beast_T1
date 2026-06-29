import Alexi from "../assets/bgImages/coachOne.png";
import JohnSnow from "../assets/bgImages/coachTwo.png";
import Emma from "../assets/bgImages/coachThree.png";
import Hugh from "../assets/bgImages/coachFour.png";
import c1 from "../assets/bgImages/CertiOne.png";
import c2 from "../assets/bgImages/certiTwo.png";
import c3 from "../assets/bgImages/CertiThree.png"
// import detailsbg2 from "../assets/bgImages/CoachDetailsBg2.png"
import detailsbg from "../assets/bgImages/CoachDetailsBgImage.png";
import c2ig1 from "../assets/bgImages/c2Igone.png";
import c2ig2 from "../assets/bgImages/c2Igtwo.png";
import c2ig3 from "../assets/bgImages/c2Igthree.png";
import c2ig4 from "../assets/bgImages/c2Igfour.png";
import c2ig5 from "../assets/bgImages/c2Igfive.png";
import c2ig6 from "../assets/bgImages/c2Igsix.png";
import c2ig7 from "../assets/bgImages/c2Igseven.png";
import c2ig8 from "../assets/bgImages/c2Igeight.png";





const coaches = [
    {
        id: 1,
        slug: "alexi-jones",
        name: "Alexi Jones",
        role: "Cross-Fit Coach",
        age: 26,
        experience: "3 Years",
        phone: "+91 9876544552",
        email: "alexi@beast.com",

        image: Alexi,

        background:
            detailsbg,

        certifications: [
            c1,
            c2,
            c3,
        ],

        socials: {
            facebook: "#",
            instagram: "#",
            linkedin: "#",
            twitter: "#",
        },
    },



    {
        id: 2,
        slug: "john-snow",
        name: "John Snow",
        role: "Body Building Coach",
        age: 29,
        experience: "5 Years",
        phone: "+91 9876543210",
        email: "john@beast.com",
        biography: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam quis nostrud exercitation ullamco laboris.
  `,

        skills: [
            {
                name: "Body Building",
                value: 92,
            },
            {
                name: "Cardio",
                value: 74,
            },
            {
                name: "Weight Training",
                value: 83,
            },
        ],

        gallery: [
            c2ig1,
            c2ig2,
            c2ig3,
            c2ig4,
            c2ig5,
            c2ig6,
            c2ig7,
            c2ig8,
        ],

        image: JohnSnow,

        background:
            detailsbg,

        certifications: [
            c1,
            c2,
            c3,
        ],

        socials: {
            facebook: "#",
            instagram: "#",
            linkedin: "#",
            twitter: "#",
        },
    },

    {
        id: 3,
        slug: "emma-watson",
        name: "Emma Watson",
        role: "Fitness Coach",
        age: 26,
        experience: "4 Years",
        phone: "+91 9876543211",
        email: "emma@beast.com",
        image: Emma,
        background:
            detailsbg,
    },

    {
        id: 4,
        slug: "hugh-campbell",
        name: "Hugh Campbell",
        role: "Cardio",
        age: 26,
        experience: "5 Years",
        phone: "+91 9876543210",
        email: "john@beast.com",

        image: Hugh,

        background:
            detailsbg,

        certifications: [
            "/images/certifications/cert-1.png",
            "/images/certifications/cert-2.png",
            "/images/certifications/cert-3.png",
        ],

        socials: {
            facebook: "#",
            instagram: "#",
            linkedin: "#",
            twitter: "#",
        },
    },
];

export default coaches;