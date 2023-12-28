import { App } from "./application.interface";


export interface SMS {

    app: App;
    id: string;
    message: string;
    status: string;
    mobiles: string;
    time?: string
    // appToken?: string
    
}


export interface Email {
    app: App;
    id: string;
    to: string[];
    subject: string;
    text: string;
    from: string;
    time?: string
    html?: string
}

export interface Push {
    app: App;
    notification: {
        body: string,
        title: string,
    },
    time?: string,
   
    id: string;
    userToken: string[];
}
