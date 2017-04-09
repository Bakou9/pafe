export class Environments {
    public static list: [Environment] =
    [
        {
            id: "localhost",
            label: "Localhost",
            url: "http://localhost",
            port: 1337
        }
    ]

    public static getUrl(environment: Environment): string{
        return environment.url + ":" + environment.port + "/";
    }
}

export class Environment{
    id: string;
    label: string;
    url: string;
    port: number;
}

