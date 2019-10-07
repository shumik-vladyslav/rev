import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from '@angular/material';
import { ComponentService } from "../../component.service";

@Component({
  selector: "app-dialog-parameters",
  templateUrl: "./dialog-parameters.component.html",
  styleUrls: ["./dialog-parameters.component.scss"]
})
export class DialogParametersComponent implements OnInit {

  listModel = [];
  listComponents = [];
  listClass = [];
  listObjects = [];
  listParams = [];
  selectedParam;
  selectedObject;
  selectedClass;
  sleectedModel;
  constructor(public dialogRef: MatDialogRef<DialogParametersComponent>,
    private componentService: ComponentService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.listModel = this.data.list;
    // this.formula = this.data.formula;
    this.formula = this.data.formula.charAt(0) !== '=' ? ("=" + this.data.formula) : this.data.formula;
    this.sleectedModel = this.data.modelId;
    this.modelChange(this.sleectedModel);
  }

  modelChange(id) {
    this.componentService.getAllById(id).subscribe((data: any) => {
      this.listComponents = data;
      this.listClass = [];
      this.listObjects = [];
      this.listComponents.forEach(item => {
        this.listClass.push(item.objectClass);
        this.listObjects.push(item);
        item.parameters.forEach(element => {
          element.objectClass = item.objectClass;
          element.objectType = item.id;
        });
        this.listParams = [...this.listParams, ...item.parameters];
      });
      this.listClass = [...this.listClass.filter(this.onlyUnique)];
      this.listObjects = [...this.listObjects.filter(this.onlyUnique)];
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  paramsFilter(e) {

  }

  ok() {
    let spcaSpit = this.formula.split(" ");
    let valid = true;
    spcaSpit.forEach((item) => {
      let arr = item.split(".");
      if (arr.length == 2) {
        this.listModel.forEach((model, modelIndex) => {
          let validModel;
          if (model.id === arr[0]) {
            validModel = true;
            let validParam = false;
            this.listParams.forEach((comp, index) => {
              if (comp.id === arr[1]) {
                validParam = true
              }

              if (this.listParams.length === (index + 1) && !validParam) {
                valid = false;
              }
            })
          }
          if (this.listModel.length === (modelIndex + 1) && !validModel) {
            valid = false;
          }
        })
      }
    })

    if (valid) {
      this.dialogRef.close({ formula: this.formula });
    }
  }

  selectedFormulaVar = "";
  formula = "= ";

  paramsChange(e) {
    let item = this.searchById(e, this.listParams);
    let model = this.searchById(this.sleectedModel, this.listModel);
    let object = this.searchById(this.selectedObject, this.listObjects);
    console.log(this.sleectedModel , model.id)
    // if(this.sleectedModel === model.id) {
    //   this.selectedFormulaVar = item.id;
    // } else {
      this.selectedFormulaVar = model.id + "." + this.selectedObject + "." + item.id;
    // }
  }

  add() {
    setTimeout(() => {
      if (this.boolLastOperator && this.selectedFormulaVar) {
        if (this.reOperator.test(this.formula[this.formula.length - 1])) {
          this.formula = this.formula + ' ' + this.selectedFormulaVar;
        } else {
          this.formula += this.selectedFormulaVar;
        }
        this.boolLastOperator = false;
      }
    }, 2);
  }

  searchById(id, arr) {
    if (arr) {
      let result = arr.find(element => element._id === id);
      return result;
    }
  }

  re = /^\s{0,1}\d+[.]?(\d+)?(\s{0,1}[+|(\-)|*|/]+\s{0,1}\d+[.]?(\d+)?)*\s{0,1}$/;
  reOperator = /^[+\-*/]$/mg;
  reNumber = /[0-9]/;
  reDigit = /^[0-9]*.([0-9]+)?$/mg;
  keyPeriod = true;
  boolLastOperator;

  renameFormula(text) {
    let newFormula = text + ' ';
    setTimeout(() => {
      this.formula = newFormula;
      this.boolLastOperator = true;
    }, 1);
  }

  checkPattern(elem) {

    setTimeout(() => {
      if (this.formula[this.formula.length - 1] === ' ') {
        if (this.reOperator.test(this.formula[this.formula.length - 2])) {
          this.boolLastOperator = true;
        } else {
          this.boolLastOperator = false;
        }
      } else {
        // backspace
        if ((elem.keyCode !== 8 && elem.keyCode !== 46)) {
          if (this.reOperator.test(this.formula[this.formula.length - 1])) {
            this.boolLastOperator = true;
          } else {
            this.boolLastOperator = false;
          }
        }
      }
    }, 1);

    // operator
    if (this.reOperator.test(elem.key)) {
      this.keyPeriod = true;
      if (this.formula[this.formula.length - 1] === '.') {
        this.formula = this.formula + '0'
      }

      if (this.formula[this.formula.length - 2] === '=') {
        return false;
      } else if (
        this.formula[this.formula.length - 1] !== ' ' &&
        this.reOperator.test(this.formula[this.formula.length - 1])
      ) {
        this.formula = this.formula + ' ';
      } else if (
        this.formula[this.formula.length - 1] !== ' ' &&
        (
          !this.reOperator.test(this.formula[this.formula.length - 1])
        )
      ) {
        this.formula = this.formula + ' ' + elem.key + ' ';

      } else if (
        this.formula[this.formula.length - 1] === ' ' &&
        !this.reOperator.test(this.formula[this.formula.length - 2])
      ) {
        if (!this.reOperator.test(this.formula[this.formula.length - 2])) {
          this.formula = this.formula + elem.key + ' ';
        }
      }
    }

    if (elem.key === ".") {
      if (!this.reNumber.test(this.formula[this.formula.length - 1])) {
        return false;
      }
      if (!this.keyPeriod) {
        return false;
      }
      this.keyPeriod = false;
    }
    //space
    if (elem.keyCode === 32) {
      if (this.formula[this.formula.length - 1] === '.') {
        this.formula = this.formula + '0'
      }
    }
    // backspace
    if (elem.keyCode === 8 || elem.keyCode === 46) {
      setTimeout(() => {
        if (this.formula[this.formula.length - 1] !== ' ') {
          let arr = this.formula.split(' ');
          let number = this.reNumber.test(arr[arr.length - 1]);
          let oper = this.reOperator.test(arr[arr.length - 1]);
          if (
            !number &&
            !oper
          ) {
            this.renameFormula(arr.splice(0, arr.length - 1).join(' '))
          }
        }
      }, 1);
    }
    if (
      this.formula[this.formula.length - 1] === ' ' &&
      this.reNumber.test(elem.key) &&
      this.reNumber.test(this.formula[this.formula.length - 2])
    ) {
      return false;
    }
    //space
    if (elem.keyCode === 32 && this.formula[this.formula.length - 1] === ' ') {
      return false;
    }
    if (this.reNumber.test(elem.key)) {
      if (this.reOperator.test(this.formula[this.formula.length - 1])) {
        this.formula = this.formula + ' ';
      }
    }
    if (
      !this.reNumber.test(elem.key) &&
      // backspace
      (elem.keyCode !== 8 && elem.keyCode !== 46) &&
      // space
      elem.keyCode !== 32 &&
      elem.key !== "."
    ) {
      return false;
    } else {
      if (!this.reNumber.test(elem.key) && elem.key !== ".") {
        this.keyPeriod = true;
      }
      //backspace
      if (elem.keyCode !== 8 && elem.keyCode !== 46) {
        if (this.reOperator.test(this.formula[this.formula.length - 1])) {
          this.formula = this.formula + ' ';
        }
      }
    }
  }

  currentFotmula;

  change(e) {
    let re = /^\s{0,1}\d+[.]?(\d+)?(\s{0,1}[+|\-|*|/]+\s{0,1}\d+[.]?(\d+)?)*\s{0,1}$/;
    let patternMath = /\s?([+|(\-)|*|/])\s?$/;
    setTimeout(() => {
      if (this.formula.slice(0, 2) !== '= ') {
        this.formula = '= '
      }
    }, 110);
    // this.getBoolLastOperator();
    //   if (value.slice(0, 1) === '=') {
    //     if (value.slice(0, 2) === '= ') {
    //       value = value.replace('= ', '')
    //     } else {
    //       value = value.replace('=', '')
    //     }
    //   }
    //   if (!re.test(value)) {
    //     if (!patternMath.test(value[value.length - 1])) {
    //       setTimeout(() => {
    //         this.formula = '= ' + value.substring(0, value.length - 1);

    //         this.formula = this.formula.trim();
    //         if (!value.length) {
    //           this.formula = this.formula + ' '
    //         }
    //       }, 1);
    //     } else {
    //       this.formula = this.formula + '/s';
    //     }
    //     setTimeout(() => {
    //       this.boolKeyPress = false;
    //     }, 2);
    //   } else {
    //     this.currentFotmula = this.formula;
    //     this.boolKeyPress = false;
    //     console.log(this.currentFotmula);
    //   }
    // }
  }
}