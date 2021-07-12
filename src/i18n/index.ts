import { Locales } from "./locales";

import en from "./en.json";
import ar from "./ar.json";

export const messages = {
    [Locales.EN]: en,
    [Locales.AR]: ar
};



//export const dateTimeFormats = new Intl.DateTimeFormat( {
//    'en-US': {
//        short: {
//            year: 'numeric', month: 'short', day: 'numeric'
//        }
//    }
//});



export const defaultLocale = Locales.AR;


