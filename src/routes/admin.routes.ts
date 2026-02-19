import { Route } from './../types/routes.type';
export const adminRoutes: Route[] = [
    {
        title: "User Management",
        items: [
            {
                title: "Delete User",
                url: "/delete-user",
            },
            {
                title: "Statictics",
                url: "/statictics",
            },
        ],
    },
]