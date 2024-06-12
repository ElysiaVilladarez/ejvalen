import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as data from '../../db/data.json';
import { AmazonMetaData, AmazonWork, WorkInfo } from '../../models/works';
import { AmazonService } from '../../services/amazon.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule],
  providers: [],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})
export class WorksComponent implements OnInit, OnDestroy {
  @Input() isCarousel: boolean = false;
  // worksInfoList: WorkInfo[];
  worksUnsorted: AmazonWork[] = [];
  works: AmazonWork[] = [];
  subs: Subscription[] = [];

  constructor(private _amazonService: AmazonService) {
    this.worksUnsorted = data.works as unknown as AmazonWork[];
  }

  ngOnInit(): void {
    this.queryWorks()
  }

  queryWorks() {
    this.works = this.worksUnsorted.sort((a, b) => new Date(b.publicationDate).valueOf() - new Date(a.publicationDate).valueOf())
  }

  // queryWorksWithAPI() {
  //   const existingWorks = this._amazonService.getWorks();
  //   console.log(existingWorks.length, this._amazonService.getWorks())
  //   if (!existingWorks.length) {
  //     for(const workInfo of this.worksInfoList) {
  //       this.subs.push(this._amazonService.getUrlResponse<AmazonMetaData>(workInfo.url).subscribe((response: AmazonMetaData) => {
  //         this.scrapeMetaData(response, workInfo);
  //       }))
  //     }
  //   } else {
  //     this.works = existingWorks;
  //   }
  // }

  // async scrapeMetaData(response: AmazonMetaData, workInfo: WorkInfo) {
  //   this.worksUnsorted.push({
  //     title: response.title,
  //     author: workInfo.author,
  //     coverUrl: this.getBigImage(response.images[0]),
  //     blurb: response.description,
  //     linkToWork: response.url,
  //     publicationDate: new Date(workInfo.publicationDate)
  //   });

  //   if (this.worksUnsorted.length === this.worksInfoList.length) { // query is complete
  //     this.works = this.worksUnsorted.sort((w) => w.publicationDate.valueOf());
  //     console.log('works', this.works)
  //     this._amazonService.setWorks(this.works);
  //   }
  // }

  // private getBigImage(smallImageUrl: string) {
  //   const urlSplit = smallImageUrl.split('._SR');
  //   const baseUrl = urlSplit[0];
  //   return `${baseUrl}._SL1500_.jpg`
  // }

  
  redirectToUrlNewTab(url: string) {
    window.open(url, '_blank');
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
