import {Injectable, Inject, Pipe, PipeTransform} from 'angular2/core';

/*
  Generated class for the TimeDivider pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'timedivider',
  pure: false
})
@Injectable()
export class TimeDividerPipe implements PipeTransform {
  /*
    Takes a value and makes it lowercase.
   */
  transform(items: any[], args: any[]): any {
      return items.filter(item => item.time == args[0]);
  }
}
