export interface chorwiseTodo {
    title: string,
    description: string,
    uid: string,
    points: number,
    status: boolean
}

export interface chorwiseTodoResponse {
    results: chorwiseTodo[],
}