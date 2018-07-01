import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart  
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './CurrentWeekNumberWebPart.module.scss';
import * as strings from 'CurrentWeekNumberWebPartStrings';
import * as moment from 'moment';

export interface ICurrentWeekNumberWebPartProps {
  description: string;
}

export default class CurrentWeekNumberWebPart extends BaseClientSideWebPart<ICurrentWeekNumberWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.currentWeekNumber }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <i class="ms-Icon ms-Icon--WorldClock" aria-hidden="true"></i>
              <span class="${styles.subTitle}">${strings.WPTitleText} ${moment().locale(this.context.pageContext.cultureInfo.currentCultureName.toLowerCase()).format(strings.WPFormat) }</span>
              <span class="${styles.subTitle}">${strings.WPSubtitleText} ${moment().week()} ${strings.WPSubtitleSuffixText} ${moment().year()}</span>
            </div>
          </div>
        </div>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }


}
