import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SwalService {
  success(message: string): void {
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: message,
      background: '#111B34',
      color: '#efefef',
      confirmButtonColor: '#3532B2',
      customClass: {
        container: 'swal2-theme-material-ui',
      },
    });
  }

  error(message: string): void {
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: message,
      background: '#111B34',
      color: '#efefef',
      confirmButtonColor: '#3532B2',
      customClass: {
        container: 'swal2-theme-material-ui',
      },
    });
  }
}
