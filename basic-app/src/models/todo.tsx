export interface Todo {
    Title: string,
    Description: string,
    UID: string,
    Points: number,
    Status: boolean,
    id: string
}

export interface TodoResponse {
    results: Todo[],
}