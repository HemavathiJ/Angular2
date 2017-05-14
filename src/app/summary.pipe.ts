import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'Summary'
})
export class SummaryPipe implements PipeTransform {
    transform(value: string, args: string[]) {
        console.log(args);
        
        var limit = args[0] ? parseInt(args[0]): 50
        if (value) {
            console.log(limit);
            
            return value.substring(0,limit) + "...";
        }
     }

}