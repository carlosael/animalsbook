import { ReactiveFormsModule } from '@angular/forms';
import { MessagesModule } from './../components/messages/messages.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, MessagesModule, ReactiveFormsModule],
  exports: [MessagesModule, ReactiveFormsModule],
})
export class SharedModule {}
