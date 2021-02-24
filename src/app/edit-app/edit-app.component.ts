import { Component, OnInit } from '@angular/core';
import { DndDropEvent, DropEffect} from 'ngx-drag-drop';
import { field, value, value2, value3, value4 } from '../global.model';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { basicField } from './SelectField/basic';
import { ColorectalField } from './SelectField/colorectal';
import { EmergencyField } from './SelectField/emergency';
import { CardiologyField } from './SelectField/cardiology';
import { AddmissionField } from './SelectField/addmission';
import { ShowDialogComponent } from './show-dialog/show-dialog.component';
import {FormRendService} from '../form-rend.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import form from '../../assets/form.json';
import form1 from '../../assets/form1.json';
import form2 from '../../assets/form2.json';

export interface Form {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-app',
  templateUrl: './edit-app.component.html',
  styleUrls: ['./edit-app.component.css']
})
export class EditAppComponent implements OnInit {

  slabel: Array<string> = [];
  svalue: Array<string> = [];

  value: value = {
    label: '',
    type: '',
    value: ''
  };
  value2: value2 = {
    label: '',
    type: '',
    value: ''
  };

  value3: value2 = {
    label: '',
    type: '',
    value: ''
  };

  value4: value4 = {
    label: '',
    type: '',
    values: []
  };

  value5: value3 = {
    label: '',
    value: ''
  };

  form_example: Form[] = [
    {value: 'emergency', viewValue: 'Emergency'},
    {value: 'colorectal', viewValue: 'Colorectal'},
  ];

  success = false;
  show = false;

  /**Select Field */
  basic_fieldModels = basicField;
  colorectal_fieldModels = ColorectalField;
  emergency_fieldModels = EmergencyField;
  cardiology_fieldModels = CardiologyField;
  addmission_fieldModels = AddmissionField;

