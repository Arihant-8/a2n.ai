// src/app/services/rag.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface AskResponse {
  answer: string;
  sources?: Array<{ source: string; chunk_index: number; snippet: string }>;
}

export interface UploadResponse {
  message: string;
  chunks: number;
  file: string;
}

@Injectable({
  providedIn: 'root'
})
export class RagService {

  // Use your backend IP
  private baseUrl = 'http://192.168.10.68:8000';

  constructor(private http: HttpClient) {}

  // =========================
  // ASK A QUESTION
  // =========================
 ask(question: string): Observable<AskResponse> {
  return this.http.post<AskResponse>(`${this.baseUrl}/ask`, { question });
}


  // =========================
  // SIMPLE UPLOAD
  // =========================
  uploadFile(file: File): Observable<UploadResponse> {
    const form = new FormData();
    form.append('file', file, file.name);
    return this.http.post<UploadResponse>(`${this.baseUrl}/upload`, form);
  }

  // =========================
  // UPLOAD WITH PROGRESS
  // =========================
  uploadFileWithProgress(file: File): Observable<number | UploadResponse> {
    const form = new FormData();
    form.append('file', file, file.name);

    const req = new HttpRequest(
      'POST',
      `${this.baseUrl}/upload`,
      form,
      { reportProgress: true }
    );

    return this.http.request<UploadResponse>(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event.type === HttpEventType.UploadProgress && event.total) {
          return Math.round((event.loaded / event.total) * 100);
        } else if (event.type === HttpEventType.Response) {
          return event.body as UploadResponse;
        }
        return 0;
      })
    );
  }

  // =========================
  // LIST ALL FILES / METADATA
  // BACKEND RETURNS FULL META JSON
  // =========================
  listFiles() {
    return this.http.get<any>(`${this.baseUrl}/files`);
  }

  // =========================
  // DELETE FILE
  // Backend route: DELETE /files/<filename>
  // =========================
  deleteFile(filename: string) {
    return this.http.delete(`${this.baseUrl}/files/${filename}`);
  }

  // =========================
  // CLEAR VECTOR DB
  // Backend: DELETE /clear
  // =========================
  clearDB() {
    return this.http.delete(`${this.baseUrl}/clear`);
  }

  // =========================
  // REINDEX ALL FILES
  // Backend: POST /reindex
  // =========================
  reindex() {
    return this.http.post(`${this.baseUrl}/reindex`, {});
  }

  // =========================
  // HEALTH CHECK (PING)
  // Backend: GET /health
  // =========================
  health() {
    return this.http.get(`${this.baseUrl}/health`);
  }
}
