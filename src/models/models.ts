export interface ICredentials {
    username: string;
    password: string;
}

interface IBlock{
    type: string;
    content: string;
}

interface IPage{
    title: string;
    pageBlocks: IBlock[];
}

export interface IWorkspace{
    workspaceId: number;
    name: string;
    pages: IPage[];
}
