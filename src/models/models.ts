export interface ICredentials {
    username: string;
    password: string;
}

export interface IBlock{
    type: string;
    title: string;
    content: string;
    frontendId: number;
}

export interface IPage{
    title: string;
    pageBlocks: IBlock[];
    frontendId: number;
}

export interface IWorkspace{
    workspaceId: number;
    name: string;
    pages: IPage[];
}

export interface IContent{
    content: IWorkspace[] | string;
}
