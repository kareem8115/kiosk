////declare var process: {
////    env: {
////        NODE_ENV: string = "development";
////    }
////}

export class EnvironmentHelper {

    public static get NODE_ENV(): string {
      
        return "production";
    }

    public static get isDevelopment(): boolean {
       
        return this.NODE_ENV === "development";
    }

    public static get isProduction(): boolean {
       
        return this.NODE_ENV === "production";
    }
}

export default class Env {
   
     
    public static get baseUrl(): string {
       
       
        if (EnvironmentHelper.isProduction) {
            return "http://10.162.1.241:8099/api"
        }

        return "http://localhost:8099/api";
    }

}

