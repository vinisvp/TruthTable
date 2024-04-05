import { FormBuilder, FormGroup } from '@angular/forms';
import { TruthCheck } from './../truthCheck';
import { Component } from '@angular/core';

@Component({
  selector: 'app-truth-table',
  templateUrl: './truth-table.component.html',
  styleUrl: './truth-table.component.css'
})
export class TruthTableComponent {
  truthCheck: TruthCheck[] = [];
  truthCheckFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.truthCheckFormGroup = formBuilder.group({
      p:['1'],
      q:['1'],
      pq:['']
    });
  }

  save(){
    if(this.truthCheckFormGroup.value.p == true && this.truthCheckFormGroup.value.q == true)
    {this.truthCheckFormGroup.value.pq = true} else {this.truthCheckFormGroup.value.pq = false}
    this.truthCheck.push(this.truthCheckFormGroup.value)
  }
}
