import { SuiModule } from 'ng2-semantic-ui/dist';
import { SlickModule } from 'ngx-slick';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ContentCardComponent, AnnouncementInboxCardComponent,
  PageSectionComponent, NoResultComponent, AppLoaderComponent,
  ShareLinkComponent
} from './components';
import { ConfigService, ResourceService, FileUploadService, ToasterService, WindowScrollService ,
   PaginationService, RouterNavigationService } from './services';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DateFormatPipe } from './pipes';
import { Ng2IzitoastService } from 'ng2-izitoast';
@NgModule({
  imports: [
    CommonModule,
    SuiModule,
    SlickModule,
    FormsModule
  ],
  declarations: [AppLoaderComponent, AnnouncementInboxCardComponent,
    DateFormatPipe, PageSectionComponent, ContentCardComponent, NoResultComponent, ShareLinkComponent],
  exports: [AppLoaderComponent, AnnouncementInboxCardComponent, DateFormatPipe,
    PageSectionComponent, ContentCardComponent, NoResultComponent, ShareLinkComponent],
  providers: [ResourceService, ConfigService, FileUploadService, ToasterService, Ng2IzitoastService, PaginationService,
     RouterNavigationService, WindowScrollService]
})
export class SharedModule { }
