import { environment } from "./../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

@Injectable({
  providedIn: "root",
})
export class PhotoService {
  apiBaseUrl = environment.apiBaseUrl;
  constructor(private httpClient: HttpClient) {}

  listFromUser(userName: string) {
    return this.httpClient.get<Photo[]>(`${this.apiBaseUrl}/${userName}/photos`);
  }
}
