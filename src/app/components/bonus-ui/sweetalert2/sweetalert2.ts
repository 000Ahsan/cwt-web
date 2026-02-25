import { Component } from '@angular/core';

import Swal, { SweetAlertResult } from 'sweetalert2';

@Component({
  selector: 'app-sweetalert2',
  templateUrl: './sweetalert2.html',
  styleUrls: ['./sweetalert2.scss'],
  imports: [],
})
export class Sweetalert2 {
  constructor() {}

  // Basic Alert
  basicAlert() {
    Swal.fire('Hello world!');
  }

  // Alert Title
  withTitle() {
    Swal.fire({
      title: "Here's the title!",
      text: "...and here's the text!",
    });
  }

  // Info
  info() {
    Swal.fire({
      icon: 'info', // type changed to 'icon'
      title: 'Info',
      text: 'You clicked the button!',
      showConfirmButton: true,
    });
  }

  // Alert Title
  successAlert() {
    Swal.fire('The Internet?', 'That thing is still around?', 'info');
  }

  withCancelled() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this imaginary file!',
        icon: 'warning', // 'type' is deprecated, use 'icon' instead
        showCancelButton: true,
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        reverseButtons: true,
      })
      .then(result => {
        if (result.isConfirmed) {
          // Use result.isConfirmed instead of result.value
          swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
        } else if (result.isDismissed) {
          // Use result.isDismissed to check for cancellation
          swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
        }
      });
  }

  // warning
  warning() {
    Swal.fire({
      title: 'Submit your Github username',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      preConfirm: login => {
        return fetch(`//api.github.com/users/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch(error => {
            Swal.showValidationMessage(`Request failed: ${error}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then(result => {
      if (result.value) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url,
        });
      }
    });
  }

  // A warning
  warning2() {
    Swal.fire('The Internet?', 'That thing is still around?', 'warning');
  }

  // A warning
  success() {
    Swal.fire('The Internet?', 'That thing is still around?', 'success');
  }

  // Info
  info2() {
    Swal.fire('The Internet?', 'That thing is still around?', 'info');
  }

  // Danger
  danger() {
    Swal.fire('The Internet?', 'That thing is still around?', 'error');
  }

  dialogWithThree() {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then(result => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }
  customAnimation() {
    let timerInterval: ReturnType<typeof setInterval>;

    Swal.fire({
      title: 'Auto close alert!',
      html: 'I will close in <b></b> milliseconds.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: (SwalInstance: HTMLElement & typeof Swal) => {
        Swal.showLoading();
        const b = SwalInstance.querySelector('b');
        timerInterval = setInterval(() => {
          if (b) {
            b.textContent = String(Swal.getTimerLeft());
          }
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result: SweetAlertResult) => {
      if (result.isDismissed && result.dismiss === Swal.DismissReason.timer) {
        console.warn('Timer expired');
      }
    });
  }

  dialog() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