  /**Form Zone */
  modelFields: Array<field> = [];
  model: any = {
    formname: '',
    description: '',
    resourceType: '',
    id: '',
    text: {
      status: '',
      div: '',
    },
    identifier: [
      {
        use: '',
        type: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
              code: 'MR'
            }
          ]
        },
        system: '',
        value: '',
        period: {
          start: ''
        },
        assigner: {
          display: ''
        }
      }
    ],
    active: '',
    name: [
      {
        use: '',
        family: '',
        given: [
          ''
        ]
      },
      {
        use: '',
        family: '',
        given: [
          '',
          ''
        ],
        period: {
          end: ''
        }
      }
    ],
    telecom: [
      {
        use: ''
      },
      {
        system: '',
        value: '',
        use: '',
        rank: 1
      },
      {
        system: '',
        value: '',
        use: '',
        rank: 2
      },
      {
        system: '',
        value: '',
        use: '',
        period: {
          end: ''
        }
      }
    ],
    gender: 'male',
    birthDate: '',
    _birthDate: {
      extension: [
        {
          url: 'http://hl7.org/fhir/StructureDefinition/patient-birthTime',
          valueDateTime: '1974-12-25T14:35:45-05:00'
        }
      ]
    },
    deceasedBoolean: false,
    address: [
      {
        use: 'home',
        type: 'both',
        text: '534 Erewhon St PeasantVille, Rainbow, Vic  3999',
        line: [
          '534 Erewhon St'
        ],
        city: 'PleasantVille',
        district: 'Rainbow',
        state: 'Vic',
        postalCode: '3999',
        period: {
          start: '1974-12-25'
        }
      }
    ],
    contact: [
      {
        relationship: [
          {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v2-0131',
                code: 'N'
              }
            ]
          }
        ],
        name: {
          family: 'du Marché',
          _family: {
            extension: [
              {
                url: 'http://hl7.org/fhir/StructureDefinition/humanname-own-prefix',
                valueString: 'VV'
              }
            ]
          },
          given: [
            'Bénédicte'
          ]
        },
        telecom: [
          {
            system: 'phone',
            value: ''
          }
        ],
        address: {
          use: '',
          type: '',
          line: [

          ],
          city: '',
          district: '',
          state: '',
          postalCode: '',
          period: {
            'start': '1974-12-25'
          }
        },
        gender: 'female',
        period: {
          start: '2012'
        }
      }
    ],
    managingOrganization: {
      reference: 'Organization/1'
    },
    meta: {
      tag: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/v3-ActReason',
          code: 'HTEST',
          display: 'test health data'
        }
      ]
    },
    attributes: this.modelFields
  };

  report = false;
  reports: any = [];
  TEST: any;
  cjson : any = [[],[]];

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private fserv: FormRendService,
    private router: Router,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.httpClient.get('http://127.0.0.1:5002/formjson').subscribe(data => {
      for(const z in data){
        this.cjson[0][z] = data[z][0];
        this.cjson[1][z] = eval(data[z][1]);
      }
      console.log(this.cjson);
      //console.log(eval(data[0][1]));
      //this.TEST = JSON.stringify(data[0][1]);
      //console.log(this.cardiology_fieldModels);
      //console.log(JSON.parse(this.TEST));
    })
    // this.route.params.subscribe( params =>{
    //   console.log(params);
    //   this.us.getDataApi('/admin/getFormById',{id:params.id}).subscribe(r=>{
    //     console.log(r);
    //     this.model = r['data'];
    //   });
    // });


    // this.model = this.cs.data;
    // console.log(this.model.data);

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ShowDialogComponent, {
      data: {
        FHIRdata: this.model
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // tslint:disable-next-line: no-shadowed-variable
  check(value: any ) {
    if (value === undefined ) {
      this.model.formname = undefined;
      this.model.description = undefined;
      this.model.attributes = [];
    }
    if (value === 'emergency' ) {
      this.model.formname = form.formname;
      this.model.description = form.description;
      this.model.attributes = form.attributes;
      // console.log(form.attributes);
    }
    if (value === 'colorectal' ) {
      this.model.formname = form2.formname;
      this.model.description = form2.description;
      this.model.attributes = form2.attributes;
      // console.log(form2.attributes);
    }
  }

  onDragStart(event: DragEvent) {
    console.log('drag started', JSON.stringify(event, null, 2));
  }

  onDragEnd(event: DragEvent) {
    console.log('drag ended', JSON.stringify(event, null, 2));
  }

  onDraggableCopied(event: DragEvent) {
    console.log('draggable copied', JSON.stringify(event, null, 2));
  }

  onDraggableLinked(event: DragEvent) {
    console.log('draggable linked', JSON.stringify(event, null, 2));
  }

   onDragged( item: any, list: any[], effect: DropEffect ) {
    if ( effect === 'move' ) {
      const index = list.indexOf( item );
      list.splice( index, 1 );
    }
  }

  onDragCanceled(event: DragEvent) {
    console.log('drag cancelled', JSON.stringify(event, null, 2));
  }

  onDragover(event: DragEvent) {
    console.log('dragover', JSON.stringify(event, null, 2));
  }

  onDrop( event: DndDropEvent, list?: any[] ) {
    if ( list && (event.dropEffect === 'copy' || event.dropEffect === 'move') ) {

      if (event.dropEffect === 'copy') {
      event.data.name = event.data.type + '-' + new Date().getTime();
      }
      let index = event.index;
      if ( typeof index === 'undefined' ) {
        index = list.length;
      }
      list.splice( index, 0, event.data );
    }
  }

  addValue(values) {
    values.push(this.value);
    this.value = {label: '', type: '', value: ''};
  }

  // 新增textarea功能
  addValue2(values: value2[]) {
    values.push(this.value2);
    this.value2 = {label: '', type: '', value: ''};
  }
  // 新增date功能
  addValue3(values: value2[]) {
    values.push(this.value3);
    this.value3 = {label: '', type: '', value: ''};
  }

  // 新增select功能
  addValue4(values: value2[]) {
    values.push(this.value4);
    this.value4 = {label: '', type: '', values: []};
  }
  // 新增select option功能
  addValue5(values1: value3[], i: any) {
    console.log(i);
    this.value5.label = this.slabel[i];
    this.value5.value = this.svalue[i];
    values1.push(this.value5);
    this.value5 = {label: '', value: ''};
  }

  removeField(i: any) {
    this.model.attributes.splice(i, 1);
    /*swal({
      title: 'Are you sure?',
      text: "Do you want to remove this field?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00B96F',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove!'
    }).then((result) => {
      if (result.value) {
        this.model.attributes.splice(i,1);
      }
    });*/

  }

  updateForm() {
    this.model = JSON.stringify(this.model);
    this.fserv.addForm(this.model).subscribe(data => this.router.navigate(['']));
  }


  initReport() {
    this.report = true;
    const input = {
      id: this.model._id
    };
    // this.us.getDataApi('/admin/allFilledForms',input).subscribe(r=>{
    //   this.reports = r.data;
    //   console.log('reports',this.reports);
    //   this.reports.map(records=>{
    //     return records.attributes.map(record=>{
    //       if(record.type=='checkbox'){
    //         record.value = record.values.filter(r=>r.selected).map(i=>i.value).join(',');
    //       }
    //     })
    //   });
    // });
  }



  toggleValue(item: { selected: boolean; }) {
    item.selected = !item.selected;
  }

  submit() {
    let valid = true;
    const validationArray = JSON.parse(JSON.stringify(this.model.attributes));
    // tslint:disable-next-line: no-shadowed-variable
    validationArray.reverse().forEach(field => {
      console.log(field.label + '=>' + field.required + '=>' + field.value);
      if (field.required && !field.value && field.type !== 'checkbox') {
        swal('Error', 'Please enter ' + field.label, 'error');
        valid = false;
        return false;
      }
      if (field.required && field.regex) {
        const regex = new RegExp(field.regex);
        if (regex.test(field.value) === false) {
          swal('Error', field.errorText, 'error');
          valid = false;
          return false;
        }
      }
      if (field.required && field.type === 'checkbox') {
        if (field.values.filter((r: { selected: any; }) => r.selected).length === 0) {
          swal('Error', 'Please enterrr ' + field.label, 'error');
          valid = false;
          return false;
        }

      }
    });
    if (!valid) {
      return false;
    }
    console.log('Save', this.model);
    const input = new FormData;
    input.append('formId', this.model._id);
    input.append('attributes', JSON.stringify(this.model.attributes));
    // this.us.postDataApi('/user/formFill',input).subscribe(r=>{
    //   console.log(r);
    //   swal('Success','You have contact sucessfully','success');
    //   this.success = true;
    // },error=>{
    //   swal('Error',error.message,'error');
    // });
  }

}
