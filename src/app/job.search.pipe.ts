import { Pipe, PipeTransform } from "@angular/core";
import { Job } from "./Job";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(jobs: Job[], searchText: string): Job[] {
    if (!jobs) return [];
    if (!searchText) return jobs;
    searchText = searchText.toLowerCase();
    return jobs.filter(job => {
      return (
        job.Title.toLowerCase().includes(searchText) ||
        job.Company.toLowerCase().includes(searchText) ||
        job.City.toLowerCase().includes(searchText)
      );
    });
  }
}
