export const VISIBLE_MENU_ITEMS = {
    loggedIn: [
        {name: "Home", path: "/"},
        {name: "Submit Article", path: "/submit"},
        {name: "Pending Articles", path: "/pending-articles"},
        {name: "Accepted Articles", path: "/verified-articles"},
        {name: "BC Explorer", path: "/explore"},
        {name: "Pending Reviews", path: "/pending-reviews"},
        {name: "Logout", path: "/logout"}
    ],
    loggedOut: [
        {name: "Home", path: "/"},
        {name: "Accepted Articles", path: "/verified-articles"},
        {name: "BC Explorer", path: "/explore"},
        {name: "Login", path: "/login"},
    ]
}

export const BACK_END_URL = "http://localhost:8080";
export const URLs = {
    POST_SUBMISSION: `${BACK_END_URL}/submission`
}


export const API_CONFIG = {
    ENDPOINTS: {
        TRANSACTION: "/transaction",
        REVIEW_REQUEST: "/review-request",
        FILE: "/file",
        BLOCK : "/block",
        V2:{
            VERIFIED_ARTICLES: "/api/v2/verified-articles",
        }
    }
};
export const AUTHOR_NUMBER = [
    {name: "1", value: 1},
    {name: "2", value: 2},
    {name: "3", value: 3},
    {name: "4", value: 4},
    {name: "5", value: 5}
]

export const AUTHOR_TITLES = [
    {name: "Mr", value: "Mr"},
    {name: "Miss", value: "Miss"},
    {name: "Mrs", value: "Mrs"},
    {name: "Dr", value: "Dr"},
    {name: "Prof", value: "Prof"},
]
export const DATA_LIST_URL_PARAMETERS = {
    page: {name: "page-no", value: 0},
    sort: {name: "ascending", value: true}
}

export const ARTICLE_TYPES = [
    {
        name: "Original Research",
        value: "Original Research"
    },
    {
        name: "Review Articles",
        value: "Review Articles"
    },
    {
        name: "Case Studies",
        value: "Case Studies"
    },
    {
        name: "Methodologies",
        value: "Methodologies"
    }
];


export const RESEARCH_FIELDS = [
    {
        name: "Computer Science",
        value: "Computer Science"
    },
    {
        name: "Medicine",
        value: "Medicine"
    },
    {
        name: "Physics",
        value: "Physics"
    },
    {
        name: "Biotechnology",
        value: "Biotechnology"
    },
    {
        name: "Environmental Science",
        value: "Environmental Science"
    }
];
export const ARTICLE_POINTS = [
    {
        name: "1",
        value: 1,
    },
    {
        name: "2",
        value: 2,
    },
    {
        name: "3",
        value: 3,
    },
    {
        name: "4",
        value: 4,
    },
    {
        name: "5",
        value: 5,
    },
    {
        name: "6",
        value: 6,
    },
    {
        name: "7",
        value: 7,
    },
    {
        name: "8",
        value: 8,
    },
    {
        name: "9",
        value: 9,
    },
    {
        name: "10",
        value: 10,
    }
];


export const ARTICLE_KEYWORDS = [
    {
        name: "Algorithm Design",
        value: "Algorithm Design"
    },
    {
        name: "Data Structures",
        value: "Data Structures"
    },
    {
        name: "Object-Oriented Programming",
        value: "Object-Oriented Programming"
    },
    {
        name: "Web Development",
        value: "Web Development"
    },
    {
        name: "Machine Learning",
        value: "Machine Learning"
    },
    {
        name: "Database Management",
        value: "Database Management"
    }
];


export const VISIBLE_FOOTER_ITEMS = [
    {name: "About Us", path: "/about"},
    {name: "Terms of Use", path: "/terms"},
    {name: "Legal", path: "/legal"},
    {name: "Contact Us", path: "/contact"},
]

export const MODAL_CODES = {
    REVIEW_REQUEST_ACCEPT_CONFIRMATION: 1,
    REVIEW_REQUEST_REJECT_CONFIRMATION: 2,
    REVIEW_REQUEST_201:3,
    REVIEW_REQUEST_400:4,
    REVIEW_REQUEST_500:5,
    LOGIN_UI_ACTION_200:6,
    LOGIN_UI_ACTION_400:7,
    LOGIN_UI_ACTION_500:8,
    FINAL_DECISION_200:9,
    FINAL_DECISION_400:10,
    FINAL_DECISION_500:11,
    SUBMIT_201:12,
    SUBMIT_400:13,
    SUBMIT_500:14,
    LOGOUT_UI_ACTION_200:15,

}
