import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { NgbModalRef, NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmationdialog',
  templateUrl: './confirmationdialog.component.html',
  styleUrls: ['./confirmationdialog.component.css']
})
export class ConfirmationdialogComponent {

  @ViewChild('confirmationModal') private modalContent!: TemplateRef<ConfirmationdialogComponent>
  @Output() newConfirmationEvent = new EventEmitter<string>();
  @Input() modalBody: any;

  private modalRef!: NgbModalRef;

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  open(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.modalRef = this.modalService.open(this.modalContent, { size: 'sm' })
      this.modalRef.result.then((result) => {
        this.newConfirmationEvent.emit(result);
      }, (reason) => {
        this.newConfirmationEvent.emit("false");
      });
    })
  }
}
