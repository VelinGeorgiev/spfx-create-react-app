import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './HelloWorldWebPart.module.scss';
import * as strings from 'HelloWorldWebPartStrings';

export interface IHelloWorldWebPartProps {
  description: string;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  public render(): void {

    this.domElement.innerHTML = `<div id="root"></div>`;

    let js = document.createElement('script');
    js.setAttribute('src','https://localhost:4321/temp/react/2.b41502e9.chunk.js');
    document.body.appendChild(js);

    js = document.createElement('script');
    js.setAttribute('src','https://localhost:4321/temp/react/runtime~main.a8a9905a.js');
    document.body.appendChild(js);

    js = document.createElement('script');
    js.setAttribute('src','https://localhost:4321/temp/react/main.bc5ba69e.chunk.js');
    document.body.appendChild(js);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
