const data = {
    personal: {
        name: "John Doe",
        phone: "0123456789",
        email: "johndoe@email.com"
    },

    education: {
        degree: "B.Tech in XYZ",
        college: "XYZ College",
        school: "ABC School"
    },

    experience: [
        {
            id: crypto.randomUUID(),
            job: "Web Developer",
            company: "PQR Limited",
            desc: ""
        }
    ],

    projects: [
        {
            id: crypto.randomUUID(),
            projName: "CV Builder",
            stack: "HTML, CSS, ReactJS, Vite",
            det: ""
        }
    ],

    achievements: []
}

export default data;