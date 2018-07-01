declare interface ICurrentWeekNumberWebPartStrings {  
  WPTitleText:string;
  WPSubtitleText:string;
  WPSubtitleSuffixText:string;
  WPFormat:string;
}

declare module 'CurrentWeekNumberWebPartStrings' {
  const strings: ICurrentWeekNumberWebPartStrings;
  export = strings;
}
