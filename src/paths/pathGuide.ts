export class PathGuide
{
    public path:string = ''; 

    constructor(count:number = 3)
    {
        this.path = this.createLinesPath(count)
    }

    createLinesPath(count:number):any
    {
        let linesPath = '';

        for(let i = 0; i < count; i++)
        {
            linesPath += `M 0 ${i* 2} H 10`;
        }

        return linesPath;
    }
}