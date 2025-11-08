export const BASEURL = "https://expense-tracker-mern-x41e.onrender.com/";

export const API_PATHS = {
    AUTH: {
        REGISTER: "/api/auth/register",
        LOGIN: "/api/auth/login",
        GET_PROFILE: "/api/auth/profile"
    },
    Income: {
        Add_Income: "/api/income/add",
        GET_Income: "/api/income",
        DELETE_Income: (id) => `/api/income/${id}`,
        Download_Income: "/api/income/download",
    },
    Expense: {
        Add_Expense: "/api/expense/add",
        GET_Expense: "/api/expense",
        DELETE_Expense: (id) => `/api/expense/${id}`,
        Download_Expense: "/api/expense/download",
    },
    Dashboard: {
        GET_ALL: "/api/dashboard"
    },
};
