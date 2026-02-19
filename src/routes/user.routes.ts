import { Route } from './../types/routes.type';


export const userRoutes: Route[] = [
    {
        title: "User Management",
        items: [
            {
                title: "Add Blog",
                url: "/add-blog",
            },
            {
                title: "Make Payment",
                url: "/payment",
            },
        ],
    },
]