import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:'mayuscula'
})

export class MayusculasPipe implements PipeTransform{
    transform(valor:string='',isMayuscula:boolean=true){

        return (isMayuscula) ? valor.toUpperCase() :valor.toLowerCase();
    }
}